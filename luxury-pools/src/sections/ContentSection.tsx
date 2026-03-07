"use client";

import styles from "./ContentSection.module.css";
import { FadeIn } from "../components/FadeIn";

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
        image: "https://images.pexels.com/photos/3068519/pexels-photo-3068519.jpeg",
    },
    {
        id: 2,
        title: "Innovative Engineering",
        description: "Integrating state-of-the-art filtration, climate control, and smart automation for a seamless and effortless luxury experience.",
        image: "https://images.pexels.com/photos/1662549/pexels-photo-1662549.jpeg",
    },
    {
        id: 3,
        title: "Bespoke Design",
        description: "Every aquatic space we create is a unique masterpiece, meticulously tailored to harmonize with its architectural surroundings.",
        image: "https://images.pexels.com/photos/14917453/pexels-photo-14917453.jpeg",
    },
];

export default function ContentSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <FadeIn delay={0.1}>
                    <p className={styles.subTitle}>WHY CHOOSE WATCON</p>

                    <h2 className={styles.title}>
                        Our <span>Expertise</span>
                    </h2>
                </FadeIn>

                <div className={styles.grid}>
                    {expertiseData.map((item, index) => (
                        <FadeIn key={item.id} delay={0.15 * index}>
                            <div className={styles.card}>
                                <div className={styles.imageContainer}>
                                    <div
                                        className={styles.image}
                                        style={{ backgroundImage: `url(${item.image})` }}
                                    />
                                    <div className={styles.imageOverlay} />
                                </div>
                                <div className={styles.content}>
                                    <h3>{item.title}</h3>
                                    <p className={styles.description}>{item.description}</p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
