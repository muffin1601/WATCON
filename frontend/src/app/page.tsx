import Hero from "@/components/Hero";
import Header from "@/components/Header";
import About from "@/components/About";
import Clients from "@/components/Clients"
import Services from "@/components/Services"
import WhyChooseUs from "@/components/WhyChooseUs";
import WorkProcess from "@/components/WorkProcess";
import PortfolioSection from "@/components/PortfolioSection"
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Clients />
    <Services />
    <WhyChooseUs />
    <WorkProcess />
    <PortfolioSection />
    <TestimonialsSection />
    <Footer />
    </>
  );
}
