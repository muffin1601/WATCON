"use client";

import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Left Column */}
        <div className={styles.leftColumn}>
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

        {/* Right Column */}
        <div className={styles.rightColumn}>
          <h4 className={styles.heading}>Contact</h4>
          <ul className={styles.links}>
            <li>New Delhi, India</li>
            <li>+91 99998 39999</li>
            <li>adit@watcon.net</li>
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