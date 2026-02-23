"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="px-6 py-16 md:py-24 bg-warm-stone"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-2xl">
        <h2 id="contact-heading" className="font-display text-3xl md:text-4xl font-semibold text-warm-bark text-center">
          Ready to Make Your House Feel Like Home?
        </h2>
        <p className="mt-4 text-center text-warm-charcoal/90">
          Get in touch for a free quote. Call, email, or send a message below.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center text-center">
          <a
            href="tel:+15551234567"
            className="focus-ring text-warm-bark font-medium hover:underline"
          >
            (555) 123-4567
          </a>
          <a
            href="mailto:aaron@aaronscustomcarpentry.com"
            className="focus-ring text-warm-bark font-medium hover:underline"
          >
            aaron@aaronscustomcarpentry.com
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-4"
          aria-label="Contact form"
        >
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-warm-charcoal">Name</span>
            <input
              type="text"
              name="name"
              required
              className="focus-ring rounded-md border border-warm-sand bg-white px-4 py-2 text-warm-charcoal"
              placeholder="Your name"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-warm-charcoal">Email</span>
            <input
              type="email"
              name="email"
              required
              className="focus-ring rounded-md border border-warm-sand bg-white px-4 py-2 text-warm-charcoal"
              placeholder="you@example.com"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-warm-charcoal">Phone</span>
            <input
              type="tel"
              name="phone"
              className="focus-ring rounded-md border border-warm-sand bg-white px-4 py-2 text-warm-charcoal"
              placeholder="(555) 000-0000"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-warm-charcoal">Message</span>
            <textarea
              name="message"
              rows={4}
              className="focus-ring rounded-md border border-warm-sand bg-white px-4 py-2 text-warm-charcoal resize-y"
              placeholder="Tell us about your project..."
            />
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="focus-ring mt-2 rounded-md bg-warm-wood px-6 py-3 font-medium text-white shadow-md transition hover:bg-warm-bark disabled:opacity-70"
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
                ? "Message sent"
                : status === "error"
                  ? "Try again"
                  : "Send message"}
          </button>
          {status === "sent" && (
            <p className="text-sm text-green-700" role="status">
              Thanks! We’ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-700" role="alert">
              Something went wrong. Please call or email us directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
