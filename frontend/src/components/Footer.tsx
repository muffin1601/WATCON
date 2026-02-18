'use client';

import { useEffect, useState } from 'react';
import styles from './Footer.module.css';
import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  MessageSquare,
  ChevronUp
} from 'lucide-react';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* TOP CTA BAR */}
      <div className={styles.topCta}>
        <div className={styles.topCtaInner}>
          <div className={styles.ctaLeft}>
            <MessageSquare className={styles.ctaIcon} />
            <div>
              <span>Book Your Schedule</span>
              <strong>666 888 0000</strong>
            </div>
          </div>

          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>

          <a href="/contact" className={styles.cta}>
            Book An Appointment
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.overlay} />

        <div className={styles.inner}>
          <div className={styles.brand}>
            <div className={styles.logoWrap}>
              <img
                src="/logo.webp"
                alt="Watcon"
                className={styles.logo}
              />
            </div>

            <blockquote className={styles.quote}>
              “Crafting world-class swimming pools, wellness spaces, and
              outdoor living experiences.”
            </blockquote>

            <p>
              Watcon specializes in premium aquatic solutions, spa & wellness
              installations, and bespoke outdoor environments.
            </p>

            <div className={styles.socials}>
              <Facebook />
              <Twitter />
              <Linkedin />
            </div>

            <ul className={styles.contact}>
              <li><MapPin /> New Delhi, India</li>
              <li><Phone /> +91 666 888 9999</li>
              <li><Mail /> adit@watcon.net</li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/clients">Clients</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Services</h4>
            <ul>
              <li>Swimming Pools</li>
              <li>Pool Tiles</li>
              <li>Water Bodies</li>
              <li>Dehumidifiers</li>
              <li>Koi Ponds</li>
              <li>Competition Pools</li>
              <li>Spa</li>
              <li>Jacuzzi</li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Get Interesting News</h4>
            <p>
              Subscribe for updates on luxury pools, wellness trends, and
              exclusive projects.
            </p>

            <input
              type="email"
              placeholder="Email"
              className={styles.input}
            />
            <button className={styles.cta}>Subscribe</button>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>©2026 Watcon. All rights reserved.</p>
        </div>

        {showTop && (
          <button
            className={styles.scrollTop}
            onClick={() =>
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          >
            <ChevronUp />
          </button>
        )}
      </footer>
    </>
  );
}
