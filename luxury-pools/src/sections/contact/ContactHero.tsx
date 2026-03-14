"use client";

import styles from "./ContactHero.module.css";
import { FadeIn } from "@/components/FadeIn";
import { ScrollParallax } from "@/components/ScrollParallax";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <Image src="/contact-hero.png" alt="Luxury Pool Contact" fill className={styles.bgImage} priority />
      <div className={styles.overlay}></div>
      <ScrollParallax distance={50} className={styles.content}>
        <FadeIn delay={0.2}>
          <p className={styles.subTitle}>GET IN TOUCH</p>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <h1>
            Let&apos;s <em>Create</em>
            <br />
            <span>Something Extraordinary</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className={styles.description}>
            Reach out to our experts to begin your bespoke outdoor sanctuary journey.
          </p>
        </FadeIn>
      </ScrollParallax>
    </section>
  );
}
