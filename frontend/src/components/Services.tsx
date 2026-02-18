"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Waves,
  Bath,
  Flame
} from "lucide-react";
import styles from "./Services.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className={styles.services}>
      <div className={styles.headerRow}>
        <div
          className={styles.headerBg}
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/6467627/pexels-photo-6467627.jpeg)",
          }}
        >
          <div className={styles.overlay} />
          <div className={styles.headerText}>
            <h2>
              Solutions For Every <span>Corner</span>
            </h2>
            <p>
              Premium water, wellness, and outdoor lifestyle solutions crafted
              with precision and luxury.
            </p>
          </div>
        </div>

        <div className={styles.headerAction}>
          <a href="#" className={styles.cta}>
            View All Services
          </a>
        </div>
      </div>

      <div className={styles.cardsWrapper}>
        <div className={styles.cards}>
          {services.map((service, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className={styles.card}
            >
              <div className={styles.icon}>
                <service.icon size={38} strokeWidth={1.6} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href="#" className={styles.cta1}>Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
