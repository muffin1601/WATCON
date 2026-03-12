"use client";

import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
import { Layers, Sparkles, Droplets, ShieldCheck, Sun, Settings } from "lucide-react";

export default function TilesInPoolPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "The Art of Finish",
        title: "Exquisite Pool Tiling & Mosaics",
        description: "Transform the base of your pool into a radiant work of art. We specialize in high-end porcelain, glass, and natural stone mosaics that capture light and elevate your aquatic experience.",
        image: "/services/tilespool%20(1).webp",
        stats: [
          { label: "Mosaic Projects", value: "2500+" },
          { label: "Material Quality", value: "SUPREME" },
          { label: "Expert Craft", value: "50+ Yrs" }
        ],
        actions: [
          { label: "Start Selection", href: "#contact", primary: true },
          { label: "View Portfolio", href: "#projects" }
        ]
      }}
      services={{
        subtitle: "ARTISTIC CRAFT",
        title: "Premium Tiling Solutions",
        items: [
          {
            title: "Glass Mosaics",
            description: "Iridescent and translucent glass tiles that create a mesmerizing play of light under water.",
            icon: Sparkles,
            href: "#"
          },
          {
            title: "Italian Porcelain",
            description: "Large-format, slip-resistant porcelain tiles for a modern and seamless architectural look.",
            icon: Layers,
            href: "#"
          },
          {
            title: "Natural Stone Finish",
            description: "Hand-picked travertine and slate tiles for a natural, organic pool environment.",
            icon: Sun,
            href: "#"
          },
          {
            title: "Precision Grouting",
            description: "Advanced epoxy grouting systems that ensure watertight integrity and prevents discoloration.",
            icon: ShieldCheck,
            href: "#"
          }
        ]
      }}
      projects={{
        subtitle: "MOSAIC PORTFOLIO",
        title: "Iconic Tiled Masterpieces",
        description: "From intricate mosaics to large-format porcelain slabs, we create stunning underwater finishes that define luxury.",
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
        description: "Explore our curated collection of luxury pool tiles and mosaics. Consult with us today."
      }}
    />
  );
}
