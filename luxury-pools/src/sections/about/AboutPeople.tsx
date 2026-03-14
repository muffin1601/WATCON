"use client";

import styles from "./AboutPeople.module.css";
import { FadeIn } from "@/components/FadeIn";
import { ScrollParallax } from "@/components/ScrollParallax";

export default function AboutPeople() {
  const people = [
    {
      initials: "MO",
      name: "Mira Okafor",
      role: "Chief Executive Officer",
      desc: "Two decades shaping world-class aquatic destinations across four continents."
    },
    {
      initials: "RT",
      name: "Riku Tanaka",
      role: "Head of Aquatic Design",
      desc: "Award-winning designer whose infinity pools redefine the boundary between architecture and water."
    },
    {
      initials: "SV",
      name: "Selene Voss",
      role: "Director of Sustainability",
      desc: "Pioneer in eco-conscious water systems, ensuring every project nurtures rather than depletes."
    }
  ];

  return (
    <section className={styles.peopleSection}>
      <div className={styles.container}>
        <FadeIn>
          <div className={styles.centerBlock}>
            <p className={styles.subTitle}>THE PEOPLE</p>
            <h2 className={styles.title}>Meet the Visionaries</h2>
            <p className={styles.description}>
              A united team of aquatic engineers, designers, and sustainability experts who share one obsession: water done beautifully.
            </p>
          </div>
        </FadeIn>

        <div className={styles.grid}>
          {people.map((person, index) => (
            <FadeIn delay={0.2 * (index + 1)} key={index}>
              <ScrollParallax distance={20 + index * 10} direction={index % 2 === 0 ? "up" : "down"}>
                <div className={styles.card}>
                  <div className={styles.avatar}>{person.initials}</div>
                  <h3 className={styles.name}>{person.name}</h3>
                  <p className={styles.role}>{person.role}</p>
                  <p className={styles.desc}>{person.desc}</p>
                </div>
              </ScrollParallax>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
