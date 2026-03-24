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
  title: "Top Swimming Pool Builders in India 2026 | Expert Guide",
  description: "A comprehensive guide to the best swimming pool builders in India. From luxury villa pools to Olympic centres, discover the leading pool construction companies including Watcon International, India's #1 aquatic engineer since 1972.",
  alternates: {
    canonical: "https://watcon.co.in/top-swimming-pool-builders-india/",
  },
  keywords: [
    "top swimming pool builders india",
    "best pool construction company delhi",
    "luxury swimming pool makers india",
    "olympic pool builders india",
    "swimming pool contractors mumbai",
    "commercial aquatic engineers india",
    "resort water body construction",
    "best pool company india 2026"
  ],
  openGraph: {
    title: "Best Swimming Pool Builders in India 2026 | Industry Leaders",
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
    description: "Established in 1972, Watcon International is the undisputed leader in luxury waterbody engineering in India. From building the competition pools for the 1982 Asian Games and 2010 Commonwealth Games to executing the world-class pools at The Oberoi, DLF, and ITC Hotels, Watcon's legacy spans over 2,500 completed projects across residential, hospitality, and government sectors.",
    highlight: "Authorized Oase Partner | 2500+ Projects | 50+ Years Experience",
    link: "/"
  },
  {
    rank: 2,
    name: "Piscines Ideales",
    location: "Mumbai",
    expertise: "Residential & Villa Pools",
    description: "A respected name in the Mumbai luxury residential segment, Piscines Ideales is known for sleek contemporary pool designs for private villas and luxury apartments in South Mumbai and Pune.",
    link: "#"
  },
  {
    rank: 3,
    name: "City Aquatic Systems",
    location: "Bangalore",
    expertise: "Commercial & Apartment Pools",
    description: "Specialising in commercial aquatic systems for large apartment complexes and mid-scale hospitality projects across Bangalore and Hyderabad. A reliable choice for multi-unit developments in South India.",
    link: "#"
  },
  {
    rank: 4,
    name: "Blue Wave Pools",
    location: "Chennai",
    expertise: "Residential Pools & Spas",
    description: "A growing name in Tamil Nadu's residential luxury segment, Blue Wave Pools delivers turn-key pool and spa installations for independent bungalows and gated community villas across the Chennai metropolitan area.",
    link: "#"
  },
  {
    rank: 5,
    name: "Aqua Craft India",
    location: "Gurgaon",
    expertise: "Infinity Pools & Rooftop Pools",
    description: "Aqua Craft India focuses on rooftop and infinity pool solutions for Gurgaon's premium high-rise developments. A competent local contractor for straightforward residential projects in the NCR region.",
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
              <h2>How to Choose the Best Swimming Pool Builder in India</h2>
              <p>
                When searching for the <strong>best swimming pool maker in India</strong>, always look for
                their portfolio of <strong>resort pools</strong>, <strong>Olympic size pools</strong>, and
                luxury private installations. Legacy companies like Watcon International provide
                end-to-end expertise — from structural engineering and waterproofing to premium
                tiling and automated water chemistry management.
              </p>

              <h2>Key Criteria for Selecting a Pool Builder</h2>
              <p>Before signing any contract with a swimming pool construction company in India, evaluate them on these essential criteria:</p>
              <ul style={{ paddingLeft: '1.5rem', lineHeight: '2', color: '#aaa', marginBottom: '1.5rem' }}>
                <li><strong>Years of experience</strong> — Companies with 10+ years have proven processes for managing the unexpected challenges of pool construction.</li>
                <li><strong>In-house team vs. sub-contractors</strong> — The best builders employ their own engineers, excavation teams, and tiling specialists rather than outsourcing everything.</li>
                <li><strong>Equipment brands</strong> — World-class builders specify internationally certified filtration, pump, and automation systems. Ask for brand names and specifications upfront.</li>
                <li><strong>Waterproofing warranty</strong> — The most critical element of any pool. Insist on a minimum 10-year waterproofing warranty with a named membrane system.</li>
                <li><strong>After-sales support</strong> — A finished pool requires annual maintenance. Builders who offer structured annual maintenance contracts demonstrate long-term commitment.</li>
                <li><strong>References & site visits</strong> — Always ask to visit completed projects — ideally projects that are 3–5 years old — to assess long-term quality.</li>
              </ul>

              <h2>What Types of Swimming Pools Can Be Built in India?</h2>
              <p>India's top pool builders can deliver a wide spectrum of aquatic environments, each requiring different engineering expertise:</p>
              <ul style={{ paddingLeft: '1.5rem', lineHeight: '2', color: '#aaa', marginBottom: '1.5rem' }}>
                <li><strong>Vanishing/Infinity Edge Pools</strong> — Require precise structural calculations and a concealed balance tank.</li>
                <li><strong>Competition & Olympic Pools</strong> — Must meet FINA specifications for lane width, depth, and timing system compatibility.</li>
                <li><strong>Hydrotherapy & Spa Pools</strong> — Jet placement, temperature control systems, and chromotherapy lighting are specialised disciplines.</li>
                <li><strong>Rooftop Pools</strong> — Demand a structural weight-load analysis, premium waterproofing, and anti-corrosion specifications for exposed environments.</li>
                <li><strong>Natural Swimming Pools</strong> — Biologically filtered pools using aquatic plants — a growing trend in India's eco-luxury resort sector.</li>
                <li><strong>Plunge & Cold Therapy Pools</strong> — Precision-chilled pools for athletic recovery and wellness, now increasingly specified by premium private homes.</li>
              </ul>

              <h2>What Does a Luxury Swimming Pool Cost in India?</h2>
              <p>
                Luxury pool construction costs in India vary widely depending on size, depth, materials, and specification level.
                A standard residential pool typically starts from ₹15–25 lakh, while premium infinity pools
                with imported tiling, automated systems, and structural complexity can exceed ₹1 crore.
                For an accurate, itemised specification and quotation, <Link href="/contact" className={styles.inlineLink}>consult Watcon International's engineering team</Link>.
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

