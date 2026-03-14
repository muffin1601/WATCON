"use client";

import styles from './ServiceGrid.module.css';
import { FadeIn } from '@/components/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/StaggerContainer';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { ScrollParallax } from '@/components/ScrollParallax';
import Link from 'next/link';

interface ServiceItem {
    title: string;
    description: string;
    icon: LucideIcon;
    href: string;
}

interface ServiceGridProps {
    subtitle: string;
    title: string;
    services: ServiceItem[];
}

export default function ServiceGrid({ subtitle, title, services }: ServiceGridProps) {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <ScrollParallax distance={30}>
                    <div className={styles.header}>
                        <FadeIn delay={0.1}>
                            <p className={styles.subTitle}>{subtitle}</p>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <h2 className={styles.title}>
                                {title.split(' ').filter(word => word.toLowerCase() !== 'bespoke').join(' ')}
                            </h2>
                        </FadeIn>
                    </div>
                </ScrollParallax>

                <StaggerContainer className={styles.grid} delay={0.3}>
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <StaggerItem key={index}>
                                <ScrollParallax distance={20 + index * 10} direction={index % 2 === 0 ? "up" : "down"}>
                                    <div className={styles.card}>
                                        <div className={styles.iconWrapper}>
                                            <Icon size={32} strokeWidth={1.5} className={styles.icon} />
                                        </div>
                                        <h3 className={styles.itemTitle}>{service.title}</h3>
                                        <p className={styles.itemDesc}>{service.description}</p>
                                    </div>
                                </ScrollParallax>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>
            </div>
        </section>
    );
}

