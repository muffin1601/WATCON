import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/sections/ContactSection";
import CtaSection from "@/sections/CtaSection";
import ServiceNavigation from "@/sections/service-detail/ServiceNavigation";
import { FadeIn } from "@/components/FadeIn";


import { PerspectiveReveal } from "@/components/PerspectiveReveal";
import styles from "./FAQ.module.css";
import FAQAccordion from "@/components/FAQAccordion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Watcon International Pool Builders",
  description: "Get expert answers to common questions about luxury swimming pool construction, musical fountains, cold plunge pools, and aquatic engineering in India.",
  alternates: {
    canonical: "https://watcon.co.in/faq",
  },
  keywords: [
    "swimming pool builder delhi faq",
    "cost of building a pool in india",
    "best swimming pool maker india",
    "cold plunge pool manufacturer india",
    "musical fountain maintenance india",
    "luxury aquatic design questions"
  ],
  openGraph: {
    title: "Expert Aquatic Engineering FAQ | Watcon International",
    description: "Your guide to luxury pool construction, fountain design, and wellness installations.",
    images: ["/faq-hero.jpg"],
  }
};

const faqs = [
  {
    question: "Who is the best swimming pool builder in Delhi?",
    answer: "Watcon International is one of the leading swimming pool design and construction companies in Delhi, with a legacy of building iconic pools for The Oberoi and elite residential projects."
  },
  {
    question: "Who builds luxury resort pools in India?",
    answer: "Watcon International specializes in resort pools, landscape water bodies and wellness pools across India. We have been the choice for premier hospitality groups and luxury retreats since 1972."
  },
  {
    question: "Where can I buy a cold plunge pool in India?",
    answer: "Watcon International designs and manufactures custom cold plunge pools and ice bath systems for luxury homes, high-end spas, and professional wellness centres across India."
  },
  {
    question: "Who builds musical fountains in India?",
    answer: "Watcon International is a premier designer and installer of musical fountains and architectural fountains. As an authorized Oase dealer, we provide world-class synchronized water shows for hotels and public spaces."
  },
  {
    question: "Who made the Oberoi's pool in India?",
    answer: "Watcon International is proud to have executed the luxury swimming pools and water features for The Oberoi group, setting the standard for hospitality aquatics in the country."
  },
  {
    question: "Who did the pool and water body at DLF?",
    answer: "The premium waterbodies and pools at DLF Golf Course and major DLF residential projects including The Hibiscus were designed and built by Watcon’s expert engineering team."
  },
  {
    question: "Does Watcon build Olympic size competition pools?",
    answer: "Yes, Watcon is India’s #1 choice for Olympic-standard aquatic infrastructure. We built the competition pools for the 1982 Asian Games and the 2010 Commonwealth Games."
  },
  {
    question: "What is the best tile for swimming pools in India?",
    answer: "For luxury pools and waterbodies, we recommend Bisazza Glass Mosaic tiles. They provide unparalleled durability and a premium aesthetic finish that elevates any aquatic space."
  },
  {
    question: "Which company provides hydrotherapy pool builder services in India?",
    answer: "Watcon International designs medical hydrotherapy pools, underwater exercise pools, and rehabilitation pools used by physiotherapy centres and wellness resorts."
  },
  {
    question: "Where can I get an underwater treadmill pool in India?",
    answer: "Watcon International specializes in aquatic therapy systems, including custom-built underwater treadmill pools for rehabilitation and athletic training."
  }
];

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <PerspectiveReveal>
            <h1 className={styles.title}>
              Frequently Asked <span>Questions</span>
            </h1>
          </PerspectiveReveal>
          <FadeIn delay={0.2}>
            <p className={styles.subtitle}>
              Expert answers from India&apos;s leading aquatic engineering firm on luxury pools, hydrotherapy, and water architecture.
            </p>
          </FadeIn>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.container}>
            <FAQAccordion faqs={faqs} />
          </div>
        </section>

        <CtaSection />
        <ServiceNavigation />

        <ContactSection 
          subTitle="HAVE MORE QUESTIONS?"

          title="Lets discuss your vision in detail"
          description="Our expert engineers are available for technical consultations across India. Reach out for clear advice on your upcoming aquatic project."
        />
      </main>

      <Footer />
    </>
  );
}

