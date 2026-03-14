"use client";

import styles from './ServiceHero.module.css';
import { FadeIn } from '@/components/FadeIn';
import { PerspectiveReveal } from '@/components/PerspectiveReveal';
import { StaggerContainer, StaggerItem } from '@/components/StaggerContainer';
import { ScrollParallax } from '@/components/ScrollParallax';
import { ArrowRight } from 'lucide-react';

interface Stat {
    label: string;
    value: string;
}

interface Action {
    label: string;
    href: string;
    primary?: boolean;
}

interface ServiceHeroProps {
    subtitle: string;
    title: string;
    description: string;
    image?: string;
    stats?: Stat[];
    actions?: Action[];
}

export default function ServiceHero({
    subtitle,
    title,
    description,
    image,
    stats = [],
    actions = []
}: ServiceHeroProps) {
    const highlightWords = [
        'swimming', 'pool', 'luxury',  'excellence', 'bespoke',
        'masterpiece', 'sanctuary', 'athletic', 'lifestyle', 'wellness',
        'spa', 'jacuzzi', 'sauna', 'steam', 'cryotherapy', 'recovery',
        'fire', 'water', 'artistry', 'mosaic', 'ecosystem', 'performance',
        'alfresco', 'finish', 'mastery', 'crafted', 'fountain', 'tiling'
    ];

    return (
        <section
            className={styles.hero}
            style={{ backgroundImage: image ? `url("${image}")` : 'none' }}
        >
            <div className={styles.overlay}></div>
            <ScrollParallax distance={40} className={styles.container}>
                <PerspectiveReveal delay={0.1}>
                    <p className={styles.subTitle}>{subtitle}</p>
                    <h1 className={styles.title}>
                        {title.split(' ').filter(word => word.toLowerCase() !== 'bespoke').map((word, i) => {
                            const isHighlight = highlightWords.some(h => word.toLowerCase().includes(h));
                            if (word.includes('<br')) {
                                return <br key={i} />;
                            }
                            return isHighlight ? <span key={i}>{word} </span> : word + ' ';
                        })}
                    </h1>
                </PerspectiveReveal>
                
                <FadeIn delay={0.6} distance={20}>
                    <p className={styles.description}>{description}</p>
                </FadeIn>

                {(actions.length > 0 || stats.length > 0) && (
                    <div className={styles.heroFooter}>
                        {actions.length > 0 && (
                            <FadeIn delay={0.8} distance={10}>
                                <div className={styles.actions}>
                                    {actions.map((action, i) => (
                                        <a
                                            key={i}
                                            href={action.href}
                                            className={action.primary ? styles.primaryBtn : styles.secondaryBtn}
                                        >
                                            {action.label} <ArrowRight size={18} className="ml-2" />
                                        </a>
                                    ))}
                                </div>
                            </FadeIn>
                        )}

                        {stats.length > 0 && (
                            <StaggerContainer className={styles.stats} delay={1}>
                                {stats.map((stat, i) => (
                                    <StaggerItem key={i} direction="none">
                                        <div className={styles.statItem}>
                                          <FadeIn delay={0} direction="up" distance={20} duration={1}>
                                            <p className={styles.statValue}>{stat.value}</p>
                                            <p className={styles.statLabel}>{stat.label}</p>
                                          </FadeIn>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        )}
                    </div>
                )}
            </ScrollParallax>

            <div className={styles.waveSeparator}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
                </svg>
            </div>
        </section >
    );
}

