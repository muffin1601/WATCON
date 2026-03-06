"use client";

import styles from "./AboutPhilosophy.module.css";
import { FadeIn } from "@/components/FadeIn";

export default function AboutPhilosophy() {
  return (
    <section className={styles.philosophySection}>
      <div className={styles.container}>
        <FadeIn>
          <div className={styles.centerBlock}>
            <p className={styles.subTitle}>OUR VISION</p>
            <h2 className={styles.title}>
              Redefining <span>Outdoor Living</span>
            </h2>
          </div>
        </FadeIn>

        <div className={styles.contentBlocks}>
          <FadeIn delay={0.2}>
            <div className={styles.block}>
              <p>
                At Watcon International, we specialize in creating unparalleled luxury experiences 
                through our exquisite range of swimming pools, SPA, waterbodies, and outdoor furniture. 
                We combine innovative designs, premium materials, and meticulous craftsmanship to 
                transform your outdoor spaces into personal retreats of beauty and comfort. Founded 
                with a passion for excellence, we are committed to delivering bespoke solutions that 
                cater to your unique style and needs.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className={styles.block}>
              <p>
                Our journey is rooted in a belief that outdoor spaces should be an extension of your 
                lifestyle. That&apos;s why we collaborate with the world&apos;s leading designers, 
                architects, and craftsmen to bring your vision to life. Every piece we offer is a testament 
                to our dedication to quality, luxury, and innovation. We create timeless spaces 
                for relaxation, entertainment, and rejuvenation, enhancing the value and beauty of your home.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
