import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
const authRouter = express.Router();
import {
  register,
  login,
  verifyOtp,
  getProfile,
} from "../controllers/authController.js";
// import { register, Login, verifyOtp } from "../controllers/authController.js";

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/verify-otp", verifyOtp);
authRouter.get("/me", protect, getProfile);

export default authRouter;
