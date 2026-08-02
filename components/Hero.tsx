import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex flex-col md:flex-row md:min-h-[90vh]"
      aria-label="Welcome"
    >
      <div className="flex-1 flex flex-col justify-center px-6 py-16 md:py-24 md:pl-12 lg:pl-20 md:pr-8 order-2 md:order-1">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-warm-bark leading-tight">
          Turn Your House Into a Home
        </h1>
        <p className="mt-4 text-lg md:text-xl text-warm-charcoal/90 max-w-xl">
          Aaron fixes up new and old houses with design and quality craftsmanship—painting, flooring, kitchens, bathrooms, and tongue-and-groove walls and ceilings.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="focus-ring inline-block rounded-md bg-warm-wood px-6 py-3 text-center font-medium text-white shadow-md transition hover:bg-warm-bark"
          >
            Get a Free Quote
          </Link>
          <Link
            href="#services"
            className="focus-ring inline-block rounded-md border-2 border-warm-bark px-6 py-3 text-center font-medium text-warm-bark transition hover:bg-warm-sand"
          >
            Our Services
          </Link>
        </div>
      </div>
      <div className="flex-1 relative min-h-[50vh] md:min-h-[90vh] order-1 md:order-2">
        <Image
          src="/images/hero-kitchen-ceiling.jpg"
          alt="Custom wooden ceiling and kitchen cabinetry by Aaron's Custom Carpentry"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-stone/80 via-transparent to-transparent md:from-warm-stone/60" aria-hidden />
      </div>
    </section>
  );
}
