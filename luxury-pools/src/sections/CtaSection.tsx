"use client";

import styles from "./CtaSection.module.css";
import { FadeIn } from "../components/FadeIn";
import { ScrollParallax } from "../components/ScrollParallax";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        {/* Left Video */}
        <ScrollParallax distance={40} direction="up" className={styles.imageWrapper}>
          <FadeIn delay={0.2} direction="right" distance={50}>
            <div className={styles.videoContainer}>
              <iframe
                className={styles.iframe}
                src="https://www.youtube.com/embed/QsYfpaVFEeQ?autoplay=1&mute=1&loop=1&playlist=QsYfpaVFEeQ&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&vq=hd1080"
                width="1920"
                height="1080"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </FadeIn>
        </ScrollParallax>

        {/* Right Content */}
        <ScrollParallax distance={40} direction="down" className={styles.content}>
          <FadeIn delay={0.4} direction="left" distance={50}>
            <p className={styles.subTitle}>WATCON - ELEVATING OUTDOOR SPACES</p>
  
            <h2 className={styles.title}>
              High-End <span>Landscaping and Water Solutions</span>
            </h2>
  
            <p className={styles.text}>
              Watcon specializes in providing premium landscaping products and solutions, including swimming pools, water features, and spa/sauna/steam room installations. We cater to discerning clients seeking to transform their outdoor living spaces into stunning, functional retreats.
            </p>
          </FadeIn>
        </ScrollParallax>
      </div>
    </section>
  );
}