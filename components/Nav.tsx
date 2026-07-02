import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-warm-sand/40 bg-warm-stone/90 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <Link
          href="#hero"
          className="focus-ring font-display text-base font-semibold text-warm-bark sm:text-lg md:text-xl"
        >
          <span className="sm:hidden">Aaron&apos;s</span>
          <span className="hidden sm:inline">Aaron&apos;s Custom Carpentry</span>
        </Link>
        <ul className="flex gap-4 text-xs sm:gap-5 sm:text-sm md:gap-8 md:text-base" role="list">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="focus-ring text-warm-charcoal/80 transition-colors duration-300 hover:text-warm-bark"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
