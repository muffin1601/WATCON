import styles from "./TrustMarquee.module.css";

export default function TrustMarquee() {
  const sentence1 = "The experts behind The Oberoi’s iconic pools and DLF’s premium waterbodies.";
  const sentence2 = "From the 1982 Asian Games to the 2010 Commonwealth Games, Watcon is India’s #1 choice for Olympic-standard aquatic infrastructure.";
  
  return (
    <section className={styles.marqueeSection}>
      <div className={styles.gradientOverlay}></div>
      
      {/* Row 1: Moving Right */}
      <div className={styles.marqueeRow}>
        <div className={styles.marqueeTrackRight}>
          <div className={styles.marqueeContent}>
            {[...Array(4)].map((_, i) => (
              <div key={i} className={styles.marqueeItem}>
                <span className={styles.highlight}>Expertise</span> {sentence1}
                <span className={styles.separator}></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2: Moving Left */}
      <div className={styles.marqueeRow}>
        <div className={styles.marqueeTrackLeft}>
          <div className={styles.marqueeContent}>
            {[...Array(4)].map((_, i) => (
              <div key={i} className={styles.marqueeItem}>
                <span className={styles.highlight}>Legacy</span> {sentence2}
                <span className={styles.separator}></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
