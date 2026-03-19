import styles from "./TrustMarquee.module.css";

export default function TrustMarquee() {
  const sentence1 = "The experts behind The Oberoi's iconic pools and DLF's premium waterbodies.";
  const sentence2 = "From the 1982 Asian Games to the 2010 Commonwealth Games, Watcon is India's #1 choice for Olympic-standard aquatic infrastructure.";

  const items = [
    { label: "Expertise", text: sentence1 },
    { label: "Legacy", text: sentence2 },
  ];

  return (
    <section className={styles.marqueeSection}>
      <div className={styles.gradientOverlay}></div>

      <div className={styles.marqueeRow}>
        <div className={styles.marqueeTrackLeft}>
          <div className={styles.marqueeContent}>
            {[...Array(6)].map((_, i) =>
              items.map((item, j) => (
                <div key={`${i}-${j}`} className={styles.marqueeItem}>
                  <span className={styles.highlight}>{item.label}</span> {item.text}
                  <span className={styles.separator}></span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
