"use client";

import styles from "./ContentSection.module.css";
import { FadeIn } from "../components/FadeIn";
import { StaggerContainer, StaggerItem } from "../components/StaggerContainer";
import { ScrollParallax } from "../components/ScrollParallax";
import Image from "next/image";

type Expertise = {
    id: number;
    title: string;
    description: string;
    image: string;
};

const expertiseData: Expertise[] = [
    {
        id: 1,
        title: "Unparalleled Craftsmanship",
        description: "Decades of mastery in building intricate, high-end pools and water features with uncompromising precision and premium materials.",
        image: "/4.png",
    },
    {
        id: 2,
        title: "Innovative Engineering",
        description: "Integrating state-of-the-art filtration, climate control, and smart automation for a seamless and effortless luxury experience.",
        image: "/5.png",
    },
    {
        id: 3,
        title: "Bespoke Design",
        description: "Every aquatic space we create is a unique masterpiece, meticulously tailored to harmonize with its architectural surroundings.",
        image: "/7.png",
    },
];


export default function ContentSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <FadeIn delay={0.1}>
                    <p className={styles.subTitle}>WHY CHOOSE WATCON</p>
                </FadeIn>

                <ScrollParallax distance={40}>
                    <FadeIn delay={0.2}>
                        <h2 className={styles.title}>
                            Our <span>Expertise</span>
                        </h2>
                    </FadeIn>
                </ScrollParallax>

                <StaggerContainer className={styles.grid} delay={0.3}>
                    {expertiseData.map((item, index) => (
                        <StaggerItem key={item.id}>
                            <ScrollParallax distance={20 + (index * 20)} direction={index % 2 === 0 ? "up" : "down"}>
                                <div className={styles.card}>
                                    <div className={styles.imageContainer}>
                                        <Image
                                            src={item.image}
                                            alt={`${item.title} - Watcon International Expertise`}
                                            fill
                                            className={styles.image}
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                        <div className={styles.imageOverlay} />
                                    </div>
                                    <div className={styles.content}>
                                        <h3>{item.title}</h3>
                                        <p className={styles.description}>{item.description}</p>
                                    </div>
                                </div>
                            </ScrollParallax>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
