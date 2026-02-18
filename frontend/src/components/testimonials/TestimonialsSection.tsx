'use client';

import styles from './Testimonials.module.css';
import TestimonialsSlider from './TestimonialSlider';

export default function TestimonialSection() {
  return (
    <section className={styles.section}>
        <div className={styles.sectionInner}>
      <div className={styles.left}>
        {/* <span className={styles.bgText}>REVIEWS</span> */}
        <span className={styles.eyebrow}>Our Testimonials</span>
        <h2>
          Check What They Are <br />
          <span>Talking About</span>
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor ut labore.
        </p>

        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>

      <div className={styles.right}>
        <TestimonialsSlider />
      </div>
      </div>
    </section>
  );
}
