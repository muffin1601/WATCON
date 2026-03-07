"use client";

import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} WATCON. All rights reserved.</p>
      </div>
    </footer>
  );
}