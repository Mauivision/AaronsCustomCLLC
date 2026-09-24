/// <reference types="next" />
import { NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body as {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
    };

    const trimmedName = typeof name === "string" ? name.trim() : "";
    const trimmedEmail = typeof email === "string" ? email.trim() : "";
    const trimmedPhone = typeof phone === "string" ? phone.trim() : "";
    const trimmedMessage = typeof message === "string" ? message.trim() : "";

    if (!trimmedName || !trimmedEmail) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      return NextResponse.json(
        { error: "A valid email is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 503 }
      );
    }

    const toEmail =
      process.env.CONTACT_TO_EMAIL ?? "aaron@aaronscustomcarpentry.com";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ??
      "Aaron's Custom Carpentry <onboarding@resend.dev>";

    const safeName = escapeHtml(trimmedName);
    const safeEmail = escapeHtml(trimmedEmail);
    const safePhone = escapeHtml(trimmedPhone || "Not provided");
    const safeMessage = escapeHtml(trimmedMessage || "No message provided").replaceAll(
      "\n",
      "<br />"
    );

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: trimmedEmail,
      subject: `New quote request from ${trimmedName}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
      text: [
        "New contact form submission",
        "",
        `Name: ${trimmedName}`,
        `Email: ${trimmedEmail}`,
        `Phone: ${trimmedPhone || "Not provided"}`,
        "",
        "Message:",
        trimmedMessage || "No message provided",
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
