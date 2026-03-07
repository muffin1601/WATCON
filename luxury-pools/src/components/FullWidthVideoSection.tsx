"use client";

import styles from "./FullWidthVideoSection.module.css";

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
        </section>
    );
}
