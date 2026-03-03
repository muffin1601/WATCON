"use client";

import styles from "./Services.module.css";
import { Waves, Bath, Flame } from "lucide-react";

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
        <p className={styles.subTitle}>LUXURY AQUATIC DESIGN</p>

        <h2 className={styles.title}>
          Services We Offer <span>Worldwide</span>
        </h2>

        <p className={styles.description}>
          Discover unparalleled luxury across swimming pools, spas, wellness
          facilities, and outdoor environments.
        </p>

        <div className={styles.grid}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className={styles.card}>
                <Icon size={34} className={styles.icon} />
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}