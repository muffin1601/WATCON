import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/sections/about/AboutHero";
import AboutImages from "@/sections/about/AboutImages";
import AboutStory from "@/sections/about/AboutStory";
import AboutPhilosophy from "@/sections/about/AboutPhilosophy";
import Services from "@/sections/Services";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        
        <AboutStory /><AboutImages />
        <AboutPhilosophy />
        <Services />
      </main>
      <Footer />
    </>
  );
}
