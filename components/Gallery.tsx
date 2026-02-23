import Image from "next/image";

const images = [
  {
    src: "/images/hero-kitchen-ceiling.jpg",
    alt: "Custom wooden ceiling and kitchen cabinetry",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Custom carpentry and finish work",
  },
  {
    src: "/images/aaron-sliders.png",
    alt: "Aaron in front of a project with large sliding glass doors and custom windows",
  },
  {
    src: "/images/aaron-kitchen.png",
    alt: "Aaron in a kitchen renovation with new cabinets and island",
  },
];

export default function Gallery() {
  return (
    <section
      className="px-6 py-16 md:py-24 bg-warm-sand/30"
      aria-labelledby="gallery-heading"
    >
      <h2 id="gallery-heading" className="sr-only">
        Our work
      </h2>
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {images.map(({ src, alt }) => (
            <div
              key={src}
              className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
