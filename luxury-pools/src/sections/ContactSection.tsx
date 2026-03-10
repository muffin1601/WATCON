"use client";

import styles from "./ContactSection.module.css";
import { FadeIn } from "../components/FadeIn";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

interface ContactSectionProps {
  title?: string;
  description?: string;
}

export default function ContactSection({
  title = "Begin Your Journey",
  description = "Tell us about your vision — our design consultants will reach out within 24 hours to discuss how we can bring it to life."
}: ContactSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <FadeIn delay={0.1}>
            <p className={styles.subTitle}>PRIVATE CONSULTATION</p>
            <h2 className={styles.title}>
              {title.split(' ').map((word, i) => (
                word.toLowerCase() === 'journey' || word.toLowerCase() === 'pool' || word.toLowerCase() === 'dream' ?
                  <span key={i}>{word} </span> : word + ' '
              ))}
            </h2>
            <p className={styles.description}>{description}</p>
          </FadeIn>
        </div>

        <div className={styles.mainGrid}>
          {/* Form Side */}
          <FadeIn delay={0.3}>
            <div className={styles.formCard}>
              <h3 className={styles.formHeading}>Send an Enquiry</h3>
              <form className={styles.form}>
                <div className={styles.inputGroup}>
                  <label>YOUR NAME</label>
                  <input type="text" placeholder="John Doe" />
                </div>

                <div className={styles.inputGroup}>
                  <label>EMAIL ADDRESS</label>
                  <input type="email" placeholder="john@example.com" />
                </div>

                <div className={styles.inputGroup}>
                  <label>PHONE NUMBER</label>
                  <input type="tel" placeholder="+91 00000 00000" />
                </div>

                <div className={styles.inputGroup}>
                  <label>YOUR VISION</label>
                  <textarea placeholder="Describe your project aspirations..." />
                </div>

                <button type="submit" className={styles.submitButton}>
                  Send Enquiry →
                </button>
              </form>
            </div>
          </FadeIn>

          {/* Info Side */}
          <FadeIn delay={0.5}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoHeading}>Get in Touch</h3>
              <p className={styles.infoDesc}>We have built projects across the country, building your pool of your dreams. Reach us out via email or phone call within 24 hours.</p>

              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <div className={styles.iconCircle}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className={styles.contactLabel}>Phone</p>
                    <p className={styles.contactValue}>+91 99998 39999</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.iconCircle}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className={styles.contactLabel}>Email</p>
                    <p className={styles.contactValue}>info@watcon.net</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.iconCircle}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className={styles.contactLabel}>Address</p>
                    <p className={styles.contactValue}>343, MG Road, Sultanpur, New Delhi</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.iconCircle}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className={styles.contactLabel}>Business Hours</p>
                    <p className={styles.contactValue}>Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
