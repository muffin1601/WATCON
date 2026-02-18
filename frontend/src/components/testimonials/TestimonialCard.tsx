'use client';

import { forwardRef } from 'react';
import { Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

interface Props {
  text: string;
  name: string;
  role: string;
}

const TestimonialCard = forwardRef<HTMLDivElement, Props>(
  ({ text, name, role }, ref) => {
    return (
      <div ref={ref} className={styles.card}>
        <Quote className={styles.quoteIcon} />
        <p>{text}</p>
        <span className={styles.line} />
        <h4>{name}</h4>
        <span className={styles.role}>{role}</span>
      </div>
    );
  }
);

TestimonialCard.displayName = 'TestimonialCard';

export default TestimonialCard;
