"use client";

import styles from "./WorkProcess.module.css";

export default function WorkProcess() {
  return (
    <section className={styles.work}>
      <div className={styles.inner}>
        <div className={styles.item}>
          <span className={styles.number}>01</span>
          <h3>Strategy And Planning</h3>
          <p>
            An interior design agency can create content that showcases
          </p>
        </div>

        <div className={styles.item}>
          <span className={styles.number}>02</span>
          <h3>Concept Design</h3>
          <p>
            An interior design agency can create content that showcases
          </p>
        </div>

        <div className={styles.item}>
          <span className={styles.number}>03</span>
          <h3>Design Development</h3>
          <p>
            An interior design agency can create content that showcases
          </p>
        </div>

        <div className={styles.watermark}>WORK PROCESS</div>
      </div>
    </section>
  );
}
