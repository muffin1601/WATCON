import Navbar from "@/components/Navbar";
import LaminarSection from "@/components/LaminarSection";
import FullWidthVideoSection from "@/components/FullWidthVideoSection";
import ContactSection from "@/sections/ContactSection";
import CtaSection from "@/sections/CtaSection";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CtaSection />
      <Services />
      <LaminarSection />
      <FullWidthVideoSection />
      <ContactSection />
      <Footer />
    </>
  );
}