import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/sections/about/AboutHero";
import AboutStory from "@/sections/about/AboutStory";
import AboutPhilosophy from "@/sections/about/AboutPhilosophy";
import AboutPeople from "@/sections/about/AboutPeople";
import AboutCTA from "@/sections/about/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutPhilosophy />
        <AboutPeople />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
