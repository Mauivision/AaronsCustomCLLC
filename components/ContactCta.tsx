import Link from "next/link";

export default function ContactCta() {
  return (
    <section
      className="px-6 py-16 md:py-24 bg-warm-sand"
      aria-labelledby="contact-cta-heading"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="contact-cta-heading"
          className="font-display text-3xl md:text-4xl font-semibold text-warm-bark"
        >
          Ready to Make Your House Feel Like Home?
        </h2>
        <p className="mt-4 text-warm-charcoal/90">
          Get in touch for a free quote.
        </p>
        <Link
          href="/contact"
          className="focus-ring mt-8 inline-block rounded-md bg-warm-wood px-6 py-3 font-medium text-white shadow-md transition hover:bg-warm-bark"
        >
          Click here to contact
        </Link>
      </div>
    </section>
  );
}
