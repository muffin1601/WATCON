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
        title: "Years Experience",
        description: "Trusted by thousands of homeowners and businesses across the region.",
        icon: Award,
        value: "20+"
    },
    {
        title: "Licensed & Insured",
        description: "Fully certified professionals with comprehensive insurance coverage.",
        icon: ShieldCheck,
        value: "100%"
    },
    {
        title: "Warranty",
        description: "All installations backed by our industry-leading 5-year workmanship warranty.",
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
