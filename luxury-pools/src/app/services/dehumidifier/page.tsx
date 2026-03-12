"use client";

import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
import { Wind, Droplets, Settings, ShieldCheck, Thermometer, Zap } from "lucide-react";

export default function DehumidifierPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Precision Climate Control",
        title: "Bespoke Dehumidification & Air Quality",
        description: "Protect your luxury indoor pool and spa areas from moisture damage. We design high-performance air handling systems that ensure perfect comfort and structural longevity.",
        image: "/services/dehumidifier.webp",
        stats: [
          { label: "Systems Installed", value: "2500+" },
          { label: "Moisture Control", value: "100%" },
          { label: "Expert Craft", value: "50+ Yrs" }
        ],
        actions: [
          { label: "Consult Expert", href: "#contact", primary: true },
          { label: "Learn More", href: "#" }
        ]
      }}
      services={{
        subtitle: "AIR MASTERY",
        title: "Advanced HVAC Solutions",
        items: [
          {
            title: "Moisture Extraction",
            description: "High-capacity systems designed to control humidity levels in demanding indoor pool environments.",
            icon: Droplets,
            href: "#"
          },
          {
            title: "Thermal Comfort",
            description: "Integrated heating and cooling that maintains a perfect air-to-water temperature balance.",
            icon: Thermometer,
            href: "#"
          },
          {
            title: "Air Purification",
            description: "Advanced filtration that removes chlorine odors and ensures hospital-grade air quality.",
            icon: Wind,
            href: "#"
          },
          {
            title: "Smart Monitoring",
            description: "24/7 automated climate monitoring with remote control and energy-saving modes.",
            icon: Settings,
            href: "#"
          }
        ]
      }}
      projects={{
        subtitle: "ENGINEERING PROJECTS",
        title: "Climate Control Installations",
        items: [
          {
            title: "Project 1",
            description: "Indoor Olympic Center",
            image: "/services/dehumidifier%20(1).webp",
            badge: "Premium"
          },
          {
            title: "Project 2",
            description: "Luxury Hotel Wellness Wing",
            image: "/services/dehumidifier%20(2).webp",
            badge: "Signature"
          },
          {
            title: "Project 3",
            description: "Private Mansion Pool Suite",
            image: "/services/dehumidifier%20(3).webp",
            badge: "Exclusive"
          },
          {
            title: "Project 4",
            description: "Public Aquatic Arena",
            image: "/services/dehumidifier%20(4).webp",
            badge: "Popular"
          },
          {
            title: "Project 5",
            description: "High-Tech Recovery Lab",
            image: "/services/dehumidifier%20(5).webp",
            badge: "Service"
          },
          {
            title: "Project 6",
            description: "Commercial Spa Complex",
            image: "/services/dehumidifier.webp",
            badge: "Urban"
          }
        ],
        cta: {
          label: "Request a Custom Design"
        }
      }}
      testimonials={{
        subtitle: "ENGINEER TESTIMONIALS",
        title: "Professional System Reviews",
        items: [
          {
            name: "Gary H.",
            role: "HVAC Engineer",
            avatar: "https://i.pravatar.cc/150?u=garyh",
            content: "The static pressure management in Watcon's air handling units is incredible. Not a single drop of condensation.",
            rating: 5
          },
          {
            name: "Rebecca L.",
            role: "Commercial Manager",
            avatar: "https://i.pravatar.cc/150?u=rebeccal",
            content: "We were having issues with chlorine smells in the lobby. Their air purification system fixed it overnight.",
            rating: 5
          },
          {
            name: "Tom R.",
            role: "Homeowner",
            avatar: "https://i.pravatar.cc/150?u=tomr",
            content: "I can finally keep the pool area open without the rest of the house feeling humid. A silent and powerful system.",
            rating: 5
          }
        ]
      }}
      contact={{
        title: "Master Your Environment",
        description: "Consult with our air quality experts to design a system for your high-humidity space."
      }}
    />
  );
}
