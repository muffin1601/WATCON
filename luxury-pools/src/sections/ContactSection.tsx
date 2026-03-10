"use client";

import styles from "./ContactSection.module.css";
import { FadeIn } from "../components/FadeIn";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

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
                  <label>Your Name</label>
                  <input type="text" placeholder="Your Name" />
                </div>

                <div className={styles.inputGroup}>
                  <label>Email Address</label>
                  <input type="email" placeholder="mail@example.com" />
                </div>

                <button type="submit" className={styles.submitButton}>
                  Send Enquiry <ArrowRight size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </FadeIn>

          {/* Info Side */}
          <FadeIn delay={0.5}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoHeading}>Get in Touch</h3>
              <p className={styles.infoDesc}>Our team of pool specialists is ready to help you create the pool of your dreams. Reach us via phone or email — we respond within 24 hours.</p>

              <div className={styles.contactList}>
                <div className={styles.contactItemBox}>
                  <div className={styles.iconCircle}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className={styles.contactLabel}>PHONE</p>
                    <p className={styles.contactValue}>+91 99998 39999</p>
                  </div>
                </div>

                <div className={styles.contactItemBox}>
                  <div className={styles.iconCircle}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className={styles.contactLabel}>EMAIL</p>
                    <p className={styles.contactValue}>adit@watcon.net</p>
                  </div>
                </div>

                <div className={styles.contactItemBoxHours}>
                  <p className={styles.contactLabel}>WORKING HOURS</p>
                  <p className={styles.contactValueHours}>Mon - Sat: 10:00 AM - 6:00 PM</p>
                  {/* <p className={styles.contactValueHours}>Saturday: 10:00 AM - 4:00 PM</p> */}
                  <p className={styles.contactValueHours}>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
