import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req: Request) {
  try {
    const { amount, currency } = await req.json();

    // Initialize razorpay using test keys if live keys are not present
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID || "rzp_test_YourTestKeyIdHere",
      key_secret: process.env.RAZORPAY_KEY_SECRET || "YourTestKeySecretHere",
    });

    const options = {
      amount: Math.round(amount * 100), // amount in smallest currency unit (paise)
      currency: currency || "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.error("Razorpay error:", error);
    return NextResponse.json(
      { error: "Error creating order" },
      { status: 500 }
    );
  }
}
