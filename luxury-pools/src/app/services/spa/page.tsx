"use client";

import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
import { Sparkles, Wind, Droplet, Heart, Thermometer, UserCheck } from "lucide-react";

export default function SpaPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Sanctuary of Wellness",
        title: "Bespoke Spa & Wellness Environments",
        description: "Experience the pinnacle of restoration with our custom-designed spa solutions, from aromatic steam rooms to detoxifying saunas.",
        image: "/services/spa.webp",

        actions: [
          { label: "Book Consultation", href: "#contact", primary: true },
          { label: "Explore Features", href: "#" }
        ]
      }}
      services={{
        subtitle: "OUR EXPERTISE",
        title: "Comprehensive Spa Solutions",
        items: [
          {
            title: "Steam & Sauna",
            description: "Custom-built thermal rooms designed for detoxification and mental clarity.",
            icon: Wind,
            href: "#"
          },
          {
            title: "Vitality Pools",
            description: "Temperature-controlled aquatic environments with advanced filtration.",
            icon: Droplet,
            href: "#"
          },
          {
            title: "Cryotherapy Rooms",
            description: "State-of-the-art cold therapy installations for recovery and rejuvenation.",
            icon: Thermometer,
            href: "#"
          },
          {
            title: "Wellness Consulting",
            description: "Expert guidance on designing human-centric wellness spaces.",
            icon: UserCheck,
            href: "#"
          }
        ]
      }}
      projects={{
        subtitle: "WELLNESS PORTFOLIO",
        title: "Premier Spa Installations",
        description: "Immersive wellness environments designed to provide the ultimate sanctuary for health and relaxation.",
        items: [
          {
            title: "Project 1",
            description: "Floating Forest Spa",
            image: "/services/spa%20(1).webp",
            badge: "Premium"
          },
          {
            title: "Project 2",
            description: "Minimalist Zen Retreat",
            image: "/services/spa%20(2).webp",
            badge: "Signature"
          },
          {
            title: "Project 3",
            description: "Urban Sanctuary",
            image: "/services/spa%20(3).webp",
            badge: "Exclusive"
          },
          {
            title: "Project 4",
            description: "Mountain Vista Wellness",
            image: "/services/spa%20(4).webp",
            badge: "Popular"
          },
          {
            title: "Project 5",
            description: "Desert Oasis Spa",
            image: "/services/spa%20(5).webp",
            badge: "Service"
          },
          {
            title: "Project 6",
            description: "Coastal Vitality Suite",
            image: "/services/spa.webp",
            badge: "Urban"
          }
        ],
        cta: {
          label: "Request a Custom Design"
        }
      }}
      testimonials={{
        subtitle: "HEALING STORIES",
        title: "Feedback from Wellness Enthusiasts",
        items: [
          {
            name: "Sophia L.",
            role: "Lifestyle Blogger",
            avatar: "https://i.pravatar.cc/150?u=sophia",
            content: "Watcon transformed our basement into a world-class spa. The attention to detail is breathtaking.",
            rating: 5
          },
          {
            name: "David W.",
            role: "Professional Athlete",
            avatar: "https://i.pravatar.cc/150?u=david",
            content: "The cryotherapy room has been a game-changer for my recovery routine. Simply exceptional.",
            rating: 5
          },
          {
            name: "Elena G.",
            role: "Hotelier",
            avatar: "https://i.pravatar.cc/150?u=elena",
            content: "Our guests consistently rate the spa as the highlight of their stay. A truly professional partner.",
            rating: 5
          }
        ]
      }}
      contact={{
        title: "Begin Your Wellness Transformation",
        description: "Consult with our experts to design your private sanctuary."
      }}
    />
  );
}
