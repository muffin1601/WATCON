"use client";

import { useEffect, useRef } from "react";
import styles from "./Clients.module.css";

const logos = [
  "https://htmldesigntemplates.com/html/intereal/image/5.jpg",
  "https://htmldesigntemplates.com/html/intereal/image/3.jpg",
  "https://htmldesigntemplates.com/html/intereal/image/4.jpg",
  "https://htmldesigntemplates.com/html/intereal/image/6.jpg",
];

export default function Clients() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;
    const speed = 0.5; // pixels per frame
    const resetPoint = track.scrollWidth / 2;

    const animate = () => {
      position += speed;

      if (position >= resetPoint) {
        position = 0;
      }

      track.style.transform = `translateX(-${position}px)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className={styles.clients}>
      <div className={styles.container}>
        <div className={styles.divider} />

        <div className={styles.inner}>
          <div className={styles.badge}>
            <strong>100+</strong> Our Trusted Client
          </div>

          <div className={styles.marquee}>
            <div ref={trackRef} className={styles.track}>
              {[...logos, ...logos].map((logo, i) => (
                <div key={i} className={styles.logo}>
                  <img src={logo} alt="client logo" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
