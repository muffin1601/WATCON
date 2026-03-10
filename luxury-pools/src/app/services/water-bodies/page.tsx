"use client";

import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
import { Waves, Droplet, Sun, Flower2, Layers, Anchor } from "lucide-react";

export default function WaterBodiesPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Aquatic Artistry",
        title: "Experimental Water Bodies & Fountains",
        description: "From tranquil reflecting pools to dramatic architectural fountains, we create water features that define the character of your space.",
        image: "https://images.pexels.com/photos/12715508/pexels-photo-12715508.jpeg",
        stats: [
          { label: "Water Features", value: "120+" },
          { label: "Bespoke Designs", value: "100%" },
          { label: "Years Mastery", value: "20+" }
        ],
        actions: [
          { label: "Request Design", href: "#contact", primary: true },
          { label: "View Portfolio", href: "#projects" }
        ]
      }}
      services={{
        subtitle: "OUR SERVICES",
        title: "Crafting Liquid Masterpieces",
        items: [
          {
            title: "Architectural Fountains",
            description: "Dynamic water displays featuring advanced nozzle tech and choreographed lighting.",
            icon: Waves,
            href: "#"
          },
          {
            title: "Reflecting Pools",
            description: "Silent, mirror-like water surfaces that complement modern architecture.",
            icon: Layers,
            href: "#"
          },
          {
            title: "Cascading Waterfalls",
            description: "Naturalistic and modern waterfall designs for indoor and outdoor settings.",
            icon: Droplet,
            href: "#"
          },
          {
            title: "Lake Management",
            description: "Comprehensive solutions for larger water bodies, ensuring ecological balance.",
            icon: Anchor,
            href: "#"
          }
        ]
      }}
      projects={{
        subtitle: "AQUATIC PORTFOLIO",
        title: "Selected Water Features",
        items: [
          {
            title: "Project 1",
            description: "Corporate Plaza Fountain",
            image: "https://images.pexels.com/photos/271815/pexels-photo-271815.jpeg"
          },
          {
            title: "Project 2",
            description: "Zen Reflecting Pond",
            image: "https://images.pexels.com/photos/14917453/pexels-photo-14917453.jpeg"
          },
          {
            title: "Project 3",
            description: "Infinite Cascade Wall",
            image: "https://images.pexels.com/photos/1662549/pexels-photo-1662549.jpeg"
          },
          {
            title: "Project 4",
            description: "Sculptural Water Piece",
            image: "https://images.pexels.com/photos/3068519/pexels-photo-3068519.jpeg"
          },
          {
            title: "Project 5",
            description: "Estate Entrance Waterway",
            image: "https://images.pexels.com/photos/14929512/pexels-photo-14929512.jpeg"
          },
          {
            title: "Project 6",
            description: "Interior Atrium Cascade",
            image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg"
          }
        ]
      }}
      testimonials={{
        subtitle: "CLIENT FEEDBACK",
        title: "Impact of Water Design",
        items: [
          {
            name: "Robert H.",
            role: "Commercial Developer",
            avatar: "https://i.pravatar.cc/150?u=robert",
            content: "The fountain they built for our plaza has become a local landmark. Incredible engineering.",
            rating: 5
          },
          {
            name: "Lisa V.",
            role: "Landscape Architect",
            avatar: "https://i.pravatar.cc/150?u=lisa",
            content: "They understand the play of light on water perfectly. A true asset to our design team.",
            rating: 5
          },
          {
            name: "Kevin S.",
            role: "Private Homeowner",
            avatar: "https://i.pravatar.cc/150?u=kevin",
            content: "The reflecting pool adds a level of peace to our home that we never thought possible.",
            rating: 5
          }
        ]
      }}
      contact={{
        title: "Elevate Your Landscape with Water",
        description: "Let's discuss how a custom water feature can transform your environment."
      }}
    />
  );
}
