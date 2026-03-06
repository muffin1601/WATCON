import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioHero from "@/sections/portfolio/PortfolioHero";
import PortfolioGrid from "@/sections/portfolio/PortfolioGrid";
import CtaSection from "@/sections/CtaSection";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <PortfolioHero />
        <PortfolioGrid />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
