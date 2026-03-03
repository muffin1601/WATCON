import Navbar from "@/components/Navbar";
import OutdoorLightingSection from "@/components/OutdoorLightingSection";
import ContactSection from "@/sections/ContactSection";
import CtaSection from "@/sections/CtaSection";
import Hero from "@/sections/Hero";
import Portfolio from "@/sections/Portfolio";
import Services from "@/sections/Services";
import WellnessSection from "@/sections/WellnessSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <CtaSection />
      <OutdoorLightingSection />
      <WellnessSection />
      <ContactSection />
      <Footer />
    </>
  );
}