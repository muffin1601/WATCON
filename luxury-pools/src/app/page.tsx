import Navbar from "@/components/Navbar";
import FullWidthVideoSection from "@/components/FullWidthVideoSection";
import ContactSection from "@/sections/ContactSection";
import CtaSection from "@/sections/CtaSection";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import FeatureSection from "@/sections/FeatureSection";
import Footer from "@/components/Footer";
import ContentSection from "@/sections/ContentSection";
import { ParallaxText } from "@/components/ParallaxText";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <CtaSection />
      <ContentSection />
      <FullWidthVideoSection />
      <FeatureSection />

      <ContactSection />
      <Footer />
    </>
  );
}