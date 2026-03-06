"use client";

import styles from "./AboutStory.module.css";
import { FadeIn } from "@/components/FadeIn";

export default function AboutStory() {
  return (
    <section className={styles.storySection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <FadeIn>
              <h2 className={styles.title}>
                Our <span>Story</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className={styles.text}>
                We are a 5-decade-old company, established in India with our headquarters 
                in Delhi. With extensive experience working in various countries like 
                Nepal, Bhutan, Dubai, Bangladesh, and beyond, we have built a reputation 
                for delivering uncompromising quality and sophisticated design.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className={styles.text}>
                We take immense pride in being the <strong>1st Indian company</strong> to be approved 
                by the American Embassy in India for American companies—a testament to 
                our rigorous standards and global trust.
              </p>
            </FadeIn>
          </div>
          
          <div className={styles.right}>
            <div className={styles.statsGrid}>
              <FadeIn delay={0.3}>
                <div className={styles.statCard}>
                  <h3>50+</h3>
                  <p>Years of Legacy</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className={styles.statCard}>
                  <h3>Global</h3>
                  <p>Presence across Asia & Middle East</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.5}>
                <div className={styles.statCard}>
                  <h3>1st</h3>
                  <p>Indian Co. Approved by US Embassy</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.6}>
                <div className={styles.statCard}>
                  <h3>100%</h3>
                  <p>Commitment to Excellence</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
