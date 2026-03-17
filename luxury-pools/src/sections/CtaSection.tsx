"use client";

import styles from "./CtaSection.module.css";
import { FadeIn } from "../components/FadeIn";
import { ScrollParallax } from "../components/ScrollParallax";
import Link from "next/link";

interface CtaSectionProps {
  subTitle?: string;
  title?: string;
  titleAccent?: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CtaSection({
  subTitle = "WATCON - ELEVATING OUTDOOR SPACES",
  title = "High-End ",
  titleAccent = "Landscaping and Water Solutions",
  text = "Watcon specializes in providing premium landscaping products and solutions, including swimming pools, water features, and spa/sauna/steam room installations. We cater to discerning clients seeking to transform their outdoor living spaces into stunning, functional retreats.",
  primaryLabel = "Discover Our Services",
  primaryHref = "/services/swimming-pools",
  secondaryLabel = "Start Your Project",
  secondaryHref = "/contact"
}: CtaSectionProps) {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        {/* Left Video */}
        <ScrollParallax distance={40} direction="up" className={styles.imageWrapper}>
          <FadeIn delay={0.2} direction="right" distance={50}>
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
        </ScrollParallax>

        {/* Right Content */}
        <ScrollParallax distance={40} direction="down" className={styles.content}>
          <FadeIn delay={0.4} direction="left" distance={50}>
            <p className={styles.subTitle}>{subTitle}</p>
  
            <h2 className={styles.title}>
              {title}<span>{titleAccent}</span>
            </h2>
  
            <p className={styles.text}>{text}</p>
            <div className={styles.actions}>
              <Link href={primaryHref} className={styles.primaryBtn}>
                {primaryLabel}
              </Link>
              <Link href={secondaryHref} className={styles.secondaryBtn}>
                {secondaryLabel}
              </Link>
            </div>
          </FadeIn>
        </ScrollParallax>


      </div>
    </section>
  );
}
