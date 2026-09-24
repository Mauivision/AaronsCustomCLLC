const points = [
  {
    title: "Design + build in one",
    description: "We handle both design and installation so your vision is carried through from start to finish.",
  },
  {
    title: "Any project size",
    description: "From a single room refresh to a full-house renovation, we're equipped for it.",
  },
  {
    title: "Quality that feels like home",
    description: "Craftsmanship and attention to detail so your space feels welcoming and built to last.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why"
      className="border-y border-warm-sand bg-warm-sand/30 px-6 py-16 md:py-24"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-5xl">
        <p className="section-label">Why choose us</p>
        <h2
          id="why-heading"
          className="mt-2 font-display text-3xl font-semibold text-warm-bark md:text-4xl"
        >
          Built to last, designed for living
        </h2>

        <ul className="mt-12 grid gap-10 md:grid-cols-3 md:gap-12" role="list">
          {points.map(({ title, description }) => (
            <li key={title}>
              <h3 className="font-display text-xl font-semibold text-warm-bark">
                {title}
              </h3>
              <p className="mt-3 leading-relaxed text-warm-charcoal/90">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
