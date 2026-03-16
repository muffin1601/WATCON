"use client";

import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.column}>
            <Image
              src="/logo2.png"
              alt="WATCON Luxury Pools"
              width={180}
              height={60}
              className={styles.footerLogo}
            />
            <p className={styles.tagline}>
              India’s Leading Swimming Pool, Hydrotherapy & Waterbody Engineering Company. Building excellence since 1972.
            </p>
            {/* <div className={styles.socials}>
              <Link href="https://instagram.com/watcon_international" target="_blank"><Instagram size={20} /></Link>
              <Link href="https://facebook.com/watcon" target="_blank"><Facebook size={20} /></Link>
              <Link href="https://linkedin.com/company/watcon" target="_blank"><Linkedin size={20} /></Link>
            </div> */}
          </div>

          <div className={styles.column}>
            <h3>Expertise</h3>
            <ul>
              <li><Link href="/services/swimming-pools">Swimming Pool Builder Delhi</Link></li>
              <li><Link href="/services/water-bodies">Musical Fountain India</Link></li>
              <li><Link href="/services/cryo-room">Cold Plunge Pool India</Link></li>
              <li><Link href="/services/spa">Hydrotherapy Pools India</Link></li>
              <li><Link href="/services/tiles-in-pool">Best Tiles for Pool India</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Company</h3>
            <ul>
              <li><Link href="/about">About Watcon</Link></li>
              <li><Link href="/portfolio">Our Projects</Link></li>
              <li><Link href="/blog/benefits-of-hydrotherapy-pools">Wellness Blog</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/top-swimming-pool-builders-india">Top Builders India</Link></li>
            </ul>
          </div>

        </div>

        <div className={styles.keywordBar}>
          <Link href="/services/swimming-pools">Swimming Pool Builder Delhi</Link>
          <span>•</span>
          <Link href="/services/swimming-pools">Luxury Pool India</Link>
          <span>•</span>
          <Link href="/services/spa">Hydrotherapy Pool Builder</Link>
          <span>•</span>
          <Link href="/services/cryo-room">Cold Plunge manufacturer</Link>
          <span>•</span>
          <Link href="/services/water-bodies">Oase Dealer India</Link>
        </div>

        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} WATCON INTERNATIONAL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}