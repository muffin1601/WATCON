"use client";

import styles from "./OutdoorLightingSection.module.css";

export default function OutdoorLightingSection() {
  return (
    <section className={styles.section}>
      {/* Background Image */}
      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.subTitle}>OUTDOOR LIGHTING</p>

          <h2 className={styles.title}>
            Illuminate the <span>Night</span>
          </h2>

          <p className={styles.description}>
            Our sophisticated lighting designs transform your outdoor
            spaces after dark, creating a seamless blend of architecture,
            ambiance, and performance for elevated evening living.
          </p>

          <a href="#" className={styles.buttonBase}>
            LEARN MORE
          </a>
        </div>
      </div>
    </section>
  );
}