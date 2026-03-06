"use client";

import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

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
      
      {/* Logo */}
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

      {/* Menu */}
      <ul className={styles.menu}>
        <li className={`${styles.active} ${styles.hasDropdown}`}>
          <Link href="/">HOME</Link>
        </li>

        <li>
          <Link href="/about">ABOUT US</Link>
        </li>

        <li className={styles.hasDropdown}>
          <Link href="/services">
            SERVICES <ChevronDown size={14} />
          </Link>

          <ul className={styles.dropdown}>
            <li>
              <Link href="/services/swimming-pools">SWIMMING POOLS</Link>
            </li>
            <li>
              <Link href="/services/tiles-in-pools">TILES IN POOLS</Link>
            </li>
            <li>
              <Link href="/services/water-bodies">WATER BODIES</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link href="/portfolio">PORTFOLIO</Link>
        </li>

        <li>
          <Link href="/clients">CLIENTS</Link>
        </li>

        <li>
          <Link href="/contact">CONTACT US</Link>
        </li>
      </ul>

      {/* Right Side */}
      <div className={styles.right}>
        <Link href="/quote" className={styles.btnQuote}>
          Get A Quote
        </Link>
      </div>

    </nav>
  );
}