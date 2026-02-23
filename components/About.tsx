"use client";

import { useState } from "react";

export default function About() {
  const [headshotError, setHeadshotError] = useState(false);

  return (
    <section
      id="about"
      className="bg-warm-sand/50 px-6 py-16 md:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="about-heading" className="font-display text-3xl md:text-4xl font-semibold text-warm-bark text-center">
          About Aaron
        </h2>
        <div className="mt-10 flex flex-col md:flex-row items-center gap-10 md:gap-12">
          <div className="relative w-56 h-56 md:w-72 md:h-72 aspect-square shrink-0 rounded-full overflow-hidden border-4 border-warm-wood/30 shadow-lg bg-warm-sand flex items-center justify-center">
            {!headshotError ? (
              <img
                src="/images/aaron-headshot.png"
                alt="Aaron - Owner of Aaron's Custom Carpentry LLC"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 38%" }}
                onError={() => setHeadshotError(true)}
              />
            ) : (
              <span className="font-display text-5xl md:text-6xl font-semibold text-warm-wood" aria-hidden>
                A
              </span>
            )}
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg text-warm-charcoal/90 leading-relaxed">
              Aaron brings a personal touch to every project. Whether it’s a fresh coat of paint, new flooring, a full kitchen or bathroom remodel, or classic tongue-and-groove walls and ceilings, the goal is the same: to make your space feel like a real home.
            </p>
            <p className="mt-4 text-lg text-warm-charcoal/90 leading-relaxed">
              He holds construction certificates from Maui College and worked under Maui Contractors for 20 years. Aaron’s Custom Carpentry LLC has been serving homeowners for 6 years—handling design and installation for any size project, from single rooms to full renovations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
