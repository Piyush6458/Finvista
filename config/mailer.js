import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

let transporter = null;

const smtpHost = process.env.SMTP_HOST;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;

if (smtpHost && smtpHost !== 'smtp.example.com' && smtpUser && smtpUser !== 'your-email@example.com' && smtpPass && smtpPass !== 'your-smtp-password') {
  transporter = nodemailer.createTransport({
    host: smtpHost,
    port: process.env.SMTP_PORT || 587,
    secure: (process.env.SMTP_PORT || 587) == 465, // true for 465, false for other ports
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  transporter.verify((error, success) => {
    if (error) {
      console.error("Error with SMTP configuration, emails may not be sent:", error.message);
      transporter = null; // Invalidate transporter on verification failure
    } else {
      console.log("SMTP transporter is configured and ready to send emails.");
    }
  });
} else {
  console.warn("SMTP credentials are not fully configured. Email functionality will be unavailable.");
}

export default transporter;
