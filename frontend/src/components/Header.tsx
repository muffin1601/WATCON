"use client";

import Image from "next/image";
import {
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Info,
  ChevronDown,
} from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      
      <div className={styles.headerTop}>
        <div className={styles.topInner}>
          <div className={styles.topLeft}>
            <span>
              <Phone size={14} /> +91 888 888 8888
            </span>
            <span>
              <Mail size={14} /> info@website.com
            </span>
            <span>
              <Clock size={14} /> Mon - Fri: 9:00 - 18:30
            </span>
          </div>

          <div className={styles.topRight}>
            <Facebook size={16} />
            <Twitter size={16} />
            <Linkedin size={16} />
            <span>G+</span>
          </div>
        </div>
      </div>

      
      <div className={styles.nav}>
        <div className={styles.navInner}>
          
          <div className={styles.logo}>
            <Image src="/logo.webp" alt="logo" width={160} height={48} />
          </div>

          
          <ul className={styles.menu}>
            <li className={`${styles.active} ${styles.hasDropdown}`}>
              Home 
            </li>

            <li>About</li>

            <li className={styles.hasDropdown}>
              About
              {/* <ul className={styles.dropdown}>
                <li>Our Team</li>
                <li>Team Detail</li>
                <li>Career</li>
                <li>Career Detail</li>
                <li>Faq</li>
                <li>Pricing</li>
                <li>Testimonial</li>
                <li>Coming Soon</li>
                <li>404 Error</li>
                <li>Search Result</li>
              </ul> */}
            </li>

            <li className={styles.hasDropdown}>
              Services <ChevronDown size={14} />
              <ul className={styles.dropdown}>
                <li>Swimming Pools</li>
                <li>Tiles In Pools</li>
                <li>Water Bodies</li>
              </ul>
            </li>

            <li className={styles.hasDropdown}>
              Portfolio 
              {/* <ul className={styles.dropdown}>
                <li>Project List</li>
                <li>Project Detail</li>
              </ul> */}
            </li>

            <li className={styles.hasDropdown}>
              Clients 
              {/* <ul className={styles.dropdown}>
                <li>Blog List</li>
                <li>Blog Single</li>
              </ul> */}
            </li>

            <li>Contact</li>
          </ul>

          <a href="#" className={styles.btnQuote}>Get A Quote</a>
        </div>
      </div>
    </header>
  );
}
