import About from "~/components/About";
import Contact from "~/components/Contact";
import Footer from "~/components/Footer";
import Gallery from "~/components/Gallery";
import Hero from "~/components/Hero";
import ImageBand from "~/components/ImageBand";
import Nav from "~/components/Nav";
import Services from "~/components/Services";
import WhyChoose from "~/components/WhyChoose";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <ImageBand
          src="/images/gallery-2.jpg"
          alt="Custom carpentry and finish work detail"
          caption="Finish carpentry built to last"
        />
        <Services />
        <WhyChoose />
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
