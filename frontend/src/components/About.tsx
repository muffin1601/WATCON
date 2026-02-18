"use client";

import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.bgText}>ABOUT US</span>

          <h2>
            We Offer You Professional
            <br />
            <span>Interior Design</span>
          </h2>

          <p className={styles.lead}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>

          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>

          <div className={styles.divider}></div>

          <div className={styles.actions}>
            <a href="#" className={styles.cta}>Read More</a>

            <div className={styles.phone}>
              <span>Have any questions?</span>
              <strong>+91 123 777 8888</strong>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.imageWrap}>
            <img
              src="https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg"
              alt="Interior"
            />

            {/* <div className={styles.quote}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <strong>Stephen Lawson</strong>
            </div> */}
          </div>
        </div>
      </div>
      
    </section>
  );
}
