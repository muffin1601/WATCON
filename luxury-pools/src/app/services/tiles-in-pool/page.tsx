"use client";

import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
import { Layers, Sparkles, Droplets, ShieldCheck, Sun, Settings } from "lucide-react";

export default function TilesInPoolPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Best Tiles for Swimming Pools in India",
        title: "Exquisite Bisazza Glass Mosaics & <br/> Pool Tiling",
        description: "Transform your pool into a radiant work of art with Bisazza Glass Mosaic tiles. Watcon International specializes in high-end pool finishes that capture light and elevate your aquatic experience with hospital-grade durability.",
        image: "/services/tilespool (1).webp",

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
            title: "Glass Mosaic Tiles",
            description: "Iridescent and translucent glass tiles that create a mesmerizing play of light under water.",
            icon: Sparkles,
            href: "#"
          },
          {
            title: "Large Format Tiles",
            description: "Expansive, slip-resistant large format tiles for a modern, seamless, and luxurious architectural look.",
            icon: Layers,
            href: "#"
          },
          {
            title: "Porcelain Tiles",
            description: "High-end, durable porcelain tiles designed to withstand the elements while maintaining supreme elegance.",
            icon: Sun,
            href: "#"
          },
          {
            title: "Designer Tiles",
            description: "Custom, hand-picked designer tiles arranged to create entirely unique and breathtaking pool aesthetics.",
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
