"use client";

import styles from "./FeatureSection.module.css";
import { FadeIn } from "../components/FadeIn";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { StaggerContainer, StaggerItem } from "../components/StaggerContainer";
import { ScrollParallax } from "../components/ScrollParallax";

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
                <StaggerContainer>
                    <StaggerItem>
                        <p className={styles.subTitle}>LAMINAR JETS</p>
                    </StaggerItem>

                    <StaggerItem>
                        <ScrollParallax distance={30} direction="up">
                            <h2 className={styles.title}>
                                Liquid <span>Elegance</span>
                            </h2>
                        </ScrollParallax>
                    </StaggerItem>

                    <StaggerItem>
                        <p className={styles.description}>
                            Experience the mesmerizing beauty of laminar water jets. Adding a touch of elegance and visual fascination,
                            our precision-engineered water arcs create a flawless, glass-like stream that transforms your pool into
                            a captivating masterpiece day and night.
                        </p>
                    </StaggerItem>
                </StaggerContainer>
            </div>
            
            <div className={styles.imageWrapper}>
                <div className={styles.decorativeLine} />
                <ScrollParallax distance={60} direction="down">
                    <motion.div
                        className={styles.videoContainer}
                        style={{ scale: imageScale }}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
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
                </ScrollParallax>
            </div>
        </section>
    );
}

