import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/sections/service-detail/ServiceHero";
import ServiceGrid from "@/sections/service-detail/ServiceGrid";
import TileProjectsSection from "@/sections/service-detail/TileProjectsSection";
import WhyChooseWatcon from "@/sections/service-detail/WhyChooseWatcon";
import ServiceNavigation from "@/sections/service-detail/ServiceNavigation";
import ServiceCatalogue from "@/sections/service-detail/ServiceCatalogue";
import CtaSection from "@/sections/CtaSection";
import ContactSection from "@/sections/ContactSection";
import FAQAccordion from "@/components/FAQAccordion";
import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import styles from "@/app/faq/FAQ.module.css";

export const metadata: Metadata = {
  title: "Bisazza Glass Mosaic & Luxury Pool Tiling India | Watcon Finishes",
  description: "Watcon International is India's leading specialist in Bisazza glass mosaic tiling and luxury pool finishes. We offer iridescent glass tiles, large-format porcelain, and designer stone for high-end swimming pools in Delhi and Mumbai.",
  alternates: {
    canonical: "https://watcon.co.in/services/tiles-in-pool/",
  },
  keywords: [
    "bisazza glass mosaic india",
    "luxury pool tiling delhi",
    "swimming pool mosaic tiles india",
    "large format pool tiles delhi ncr",
    "glass tile pool builders india",
    "premium pool finishes delhi",
    "epoxy grouting for pools india"
  ],
  openGraph: {
    title: "Exquisite Bisazza Glass Mosaics & Pool Tiling | Watcon International",
    description: "Transform your pool into a radiant work of art with our master-crafted glass mosaic and porcelain tiling solutions.",
    images: ["/services/tilespool (1).webp"],
  }
};

const faqs = [
  {
    question: "Where can I get Bisazza glass mosaic in India?",
    answer: "Watcon International is a premier specialist for Bisazza glass mosaic in India, providing authentic tiles and master-craft installation for luxury pools and spas."
  },
  {
    question: "What is the best tile for luxury pools in Delhi?",
    answer: "For luxury pools in Delhi, we recommend glass mosaic or premium large-format porcelain tiles. They offer superior aesthetic appeal and durability under the intense Indian sun."
  },
  {
    question: "Who are the leading glass tile pool builders in India?",
    answer: "Watcon is recognized among the leading glass tile pool builders in India, with proprietary techniques for ensuring perfect tile alignment and long-lasting adhesion in submerged environments."
  },
  {
    question: "Why do you use epoxy grouting for pools?",
    answer: "Epoxy grouting is superior for pools because it is waterproof, stain-resistant, and chemically stable, preventing the growth of algae and ensuring the structural integrity of your pool finish."
  }
];

export default function TilesInPoolPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServiceHero
          subtitle="Masterful Finishes"
          title="Exquisite Bisazza Glass Mosaics & <br/> Pool Tiling"
          description="Transform your pool into a radiant work of art with Bisazza Glass Mosaic tiles. Watcon International specializes in high-end pool finishes that capture light and elevate your aquatic experience with world-class durability and precision."
          image="/services/tilespool (1).webp"
          actions={[
            { label: "Start Selection", href: "/contact", primary: true },
            { label: "View Our Work", href: "#projects" }
          ]}
        />

        <ServiceGrid
          subtitle="ARTISTIC CRAFT"
          title="Premium Tiling Solutions"
          services={[
            {
              title: "Swimming Pools",
              description: "Luxury residential and infinity pools that serve as the perfect canvas for our master-crafted glass mosaic and tiling.",
              icon: "Waves",
              href: "/services/swimming-pools"
            },
            {
              title: "Steam Suites",
              description: "Intricate mosaic tiling designed for the high-vapor environments of our bespoke Turkish Hammams and steam rooms.",
              icon: "Wind",
              href: "/services/steam"
            },
            {
              title: "Vitality Spas",
              description: "High-end hydrotherapy pool finishes that combine ergonomic comfort with world-class aesthetic appeal.",
              icon: "Heart",
              href: "/services/spa"
            },
            {
              title: "Water Features",
              description: "Architectural water bodies and reflecting ponds finished with premium materials that capture and reflect light beautifully.",
              icon: "Waves",
              href: "/services/water-bodies"
            }
          ]}
        />

        {/* Category-wise tile gallery */}
        <TileProjectsSection />

        <WhyChooseWatcon />

        {faqs && faqs.length > 0 && (
          <section className={styles.faqSection} style={{ backgroundColor: '#0c0c0c', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className={styles.container}>
              <div className={styles.hero} style={{ padding: '0 0 60px 0', maxWidth: '100%' }}>
                <FadeIn>
                  <p style={{ color: '#bdb595', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '15px' }}>Common Questions</p>
                  <h2 className={styles.title} style={{ margin: 0 }}>Frequently Asked <span>Questions</span></h2>
                </FadeIn>
              </div>
              <FAQAccordion faqs={faqs} />
            </div>
          </section>
        )}

        <ServiceNavigation />
        <ServiceCatalogue pdfUrl="/services/watcon profile and fountain 2026_web 1.pdf" />
        <CtaSection />
        <ContactSection
          title="Choose Your Perfect Palette"
          description="Explore our curated collection of luxury pool tiles and mosaics. Consult with our finishing experts today for a bespoke quote."
        />
      </main>
      <Footer />
    </>
  );
}


