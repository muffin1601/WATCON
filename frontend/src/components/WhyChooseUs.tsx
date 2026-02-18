"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Building2,
  Lightbulb,
  FileText,
  Image as ImageIcon,
} from "lucide-react";
import styles from "./WhyChooseUs.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    barsRef.current.forEach((bar) => {
      const value = bar.dataset.value;

      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: `${value}%`,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className={styles.why}>
      <div className={styles.inner}>
        <div className={styles.left}>
             <span className={styles.bgText}>WHY US</span>
          <div className={styles.imageGrid}>
            <div className={styles.imageLeft}>
              <img
                src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"
                alt=""
              />
            </div>

            <div className={styles.imageRight}>
              <img
                src="https://images.pexels.com/photos/6263039/pexels-photo-6263039.jpeg"
                alt=""
              />
            </div>
            <div className={styles.progressBox}>
                <Progress
                  label="Idea & Concept"
                  value={90}
                  refEl={(el) => (barsRef.current[0] = el!)}
                />
                <Progress
                  label="Architecture"
                  value={94}
                  refEl={(el) => (barsRef.current[1] = el!)}
                />
                <Progress
                  label="Accuracy & Execution"
                  value={85}
                  refEl={(el) => (barsRef.current[2] = el!)}
                />
              </div>
          </div>
        </div>

        <div className={styles.right}>
           
          <span className={styles.eyebrow}>Why Choose Us</span>
          <h2>
            A Behind-The-Scenes Look At Our <span>Agency</span>
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>

          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur.
          </p>

          <div className={styles.features}>
            <Feature
              icon={<Building2 />}
              title="Fast Building"
              text="Lorem ipsum dolor sit amet, consectetur."
            />
            <Feature
              icon={<Lightbulb />}
              title="Smart Execute"
              text="Lorem ipsum dolor sit amet, consectetur."
            />
            <Feature
              icon={<FileText />}
              title="Fine Planned"
              text="Lorem ipsum dolor sit amet, consectetur."
            />
            <Feature
              icon={<ImageIcon />}
              title="Perfect Design"
              text="Lorem ipsum dolor sit amet, consectetur."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Progress({
  label,
  value,
  refEl,
}: {
  label: string;
  value: number;
  refEl: (el: HTMLDivElement | null) => void;
}) {
  return (
    <div className={styles.progress}>
      <div className={styles.progressHead}>
        <span>{label}</span>
        <span className={styles.percent}>{value}%</span>
      </div>
      <div className={styles.progressTrack}>
        <div
          ref={refEl}
          className={styles.progressBar}
          data-value={value}
        />
      </div>
    </div>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className={styles.feature}>
      <div className={styles.featureIcon}>{icon}</div>
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}
