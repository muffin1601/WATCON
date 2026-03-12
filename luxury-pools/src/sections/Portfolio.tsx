"use client";

import styles from "./Portfolio.module.css";
import { FadeIn } from "../components/FadeIn";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Shalini Passi Residence – Home Projects",
    image:
      "https://images.pexels.com/photos/3068519/pexels-photo-3068519.jpeg",
  },
  {
    id: 2,
    title: "Fire Installation – Vasant Vihar",
    image:
      "https://images.pexels.com/photos/1662549/pexels-photo-1662549.jpeg",
  },
  {
    id: 3,
    title: "Westin Rishikesh – Pool, Waterbody & Spa",
    image:
      "https://images.pexels.com/photos/14917453/pexels-photo-14917453.jpeg",
  },
  // {
  //   id: 4,
  //   title: "Vasant Kunj Bali – Infinity Pool & Outdoor Living",
  //   image:
  //     "https://images.pexels.com/photos/271815/pexels-photo-271815.jpeg",
  // },
  // {
  //   id: 5,
  //   title:
  //     "Radhe Mohan Drive Farm – Green Tile Pool & Outdoor Design",
  //   image:
  //     "https://images.pexels.com/photos/12715508/pexels-photo-12715508.jpeg",
  // },
  // {
  //   id: 6,
  //   title: "The Green Pool",
  //   image:
  //     "https://images.pexels.com/photos/9116592/pexels-photo-9116592.jpeg",
  // },
];

export default function Portfolio() {
  return (
    <section className={styles.portfolio}>
      <div className={styles.container}>
        <FadeIn delay={0.1}>
          <p className={styles.subTitle}>ABOUT OUR PROJECTS</p>

          <h2 className={styles.title}>
            Aquatic <span>Masterpieces</span>
          </h2>
        </FadeIn>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={0.15 * index}>
              <div className={styles.card}>
                <div
                  className={styles.image}
                  style={{ backgroundImage: `url("${project.image}")` }}
                />
                <div className={styles.content}>
                  <h3>{project.title}</h3>
                  <a href="#" className={styles.link}>
                    Learn More
                    <svg
                      className={styles.arrow}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13 6L19 12L13 18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <div className={styles.ctaWrapper}>
            <Link href="/portfolio" className={styles.ctaButton}>
              VIEW FULL PORTFOLIO
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}