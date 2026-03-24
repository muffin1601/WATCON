import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/sections/contact/ContactHero";
import ContactSection from "@/sections/ContactSection";
import CtaSection from "@/sections/CtaSection";
import ServiceNavigation from "@/sections/service-detail/ServiceNavigation";
import ContactMap from "@/sections/contact/ContactMap";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Watcon International | Luxury Pool & Fountain Consultations",
  description: "Get in touch with Watcon International for bespoke swimming pool design, musical fountain construction, or wellness spa installations. Contact our Delhi office for expert consultations across India.",
  alternates: {
    canonical: "https://watcon.co.in/contact/",
  },
  keywords: [
    "contact swimming pool builders delhi",
    "watcon international office address",
    "fountain maker contact number",
    "pool design consultation india",
    "luxury aquatic engineering inquiry"
  ],
  openGraph: {
    title: "Contact Us | Watcon International",
    description: "Connect with our experts to start your luxury aquatic or thermal project today.",
    images: ["/contact-hero.jpg"],
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <ContactSection />
        <CtaSection 
          subTitle="WHILE YOU WAIT"
          title="Explore Our "
          titleAccent="Iconic Projects"
          text="As our team reviews your inquiry, discover how we've transformed India's finest landscapes into award-winning aquatic environments over the last five decades."
          primaryLabel="View Portfolio"
          primaryHref="/portfolio"
        />
        <ServiceNavigation />
        <ContactMap />
      </main>

      <Footer />
    </>
  );
}
