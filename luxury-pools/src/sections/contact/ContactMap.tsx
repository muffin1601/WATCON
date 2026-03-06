"use client";

import styles from "./ContactMap.module.css";
import { FadeIn } from "@/components/FadeIn";

export default function ContactMap() {
  return (
    <section className={styles.mapSection}>
      <FadeIn>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.title}>
              Our <span>Address</span>
            </h2>
            <p className={styles.address}>
              343, Mehrauli-Gurgaon Rd, Sultanpur, New Delhi, Delhi 110030, India
            </p>
          </div>
          
          <div className={styles.mapWrapper}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14022.316885375498!2d77.15174092410317!3d28.522332145558117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e1f486effb9%3A0xc33e14457a4e0a71!2sSultanpur%2C%20New%20Delhi%2C%20Delhi%20110030%2C%20India!5e0!3m2!1sen!2sus!4v1709772343208!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapFrame}
            ></iframe>
            <div className={styles.overlay}></div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
