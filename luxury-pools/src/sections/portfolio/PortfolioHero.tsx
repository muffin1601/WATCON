"use client";

import styles from "./PortfolioHero.module.css";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";

export default function PortfolioHero() {
  return (
    <section className={styles.hero}>
      <Image src="/portfolio-hero.png" alt="Luxury Pool Portfolio" fill className={styles.bgImage} priority />
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <FadeIn delay={0.2}>
          <p className={styles.subTitle}>OUR PROJECTS</p>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <h1>
            A Showcase of <em>Excellence</em>
          </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className={styles.description}>
            Explore our curated portfolio of opulent swimming pools, spas, and bespoke outdoor transformations.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
