
"use client";

import styles from "./WellnessSection.module.css";

const services = [
  {
    title: "Spa & Sauna",
    description:
      "Relax in our serene spa with an aromatic steam room or detoxifying sauna, designed to rejuvenate body and mind.",
    image:
      "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
  },
  {
    title: "Hydrotherapy",
    description:
      "Indulge in hydrotherapy pools with soothing jets and elegant soaking tubs to ease your muscles and invigorate your senses.",
    image:
      "https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg",
  },
  {
    title: "Ice Room",
    description:
      "Refresh your body with an invigorating ice room, offering frosty mist to stimulate circulation and enhance recovery.",
    image:
      "https://images.pexels.com/photos/6621465/pexels-photo-6621465.jpeg",
  },
  {
    title: "Steam & Relaxation",
    description:
      "Detox, unwind, and restore body & mind in a calming sanctuary designed for total relaxation.",
    image:
      "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
  },
  {
    title: "Gym & Fitness",
    description:
      "Work out in our state-of-the-art gym featuring the latest cardio equipment and free weights.",
    image:
      "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
  },
];

export default function WellnessSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <p className={styles.subTitle}>SECURITY & NETWORKS</p>
          <h2 className={styles.title}>
            Wellness & <span>Recovery</span>
          </h2>
        </div>

        <p className={styles.intro}>
          Unwind mindfully in serene havens blending technology,
          tranquility, and opulent comforts.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${service.image})` }}
            />

            <div className={styles.cardContent}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <a href="#" className={styles.buttonBase}>
                DISCOVER
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}