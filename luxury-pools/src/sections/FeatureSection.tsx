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

    // Subtly scale the image down as user scrolls past it for parallax depth effect
    const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

    return (
        <section className={styles.section} ref={containerRef}>
            <div className={styles.contentContainer}>
                <FadeIn delay={0.1}>
                    <p className={styles.subTitle}>Visionary Execution</p>

                    <h2 className={styles.title}>
                        Sculpting with <span>Water & Light</span>
                    </h2>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <p className={styles.description}>
                        We believe that a truly luxurious outdoor environment transcends basic functionality.
                        It is an immersive sensory experience—where architectural brilliance meets the therapeutic purity
                        of water. From invisible-edge borders to deeply resonant materials, we pour our passion into every conceptual nuance, curating spaces that act as a personal sanctuary.
                    </p>
                </FadeIn>
            </div>

            <div className={styles.imageWrapper}>
                <div className={styles.decorativeLine} />
                <motion.img
                    src="https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg"
                    alt="Luxury architectural pool at night"
                    className={styles.image}
                    style={{ scale: imageScale }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                />
            </div>
        </section>
    );
}
