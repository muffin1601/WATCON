"use client";

import styles from "./ContactSection.module.css";
import { FadeIn } from "../components/FadeIn";
import { StaggerContainer, StaggerItem } from "../components/StaggerContainer";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { ScrollParallax } from "../components/ScrollParallax";

interface ContactSectionProps {
  title?: string;
  description?: string;
  subTitle?: string;
}

export default function ContactSection({
  title = "Begin Your Journey",
  description = "Tell us about your vision — our design consultants will reach out within 24 hours to discuss how we can bring it to life.",
  subTitle = "PRIVATE CONSULTATION"
}: ContactSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <FadeIn delay={0.1}>
            <p className={styles.subTitle}>{subTitle}</p>
          </FadeIn>
          
          <ScrollParallax distance={30}>
            <FadeIn delay={0.2}>
              <h2 className={styles.title}>
                {title.split(' ').map((word, i) => {
                  const pureWord = word.toLowerCase().replace(/[.,!?]/g, '');
                  return pureWord === 'journey' || pureWord === 'pool' || pureWord === 'dream' || pureWord === 'extraordinary' ?
                    <span key={i}>{word} </span> : word + ' '
                })}
              </h2>
            </FadeIn>
          </ScrollParallax>

          <FadeIn delay={0.3}>
            <p className={styles.description}>{description}</p>
          </FadeIn>
        </div>

        <div className={styles.mainGrid}>
          {/* Form Side */}
          <ScrollParallax distance={40} direction="up" className={styles.formContainer}>
            <FadeIn delay={0.4} scale={0.95}>
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
          </ScrollParallax>

          {/* Info Side */}
          <ScrollParallax distance={40} direction="down" className={styles.infoContainer}>
            <FadeIn delay={0.6} scale={0.95}>
              <div className={styles.infoCard}>
                <h2 className={styles.infoHeading}>Get in Touch</h2>
                <p className={styles.infoDesc}>Our team of pool specialists is ready to help you create the pool of your dreams. Reach us via phone or email — we respond within 24 hours.</p>
  
                <StaggerContainer className={styles.contactList}>
                  <StaggerItem>
                    <a href="https://maps.app.goo.gl/A1TGVLrXHFqGyu3C6" target="_blank" rel="noopener noreferrer" className={styles.contactItemBox} style={{ textDecoration: 'none' }}>
                      <div className={styles.iconCircle}>
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className={styles.contactLabel}>ADDRESS</p>
                        <p className={styles.contactValue}>343, Mehrauli-Gurgaon Rd, Sultanpur, New Delhi, Delhi 110030, India</p>
                      </div>
                    </a>
                  </StaggerItem>

                  <StaggerItem>
                    <div className={styles.contactItemBox}>
                      <div className={styles.iconCircle}>
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className={styles.contactLabel}>PHONE</p>
                        <p className={styles.contactValue}>+91 99998 39999</p>
                      </div>
                    </div>
                  </StaggerItem>
  
                  <StaggerItem>
                    <div className={styles.contactItemBox}>
                      <div className={styles.iconCircle}>
                        <Mail size={18} />
                      </div>
                      <div>
                        <p className={styles.contactLabel}>EMAIL</p>
                        <p className={styles.contactValue}>adit@watcon.net</p>
                      </div>
                    </div>
                  </StaggerItem>
  
                  <StaggerItem>
                    <div className={styles.contactItemBoxHours}>
                      <p className={styles.contactLabel}>WORKING HOURS</p>
                      <p className={styles.contactValueHours}>Mon - Sat: 11:00 AM - 7:00 PM</p>
                      <p className={styles.contactValueHours}>Sunday: Closed</p>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </FadeIn>
          </ScrollParallax>
        </div>
      </div>
    </section>
  );
}

