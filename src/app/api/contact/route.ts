import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body ?? {};

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields (name, email, subject, and message) are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(String(email))) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Ready to wire into Resend, Nodemailer, Formspree, or a CRM webhook
    console.info("[Portfolio Contact Submission]", {
      name,
      email,
      subject,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { ok: true, message: "Message received successfully." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }
}

