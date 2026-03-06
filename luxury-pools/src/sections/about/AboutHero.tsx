"use client";

import styles from "./AboutHero.module.css";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <Image src="/about-hero.png" alt="Luxury Outdoor Pool" fill className={styles.bgImage} priority />
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <FadeIn delay={0.2}>
          <p className={styles.subTitle}>ABOUT WATCON INTERNATIONAL</p>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <h1>
            5 Decades of <em>Excellence</em>
            <br />
            & <span>Innovation</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className={styles.description}>
            Transforming outdoor spaces into personal retreats of beauty and comfort across the globe.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
