"use client";

import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
          <div className={styles.logo}>
              <Image
                  src="/logo2.png"
                  alt="AED Luxury Resort Design"
                  width={160}
                  height={60}
                  priority
                  className={styles.logoImg}
              />
          </div>

      <ul className={styles.menu}>
        <li>HOME</li>
        <li>DESIGN</li>
        <li>PORTFOLIO</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>

      <div className={styles.right}>
        <a href="#" className={styles.btnQuote}>Get A Quote</a>

        {/* <div className={styles.menuIcon}>
          <span></span>
          <span></span>
          <span></span>
        </div> */}
      </div>
    </nav>
  );
}