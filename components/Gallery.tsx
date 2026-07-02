import Image from "next/image";

const images = [
  {
    src: "/images/hero-kitchen-ceiling.jpg",
    alt: "Custom wooden ceiling and kitchen cabinetry",
    caption: "Tongue-and-groove ceiling with custom kitchen cabinetry",
    className: "md:col-span-7 md:row-span-2 md:min-h-[520px]",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Custom carpentry and finish work",
    caption: "Finish carpentry and trim detail",
    className: "md:col-span-5",
  },
  {
    src: "/images/aaron-sliders.png",
    alt: "Aaron in front of a project with large sliding glass doors and custom windows",
    caption: "Custom windows and sliding doors",
    className: "md:col-span-5",
  },
  {
    src: "/images/aaron-kitchen.png",
    alt: "Aaron in a kitchen renovation with new cabinets and island",
    caption: "Full kitchen renovation with island and new cabinets",
    className: "md:col-span-12 md:aspect-[21/9]",
  },
];

export default function Gallery() {
  return (
    <section
      id="work"
      className="px-6 py-16 md:py-24"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-6xl">
        <p className="section-label">Portfolio</p>
        <h2
          id="gallery-heading"
          className="mt-2 font-display text-3xl font-semibold text-warm-bark md:text-4xl"
        >
          Recent Work
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-warm-charcoal/90">
          A sample of kitchens, ceilings, and finish work crafted for homeowners across Maui.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
          {images.map(({ src, alt, caption, className }) => (
            <figure
              key={src}
              className={`group relative aspect-[4/3] overflow-hidden ${className}`}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-warm-charcoal/80 px-4 py-3 text-sm text-warm-stone transition-transform duration-300 group-hover:translate-y-0 motion-reduce:translate-y-0">
                {caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
