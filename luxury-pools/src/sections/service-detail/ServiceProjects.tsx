import styles from './ServiceProjects.module.css';
import { FadeIn } from '@/components/FadeIn';

interface Project {
    title: string;
    description: string;
    image: string;
}

interface ServiceProjectsProps {
    subtitle: string;
    title: string;
    projects: Project[];
}

export default function ServiceProjects({ subtitle, title, projects }: ServiceProjectsProps) {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <FadeIn>
                    <p className={styles.subTitle}>{subtitle}</p>
                    <h2 className={styles.title}>{title}</h2>
                </FadeIn>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <FadeIn key={index} delay={0.1 * index}>
                            <div className={styles.card}>
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
            </div>
        </section>
    );
}
