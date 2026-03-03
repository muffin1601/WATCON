"use client";

import styles from "./CtaSection.module.css";

export default function CtaSection() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        {/* Left Image */}
        <div className={styles.imageWrapper}>
          <div
            className={styles.image}
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/271815/pexels-photo-271815.jpeg)",
            }}
          />
        </div>

        {/* Right Content */}
        <div className={styles.content}>
          <p className={styles.subTitle}>REFINED SPACES</p>

          <h2 className={styles.title}>
            Refined <span>Outdoor Living</span>
          </h2>

          <p className={styles.text}>
            We design sophisticated outdoor environments that blend
            architecture, water, and lifestyle seamlessly. From luxury
            infinity pools to curated lounge spaces, every detail is
            crafted for elegance and performance.
          </p>

           <p className={styles.text}>
            We design sophisticated outdoor environments that blend
            architecture, water, and lifestyle seamlessly. From luxury
            infinity pools to curated lounge spaces, every detail is
            crafted for elegance and performance.
          </p>

          <div className={styles.actions}>
            <a href="#" className={styles.primaryBtn}>
              EXPLORE MORE
            </a>

            <a href="#" className={styles.secondaryBtn}>
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}