"use client";

import { useParams } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import styles from "./BlogPost.module.css";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className={styles.notFound}>
        <h1>Post Not Found</h1>
        <Link href="/blog">Back to Blog</Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <article className={styles.article}>
          <header className={styles.header}>
            <div className={styles.headerBg}>
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                className={styles.headerImage}
                priority
              />
              <div className={styles.headerOverlay} />
            </div>
            
            <div className={styles.headerContent}>
              <FadeIn>
                <Link href="/blog" className={styles.backLink}>
                  <ArrowLeft size={16} /> Back to Insights
                </Link>
                <div className={styles.meta}>
                  <span className={styles.category}><Tag size={14} /> {post.category}</span>
                  <span className={styles.date}><Calendar size={14} /> {post.date}</span>
                </div>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.author}>
                  <User size={16} /> By {post.author}
                </div>
              </FadeIn>
            </div>
          </header>

          <div className={styles.container}>
            <FadeIn delay={0.2}>
              <div 
                className={styles.content} 
                dangerouslySetInnerHTML={{ __html: post.content }} 
              />
            </FadeIn>
            
            <footer className={styles.footer}>
              <div className={styles.shareTitle}>Share this article</div>
              <div className={styles.socialLinks}>
                {/* Simplified social icons for aesthetic */}
                <div className={styles.socialCircle}>In</div>
                <div className={styles.socialCircle}>Fb</div>
                <div className={styles.socialCircle}>Tw</div>
              </div>
            </footer>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
