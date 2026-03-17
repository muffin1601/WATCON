import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
// import { Sparkles, Wind, Droplet, Heart, Thermometer } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Spa & Hydrotherapy Pool Construction India | Watcon",
  description: "Premier builders of vitality pools, hydrotherapy suites, and modern wellness retreats in India. Watcon provides professional spa engineering for 5-star hospitality and high-end residences.",
  alternates: {
    canonical: "https://watcon.co.in/services/spa",
  },
  keywords: [
    "hydrotherapy pool builder india",
    "luxury spa construction delhi",
    "vitality pool installation",
    "cold plunge pool manufacturer india",
    "wellness sanctuary designer",
    "commercial spa setup india"
  ],
  openGraph: {
    title: "Hydrotherapy & Healing Sanctuaries | Watcon International",
    description: "Innovative wellness engineering for recovery and relaxation since 1972.",
    images: ["/services/spa.webp"],
  }
};

export default function SpaPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Luxury Wellness Environments",
        title: "Hydrotherapy & <br/> Healing Sanctuaries",
        description: "Innovative wellness engineering for recovery and relaxation. We design professional-grade cold plunge pools, cryo rooms, and hydrotherapy suites for Asia's finest luxury resorts and private wellness estates.",
        image: "/services/spa%20(1).webp",
        actions: [
          { label: "Book Consultation", href: "/contact", primary: true },
          { label: "View Portfolio", href: "#projects" }
        ]

      }}
      services={{
        subtitle: "LUXURY WELLNESS",
        title: "Hydrotherapy & Spa Solutions",
        items: [
          {
            title: "Holistic Saunas",
            description: "Custom-built timber cabins using premium Canadian cedar and smart heating technology.",
            icon: "Thermometer",
            href: "/services/sauna"
          },
          {
            title: "Steam Suites",
            description: "Authentic Turkish Hammam designs with automated aromatherapy and high-performance vapor.",
            icon: "Wind",
            href: "/services/steam"
          },
          {
            title: "Private Jacuzzis",
            description: "Bespoke hydrotherapy tubs with specialized jet alignment for ultimate relaxation.",
            icon: "Bath",
            href: "/services/jacuzzi"
          },
          {
            title: "Cryo Recovery",
            description: "Advanced cryotherapy rooms and cold plunge pools for professional muscular recovery.",
            icon: "Zap",
            href: "/services/cryo-room"
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
      faqs={[
        {
          question: "Who is the leading hydrotherapy pool builder in India?",
          answer: "Watcon International is the leading hydrotherapy pool builder in India, specializing in vitality pools, rehabilitation centers, and high-performance aquatic recovery suites."
        },
        {
          question: "Can you design a luxury spa for a home in Delhi?",
          answer: "Yes, we are premier luxury spa construction specialists in Delhi. We design and build high-end wellness sanctuaries including vitality pools, cryo rooms, and thermal suites for elite residences."
        },
        {
          question: "What is a vitality pool installation?",
          answer: "A vitality pool installation involves a specialized hydrotherapy pool equipped with air and water jets, massage stations, and bubble beds designed to promote relaxation and muscle recovery."
        },
        {
          question: "Do you handle commercial spa setups for hotels?",
          answer: "Yes, Watcon is a top contractor for commercial spa setup in India, providing end-to-end engineering for 5-star hotel spas, wellness resorts, and high-end fitness franchises."
        }
      ]}
    />

  );
}

