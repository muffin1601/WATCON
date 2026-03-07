"use client";

import styles from "./Services.module.css";
import { Waves, Bath, Flame } from "lucide-react";
import { FadeIn } from "../components/FadeIn";

const services = [
  {
    title: "Swimming Pools & Water Bodies",
    desc:
      "Custom swimming pools, competition pools, koi ponds, tiles, and engineered water bodies designed for beauty and performance.",
    icon: Waves,
  },
  {
    title: "Spa, Jacuzzi & Wellness",
    desc:
      "Luxury spa solutions including jacuzzis, saunas, steam rooms, cryo rooms, and advanced dehumidification systems.",
    icon: Bath,
  },
  {
    title: "Outdoor Living Solutions",
    desc:
      "Premium outdoor furniture, fire pits, fireplaces, and lifestyle elements that elevate open-air living spaces.",
    icon: Flame,
  },
];

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.bgDecoration}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>

        <FadeIn>
          <p className={styles.subTitle}>WHAT WE CREATE</p>
        </FadeIn>

        <h2 className={styles.title}>
          Three Realms of <span>Excellence</span>
        </h2>

        <p className={styles.description}>
          Each project is a dialogue between your vision and our craft — resulting in spaces
          that become your most prized possession.
        </p>

        <div className={styles.grid}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={index} delay={0.15 * index}>
                <div className={styles.card}>
                  <div className={styles.iconWrapper}>
                    <Icon size={34} className={styles.icon} />
                  </div>
                  <div className={styles.cardContent}>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}