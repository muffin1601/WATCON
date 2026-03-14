"use client";

import Link from 'next/link';
import styles from './ServiceProjects.module.css';
import { FadeIn } from '@/components/FadeIn';
import { ArrowRight } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    image: string;
    badge?: string;
}

interface ServiceProjectsProps {
    subtitle: string;
    title: string;
    description?: string;
    projects: Project[];
    cta?: {
        label: string;
        href?: string;
    };
}

export default function ServiceProjects({ subtitle, title, description, projects, cta }: ServiceProjectsProps) {
    return (
        <section className={styles.section} id="projects">
            <div className={styles.container}>
                <div className={styles.header}>
                    <FadeIn delay={0.1} direction="up">
                        <p className={styles.subTitle}>{subtitle}</p>
                    </FadeIn>
                    <FadeIn delay={0.2} direction="up">
                        <h2 className={styles.title}>{title}</h2>
                    </FadeIn>
                    {description && (
                      <FadeIn delay={0.3} direction="up">
                        <p className={styles.description}>{description}</p>
                      </FadeIn>
                    )}
                </div>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <FadeIn key={index} delay={0.4 + index * 0.1} direction="up">
                            <div className={styles.card}>
                                {project.badge && (
                                    <div className={styles.badge}>{project.badge}</div>
                                )}
                                <div className={styles.imageWrapper}>
                                    <div
                                        className={styles.image}
                                        style={{ backgroundImage: `url("${project.image}")` }}
                                    />
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

