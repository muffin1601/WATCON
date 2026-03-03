"use client";

import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.subTitle}>SCHEDULE YOUR PRIVATE CONSULTATION</p>

        <h2 className={styles.title}>
          Begin Your <span>Journey</span>
        </h2>

        <p className={styles.description}>
          Let us design your bespoke outdoor sanctuary tailored to your vision.
          Complete the form below to start the conversation.
        </p>

        <form className={styles.form}>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              {/* <label>First Name</label> */}
              <input type="text" placeholder="Your first name" />
            </div>

            <div className={styles.inputGroup}>
              {/* <label>Last Name</label> */}
              <input type="text" placeholder="Your last name" />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              {/* <label>Email Address</label> */}
              <input type="email" placeholder="you@email.com" />
            </div>

            <div className={styles.inputGroup}>
              {/* <label>Phone Number</label> */}
              <input type="tel" placeholder="Phone Number" />
            </div>
          </div>

          <div className={styles.inputGroupFull}>
            {/* <label>Project Details</label> */}
            <textarea placeholder="Tell us about your vision..." />
          </div>

          <button type="submit" className={styles.buttonBase}>
            Request Consultation
          </button>
        </form>

        <div className={styles.footerInfo}>
          <div>
            <p className={styles.infoTitle}>Address</p>
            <p>New York, NY</p>
          </div>

          <div>
            <p className={styles.infoTitle}>Phone</p>
            <p>+1 (800) 000-0000</p>
          </div>

          <div>
            <p className={styles.infoTitle}>Email</p>
            <p>hello@luxurybrand.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}