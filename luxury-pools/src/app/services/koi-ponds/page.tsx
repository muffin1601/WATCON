"use client";

import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
import { Flower2, Droplet, Sun, Waves, Settings, Heart } from "lucide-react";

export default function KoiPondsPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Ecosystems of Serenity",
        title: "Bespoke Koi Ponds & Ecosystems",
        description: "Create a living masterpiece in your garden. Our koi ponds are engineered with advanced life support systems for crystal clear water and healthy aquatic life.",
        image: "/services/koiponds%20(1).webp",
        stats: [
          { label: "Ponds Built", value: "2500+" },
          { label: "Healthy Ecosystems", value: "100%" },
          { label: "Years Experience", value: "50+" }
        ],
        actions: [
          { label: "Consult an Expert", href: "#contact", primary: true },
          { label: "View Ponds", href: "#projects" }
        ]
      }}
      services={{
        subtitle: "LIVING WATER",
        title: "Koi & Ecosystem Specialists",
        items: [
          {
            title: "Pond Engineering",
            description: "Precision-designed ponds featuring bottom drains and skimmers for optimal flow.",
            icon: Waves,
            href: "#"
          },
          {
            title: "Filtration Systems",
            description: "State-of-the-art biological and mechanical filtration for ultra-clear water.",
            icon: Settings,
            href: "#"
          },
          {
            title: "Aquatic Landscaping",
            description: "Natural stone placements and aquatic planting to create a harmonious ecosystem.",
            icon: Flower2,
            href: "#"
          },
          {
            title: "Bio-Security",
            description: "Systems designed to keep your valuable koi safe and healthy year-round.",
            icon: Heart,
            href: "#"
          }
        ]
      }}
      projects={{
        subtitle: "RECENT ECOSYSTEMS",
        title: "Selected Ponds & Lakes",
        description: "From traditional Japanese ponds to modern infinity pools, our koi ponds are designed to be the centerpiece of your garden.",
        items: [
          {
            title: "Project 1",
            description: "Traditional Japanese Koi Pond",
            image: "/services/koiponds%20(1).webp",
            badge: "Premium"
          },
          {
            title: "Project 2",
            description: "Modern Infinity Pond",
            image: "/services/koiponds%20(2).webp",
            badge: "Signature"
          },
          {
            title: "Project 3",
            description: "Courtyard Reflection Pond",
            image: "/services/koiponds%20(3).webp",
            badge: "Exclusive"
          },
          {
            title: "Project 4",
            description: "Large Estate Lake",
            image: "/services/koiponds%20(4).webp",
            badge: "Popular"
          },
          {
            title: "Project 5",
            description: "Indoor Atrium Pond",
            image: "/services/koiponds%20(5).webp",
            badge: "Service"
          },
          {
            title: "Project 6",
            description: "Waterfall-Fed Pond",
            image: "/services/koiponds%20(6).webp",
            badge: "Urban"
          }
        ],
        cta: {
          label: "Request a Custom Design"
        }
      }}
      testimonials={{
        subtitle: "LIVING TESTIMONIALS",
        title: "Stories from the Water Edge",
        items: [
          {
            name: "Masao T.",
            role: "Collector",
            avatar: "https://i.pravatar.cc/150?u=masao",
            content: "Watcon's understanding of water chemistry is unmatched. My koi have never been healthier.",
            rating: 5
          },
          {
            name: "Sarah M.",
            role: "Garden Designer",
            avatar: "https://i.pravatar.cc/150?u=sarah",
            content: "They blend technical necessity with pure art. The pond detail is the soul of our garden.",
            rating: 5
          },
          {
            name: "William J.",
            role: "Nature Lover",
            avatar: "https://i.pravatar.cc/150?u=william",
            content: "Sitting by the pond they built is the most peaceful part of my day. A true masterpiece.",
            rating: 5
          }
        ]
      }}
      contact={{
        title: "Start Your Living Water Journey",
        description: "Let's design a sustainable and beautiful koi pond for your home."
      }}
    />
  );
}
