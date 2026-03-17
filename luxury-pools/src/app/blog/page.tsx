import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/sections/ContactSection";
import CtaSection from "@/sections/CtaSection";
import ServiceNavigation from "@/sections/service-detail/ServiceNavigation";
import { FadeIn } from "@/components/FadeIn";


import { PerspectiveReveal } from "@/components/PerspectiveReveal";
import styles from "./Blog.module.css";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Pool & Water Architecture Blog | Watcon Insights",
  description: "Stay updated with the latest trends in luxury swimming pool design, musical fountain technology, and hydrotherapy wellness. Expert insights from Watcon International, India's leading aquatic engineers.",
  alternates: {
    canonical: "https://watcon.co.in/blog",
  },
  keywords: [
    "luxury pool design trends india",
    "swimming pool maintenance tips delhi",
    "musical fountain technology updates",
    "wellness spa design insights",
    "aquatic architecture blog india",
    "watcon international industry news"
  ],
  openGraph: {
    title: "Aquatic Excellence & Engineering Blog | Watcon International",
    description: "In-depth articles on high-end pool construction, fountain artistry, and water features.",
    images: ["/blog/delhi-builders.png"],
  }
};

export default function BlogListingPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroBg}>
            <Image 
              src="/blog/blog1.png" 
              alt="Watcon Blog Banner representing luxury pool builders" 
              fill 
              className={styles.bannerImage}
              priority
            />
            <div className={styles.bannerOverlay} />
          </div>
          <div className={styles.heroContent}>
            <PerspectiveReveal>
              <h1 className={styles.title}>
                Insights & <span>Water Architecture</span>
              </h1>
            </PerspectiveReveal>
            <FadeIn delay={0.2}>
              <p className={styles.subtitle}>
                Exploring the intersection of luxury, engineering, and wellness in Indian aquatic design across 50 years of expertise.
              </p>
            </FadeIn>
          </div>
        </div>

        <section className={styles.blogGrid}>
          <div className={styles.container}>
            <div className={styles.grid}>
              {blogPosts.map((post, index) => (
                <FadeIn key={index} delay={0.1 * index}>
                  <Link href={`/blog/${post.slug}`} className={styles.blogCard}>
                    <div className={styles.imageWrapper}>
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill 
                        className={styles.blogImage}
                      />
                      <span className={styles.category}>{post.category}</span>
                    </div>
                    <div className={styles.content}>
                      <span className={styles.date}>{post.date}</span>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <span className={styles.readMore}>Read Article</span>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
        <ServiceNavigation />
        
        <ContactSection 
          subTitle="STAY INSPIRED"

          title="Looking to start your own project?"
          description="Book a consultation with our design team to discuss how we can bring these industry-leading concepts to your property."
        />
      </main>

      <Footer />
    </>
  );
}

