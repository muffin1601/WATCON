"use client";

import Link from 'next/link';
import styles from './ServiceNavigation.module.css';
import { FadeIn } from '@/components/FadeIn';
import { ArrowRight, Waves, Droplets, Flame, Bath, Sofa, Thermometer, Wind, Layers, Cloud } from 'lucide-react';
import LucideIcon from '@/components/LucideIcon';

const serviceCategories = [
    {
        title: "Pools & Performance",
        services: [
            { name: "Swimming Pools", href: "/services/swimming-pools/", icon: "Waves" },
            { name: "Competition Pools", href: "/services/competition-pool/", icon: "Timer" },
            { name: "Water Bodies", href: "/services/water-bodies/", icon: "Droplets" },
        ]
    },
    {
        title: "Wellness & Spa",
        services: [
            { name: "Luxury Spas", href: "/services/spa/", icon: "Heart" },
            { name: "Sauna Rooms", href: "/services/sauna/", icon: "Thermometer" },
            { name: "Steam Rooms", href: "/services/steam/", icon: "Cloud" },
            { name: "Jacuzzis", href: "/services/jacuzzi/", icon: "Bath" },
            { name: "Cryo Rooms", href: "/services/cryo-room/", icon: "Zap" },
        ]
    },
    {
        title: "Finishing & Furniture",
        services: [
            { name: "Pool Tiling", href: "/services/tiles-in-pool/", icon: "Layers" },
            { name: "Koi Ponds", href: "/services/koi-ponds/", icon: "Fish" },
            { name: "Outdoor Fireplaces", href: "/services/outdoor-fireplaces/", icon: "Flame" },
            { name: "Outdoor Furniture", href: "/services/outdoor-furniture/", icon: "Sofa" },
            { name: "Dehumidifiers", href: "/services/dehumidifier/", icon: "Wind" },
        ]
    }
];

export default function ServiceNavigation() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <FadeIn>
                        <p className={styles.subTitle}>EXPLORE SOLUTIONS</p>
                        <h2 className={styles.title}>Continue Your <span>Wellness Journey</span></h2>
                    </FadeIn>
                </div>

                <div className={styles.grid}>
                    {serviceCategories.map((category, idx) => (
                        <div key={idx} className={styles.category}>
                            <FadeIn delay={0.1 * idx}>
                                <h3 className={styles.categoryTitle}>{category.title}</h3>
                                <ul className={styles.serviceList}>
                                    {category.services.map((service, sIdx) => (
                                        <li key={sIdx}>
                                            <Link href={service.href} className={styles.serviceLink}>
                                                <LucideIcon name={service.icon} size={20} className={styles.icon} />
                                                <span>{service.name}</span>
                                                <ArrowRight size={14} className={styles.arrow} />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </FadeIn>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
