"use client";

import styles from "./AboutStory.module.css";
import { FadeIn } from "@/components/FadeIn";
import { ScrollParallax } from "@/components/ScrollParallax";


export default function AboutStory() {
  return (
    <section className={styles.storySection} id="story">
      <div className={styles.container}>
        <div className={styles.grid}>
          <ScrollParallax distance={40} direction="up" className={styles.left}>
            <FadeIn>
              <p className={styles.subTitle}>ABOUT WATCON INTERNATIONAL</p>
              <h2 className={styles.title}>
                India's Specialist in Aquatic<br/>
                <span>Engineering & Design</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className={styles.text}>
                Watcon International is one of India’s leading specialists in swimming pool engineering, hydrotherapy systems, water bodies, musical fountains and wellness water architecture.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className={styles.text}>
                With projects across luxury residences, five-star hotels, wellness retreats and high-end resorts, Watcon International has established itself as a premium swimming pool and waterbody builder in India. Our expertise includes:
              </p>
              <ul className={styles.expertiseList}>
                <li>Luxury swimming pool construction</li>
                <li>Resort pools and water landscapes</li>
                <li>Hydrotherapy pools and rehabilitation pools</li>
                <li>Cold plunge pools and cryotherapy rooms</li>
                <li>Salt therapy rooms and wellness spa facilities</li>
                <li>Musical fountains and architectural fountains</li>
                <li>Underwater exercise pools and aqua therapy systems</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className={styles.statsRow}>
                <div className={styles.statItem}>
                  <h3>2500+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className={styles.statItem}>
                  <h3>50+ Years</h3>
                  <p>Legacy of Authority</p>
                </div>
              </div>
            </FadeIn>
          </ScrollParallax>
          
          <ScrollParallax distance={40} direction="down" className={styles.right}>
            <FadeIn delay={0.4}>
              <div className={styles.imageCard}>
                <div className={styles.imageWrapper}>
                  <video autoPlay loop muted playsInline className={styles.video}>
                    <source src="/about.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className={styles.imageBadge}>
                  <h4>Signature Series</h4>
                  <p>Infinity Pool Collection</p>
                </div>
              </div>
            </FadeIn>
          </ScrollParallax>
        </div>
      </div>
    </section>
  );
}
