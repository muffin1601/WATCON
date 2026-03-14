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
          <h1>
            Where Water <em>Meets</em>
            <br />
            <span>Luxury</span>
          </h1>
        </PerspectiveReveal>

        <FadeIn delay={0.6} distance={20}>
          <p>
            Discover an exquisite resort-style design seamlessly blending
            water and refined elegance.
          </p>
        </FadeIn>
      </ScrollParallax>
    </section>
  );
}
