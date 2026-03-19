import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
// import { Wind, Droplets, Settings, Thermometer } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indoor Pool Dehumidification Systems India | Climate Control Experts",
  description: "Watcon International provides high-performance dehumidification and air handling systems for indoor swimming pools and luxury spas in India. Protect your property from moisture damage and ensure hospital-grade air quality.",
  alternates: {
    canonical: "https://watcon.co.in/services/dehumidifier",
  },
  keywords: [
    "indoor pool dehumidification india",
    "swimming pool air handling units delhi",
    "pool room climate control system",
    "moisture control for indoor pools",
    "commercial dehumidifier for spa india",
    "swimming pool ventilation experts delhi",
    "humidity control for swimming pools"
  ],
  openGraph: {
    title: "Dehumidification & Climate Control | Watcon International",
    description: "High-performance air handling systems ensure perfect comfort and structural longevity for indoor pool environments.",
    images: ["/services/dehumidifier.webp"],
  }
};

export default function DehumidifierPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Precision Climate Control",
        title: "Dehumidification & Air Quality",
        description: "Protect your luxury indoor pool and spa areas from moisture damage. We design high-performance air handling systems that ensure perfect comfort and structural longevity for India's most exclusive residences and aquatic centers.",
        image: "/services/dehumidifier%20(1).webp",
        actions: [
          { label: "Consult Expert", href: "/contact", primary: true },
          { label: "View Our Work", href: "#projects" }
        ]

      }}
      services={{
        subtitle: "AIR MASTERY",
        title: "Advanced HVAC Solutions",
        items: [
          {
            title: "Indoor Pools",
            description: "High-capacity humidity control for indoor swimming pools, protecting your luxury interior from moisture damage.",
            icon: "Droplets",
            href: "/services/swimming-pools"
          },
          {
            title: "Wellness Spas",
            description: "Specialized air handling for commercial spa environments, ensuring comfort in high-vapor steam and sauna suites.",
            icon: "Wind",
            href: "/services/spa"
          },
          {
            title: "Performance Arenas",
            description: "Commercial-grade climate solutions for Olympic-sized competition pools and large-scale sports institutions.",
            icon: "Waves",
            href: "/services/competition-pool"
          },
          {
            title: "Thermal Control",
            description: "Precision temperature management for dedicated recovery zones including cryo rooms and private whirlpools.",
            icon: "Thermometer",
            href: "/services/cryo-room"
          }
        ]
      }}
      projects={{
        subtitle: "ENGINEERING PROJECTS",
        title: "Climate Control Installations",
        description: "Engineered for performance, our dehumidification systems maintain perfect air quality in the most demanding aquatic environments.",
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
        title: "Master Your Indoor Atmosphere",
        description: "Consult with our air quality experts to design a custom climate control system for your luxury property. Get a professional quote today."
      }}
      faqs={[
        {
          question: "Why is indoor pool dehumidification important in India?",
          answer: "Indoor pool dehumidification is critical in India's climate to prevent high humidity from causing mold, structural corrosion, and unhealthy air quality. A dedicated system protects your luxury investment and ensures bather comfort."
        },
        {
          question: "Who are the experts in swimming pool ventilation in Delhi?",
          answer: "Watcon International is recognized as the leading swimming pool ventilation expert in Delhi. We design and install specialized air handling units (AHUs) tailored specifically for the high moisture loads of indoor aquatic environments."
        },
        {
          question: "What is a pool room climate control system?",
          answer: "A pool room climate control system is an integrated HVAC solution that manages air temperature, water temperature, and humidity levels simultaneously to create a stable, comfortable environment and protect the building's integrity."
        },
        {
          question: "Do you provide commercial dehumidifiers for spas in India?",
          answer: "Yes, we supply and install high-capacity commercial dehumidifiers for spas and wellness centers across India, ensuring that high-vapor environments remain comfortable and moisture-free."
        }
      ]}
    />

  );
}

