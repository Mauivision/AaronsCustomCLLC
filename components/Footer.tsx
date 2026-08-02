import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-warm-bark text-warm-stone px-6 py-10">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg font-semibold">
          Aaron&apos;s Custom Carpentry LLC
        </p>
        <p className="text-sm text-warm-stone/90">
          Turn your house into a home
        </p>
        <div className="flex gap-6 text-sm">
          <Link
            href="/contact"
            className="focus-ring text-warm-stone/90 hover:text-warm-stone underline-offset-2 hover:underline"
          >
            Click here to contact
          </Link>
          <a
            href="mailto:aaron@aaronscustomcarpentry.com"
            className="focus-ring text-warm-stone/90 hover:text-warm-stone"
          >
            Email
          </a>
        </div>
      </div>
      <p className="mx-auto max-w-5xl mt-6 text-center text-sm text-warm-stone/70">
        &copy; {year} Aaron&apos;s Custom Carpentry LLC. All rights reserved.
      </p>
    </footer>
  );
}
