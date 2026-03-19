"use client";

import styles from "./PortfolioGrid.module.css";
import { FadeIn } from "@/components/FadeIn";
import { ScrollParallax } from "@/components/ScrollParallax";

const projects = [
  {
    title: "Project: The Oberoi Gurgaon",
    desc: "The master craftsmanship behind the world-class swimming pools and iconic water features at The Oberoi group, setting the standard for global hospitality.",
    videoSrc: "https://youtu.be/QeWSYLcVsbk?si=5RsFemHCJ6Dqu0Br",
  },
  {
    title: "Shalini Passi Home Projects",
    desc: "A bespoke private aquatic environment crafted for celebrated art patron and interior visionary Shalini Passi — blending sculptural pool design with curated outdoor living spaces that reflect her signature aesthetic.",
    videoSrc: "https://youtu.be/6xPgpNAJgkM?si=Fr-4HLdRTA0d_Utc",
  },
  {
    title: "National Industrial Landmarks",
    desc: "Builders of India's competition pools at Siri Fort Stadium, SP Mukherji Stadium, and Yamuna Sports Complex for the Asian and Commonwealth Games.",
    videoSrc: "https://youtu.be/hfTxxyLMALQ?si=uZVHHbZG9TEsP8NK",
  },
  {
    title: "Westin Rishikesh Wellness",
    desc: "Executing the signature infinity swimming pool, recovery plunge pools, and luxury spa hydrotherapy systems at Westin Rishikesh.",
    videoSrc: "https://youtu.be/gSjsW5gSf6w?si=-YbU4S16TYvw4YIt",
  },
  {
    title: "Vasant Kunj Private Residence",
    desc: "A stunning private estate featuring a light-blue infinity-edge pool, integrated outdoor fireplace, ambient outdoor lighting, and bespoke al fresco seating — a complete luxury outdoor living environment by Watcon.",
    videoSrc: "https://youtu.be/CdNgxeOyLIE?si=4FFG6GzFmybmCzaK",
  },
  {
    title: "Radhe Mohan Drive Farm",
    desc: "A countryside estate pool finished in handpicked green tiles with stainless steel water spouts, copper accent tiling, outdoor furniture, and integrated evening lighting — a serene retreat designed to harmonise with the natural landscape.",
    videoSrc: "https://youtu.be/0c4TPRKKrCg?si=oroxvid7YOWk5kb9",
  },
  {
    title: "The Green Pool",
    desc: "A nature-immersive pool design where lush landscaping meets precision aquatic engineering — a tranquil private oasis where the boundaries between pool and garden dissolve entirely.",
    videoSrc: "https://youtu.be/h-Z0R4HpQ9I?si=K2kW0CSZi0hjvTES",
  },
  {
    title: "Laminum",
    desc: "A showcase of Watcon's architectural finishing capability — where large-format surface materials and seamless pool geometry create an environment of understated, museum-quality elegance.",
    videoSrc: "https://youtu.be/0Im_7UAXXAo?si=kZ41IHcj1-okHJXJ",
  },
  {
    title: "Watcon Waterfall",
    desc: "A dramatic custom waterfall water feature transforming a private landscape into a resort-grade sanctuary — engineered for structural longevity and calibrated for the precise acoustics of falling water.",
    videoSrc: "https://youtu.be/a1j3jZmbq8I?si=kaLy9R8oDDJZt0Dl",
  },
  {
    title: "Mood Lighting & Fireplace",
    desc: "A masterclass in elemental contrast — Watcon's poolside fire feature installation where automated gas fireplaces and precision underwater chromotherapy lighting combine to create an extraordinary evening atmosphere.",
    videoSrc: "https://youtu.be/2qTle3LXktY?si=ya3bVx_H6o0zoptN",
  }
];

function getYoutubeId(input: string) {
  if (input.length === 11 && !input.includes('://')) return input;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = input.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

export default function PortfolioGrid() {
  return (
    <section className={styles.showcaseSection}>
      <div className={styles.container}>
        {projects.map((project, index) => {
          const ytId = getYoutubeId(project.videoSrc);
          const isEven = index % 2 === 0;
          
          return (
            <div key={index} className={`${styles.item} ${!isEven ? styles.itemReverse : ''}`}>

              <div className={styles.videoBlock}>
                <ScrollParallax distance={40} direction={isEven ? "up" : "down"}>
                  <FadeIn delay={0.2} direction={isEven ? "right" : "left"} distance={50}>
                    <div className={styles.videoWrapper}>
                      <div className={styles.videoInner}>
                        {ytId ? (
                          <iframe
                            className={styles.youtubeIframe}
                            src={`https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&loop=1&playlist=${ytId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&vq=hd1080`}
                            title={project.title}
                            width="1920"
                            height="1080"
                            allow="autoplay; encrypted-media; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <video
                            className={styles.iframe}
                            src={project.videoSrc}
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        )}
                      </div>
                    </div>
                  </FadeIn>
                </ScrollParallax>
              </div>

              <div className={styles.textBlock}>
                <ScrollParallax distance={30} direction={isEven ? "down" : "up"}>
                  <FadeIn delay={0.4} direction={isEven ? "left" : "right"} distance={50}>
                    <span className={styles.projectNumber}>{String(index + 1).padStart(2, '0')}</span>
                    <h3 className={styles.title}>{project.title}</h3>
                    <p className={styles.desc}>{project.desc}</p>
                    <div className={styles.line}></div>
                  </FadeIn>
                </ScrollParallax>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}

