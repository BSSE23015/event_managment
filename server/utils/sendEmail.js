import nodemailer from "nodemailer";
import { generateOtpEmailTemplate } from "./emailTemplates.js";

const sendEmail = async (email, subject, otp) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: subject,
    html: generateOtpEmailTemplate(otp), // ✅ using template
  };

  await transporter.sendMail(mailOptions);
};

export default sendEmail;
