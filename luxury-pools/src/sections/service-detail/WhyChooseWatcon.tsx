"use client";

import styles from "./WhyChooseWatcon.module.css";
import { FadeIn } from "../../components/FadeIn";
import { StaggerContainer, StaggerItem } from "../../components/StaggerContainer";
import { ScrollParallax } from "../../components/ScrollParallax";
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
        value: "50+"
    },
    {
        title: "Licensed & Insured",
        description: "Fully certified professionals with comprehensive insurance coverage.",
        icon: ShieldCheck,
        value: "100%"
    },
    {
        title: "Warranty",
        description: "All installations backed by our industry-leading 1-year workmanship warranty.",
        icon: Timer,
        value: "1-Year"
    }
];

export default function WhyChooseWatcon() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <ScrollParallax distance={30}>
                    <div className={styles.header}>
                        <FadeIn delay={0.1}>
                            <p className={styles.subTitle}>OUR STRENGTHS</p>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <h2 className={styles.title}>
                                Why Choose <span>Watcon?</span>
                            </h2>
                        </FadeIn>
                    </div>
                </ScrollParallax>

                <StaggerContainer className={styles.grid} delay={0.3}>
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <StaggerItem key={index}>
                                <ScrollParallax distance={20 + index * 10} direction={index % 2 === 0 ? "up" : "down"}>
                                    <div className={styles.card}>
                                        <div className={styles.iconWrapper}>
                                            <Icon size={20} />
                                        </div>
                                        <h3 className={styles.value}>{feature.value}</h3>
                                        <h4 className={styles.itemTitle}>{feature.title}</h4>
                                        <p className={styles.description}>{feature.description}</p>
                                    </div>
                                </ScrollParallax>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>
            </div>

            <FadeIn delay={0.8} direction="none" duration={2}>
              <div className={styles.bgText} style={{ userSelect: 'none' }}>WATCON</div>
            </FadeIn>
        </section>
    );
}

