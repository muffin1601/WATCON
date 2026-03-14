import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/sections/about/AboutHero";
import AboutStory from "@/sections/about/AboutStory";
import AboutPhilosophy from "@/sections/about/AboutPhilosophy";
// import AboutPeople from "@/sections/about/AboutPeople";
import ContactSection from "@/sections/ContactSection";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutPhilosophy />
        {/* <AboutPeople /> */}
        <ContactSection 
          subTitle="LET'S WORK TOGETHER"
          title="Ready to Create Something Extraordinary?" 
          description="Whether you're envisioning a private resort spa or an infinity edge master piece, our team is ready to bring your vision to life." 
        />
      </main>
      <Footer />
    </>
  );
}
