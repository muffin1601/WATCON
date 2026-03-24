import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/sections/CtaSection";
import ContactSection from "@/sections/ContactSection";
import type { Metadata } from "next";
import Link from "next/link";
import { Waves, Droplets, Thermometer, Wind, Bath, Flame, Droplet, Snowflake, Trees, BoxSelect, Square, TreePine, ShieldCheck } from "lucide-react";
import styles from "./ServicesHub.module.css";
import { FadeIn } from "@/components/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer";
import { ScrollParallax } from "@/components/ScrollParallax";
import { PerspectiveReveal } from "@/components/PerspectiveReveal";

export const metadata: Metadata = {
  title: "Premium Swimming Pool & Wellness Services | Watcon International",
  description: "Explore our masterfully engineered aquatic and wellness solutions, including Olympic swimming pools, luxury spas, cryo rooms, and custom outdoor living elements.",
  alternates: {
    canonical: "https://watcon.co.in/services/",
  },
  openGraph: {
    title: "Luxury Aquatic Engineering Services | Watcon International",
    description: "Discover India's most advanced aquatic and wellness engineering services.",
    images: ["/og-image.png"],
  }
};

const allServices = [
  { name: "Swimming Pools", href: "/services/swimming-pools", icon: Waves, desc: "Bespoke luxury residential & commercial pools." },
  { name: "Competition Pool", href: "/services/competition-pool", icon: ShieldCheck, desc: "Olympic-standard high-performance pools." },
  { name: "Water Bodies", href: "/services/water-bodies", icon: Droplets, desc: "Architectural fountains & musical water features." },
  { name: "Koi Ponds", href: "/services/koi-ponds", icon: Trees, desc: "Tranquil engineered ecosystems for luxury estates." },
  { name: "Spa", href: "/services/spa", icon: Bath, desc: "Custom hydrotherapy and relaxation suites." },
  { name: "Jacuzzi", href: "/services/jacuzzi", icon: Droplet, desc: "Therapeutic hot tubs with premium massaging jets." },
  { name: "Sauna", href: "/services/sauna", icon: Thermometer, desc: "Authentic dry heat timber saunas." },
  { name: "Steam", href: "/services/steam", icon: Wind, desc: "Aromatic steam enclosures with luxury finishing." },
  { name: "Cryo Room", href: "/services/cryo-room", icon: Snowflake, desc: "Advanced cold therapy for athletic recovery." },
  { name: "Dehumidifier", href: "/services/dehumidifier", icon: Wind, desc: "High-capacity air control for indoor pools." },
  { name: "Outdoor Furniture", href: "/services/outdoor-furniture", icon: TreePine, desc: "Premium poolside and lounge living collections." },
  { name: "Outdoor Fireplaces", href: "/services/outdoor-fireplaces", icon: Flame, desc: "Statement architectural fire elements." },
  { name: "Tiles in Pool", href: "/services/tiles-in-pool", icon: Square, desc: "Exquisite mosaic and performance pool tiling." },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <PerspectiveReveal>
            <h1 className={styles.title}>
              Our Master <span>Services</span>
            </h1>
          </PerspectiveReveal>
          <FadeIn delay={0.2}>
            <p className={styles.description}>
              From Olympic-standard engineering to intimate hydrotherapy suites, we build unparalleled aquatic environments for India’s finest estates and institutions.
            </p>
          </FadeIn>
        </section>

        <section className={styles.gridSection}>
          <div className={styles.container}>
            <StaggerContainer className={styles.grid}>
              {allServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <StaggerItem key={service.href}>
                    <ScrollParallax distance={20} direction="up">
                      <Link href={service.href} className={styles.card}>
                        <div className={styles.iconWrapper}>
                          <Icon size={32} className={styles.icon} />
                        </div>
                        <h3 className={styles.cardTitle}>{service.name}</h3>
                        <p className={styles.cardDesc}>{service.desc}</p>
                        <span className={styles.cardLink}>Explore Service &rarr;</span>
                      </Link>
                    </ScrollParallax>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        <CtaSection 
          subTitle="OUR MASTERPIECES"
          title="Ready to Build Your "
          titleAccent="Original Sanctuary?"
          primaryLabel="Consult with Experts"
          primaryHref="/contact"
          secondaryLabel="View Projects"
          secondaryHref="/portfolio"
        />
        
        <ContactSection 
          title="Contact Our Master Builders"
          description="Book a consultation with our specialized engineering team to discuss your next grand vision."
        />
      </main>
      <Footer />
    </>
  );
}
