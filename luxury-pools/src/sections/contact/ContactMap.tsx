"use client";

import styles from "./ContactMap.module.css";
import { FadeIn } from "@/components/FadeIn";
import { ScrollParallax } from "@/components/ScrollParallax";

export default function ContactMap() {
  return (
    <section className={styles.mapSection}>
      <FadeIn>
        <div className={styles.container}>
          <ScrollParallax distance={40} direction="up" className={styles.header}>
            <h2 className={styles.title}>
              Our <span>Address</span>
            </h2>
            <a href="https://maps.app.goo.gl/A1TGVLrXHFqGyu3C6" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <p className={styles.address}>
                343, Mehrauli-Gurgaon Rd, Sultanpur, New Delhi, Delhi 110030, India
              </p>
            </a>
          </ScrollParallax>
          
          <ScrollParallax distance={20} direction="down" className={styles.mapWrapper}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4159.257756501324!2d77.1607484760129!3d28.498286190163302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e43848a007f%3A0xc51762c04eb9b6d!2sF5X7%2B887%2C%20343%2C%20Mehrauli-Gurgaon%20Rd%2C%20Sultanpur%2C%20New%20Delhi%2C%20Delhi%20110030!5e1!3m2!1sen!2sin!4v1773489975882!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapFrame}
            ></iframe>
            <div className={styles.overlay}></div>
          </ScrollParallax>
        </div>
      </FadeIn>
    </section>
  );
}
