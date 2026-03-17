"use client";

import styles from "./PortfolioHero.module.css";
import { FadeIn } from "@/components/FadeIn";
import { PerspectiveReveal } from "@/components/PerspectiveReveal";
import { ScrollParallax } from "@/components/ScrollParallax";
import Image from "next/image";

export default function PortfolioHero() {
  return (
    <section className={styles.hero}>
      <Image src="/oberai.png" alt="Luxury Pool Portfolio" fill className={styles.bgImage} priority />

      <div className={styles.overlay}></div>
      <ScrollParallax distance={40} className={styles.content}>
        <FadeIn delay={0.2}>
          <p className={styles.subTitle}>OUR PROJECTS</p>
        </FadeIn>
        
        <PerspectiveReveal delay={0.4}>
          <h1>
            A Showcase of <em>Excellence</em>
          </h1>
        </PerspectiveReveal>

        <FadeIn delay={0.8} distance={20}>
          <p className={styles.description}>
            Explore our curated portfolio of opulent swimming pools, spas, and bespoke outdoor transformations.
          </p>
        </FadeIn>
      </ScrollParallax>
    </section>
  );
}

