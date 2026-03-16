"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { PerspectiveReveal } from "@/components/PerspectiveReveal";
import styles from "./Blog.module.css";
import Image from "next/image";
import Link from "next/link";

import { blogPosts } from "@/data/blogPosts";

export default function BlogListingPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroBg}>
            <Image 
              src="/blog/delhi-builders.png" 
              alt="Watcon Blog Banner" 
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
                Exploring the intersection of luxury, engineering, and wellness in Indian aquatic design.
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
      </main>
      <Footer />
    </>
  );
}
