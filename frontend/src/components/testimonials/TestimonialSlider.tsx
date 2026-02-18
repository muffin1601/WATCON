'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Testimonials.module.css';
import TestimonialCard from './TestimonialCard';

const DATA = [
  { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eum, libero impedit molestias voluptatum autem d.', name: 'Christina Bell', role: 'Banker' },
  { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eum, libero impedit molestias voluptatum autem d.', name: 'Kelvin Martin', role: 'Developer' },
  { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eum, libero impedit molestias voluptatum autem d.', name: 'Nelson Kelly', role: 'Designer' },
  { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eum, libero impedit molestias voluptatum autem d.', name: 'Sarah Brown', role: 'Architect' },
  { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eum, libero impedit molestias voluptatum autem d.', name: 'James Walker', role: 'Engineer' }
];

const LOOP_DATA = [...DATA, ...DATA];

export default function TestimonialsSlider() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const index = useRef(0);

  useEffect(() => {
    if (!trackRef.current || !cardRef.current) return;

    const cardWidth =
      cardRef.current.getBoundingClientRect().width + 40;

    const total = DATA.length;

    const interval = setInterval(() => {
      index.current += 1;

      gsap.to(trackRef.current, {
        x: -(index.current * cardWidth),
        duration: 0.9,
        ease: 'power3.inOut',
        onComplete: () => {
          if (index.current >= total) {
            index.current = 0;
            gsap.set(trackRef.current, {
              x: 0
            });
          }
        }
      });
    }, 4200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slider}>
      <div ref={trackRef} className={styles.track}>
        {LOOP_DATA.map((item, i) => (
          <TestimonialCard
            key={i}
            {...item}
            ref={i === 0 ? cardRef : undefined}
          />
        ))}
      </div>
    </div>
  );
}
