'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import styles from './Portfolio.module.css';
import PortfolioCard from './PortfolioCard';
import { Project } from './types';

interface Props {
  projects: Project[];
}

export default function PortfolioRow({ projects }: Props) {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const onEnter = (index: number) => {
    cardsRef.current.forEach((card, i) => {
      gsap.to(card, {
        flex: i === index ? 2.8 : 1,
        duration: 0.7,
        ease: 'power3.out'
      });
    });
  };

  const onLeave = () => {
    cardsRef.current.forEach(card => {
      gsap.to(card, {
        flex: 1,
        duration: 0.35,
        ease: 'power2.inOut'
      });
    });
  };

  return (
    <div className={styles.row}>
      {projects.map((project, i) => (
        <PortfolioCard
          key={project.id}
          project={project}
          ref={(el) => {
            if (el) cardsRef.current[i] = el;
          }}
          onEnter={() => onEnter(i)}
          onLeave={onLeave}
        />
      ))}
    </div>
  );
}
