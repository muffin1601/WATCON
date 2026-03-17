import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/sections/about/AboutHero";
import AboutStory from "@/sections/about/AboutStory";
import AboutPhilosophy from "@/sections/about/AboutPhilosophy";
import ContactSection from "@/sections/ContactSection";
import CtaSection from "@/sections/CtaSection";
import ServiceNavigation from "@/sections/service-detail/ServiceNavigation";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "About Watcon International | 50+ Years of Aquatic Excellence",
  description: "Learn about Watcon International, India's most trusted luxury pool builders. With over five decades of experience, we specialize in high-end swimming pools, musical fountains, and premium wellness solutions.",
  alternates: {
    canonical: "https://watcon.co.in/about",
  },
  keywords: [
    "watcon international about",
    "luxury pool company india",
    "best swimming pool builders delhi",
    "aquatic engineering heritage india",
    "experienced fountain makers delhi"
  ],
  openGraph: {
    title: "About Watcon International | Experts in Luxury Aquatic Design",
    description: "Discover our story of craftsmanship and innovation in luxury pool and fountain construction across India.",
    images: ["/about-hero.jpg"],
  }
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutPhilosophy />
        <CtaSection />
        <ServiceNavigation />
        <ContactSection 
          subTitle="LET'S WORK TOGETHER"


          title="Ready to Create Something Extraordinary?" 
          description="Whether you're envisioning a private resort spa or an infinity edge masterpiece, our team is ready to bring your vision to life with 50+ years of expertise." 
        />
      </main>
      <Footer />
    </>
  );
}

