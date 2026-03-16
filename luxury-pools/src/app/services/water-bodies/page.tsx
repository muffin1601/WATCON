"use client";

import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
import { Waves, Droplet, Sun, Flower2, Layers, Anchor } from "lucide-react";

export default function WaterBodiesPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Official Oase Fountain Partner Delhi",
        title: "India's Best Musical Fountain Maker",
        description: "Official partners for Oase Fountain Technology. We design the best musical fountains in India, combining synchronized light and sound for public parks, hotels, and luxury commercial spaces.",
        image: "/services/waterbodies (2).jpeg",
      }}
      services={{
        subtitle: "AQUATIC SHOW Engineering",
        title: "Fountains & Water Features",
        items: [
          {
            title: "Musical Fountain India",
            description: "We are the best musical fountain maker in India, creating synchronized water and light shows for prestige landmarks.",
            icon: Waves,
            href: "#"
          },
          {
            title: "Oase Fountain Maker Delhi",
            description: "Authorized Oase fountain maker in Delhi, utilizing globally recognized technology for architectural water features.",
            icon: Layers,
            href: "#"
          },
          {
            title: "Programmable Features",
            description: "Cutting-edge programmable water features with digital control systems for hotels and public landscapes.",
            icon: Droplet,
            href: "#"
          },
          {
            title: "Architectural Landscapes",
            description: "Design and execution of large-scale resort water bodies and luxury architectural waterfalls across India.",
            icon: Anchor,
            href: "#"
          }
        ]
      }}
      projects={{
        subtitle: "AQUATIC PORTFOLIO",
        title: "Stunning Water Features",
        description: "Explore our collection of world-class water bodies and architectural fountains.",
        items: [
          {
            title: "Corporate Grand Fountain",
            description: "Architectural Landmark",
            image: "/services/waterbodies (1).jpeg",
            badge: "Premium"
          },
          {
            title: "Zen Reflecting Pond",
            description: "Tranquil Sanctuary",
            image: "/services/waterbodies (3).jpeg",
            badge: "Signature"
          },
          {
            title: "Infinite Cascade Wall",
            description: "Modern Vertical Feature",
            image: "/services/waterbodies (4).jpeg",
            badge: "Exclusive"
          },
          {
            title: "Estate Entrance Water",
            description: "Grand Entryway",
            image: "/services/waterbodies (5).jpeg",
            badge: "Popular"
          },
          {
            title: "Interior Atrium Flow",
            description: "Indoor Oasis",
            image: "/services/waterbodies (6).jpeg",
            badge: "Service"
          },
          {
            title: "Biological Luxury Pond",
            description: "Natural Ecosystem",
            image: "/services/waterbodies (7).jpeg",
            badge: "Urban"
          }
        ],
        cta: {
          label: "Design Your Water Feature"
        }
      }}
      testimonials={{
        subtitle: "CLIENT STORIES",
        title: "What Our Clients Say",
        items: [] 
      }}
      contact={{
        title: "Ready to Elevate Your Space?",
        description: "Contact us for a bespoke water feature consultation."
      }}
    />
  );
}
