"use client";

import styles from "./PortfolioGrid.module.css";
import { FadeIn } from "@/components/FadeIn";

const projects = [
  {
    title: "Shalini Passi Home Projects",
    desc: "A stunning residential masterpiece reflecting elegance and luxury.",
    videoId: "dQw4w9WgXcQ", 
  },
  {
    title: "Fire Installation Project at Vasant Vihar",
    desc: "Mesmerizing outdoor fire feature elevating the luxury ambiance.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Westin Rishikesh",
    desc: "Project of swimming pool, plunge pool waterbody, and Spa at Westin Rishikesh.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Vasant Kunj Bali",
    desc: "Fire Place outdoor, Pool Video, outdoor sitting, outdoor lights, light blue tiles pool. Infinity edge.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Radhe Mohan Drive Farm",
    desc: "Green tile pool, SS water spout, Outdoor Furniture, Copper tiles, Outdoor lights, outdoor swings.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "The Green Pool",
    desc: "A perfect blend of nature and aquatic luxury.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Oberois Gurgaon",
    desc: "High-end commercial installation featuring opulent design and pristine execution.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Laminum",
    desc: "Exquisite architectural surfaces meeting seamless aquatic design.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Watcon Waterfall",
    desc: "A majestic flowing waterfall transforming the landscape.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Mood Lighting and Fireplace",
    desc: "In a pool by Watcon, merging the elemental forces of fire and water.",
    videoId: "dQw4w9WgXcQ",
  }
];

export default function PortfolioGrid() {
  return (
    <section className={styles.showcaseSection}>
      <div className={styles.container}>
        {projects.map((project, index) => (
          <div key={index} className={`${styles.item} ${index % 2 !== 0 ? styles.itemReverse : ''}`}>
            
            <div className={styles.videoBlock}>
              <FadeIn delay={0.2}>
                <div className={styles.videoWrapper}>
                  <div className={styles.videoInner}>
                    <iframe 
                      className={styles.iframe}
                      src={`https://www.youtube.com/embed/${project.videoId}?rel=0&modestbranding=1`} 
                      title={project.title}
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <div className={styles.textBlock}>
              <FadeIn delay={0.4}>
                <span className={styles.projectNumber}>{String(index + 1).padStart(2, '0')}</span>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.desc}</p>
                <div className={styles.line}></div>
              </FadeIn>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
