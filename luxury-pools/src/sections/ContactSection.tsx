"use client";

import styles from "./ContactSection.module.css";
import { FadeIn } from "../components/FadeIn";

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeIn delay={0.1}>
          <p className={styles.subTitle}>PRIVATE CONSULTATION</p>

          <h2 className={styles.title}>
            Begin Your <span>Journey</span>
          </h2>

          <p className={styles.description}>
            Tell us about your vision — our design consultants will reach out within 24 hours
            to discuss how we can bring it to life.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <form className={styles.form}>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>FULL NAME</label>
                <input type="text" placeholder="Your full name" />
              </div>

              <div className={styles.inputGroup}>
                <label>EMAIL ADDRESS</label>
                <input type="email" placeholder="your@email.com" />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>PHONE NUMBER</label>
                <input type="tel" placeholder="+1 (000) 000-0000" />
              </div>

              <div className={styles.inputGroup}>
                <label>SERVICE OF INTEREST</label>
                <select className={styles.select}>
                  <option value="" disabled selected>Select a service</option>
                  <option value="pools">Swimming Pools</option>
                  <option value="wellness">Spa & Wellness</option>
                  <option value="landscape">Landscape Design</option>
                </select>
              </div>
            </div>

            <div className={styles.inputGroupFull}>
              <label>YOUR VISION</label>
              <textarea placeholder="Describe your project, property, and aspirations..." />
            </div>

            <div className={styles.buttonWrapper}>
              <button type="submit" className={styles.submitButton}>
                SUBMIT INQUIRY
              </button>
            </div>
          </form>
        </FadeIn>

    

        <FadeIn delay={0.6}>
          <div className={styles.footerInfo}>
            <div className={styles.infoItem}>
              <p className={styles.infoLabel}>ADDRESS</p>
              <p className={styles.infoText}>Experience Centre:</p>
              <p className={styles.infoText}>343, MG Road, Sultanpur</p>
              <p className={styles.infoText}>New Delhi 110030, India</p>
            </div>

            <div className={styles.infoItem}>
              <p className={styles.infoLabel}>CONTACT</p>
              <p className={styles.infoText}>+91 99998 39999</p>
              <p className={styles.infoText}>Message us on WhatsApp</p>
            </div>

            <div className={styles.infoItem}>
              <p className={styles.infoLabel}>ONLINE</p>
              <p className={styles.infoText}>adit@watcon.net</p>
              <p className={styles.infoText}>watcon.co.in</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}