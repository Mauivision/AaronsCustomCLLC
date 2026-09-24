import type { Metadata } from "next";
import { Crimson_Pro, Source_Sans_3 } from "next/font/google";
import Footer from "~/components/Footer";
import "./globals.css";

const display = Crimson_Pro({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aaron's Custom Carpentry LLC | Turn Your House Into a Home",
  description:
    "Painting, flooring, kitchens, bathrooms, and tongue-and-groove walls and ceilings. Design and installations for any size project in new and old homes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen bg-warm-stone font-body text-warm-charcoal">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-warm-wood focus:px-4 focus:py-2 focus:text-white focus:ring-2 focus:ring-warm-bark"
        >
          Skip to content
        </a>
        {children}
        <Footer />
      </body>
    </html>
  );
}
