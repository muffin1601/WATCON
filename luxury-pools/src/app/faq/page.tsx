"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { PerspectiveReveal } from "@/components/PerspectiveReveal";
import styles from "./FAQ.module.css";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
              Expert answers to common queries about luxury pools, hydrotherapy, and water architecture.
            </p>
          </FadeIn>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <FadeIn key={index} delay={0.1 * index}>
                  <div 
                    className={`${styles.faqItem} ${openIndex === index ? styles.active : ""}`}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <div className={styles.questionRow}>
                      <h3>{faq.question}</h3>
                      {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                    {openIndex === index && (
                      <div className={styles.answer}>
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
