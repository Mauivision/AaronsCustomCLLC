"use client";

import { useState } from "react";

export default function About() {
  const [headshotError, setHeadshotError] = useState(false);

  return (
    <section
      id="about"
      className="px-6 py-16 md:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-5xl">
        <p className="section-label">About</p>
        <h2
          id="about-heading"
          className="mt-2 font-display text-3xl font-semibold text-warm-bark md:text-4xl"
        >
          Craftsmanship with a personal touch
        </h2>

        <div className="mt-12 flex flex-col gap-12 md:flex-row md:items-start md:gap-16">
          <div className="relative aspect-[3/4] w-full max-w-xs shrink-0 overflow-hidden md:max-w-sm">
            {!headshotError ? (
              <img
                src="/images/aaron-headshot.png"
                alt="Aaron - Owner of Aaron's Custom Carpentry LLC"
                className="h-full w-full object-cover"
                style={{ objectPosition: "center 30%" }}
                onError={() => setHeadshotError(true)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-warm-sand">
                <span
                  className="font-display text-6xl font-semibold text-warm-wood"
                  aria-hidden
                >
                  A
                </span>
              </div>
            )}
          </div>

          <div className="flex-1">
            <blockquote className="border-l-4 border-warm-wood pl-6 font-display text-xl italic text-warm-bark md:text-2xl">
              20 years under Maui Contractors, 6 years serving homeowners as Aaron&apos;s Custom Carpentry LLC.
            </blockquote>

            <p className="mt-8 text-lg leading-relaxed text-warm-charcoal/90">
              Aaron brings a personal touch to every project. Whether it&apos;s a fresh coat of paint, new flooring, a full kitchen or bathroom remodel, or classic tongue-and-groove walls and ceilings, the goal is the same: to make your space feel like a real home.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-warm-charcoal/90">
              He holds construction certificates from Maui College and handles design and installation for any size project—from single rooms to full renovations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
