"use client";

import styles from "./PortfolioGrid.module.css";
import { FadeIn } from "@/components/FadeIn";
import { ScrollParallax } from "@/components/ScrollParallax";

const projects = [
  {
    title: "Shalini Passi Home Projects",
    desc: "A stunning residential masterpiece reflecting elegance and luxury.",
    videoSrc: "https://youtu.be/6xPgpNAJgkM?si=Fr-4HLdRTA0d_Utc",
  },
  {
    title: "Fire Installation Project at Vasant Vihar",
    desc: "Mesmerizing outdoor fire feature elevating the luxury ambiance.",
    videoSrc: "https://youtu.be/hfTxxyLMALQ?si=uZVHHbZG9TEsP8NK",
  },
  {
    title: "Westin Rishikesh",
    desc: "Project of swimming pool, plunge pool waterbody, and Spa at Westin Rishikesh.",
    videoSrc: "https://youtu.be/gSjsW5gSf6w?si=-YbU4S16TYvw4YIt",
  },
  {
    title: "Vasant Kunj Bali",
    desc: "Fire Place outdoor, Pool Video, outdoor sitting, outdoor lights, light blue tiles pool. Infinity edge.",
    videoSrc: "https://youtu.be/CdNgxeOyLIE?si=4FFG6GzFmybmCzaK",
  },
  {
    title: "Radhe Mohan Drive Farm",
    desc: "Green tile pool, SS water spout, Outdoor Furniture, Copper tiles, Outdoor lights, outdoor swings.",
    videoSrc: "https://youtu.be/0c4TPRKKrCg?si=oroxvid7YOWk5kb9",
  },
  {
    title: "The Green Pool",
    desc: "A perfect blend of nature and aquatic luxury.",
    videoSrc: "https://youtu.be/h-Z0R4HpQ9I?si=K2kW0CSZi0hjvTES",
  },
  {
    title: "Oberois Gurgaon",
    desc: "High-end commercial installation featuring opulent design and pristine execution.",
    videoSrc: "https://youtu.be/QeWSYLcVsbk?si=5RsFemHCJ6Dqu0Br",
  },
  {
    title: "Laminum",
    desc: "Exquisite architectural surfaces meeting seamless aquatic design.",
    videoSrc: "https://youtu.be/0Im_7UAXXAo?si=kZ41IHcj1-okHJXJ",
  },
  {
    title: "Watcon Waterfall",
    desc: "A majestic flowing waterfall transforming the landscape.",
    videoSrc: "https://youtu.be/a1j3jZmbq8I?si=kaLy9R8oDDJZt0Dl",
  },
  {
    title: "Mood Lighting and Fireplace",
    desc: "In a pool by Watcon, merging the elemental forces of fire and water.",
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

