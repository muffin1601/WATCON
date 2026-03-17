"use client";

import styles from "./AboutCTA.module.css";
import { FadeIn } from "@/components/FadeIn";
import { ScrollParallax } from "@/components/ScrollParallax";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <FadeIn>
        <ScrollParallax distance={40}>
          <div className={styles.centerBlock}>
            <p className={styles.subTitle}>LET'S WORK TOGETHER</p>
            <h2 className={styles.title}>
              Ready to Create Something <br/>
              <span>Extraordinary?</span>
            </h2>
            <p className={styles.description}>
              Whether you're envisioning a private resort spa or an infinity edge master piece, our team is ready to bring your vision to life
            </p>
          </div>
        </ScrollParallax>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <Mail size={16} />
              <span>adit@watcon.net</span>
            </div>
            <div className={styles.contactItem}>
              <Phone size={16} />
              <span>+91 99998 39999</span>
            </div>
            <div className={styles.contactItem}>
              <MapPin size={16} />
              <span>New Delhi </span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <a href="/contact" className={styles.ctaBtn}>
            Start Your Project <ArrowRight size={18} className="ml-2" />
          </a>

        </FadeIn>
      </div>
    </section>
  );
}
