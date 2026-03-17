import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioHero from "@/sections/portfolio/PortfolioHero";
import PortfolioGrid from "@/sections/portfolio/PortfolioGrid";
import CtaSection from "@/sections/CtaSection";
import ContactSection from "@/sections/ContactSection";
import ServiceNavigation from "@/sections/service-detail/ServiceNavigation";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Luxury Swimming Pool & Waterbody Portfolio India | Watcon Projects",
  description: "Explore Watcon International's curated gallery of luxury infinity pools, architectural fountains, and wellness hydrotherapy suites across India. See our master engineering in action.",
  alternates: {
    canonical: "https://watcon.co.in/portfolio",
  },
  openGraph: {
    title: "Project Portfolio | Watcon International",
    description: "A showcase of India's most iconic aquatic environments and luxury pools.",
    images: ["/og-image.png"],
  }
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <PortfolioHero />
        <PortfolioGrid />
        <CtaSection 
          subTitle="OUR MASTERPIECES"
          title="Ready to Build Your "
          titleAccent="Original Sanctuary?"
          primaryLabel="Consult with Experts"
          primaryHref="/contact"
          secondaryLabel="View Services"
          secondaryHref="/services/swimming-pools"
        />
        <ServiceNavigation />

        <ContactSection 
          title="Ready to Build Your Original Masterpiece?"

          description="Book a consultation with our projects team to discuss your luxury aquatic vision."
        />
      </main>

      <Footer />
    </>
  );
}

