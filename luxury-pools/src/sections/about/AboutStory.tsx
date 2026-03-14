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
              <p className={styles.subTitle}>OUR MISSION</p>
              <h2 className={styles.title}>
                Where Water Meets<br/>
                <span>Vision</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className={styles.text}>
                Born on the edge of the ocean, Watcon was founded with a singular 
                conviction: every body of water is an opportunity for wonder. From 
                rooftop infinity pools overlooking cityscapes to private island lagoons, we 
                translate the boundless power of the sea into intimate, unforgettable 
                spaces.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className={styles.text}>
                Our methodology is born from luxury resort wellness, and underpins our 
                every endeavor—from testing new filtration and monitoring technologies to 
                applying state-of-the-art sensory technologies that redefine deep relaxation.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className={styles.statsRow}>
                <div className={styles.statItem}>
                  <h3>2500+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className={styles.statItem}>
                  <h3>13+</h3>
                  <p>Bespoke Services</p>
                </div>
                <div className={styles.statItem}>
                  <h3>50+ yr</h3>
                  <p>Of Excellence</p>
                </div>
              </div>
            </FadeIn>
          </ScrollParallax>
          
          <ScrollParallax distance={40} direction="down" className={styles.right}>
            <FadeIn delay={0.4}>
              <div className={styles.imageCard}>
                <div className={styles.imageWrapper}>
                  <video autoPlay loop muted playsInline className={styles.video}>
                    <source src="/home.mp4" type="video/mp4" />
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
