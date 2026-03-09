"use client";

import styles from "./WhyChooseWatcon.module.css";
import { FadeIn } from "../../components/FadeIn";
import { LucideIcon, Award, ShieldCheck, Timer } from "lucide-react";

interface Feature {
    title: string;
    description: string;
    icon: LucideIcon;
    value: string;
}

const features: Feature[] = [
    {
        title: "EXPERIENCE",
        description: "Decades of engineering mastery in building high-end pools and sophisticated water features with precision.",
        icon: Award,
        value: "20+"
    },
    {
        title: "ASSURANCE",
        description: "Every phase of our construction is fully certified and insured for your complete peace of mind.",
        icon: ShieldCheck,
        value: "100%"
    },
    {
        title: "COMMITMENT",
        description: "We provide an industry-leading warranty on our meticulous craftsmanship and premium materials.",
        icon: Timer,
        value: "5-Year"
    }
];

export default function WhyChooseWatcon() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <FadeIn delay={0.1}>
                        <p className={styles.subTitle}>OUR STRENGTHS</p>
                        <h2 className={styles.title}>
                            Why Choose <span>Watcon?</span>
                        </h2>
                    </FadeIn>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <FadeIn key={index} delay={0.2 * index}>
                                <div className={styles.card}>
                                    <div className={styles.iconWrapper}>
                                        <Icon size={20} />
                                    </div>
                                    <h3 className={styles.value}>{feature.value}</h3>
                                    <h4 className={styles.itemTitle}>{feature.title}</h4>
                                    <p className={styles.description}>{feature.description}</p>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>

            <div className={styles.bgText} style={{ userSelect: 'none' }}>WATCON</div>
        </section>
    );
}
