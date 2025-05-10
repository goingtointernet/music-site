import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configure your email transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // Using Gmail as the email service
  auth: {
    user: process.env.NEXT_PUBLIC_SENDER_USER, // Your Gmail address
    pass: process.env.NEXT_PUBLIC_SENDER_PASS, // Your Gmail App Password
  },
});
export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 },
      );
    }

    // Prepare email content
    const mailOptions = {
      from: process.env.NEXT_PUBLIC_SENDER_USER,
      to: process.env.NEXT_PUBLIC_RECIEVER_USER,
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Contact form submitted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process contact form" },
      { status: 500 },
    );
  }
}
