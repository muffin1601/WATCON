"use client";

import styles from "./AboutPhilosophy.module.css";
import { FadeIn } from "@/components/FadeIn";
import { ScrollParallax } from "@/components/ScrollParallax";
import { Star, Settings, Leaf } from "lucide-react";

export default function AboutPhilosophy() {
  return (
    <section className={styles.philosophySection}>
      <div className={styles.container}>
        <FadeIn>
          <div className={styles.centerBlock}>
            <p className={styles.subTitle}>CORE VALUES</p>
            <h2 className={styles.title}>
              Built on Principles as Deep as the Ocean
            </h2>
          </div>
        </FadeIn>

        <div className={styles.contentBlocks}>
          <FadeIn delay={0.2}>
            <ScrollParallax distance={30} direction="up">
              <div className={styles.card}>
                <div className={styles.iconWrapper}>
                  <Star size={20} />
                </div>
                <h3>Excellence</h3>
                <p>
                  Every element from tile selection to pump installation is executed to exacting international standards.
                </p>
              </div>
            </ScrollParallax>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <ScrollParallax distance={50} direction="up">
              <div className={styles.card}>
                <div className={styles.iconWrapper}>
                  <Settings size={20} />
                </div>
                <h3>Innovation</h3>
                <p>
                  Deploying progressive technologies from infinity edge precision to smart app-controlled heating.
                </p>
              </div>
            </ScrollParallax>
          </FadeIn>

          <FadeIn delay={0.6}>
            <ScrollParallax distance={30} direction="up">
              <div className={styles.card}>
                <div className={styles.iconWrapper}>
                  <Leaf size={20} />
                </div>
                <h3>Sustainability</h3>
                <p>
                  Water-saving systems, low-energy pumps, and materials selected to stay beautiful while respecting our environment.
                </p>
              </div>
            </ScrollParallax>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
