"use client";

import styles from "./FeatureSection.module.css";
import { FadeIn } from "../components/FadeIn";
import { easeOut, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FeatureSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });


    const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

    return (
        <section className={styles.section} ref={containerRef}>
            

            <div className={styles.contentContainer}>
                <FadeIn delay={0.1}>
                    <p className={styles.subTitle}>LAMINAR JETS</p>

                    <h2 className={styles.title}>
                        Liquid <span>Elegance</span>
                    </h2>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <p className={styles.description}>
                        Experience the mesmerizing beauty of laminar water jets. Adding a touch of elegance and visual fascination,
                        our precision-engineered water arcs create a flawless, glass-like stream that transforms your pool into
                        a captivating masterpiece day and night.
                    </p>
                </FadeIn>
            </div>
            <div className={styles.imageWrapper}>
                <div className={styles.decorativeLine} />
                <motion.div
                    className={styles.videoContainer}
                    style={{ scale: imageScale }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                    <video
                        className={styles.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/laminar.MP4" type="video/mp4" />
                    </video>
                </motion.div>
            </div>
        </section>
    );
}
