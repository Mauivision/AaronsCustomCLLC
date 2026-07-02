import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-end"
      aria-label="Welcome"
    >
      <Image
        src="/images/hero-kitchen-ceiling.jpg"
        alt="Custom wooden ceiling and kitchen cabinetry by Aaron's Custom Carpentry"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-warm-charcoal/85 via-warm-charcoal/40 to-warm-charcoal/20"
        aria-hidden
      />
      <div className="relative z-10 w-full px-6 pb-20 pt-32 md:px-12 md:pb-28 lg:px-20">
        <div className="mx-auto max-w-3xl">
          <p className="section-label text-warm-sand/90">Finish carpentry &amp; home renovation</p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] text-warm-stone md:text-6xl lg:text-7xl">
            Turn Your House Into a Home
          </h1>
          <p className="mt-5 max-w-xl text-lg text-warm-stone/90 md:text-xl">
            Design and quality craftsmanship for painting, flooring, kitchens, bathrooms, and tongue-and-groove walls and ceilings.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="focus-ring inline-block rounded-md bg-warm-wood px-6 py-3 text-center font-medium text-white shadow-md transition duration-300 hover:bg-warm-bark"
            >
              Get a Free Quote
            </Link>
            <Link
              href="#work"
              className="focus-ring inline-block rounded-md border-2 border-warm-stone/80 px-6 py-3 text-center font-medium text-warm-stone transition duration-300 hover:bg-warm-stone/10"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
