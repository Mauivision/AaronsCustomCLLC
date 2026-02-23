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
      className="px-6 py-16 md:py-24 bg-warm-stone"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2 id="services-heading" className="font-display text-3xl md:text-4xl font-semibold text-warm-bark text-center">
          What We Do
        </h2>
        <p className="mt-4 text-center text-lg text-warm-charcoal/90 max-w-2xl mx-auto">
          Design and installations for any size project—from single rooms to full renovations.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {services.map(({ title, description }) => (
            <li
              key={title}
              className="rounded-xl border border-warm-sand bg-white p-6 shadow-sm transition hover:shadow-md"
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
