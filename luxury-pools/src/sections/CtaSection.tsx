"use client";

import styles from "./CtaSection.module.css";
import { FadeIn } from "../components/FadeIn";

export default function CtaSection() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        {/* Left Image */}
        <FadeIn delay={0.2} className={styles.imageWrapper}>
          <div
            className={styles.image}
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/271815/pexels-photo-271815.jpeg)",
            }}
          />
        </FadeIn>

        {/* Right Content */}
        <FadeIn delay={0.4} className={styles.content}>
          <p className={styles.subTitle}>WATCON - ELEVATING OUTDOOR SPACES</p>

          <h2 className={styles.title}>
            High-End <span>Landscaping and Water Solutions</span>
          </h2>

          {/* <p className={styles.text}>
            We design sophisticated outdoor environments that blend
            architecture, water, and lifestyle seamlessly. From luxury
            infinity pools to curated lounge spaces, every detail is
            crafted for elegance and performance.
          </p> */}

          <p className={styles.text}>
            Watcon specializes in providing premium landscaping products and solutions, including swimming pools, water features, and spa/sauna/steam room installations. We cater to discerning clients seeking to transform their outdoor living spaces into stunning, functional retreats.
          </p>

          {/* <div className={styles.actions}>
            <a href="#" className={styles.primaryBtn}>
              EXPLORE MORE
            </a>

            <a href="#" className={styles.secondaryBtn}>
              CONTACT US
            </a>
          </div> */}
        </FadeIn>
      </div>
    </section>
  );
}