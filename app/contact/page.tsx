import type { Metadata } from "next";
import Contact from "~/components/Contact";

export const metadata: Metadata = {
  title: "Contact | Aaron's Custom Carpentry LLC",
  description:
    "Get in touch with Aaron's Custom Carpentry LLC for a free quote on painting, flooring, kitchens, bathrooms, and custom carpentry.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <Contact />
    </main>
  );
}
