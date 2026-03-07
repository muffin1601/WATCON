"use client";

import styles from "./Hero.module.css";
import { FadeIn } from "../components/FadeIn";
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

      <div className={styles.content}>
        <FadeIn delay={0.2}>
          <h1>
            Where Water <em>Meets</em>
            <br />
            <span>Luxury</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p>
            Discover an exquisite resort-style design seamlessly blending
            water and refined elegance.
          </p>
        </FadeIn>

        {/* <Link href="/about" className={styles.cta}>
          Discover Our Story
        </Link> */}
      </div>
    </section>
  );
}