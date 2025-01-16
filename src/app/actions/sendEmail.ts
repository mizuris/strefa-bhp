"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Simple spam check: Ensure the hidden honeypot field is empty
  if (formData.get("honeypot")) {
    return { error: "Spam detected. Please try again." };
  }

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: `Nowa wiadomość od: ${name}`,
      text: `Nazwa: ${name}\nEmail: ${email}\nWiadomość: ${message}`,
      html: `<p><strong>Nazwa:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Wiadomość:</strong> ${message}</p>`,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { error: "Failed to send email. Please try again later." };
  }
}
