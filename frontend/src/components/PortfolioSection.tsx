'use client';

import styles from './Portfolio.module.css';
import PortfolioRow from './PortfolioRow';
import { Project } from './types';

const projects: Project[] = [
  { id: 1, title: 'Shalini Passi Residence – Home Projects', image: 'https://images.pexels.com/photos/3068519/pexels-photo-3068519.jpeg' },
  { id: 2, title: 'Fire Installation – Vasant Vihar', image: 'https://images.pexels.com/photos/1662549/pexels-photo-1662549.jpeg' },
  { id: 3, title: 'Westin Rishikesh – Pool, Waterbody & Spa', image: 'https://images.pexels.com/photos/14917453/pexels-photo-14917453.jpeg' },
  { id: 4, title: 'Vasant Kunj Bali – Infinity Pool & Outdoor Living', image: 'https://images.pexels.com/photos/271815/pexels-photo-271815.jpeg' },
  { id: 5, title: 'Radhe Mohan Drive Farm – Green Tile Pool & Outdoor Design', image: 'https://images.pexels.com/photos/12715508/pexels-photo-12715508.jpeg' },
  { id: 6, title: 'The Green Pool', image: 'https://images.pexels.com/photos/9116592/pexels-photo-9116592.jpeg' }
];

export default function PortfolioSection() {
  return (
    <section className={styles.portfolio}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h2>Design Made Real Showcasing</h2>
          <h3>Latest Projects</h3>
        </div>

        <div className={styles.headerRight}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor ratione
            impedit eque excepturi expedita, non repellendus doloremque doloribus
            esse ullam ea reiciendis voluptatum nam facilis modi.
          </p>
        </div>
      </div>
      <div className={styles.grid}>
        <PortfolioRow projects={projects.slice(0, 3)} />
        <PortfolioRow projects={projects.slice(3, 6)} />
      </div>
      <div className={styles.cta}>
  <div className={styles.ctaInner}>
    <div className={styles.ctaText}>
      <h3>
        Ready To Start New Project With <span>Watcon</span>?
      </h3>
      <p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </p>
    </div>

    <a href="/contact" className={styles.ctabtn}>
      Contact Us
    </a>
  </div>
</div>
    </section>
  );
}
