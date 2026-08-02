import About from "~/components/About";
import ContactCta from "~/components/ContactCta";
import Gallery from "~/components/Gallery";
import Hero from "~/components/Hero";
import Services from "~/components/Services";
import WhyChoose from "~/components/WhyChoose";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Gallery />
      <ContactCta />
    </main>
  );
}
