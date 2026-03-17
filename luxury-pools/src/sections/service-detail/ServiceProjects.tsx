"use client";

import Link from 'next/link';
import styles from './ServiceProjects.module.css';
import { FadeIn } from '@/components/FadeIn';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

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
                                    <Image
                                        src={project.image}
                                        alt={`${project.title} - Watcon International Project`}
                                        fill
                                        className={styles.image}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    {/* <div className={styles.projectContent}>
                                        <h3 className={styles.projectTitle}>{project.title}</h3>
                                        <p className={styles.projectDesc}>{project.description}</p>
                                    </div> */}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {cta && (
                  <div className={styles.ctaWrapper}>
                    <FadeIn delay={0.8}>
                      <Link href={cta.href || "/contact"} className={styles.ctaButton}>
                        {cta.label} <ArrowRight size={20} className="ml-2" />
                      </Link>

                    </FadeIn>
                  </div>
                )}
            </div>
        </section>
    );
}
