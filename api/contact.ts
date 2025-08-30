import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Nodemailer transporter with Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,       // Gmail (hidden in Vercel env vars)
      pass: process.env.MY_EMAIL_PASS,  // Gmail App Password
    },
  });

  try {
    await transporter.sendMail({
      from: email, // sender (user filling form)
      to: process.env.MY_EMAIL, // your Gmail
      subject: `New Contact Form Submission from ${name}`,
      text: message,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("Email error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
