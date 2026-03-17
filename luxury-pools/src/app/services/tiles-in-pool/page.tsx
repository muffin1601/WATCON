import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
// import { Layers, Sparkles, ShieldCheck, Sun } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bisazza Glass Mosaic & Luxury Pool Tiling India | Watcon Finishes",
  description: "Watcon International is India's leading specialist in Bisazza glass mosaic tiling and luxury pool finishes. We offer iridescent glass tiles, large-format porcelain, and designer stone for high-end swimming pools in Delhi and Mumbai.",
  alternates: {
    canonical: "https://watcon.co.in/services/tiles-in-pool",
  },
  keywords: [
    "bisazza glass mosaic india",
    "luxury pool tiling delhi",
    "swimming pool mosaic tiles india",
    "large format pool tiles delhi ncr",
    "glass tile pool builders india",
    "premium pool finishes delhi",
    "epoxy grouting for pools india"
  ],
  openGraph: {
    title: "Exquisite Bisazza Glass Mosaics & Pool Tiling | Watcon International",
    description: "Transform your pool into a radiant work of art with our master-crafted glass mosaic and porcelain tiling solutions.",
    images: ["/services/tilespool (1).webp"],
  }
};

export default function TilesInPoolPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Masterful Finishes",
        title: "Exquisite Bisazza Glass Mosaics & <br/> Pool Tiling",
        description: "Transform your pool into a radiant work of art with Bisazza Glass Mosaic tiles. Watcon International specializes in high-end pool finishes that capture light and elevate your aquatic experience with world-class durability and precision.",
        image: "/services/tilespool (1).webp",
        actions: [
          { label: "Start Selection", href: "/contact", primary: true },
          { label: "View Our Work", href: "#projects" }
        ]

      }}
      services={{
        subtitle: "ARTISTIC CRAFT",
        title: "Premium Tiling Solutions",
        items: [
          {
            title: "Swimming Pools",
            description: "Luxury residential and infinity pools that serve as the perfect canvas for our master-crafted glass mosaic and tiling.",
            icon: "Waves",
            href: "/services/swimming-pools"
          },
          {
            title: "Steam Suites",
            description: "Intricate mosaic tiling designed for the high-vapor environments of our bespoke Turkish Hammams and steam rooms.",
            icon: "Wind",
            href: "/services/steam"
          },
          {
            title: "Vitality Spas",
            description: "High-end hydrotherapy pool finishes that combine ergonomic comfort with world-class aesthetic appeal.",
            icon: "Heart",
            href: "/services/spa"
          },
          {
            title: "Water Features",
            description: "Architectural water bodies and reflecting ponds finished with premium materials that capture and reflect light beautifully.",
            icon: "Waves",
            href: "/services/water-bodies"
          }
        ]
      }}
      projects={{
        subtitle: "MOSAIC PORTFOLIO",
        title: "Iconic Tiled Masterpieces",
        description: "From intricate mosaics to large-format porcelain slabs, we create stunning underwater finishes that define luxury in every ripple.",
        items: [
          {
            title: "Project 1",
            description: "Geometric Blue Mosaic",
            image: "/services/tilespool%20(1).webp",
            badge: "Premium"
          },
          {
            title: "Project 2",
            description: "Modern Slate Lap Pool",
            image: "/services/tilespool%20(2).webp",
            badge: "Signature"
          },
          {
            title: "Project 3",
            description: "Mediterranean Stone Suite",
            image: "/services/tilespool%20(3).webp",
            badge: "Exclusive"
          },
          {
            title: "Project 4",
            description: "White Porcelain Infinity Pool",
            image: "/services/tilespool%20(4).webp",
            badge: "Popular"
          },
          {
            title: "Project 5",
            description: "Dark Minimalist Basin",
            image: "/services/tilespool%20(5).webp",
            badge: "Service"
          },
          {
            title: "Project 6",
            description: "Golden Glass Spa Basin",
            image: "/services/tilespool%20(6).webp",
            badge: "Urban"
          }
        ],
        cta: {
          label: "Request a Custom Design"
        }
      }}
      testimonials={{
        subtitle: "CRAFTSMAN REVIEWS",
        title: "Testimonials on Texture",
        items: [
          {
            name: "Marco P.",
            role: "Master Artisan",
            avatar: "https://i.pravatar.cc/150?u=marcop",
            content: "The quality of the porcelain Watcon sources is top-tier. The tiles are perfectly square, which is rare these days.",
            rating: 5
          },
          {
            name: "Angela S.",
            role: "Villa Owner",
            avatar: "https://i.pravatar.cc/150?u=angelas",
            content: "The glass mosaic they recommended sparkles exactly how we imagined under the evening lights.",
            rating: 5
          },
          {
            name: "David H.",
            role: "Architect",
            avatar: "https://i.pravatar.cc/150?u=davidh",
            content: "Their epoxy grouting is the best in the industry. Not a single leak or stain in five years.",
            rating: 5
          }
        ]
      }}
      contact={{
        title: "Choose Your Perfect Palette",
        description: "Explore our curated collection of luxury pool tiles and mosaics. Consult with our finishing experts today for a bespoke quote."
      }}
      faqs={[
        {
          question: "Where can I get Bisazza glass mosaic in India?",
          answer: "Watcon International is a premier specialist for Bisazza glass mosaic in India, providing authentic tiles and master-craft installation for luxury pools and spas."
        },
        {
          question: "What is the best tile for luxury pools in Delhi?",
          answer: "For luxury pools in Delhi, we recommend glass mosaic or premium large-format porcelain tiles. They offer superior aesthetic appeal and durability under the intense Indian sun."
        },
        {
          question: "Who are the leading glass tile pool builders in India?",
          answer: "Watcon is recognized among the leading glass tile pool builders in India, with proprietary techniques for ensuring perfect tile alignment and long-lasting adhesion in submerged environments."
        },
        {
          question: "Why do you use epoxy grouting for pools?",
          answer: "Epoxy grouting is superior for pools because it is waterproof, stain-resistant, and chemically stable, preventing the growth of algae and ensuring the structural integrity of your pool finish."
        }
      ]}
    />

  );
}

