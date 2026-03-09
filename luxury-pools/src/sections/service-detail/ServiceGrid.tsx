import styles from './ServiceGrid.module.css';
import { FadeIn } from '@/components/FadeIn';
import { LucideIcon } from 'lucide-react';
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
                <FadeIn delay={0.1}>
                    <p className={styles.subTitle}>{subtitle}</p>
                    <h2 className={styles.title}>{title}</h2>
                </FadeIn>

                <div className={styles.grid}>
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <FadeIn key={index} delay={0.1 * index}>
                                <div className={styles.card}>
                                    <div className={styles.iconWrapper}>
                                        <Icon size={32} strokeWidth={1.5} className={styles.icon} />
                                    </div>
                                    <h3 className={styles.itemTitle}>{service.title}</h3>
                                    <p className={styles.itemDesc}>{service.description}</p>
                                    {/* <Link href={service.href} className={styles.learnMore}>
                                        Learn More <span className={styles.arrow}>→</span>
                                    </Link> */}
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
