"use client";

import styles from "./FullWidthVideoSection.module.css";
import { FadeIn } from "./FadeIn";
import { ScrollParallax } from "./ScrollParallax";

export default function FullWidthVideoSection() {
    return (
        <section className={styles.section}>
            <video
                className={styles.video}
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/home.mp4" type="video/mp4" />
            </video>

            <div className={styles.overlay} />

            <ScrollParallax distance={50} className={styles.content}>
                <FadeIn delay={0.2}>
                    <p className={styles.subTitle}>Experience Luxury</p>
                    <h2 className={styles.title}>Dive into Elegance</h2>
                    <p className={styles.description}>
                        Transforming bold visions into breathtaking realities. Let the soothing rhythm of water elevate your senses.
                    </p>
                </FadeIn>
            </ScrollParallax>
        </section>
    );
}
