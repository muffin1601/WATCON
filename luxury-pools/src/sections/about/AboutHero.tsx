"use client";

import styles from "./AboutHero.module.css";
import { FadeIn } from "@/components/FadeIn";
import { ScrollParallax } from "@/components/ScrollParallax";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <Image src="https://images.pexels.com/photos/7977003/pexels-photo-7977003.jpeg" alt="Ocean Landscape" fill className={styles.bgImage} priority />
      <div className={styles.overlay}></div>
      <ScrollParallax distance={40} className={styles.content}>
        <FadeIn delay={0.2}>
          <p className={styles.subTitle}>AQUATIC EXCELLENCE SINCE 2005</p>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <h1>
            About <span>Us</span>
          </h1>
        </FadeIn>
 
        <FadeIn delay={0.6}>
          <p className={styles.description}>
            We design, build, and maintain the world's most extraordinary aquatic environments — where natural elegance meets flawless<br></br>engineering.
          </p>
        </FadeIn>
 
        <FadeIn delay={0.8}>
          <div className={styles.buttonGroup}>
            {/* <div className={styles.scrollDown}>
              <span>SCROLL</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="#aaaaaa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div> */}
            {/* <div className={styles.navRow}>
              <a href="#story" className={styles.primaryBtn}>
                Discover Our Story <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#services" className={styles.secondaryBtn}>
                Our Services
              </a>
            </div> */}
          </div>
        </FadeIn>
      </ScrollParallax>
    </section>
  );
}
