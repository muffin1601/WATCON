"use client";

import styles from "./AboutImages.module.css";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";

export default function AboutImages() {
  return (
    <section className={styles.imageSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <FadeIn delay={0.2} className={styles.fadeWrapper}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/about-story.png" 
                alt="Luxury Pool Architecture" 
                fill 
                className={styles.image} 
              />
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4} className={styles.fadeWrapper}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/about-philosophy.png" 
                alt="Outdoor Living Philosophy" 
                fill 
                className={styles.image} 
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
