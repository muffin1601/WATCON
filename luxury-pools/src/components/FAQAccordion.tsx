"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FadeIn } from "./FadeIn";
import styles from "@/app/faq/FAQ.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
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
  );
}
