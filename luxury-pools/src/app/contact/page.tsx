import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/sections/contact/ContactHero";
import ContactSection from "@/sections/ContactSection";
import ContactMap from "@/sections/contact/ContactMap";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <ContactSection />
        <ContactMap />
      </main>
      <Footer />
    </>
  );
}
