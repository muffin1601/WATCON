"use client";

import styles from "./Hero.module.css";
import { FadeIn } from "../components/FadeIn";
import { PerspectiveReveal } from "../components/PerspectiveReveal";
import { ScrollParallax } from "../components/ScrollParallax";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/hero1.mp4" type="video/mp4" />
      </video>

      <div className={styles.overlay}></div>

      <ScrollParallax distance={40} className={styles.content}>
        <PerspectiveReveal delay={0.2}>
          <h1 className={styles.mainTitle}>
            India’s Leading <em>Swimming Pool</em>, Hydrotherapy & <br /> <span>Waterbody Engineering Company</span>
          </h1>
        </PerspectiveReveal>

        <FadeIn delay={0.6} distance={20}>
          <p className={styles.subheadline}>
            Luxury swimming pools, resort water bodies, hydrotherapy systems, musical fountains, cold plunge pools, and immersive wellness water experiences designed and built across India.
          </p>
          <div className={styles.ctaContainer}>
            <Link href="/services/swimming-pools" className={styles.primaryBtn}>
              Our Services
            </Link>
            <Link href="/portfolio" className={styles.secondaryBtn}>
              View Projects
            </Link>
          </div>

        </FadeIn>
      </ScrollParallax>
    </section>
  );
}

