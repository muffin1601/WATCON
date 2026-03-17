import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./not-found.module.css";
import { FadeIn } from "@/components/FadeIn";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className={styles.notFound}>
        {/* Background Atmosphere */}
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          src="/hero1.mp4"
        />
        <div className={styles.overlay} />

        <div className={styles.content}>
          <FadeIn direction="up" distance={50} delay={0.1}>
            <h1 className={styles.errorCode}>404</h1>
          </FadeIn>
          
          <FadeIn direction="up" distance={30} delay={0.3}>
            <h2 className={styles.title}>
              Page <span>Not Found</span>
            </h2>
          </FadeIn>

          <FadeIn direction="up" distance={20} delay={0.5}>
            <p className={styles.description}>
              The aquatic masterpiece you are looking for has drifted away. 
              Let us guide you back to our curated collections of luxury waterbodies.
            </p>
          </FadeIn>

          <FadeIn direction="up" distance={20} delay={0.7}>
            <div className={styles.actions}>
              <Link href="/" className={styles.primaryBtn}>
                Return Home
              </Link>
              <Link href="/portfolio" className={styles.secondaryBtn}>
                Explore Portfolio
              </Link>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}
