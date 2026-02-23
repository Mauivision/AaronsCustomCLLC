import About from "~/components/About";
import Contact from "~/components/Contact";
import Footer from "~/components/Footer";
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
      <Contact />
      <Footer />
    </main>
  );
}
