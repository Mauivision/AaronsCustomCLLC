const services = [
  {
    title: "Painting",
    description: "Interior and exterior painting with proper prep and a lasting finish.",
  },
  {
    title: "Flooring",
    description: "New installs and refinishing for any room—durable and beautiful.",
  },
  {
    title: "Kitchens",
    description: "Design and installation: cabinets, counters, and layout that works for you.",
  },
  {
    title: "Bathrooms",
    description: "Vanities, tile, fixtures, and full bathroom design and installation.",
  },
  {
    title: "Tongue & Groove",
    description: "Walls and ceilings for a classic, cozy look that feels like home.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="px-6 py-16 md:py-24"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-5xl">
        <p className="section-label">What we do</p>
        <h2
          id="services-heading"
          className="mt-2 font-display text-3xl font-semibold text-warm-bark md:text-4xl"
        >
          Design and installation for every room
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-warm-charcoal/90">
          From a single room refresh to a full-house renovation—we handle design and build in one.
        </p>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2" role="list">
          {services.map(({ title, description }) => (
            <li
              key={title}
              className="border-l-4 border-warm-wood/60 pl-6"
            >
              <h3 className="font-display text-xl font-semibold text-warm-bark">
                {title}
              </h3>
              <p className="mt-2 text-warm-charcoal/90">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
