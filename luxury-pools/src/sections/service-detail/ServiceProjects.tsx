import Link from 'next/link';
import styles from './ServiceProjects.module.css';
import { FadeIn } from '@/components/FadeIn';

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
                <FadeIn>
                    <p className={styles.subTitle}>{subtitle}</p>
                    <h2 className={styles.title}>{title}</h2>
                    {description && <p className={styles.description}>{description}</p>}
                </FadeIn>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <FadeIn key={index} delay={0.1 * index}>
                            <div className={styles.card}>
                                {project.badge && (
                                    <div className={styles.badge}>{project.badge}</div>
                                )}
                                <div className={styles.imageWrapper}>
                                    <div
                                        className={styles.image}
                                        style={{ backgroundImage: `url(${project.image})` }}
                                    />
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {cta && (
                    <FadeIn delay={0.3}>
                        <div className={styles.ctaWrapper}>
                            <Link href={cta.href || "#contact"} className={styles.ctaButton}>
                                {cta.label}
                            </Link>
                        </div>
                    </FadeIn>
                )}
            </div>
        </section>
    );
}
