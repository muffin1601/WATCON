"use client";

import styles from "./CtaSection.module.css";
import { FadeIn } from "../components/FadeIn";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        {/* Left Video */}
        <FadeIn delay={0.2} className={styles.imageWrapper}>
          <div className={styles.videoContainer}>
            <iframe
              className={styles.iframe}
              src="https://www.youtube.com/embed/QsYfpaVFEeQ?autoplay=1&mute=1&loop=1&playlist=QsYfpaVFEeQ&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&vq=hd1080"
              width="1920"
              height="1080"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
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
            <Link href="/portfolio" className={styles.primaryBtn}>
              OUR PROJECTS
            </Link>

            <Link href="/contact" className={styles.secondaryBtn}>
              CONTACT US
            </Link>
          </div> */}
        </FadeIn>
      </div>
    </section>
  );
}