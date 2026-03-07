"use client";

import styles from "./LaminarSection.module.css";
import { FadeIn } from "./FadeIn";

export default function LaminarSection() {
    return (
        <section className={styles.section}>
            <video
                className={styles.videoBg}
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/laminar.MP4" type="video/mp4" />
            </video>
            <div className={styles.overlay} />

            <div className={styles.container}>
                <FadeIn delay={0.2} className={styles.content}>
                    <p className={styles.subTitle}>LAMINAR JETS</p>

                    <h2 className={styles.title}>
                        Liquid <span>Elegance</span>
                    </h2>

                    <p className={styles.description}>
                        Experience the mesmerizing beauty of laminar water jets. Adding a touch of elegance and visual fascination, our precision-engineered water arcs create a flawless, glass-like stream that transforms your pool into a captivating masterpiece day and night.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}
