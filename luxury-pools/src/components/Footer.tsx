"use client";

import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Left Column */}
        <div className={styles.column}>
          <div className={styles.logo}>
            <Image
              src="/logo2.png"
              alt="Luxury Brand Logo"
              width={120}
              height={40}
              priority
            />
          </div>
          <p className={styles.description}>
            A refined approach to bespoke outdoor living and architectural
            design. Crafted for elegance, engineered for performance.
          </p>
        </div>

        {/* Middle Column */}
        <div className={styles.column}>
          <h4 className={styles.heading}>Navigation</h4>
          <ul className={styles.links}>
            <li>Home</li>
            <li>Projects</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Right Column */}
        <div className={styles.column}>
          <h4 className={styles.heading}>Contact</h4>
          <ul className={styles.links}>
            <li>New Delhi, India</li>
            <li>+1 (800) 000-0000</li>
            <li>adit@watcon.com</li>
            {/* <li>Mon – Fri | 9AM – 6PM</li> */}
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} WATCON. All rights reserved.</p>
        <p>Terms & Conditions • Privacy Policy</p>
      </div>
    </footer>
  );
}