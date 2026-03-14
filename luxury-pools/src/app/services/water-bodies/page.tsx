"use client";

import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
import { Waves, Droplet, Sun, Flower2, Layers, Anchor } from "lucide-react";

export default function WaterBodiesPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Aquatic Artistry",
        title: "Bespoke Water Bodies & Architectural Fountains",
        description: "From tranquil reflecting pools to dramatic architectural fountains, we create water features that define the soul of your landscape. Engineering beauty since 1974.",
        image: "/services/wb-hero.png",

      }}
      services={{
        subtitle: "OUR EXPERTISE",
        title: "Crafting Liquid Masterpieces",
        items: [
          {
            title: "Architectural Fountains",
            description: "Grand, choreographed water displays featuring advanced nozzle technology and artistic lighting.",
            icon: Waves,
            href: "#"
          },
          {
            title: "Reflecting Pools",
            description: "Minimalist, mirror-like water surfaces that bring serenity and architectural depth to any space.",
            icon: Layers,
            href: "#"
          },
          {
            title: "Cascading Waterfalls",
            description: "Dynamic vertical water features designed for both dramatic impact and soothing acoustics.",
            icon: Droplet,
            href: "#"
          },
          {
            title: "Bio-Pools & Ponds",
            description: "Sustainable, ecologically balanced water bodies that blend seamlessly with the natural environment.",
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
            image: "/services/wb-hero.png",
            badge: "Premium"
          },
          {
            title: "Zen Reflecting Pond",
            description: "Tranquil Sanctuary",
            image: "/services/wb-reflecting.png",
            badge: "Signature"
          },
          {
            title: "Infinite Cascade Wall",
            description: "Modern Vertical Feature",
            image: "/services/wb-cascade.png",
            badge: "Exclusive"
          },
          {
            title: "Estate Entrance Water",
            description: "Grand Entryway",
            image: "/services/wb-entrance.png",
            badge: "Popular"
          },
          {
            title: "Interior Atrium Flow",
            description: "Indoor Oasis",
            image: "/services/wb-zen.png",
            badge: "Service"
          },
          {
            title: "Biological Luxury Pond",
            description: "Natural Ecosystem",
            image: "/services/wb-bio.png",
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
