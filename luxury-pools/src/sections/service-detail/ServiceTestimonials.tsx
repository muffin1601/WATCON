import styles from './ServiceTestimonials.module.css';
import { FadeIn } from '@/components/FadeIn';
import { Star } from 'lucide-react';

interface Testimonial {
    name: string;
    role: string;
    content: string;
    rating: number;
    avatar: string;
}

interface ServiceTestimonialsProps {
    subtitle: string;
    title: string;
    testimonials: Testimonial[];
}

export default function ServiceTestimonials({ subtitle, title, testimonials }: ServiceTestimonialsProps) {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <FadeIn delay={0.1}>
                    <p className={styles.subTitle}>{subtitle}</p>
                    <h2 className={styles.title}>{title}</h2>
                </FadeIn>

                <div className={styles.grid}>
                    {testimonials.map((testi, index) => (
                        <FadeIn key={index} delay={0.1 * index}>
                            <div className={styles.card}>
                                <div className={styles.ratingBox}>
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill={i < testi.rating ? "#bdb595" : "none"} stroke="#bdb595" />
                                    ))}
                                </div>
                                <p className={styles.content}>"{testi.content}"</p>
                                <div className={styles.userBox}>
                                    <div 
                                        className={styles.avatar} 
                                        style={testi.avatar.length > 3 ? { backgroundImage: `url(${testi.avatar})` } : {}}
                                    >
                                        {testi.avatar.length <= 3 && testi.avatar}
                                    </div>
                                    <div className={styles.userInfo}>
                                        <h4 className={styles.userName}>{testi.name}</h4>
                                        <p className={styles.userRole}>{testi.role}</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
