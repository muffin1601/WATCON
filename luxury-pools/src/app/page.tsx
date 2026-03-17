import Navbar from "@/components/Navbar";
import FullWidthVideoSection from "@/components/FullWidthVideoSection";
import ContactSection from "@/sections/ContactSection";
import CtaSection from "@/sections/CtaSection";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import FeatureSection from "@/sections/FeatureSection";
import Footer from "@/components/Footer";
import ContentSection from "@/sections/ContentSection";
import ServiceNavigation from "@/sections/service-detail/ServiceNavigation";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Watcon International | Luxury Swimming Pool Builders & Fountain Makers India",
  description: "Watcon International is India's premier luxury swimming pool builder and musical fountain maker. With 50+ years of expertise, we design bespoke pools, spas, and water features for elite homes and commercial landmarks.",
  alternates: {
    canonical: "https://watcon.co.in",
  },
  keywords: [
    "luxury swimming pool builders india",
    "musical fountain makers delhi",
    "swimming pool construction company india",
    "bespoke pool designers delhi ncr",
    "oase fountain partners india",
    "luxury spa and sauna builders",
    "commercial aquatic engineering india"
  ],
  openGraph: {
    title: "Watcon International | Luxury Swimming Pools & Fountains India",
    description: "Crafting iconic aquatic experiences for over 50 years. India's best luxury pool and fountain experts.",
    images: ["/hero-bg.jpg"],
  }
};

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
      <ServiceNavigation />
      <ContactSection />
      <Footer />

    </>
  );
}