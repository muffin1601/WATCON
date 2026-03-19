"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import styles from "./TileProjectsSection.module.css";

const categories = [
  {
    id: "glass-mosaic",
    label: "Glass Mosaic",
    description: "Iridescent Bisazza-quality glass tiles that capture light and create a luminous underwater shimmer.",
    images: [
      { src: "/services/mossiac tiles/glass mosic tiles 1.png", alt: "Glass Mosaic Pool Tile 1" },
      { src: "/services/mossiac tiles/glass mosic tiles 2.png", alt: "Glass Mosaic Pool Tile 2" },
      { src: "/services/mossiac tiles/glass mosic tiles 3.png", alt: "Glass Mosaic Pool Tile 3" },
      { src: "/services/mossiac tiles/glass mosic tiles 4.png", alt: "Glass Mosaic Pool Tile 4" },
      { src: "/services/mossiac tiles/glass mosic tiles 5.png", alt: "Glass Mosaic Pool Tile 5" },
      { src: "/services/mossiac tiles/glass mosic tiles 6.png", alt: "Glass Mosaic Pool Tile 6" },
    ],
  },
  {
    id: "designer",
    label: "Designer Tiles",
    description: "Curated designer collections featuring hand-crafted patterns and artistic finishes for a statement pool.",
    images: [
      { src: "/services/designer tiles/designer tiles 1.png", alt: "Designer Pool Tile 1" },
      { src: "/services/designer tiles/designer tiles 2.png", alt: "Designer Pool Tile 2" },
      { src: "/services/designer tiles/designer tiles 3.png", alt: "Designer Pool Tile 3" },
      { src: "/services/designer tiles/designer tiles 4.png", alt: "Designer Pool Tile 4" },
      { src: "/services/designer tiles/designer tiles 5.png", alt: "Designer Pool Tile 5" },
      { src: "/services/designer tiles/designer tiles 6.png", alt: "Designer Pool Tile 6" },
    ],
  },
  {
    id: "porcelain",
    label: "Porcelain Tiles",
    description: "Premium large-format porcelain slabs with ultra-low porosity — timeless, durable, and engineered for aquatic environments.",
    images: [
      { src: "/services/porccian tiles/porccian tiles 1.png", alt: "Porcelain Pool Tile 1" },
      { src: "/services/porccian tiles/porccian tiles 2.png", alt: "Porcelain Pool Tile 2" },
      { src: "/services/porccian tiles/porccian tiles 3.png", alt: "Porcelain Pool Tile 3" },
      { src: "/services/porccian tiles/porccian tiles 4.png", alt: "Porcelain Pool Tile 4" },
      { src: "/services/porccian tiles/porccian tiles 5.png", alt: "Porcelain Pool Tile 5" },
      { src: "/services/porccian tiles/porccian tiles 6.png", alt: "Porcelain Pool Tile 6" },
    ],
  },
  {
    id: "deck",
    label: "Deck Tiles",
    description: "Anti-slip, weather-resistant large-format tiles for pool surrounds, decks, and wet areas.",
    images: [
      { src: "/services/deck tiles/large format tiles 1.png", alt: "Deck Tile 1" },
      { src: "/services/deck tiles/large format tiles 2.png", alt: "Deck Tile 2" },
      { src: "/services/deck tiles/large format tiles 3.png", alt: "Deck Tile 3" },
      { src: "/services/deck tiles/large format tiles 4.png", alt: "Deck Tile 4" },
      { src: "/services/deck tiles/large format tiles 5.png", alt: "Deck Tile 5" },
      { src: "/services/deck tiles/large format tiles 6.png", alt: "Deck Tile 6" },
    ],
  },
];

export default function TileProjectsSection() {
  const [active, setActive] = useState(categories[0].id);

  const current = categories.find((c) => c.id === active)!;

  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <FadeIn delay={0.1} direction="up">
            <p className={styles.subTitle}>TILE COLLECTIONS</p>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <h2 className={styles.title}>Our Tile Portfolio</h2>
          </FadeIn>
          <FadeIn delay={0.3} direction="up">
            <p className={styles.description}>
              Explore our four signature tile collections — each handpicked for performance, beauty, and longevity in aquatic environments.
            </p>
          </FadeIn>
        </div>

        {/* Category Tabs */}
        <FadeIn delay={0.35} direction="up">
          <div className={styles.tabs}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.tab} ${active === cat.id ? styles.tabActive : ""}`}
                onClick={() => setActive(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Category Description */}
        <FadeIn delay={0.4} direction="up">
          <p className={styles.catDesc}>{current.description}</p>
        </FadeIn>

        {/* Image Grid */}
        <div className={styles.grid} key={active}>
          {current.images.map((img, index) => (
            <FadeIn key={`${active}-${index}`} delay={0.1 + index * 0.08} direction="up">
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.ctaWrapper}>
          <FadeIn delay={0.7}>
            <Link href="/contact" className={styles.ctaButton}>
              Request a Custom Design <ArrowRight size={20} className="ml-2" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
