import User from "../models/User.js";
import bcrypt from "bcryptjs";
import sendEmail from "../utils/sendEmail.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User with this email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10); //hash the password with the salt
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    // **How it works:**
    // ```
    // Math.random()        → 0.0 to 0.9999...
    // * 900000             → 0 to 899999
    // + 100000             → 100000 to 999999
    // Math.floor()         → removes decimals
    // .toString()          → converts to string
    await sendEmail(email, "Verify your Eventora account", otp);
    return res.status(201).json({ message: `OTP sent to ${email}` });
  } catch (error) {
    console.error("Error in register controller:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const user = await User.findOne({ email }).select("+password"); // ✅ With .select("+password") bcz in scheme select is set to false so if password is not selcted here password will not be fetched.
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isRightPassword = await bcrypt.compare(password, user.password);
    if (!isRightPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    user.password = undefined; // remove password before sending response

    return res.status(200).json({
      success: true,
      message: "User logged in successfully.",
      user,
    });
  } catch (error) {
    console.error("Unable to login", error);
    res.status(500).json({ message: "Server error" });
  }
};
