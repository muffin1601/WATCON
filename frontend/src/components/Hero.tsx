"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Hero.module.css";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  gsap.set(contentRef.current, { opacity: 0, y: 80 });

  gsap.to(bgRef.current, {
    scale: 1.15,
    duration: 8,        
    ease: "none",
    repeat: -1,
    yoyo: true,
  });

  gsap.fromTo(
    contentRef.current,
    { y: 80, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,     
      ease: "power3.out",
      delay: 0.3,        
    }
  );
}, []);

  return (
    <section className={styles.hero}>
      <div
        ref={bgRef}
        className={styles.bg}
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg)",
        }}
      />

      <div className={styles.overlay} />

      <div className={styles.center}>
        <div ref={contentRef} className={styles.content}>
          <h1>
            Designing For Today,
            <br />
            Building For Tomorrow
          </h1>

          <p>
            Eco-friendly materials. Smart design solutions.
            <br />
            Responsible living.
          </p>

          <a href="#" className={styles.cta}>
            Learn More
          </a>
        </div>
      </div>

      {/* Bottom section */}
      <div className={styles.bottomBar}>
        <div className={styles.since}>Since 1990</div>

        <div className={styles.serviceBox}>
          Architecture, Construction
          <br />
          Services
        </div>

        <div className={styles.desc}>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla velit esse cillum pariatur.
          </p>
          {/* <p>
            Excepteur sint occaecat velit esse cillum cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p> */}
        </div>
      </div>
    </section>
  );
}
