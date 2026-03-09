import styles from './ServiceHero.module.css';
import { FadeIn } from '@/components/FadeIn';

interface ServiceHeroProps {
    subtitle: string;
    title: string;
    description: string;
    image?: string;
}

export default function ServiceHero({ subtitle, title, description, image }: ServiceHeroProps) {
    return (
        <section
            className={styles.hero}
            style={{ backgroundImage: image ? `url(${image})` : 'none' }}
        >
            <div className={styles.overlay}></div>
            <div className={styles.container} style={{ position: 'relative', zIndex: 2 }}>
                <FadeIn delay={0.1}>
                    <p className={styles.subTitle}>{subtitle}</p>
                    <h1 className={styles.title}>
                        {title.split(' ').map((word, i) => (
                            word.toLowerCase() === 'swimming' || word.toLowerCase() === 'pool' || word.toLowerCase() === 'luxury' || word.toLowerCase() === 'dream' ?
                                <span key={i}>{word} </span> : word + ' '
                        ))}
                    </h1>
                    <p className={styles.description}>{description}</p>
                </FadeIn>
            </div>
            <div className={styles.waveSeparator}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
                </svg>
            </div>
        </section >
    );
}
