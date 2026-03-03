import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <video
  className={styles.video}
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
>
  <source src="/hero.mp4" type="video/mp4" />
</video>

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1>
          Where Water <em>Meets</em>
          <br />
          <span>Luxury</span>
        </h1>

        <p>
          Discover an exquisite resort-style design seamlessly blending
          water and refined elegance.
        </p>

        <a href="#" className={styles.cta}>
            Learn More
          </a>

        {/* <div className={styles.watch}>
          ▶ WATCH VIDEO
        </div> */}
      </div>
    </section>
  );
}