"use client";

import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
import { Sparkles, Wind, Droplet, Heart, Thermometer, UserCheck } from "lucide-react";

export default function SpaPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Luxury Wellness Environments",
        title: "Bespoke Hydrotherapy & <br/> Healing Sanctuaries",
        description: "Innovative wellness engineering for recovery and relaxation. We design professional-grade cold plunge pools, cryo rooms, and hydrotherapy suites for Asia's finest luxury resorts and private wellness estates.",
        image: "/services/spa.webp",

        actions: [
          { label: "Book Consultation", href: "#contact", primary: true },
          { label: "Explore Recovery Systems", href: "#" }
        ]
      }}
      services={{
        subtitle: "OUR WELLNESS EXPERTISE",
        title: "Hydrotherapy Pool Builder India",
        items: [
          {
            title: "Hydrotherapy & Vitality",
            description: "Custom-built Underwater Exercising Pools and Hydrotherapy systems for medical recovery and elite fitness.",
            icon: Heart,
            href: "#"
          },
          {
            title: "Cold Plunge Pools",
            description: "Where to buy a cold plunge pool in India? We design and manufacture custom ice bath systems for professional recovery.",
            icon: Droplet,
            href: "#"
          },
          {
            title: "Professional Cryo Rooms",
            description: "Bespoke Cryo Rooms and thermal recovery suites for wellness resorts and luxury residences.",
            icon: Thermometer,
            href: "#"
          },
          {
            title: "Sauna & Steam Setup",
            description: "Commercial sauna and steam room setup for hospitality and high-end wellness franchises.",
            icon: Wind,
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
