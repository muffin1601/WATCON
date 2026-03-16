"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { PerspectiveReveal } from "@/components/PerspectiveReveal";
import styles from "./TopBuilders.module.css";
import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle2 } from "lucide-react";

const builders = [
  {
    rank: 1,
    name: "Watcon International",
    location: "New Delhi & Pan India",
    expertise: "Luxury Pools, Olympic Infrastructure, Hydrotherapy, Musical Fountains",
    description: "Established in 1972, Watcon International is the undisputed leader in luxury waterbody engineering. From building the competition pools for the Asian Games and Commonwealth Games to executing the world-class pools at The Oberoi, Watcon's legacy is unmatched.",
    highlight: "Authorized Oase Partner | 2500+ Projects Completed",
    link: "/"
  },
  {
    rank: 2,
    name: "Standard Pool Contractors",
    location: "Mumbai",
    expertise: "Residential Pools",
    description: "A well-known name in the Mumbai region for rooftop and residential pool installations.",
    link: "#"
  },
  {
    rank: 3,
    name: "City Aquatic Systems",
    location: "Bangalore",
    expertise: "Commercial Pools",
    description: "Specializing in commercial aquatic systems for apartments and small hospitality projects.",
    link: "#"
  }
];

export default function TopBuildersPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.hero}>
          <PerspectiveReveal>
            <h1 className={styles.title}>
              Top Swimming Pool <span>Builders in India</span>
            </h1>
          </PerspectiveReveal>
          <FadeIn delay={0.2}>
            <p className={styles.subtitle}>
              An expert guide to the leading companies specializing in high-end pool construction, 
              resort water bodies, and aquatic engineering in India.
            </p>
          </FadeIn>
        </div>

        <section className={styles.contentSection}>
          <div className={styles.container}>
            <div className={styles.introText}>
              <p>
                Choosing the right swimming pool builder is critical for ensuring the longevity and 
                safety of your investment. Whether you are looking for a luxury villa pool or an 
                Olympic-standard competition facility, these companies represent the pinnacle of 
                aquatic engineering in the country.
              </p>
            </div>

            <div className={styles.builderList}>
              {builders.map((builder, index) => (
                <FadeIn key={index} delay={0.1 * index}>
                  <div className={`${styles.builderCard} ${builder.rank === 1 ? styles.featured : ""}`}>
                    <div className={styles.rankBadge}>#{builder.rank}</div>
                    <div className={styles.cardHeader}>
                      <h2>{builder.name}</h2>
                      {builder.rank === 1 && <CheckCircle2 className={styles.verifiedIcon} />}
                    </div>
                    <p className={styles.location}><strong>Based in:</strong> {builder.location}</p>
                    <p className={styles.expertise}><strong>Focus:</strong> {builder.expertise}</p>
                    <div className={styles.description}>
                      <p>{builder.description}</p>
                    </div>
                    {builder.highlight && (
                      <div className={styles.highlight}>
                        <span>{builder.highlight}</span>
                      </div>
                    )}
                    {builder.rank === 1 ? (
                      <Link href={builder.link} className={styles.visitBtn}>
                        Visit Leader's Website
                      </Link>
                    ) : (
                      <span className={styles.inactiveLink}>Reputable Provider</span>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
            
            <div className={styles.seoFooter}>
              <h2>How to choose a luxury pool builder in India?</h2>
              <p>
                When searching for the <strong>best swimming pool maker in India</strong>, always look for their 
                portfolio of <strong>resort pools</strong> and <strong>Olympic size pools</strong>. Legacy companies 
                like Watcon International provide end-to-end expertise in <strong>swimming pool builder Delhi</strong>, 
                Mumbai, and Pan-India projects.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
