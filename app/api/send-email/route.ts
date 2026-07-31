import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { plan, date, time, customerName, customerEmail, customerPhone, paymentId } = data;

    // Check if SMTP credentials are provided in .env
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.warn("SMTP credentials not set. Email not sent, but API returned success for testing.");
      console.log("Mock Email Data:", data);
      return NextResponse.json({ success: true, mock: true }, { status: 200 });
    }

    // Configure the transporter with Gmail SMTP
    // NOTE: For Gmail, you must generate an "App Password" in your Google Account security settings.
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER, // e.g., akanksha.t0311@gmail.com
        pass: process.env.SMTP_PASSWORD, // e.g., "abcd efgh ijkl mnop" (App Password)
      },
    });

    const mailOptions = {
      from: `"Fit Aesthetic System" <${process.env.SMTP_USER}>`,
      to: "akanksha.t0311@gmail.com", // The recipient email you requested
      subject: `New Booking Alert: ${plan} by ${customerName}`,
      html: `
        <div style="font-family: sans-serif; max-w-2xl mx-auto p-6 bg-gray-50 border border-gray-200 rounded-lg">
          <h2 style="color: #6E3B3B;">New Consultation/Plan Booking!</h2>
          <p>You have received a new confirmed booking via Razorpay.</p>
          
          <div style="background: white; padding: 16px; border-radius: 8px; margin-top: 16px;">
            <h3 style="margin-top: 0; color: #333;">Customer Details</h3>
            <p><strong>Name:</strong> ${customerName}</p>
            <p><strong>Email:</strong> ${customerEmail}</p>
            <p><strong>Phone:</strong> ${customerPhone}</p>
          </div>

          <div style="background: white; padding: 16px; border-radius: 8px; margin-top: 16px;">
            <h3 style="margin-top: 0; color: #333;">Booking Details</h3>
            <p><strong>Plan:</strong> ${plan}</p>
            <p><strong>Selected Date:</strong> ${date}</p>
            <p><strong>Selected Time:</strong> ${time}</p>
            <p><strong>Razorpay Payment ID:</strong> ${paymentId}</p>
          </div>
          
          <p style="margin-top: 24px; font-size: 14px; color: #666;">
            The customer has been redirected to WhatsApp to confirm with you.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email notification" },
      { status: 500 }
    );
  }
}
