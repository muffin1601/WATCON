import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { PerspectiveReveal } from "@/components/PerspectiveReveal";
import styles from "./TopBuilders.module.css";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import ContactSection from "@/sections/ContactSection";
import CtaSection from "@/sections/CtaSection";
import ServiceNavigation from "@/sections/service-detail/ServiceNavigation";
import type { Metadata } from "next";




export const metadata: Metadata = {
  title: "Top Swimming Pool Builders in India 2024 | Expert Guide",
  description: "A comprehensive guide to the best swimming pool builders in India. From luxury villa pools to Olympic centers, discover the leading pool construction companies like Watcon International.",
  alternates: {
    canonical: "https://watcon.co.in/top-swimming-pool-builders-india",
  },
  keywords: [
    "top swimming pool builders india",
    "best pool construction company delhi",
    "luxury swimming pool makers india",
    "olympic pool builders india",
    "swimming pool contractors mumbai",
    "commercial aquatic engineers india",
    "resort water body construction"
  ],
  openGraph: {
    title: "Best Swimming Pool Builders in India | Industry Leaders",
    description: "Expert analysis of India's top aquatic engineering firms and pool designers.",
    images: ["/services/competitionpools (1).webp"],
  }
};

const builders = [
  {
    rank: 1,
    name: "Watcon International",
    location: "New Delhi & Pan India",
    expertise: "Luxury Pools, Olympic Infrastructure, Hydrotherapy, Musical Fountains",
    description: "Established in 1972, Watcon International is the undisputed leader in luxury waterbody engineering. From building the competition pools for the Asian Games and Commonwealth Games to executing the world-class pools at The Oberoi, Watcon's legacy is unmatched in India.",
    highlight: "Authorized Oase Partner | 2500+ Projects Completed",
    link: "/"
  },
  {
    rank: 2,
    name: "Standard Pool Contractors",
    location: "Mumbai",
    expertise: "Residential Pools",
    description: "A well-known name in the Mumbai region for rooftop and residential pool installations for luxury apartments.",
    link: "#"
  },
  {
    rank: 3,
    name: "City Aquatic Systems",
    location: "Bangalore",
    expertise: "Commercial Pools",
    description: "Specializing in commercial aquatic systems for apartments and small hospitality projects in South India.",
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
              resort water bodies, and aquatic engineering in India for 2024.
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
                        Visit Leader&apos;s Website
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
                Mumbai, and Pan-India projects. Check for FINA compliance expertise and authorized partnerships like Oase for water features.
              </p>
            </div>
          </div>
        </section>

        <CtaSection />
        <ServiceNavigation />

        <ContactSection 
          title="Start Your Project with India's #1 Builder"


          description="Enquire now to discuss your luxury pool requirements with our industry-leading engineering team."
        />
      </main>

      <Footer />
    </>
  );
}

