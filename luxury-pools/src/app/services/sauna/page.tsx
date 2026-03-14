"use client";

import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
import { Wind, Thermometer, Sparkles, Settings, Timer, ShieldCheck } from "lucide-react";

export default function SaunaPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Traditional Detoxification",
        title: "Bespoke Sauna & Heat Therapy",
        description: "Experience the timeless ritual of sauna therapy. Our custom-built timber saunas use premium Canadian cedar and smart heating technology for a perfect detox.",
        image: "/services/sauna.webp",

        actions: [
          { label: "Get Free Quote", href: "#contact", primary: true },
          { label: "View Designs", href: "#projects" }
        ]
      }}
      services={{
        subtitle: "THERMAL MASTERY",
        title: "Traditional & Modern Saunas",
        items: [
          {
            title: "Traditional Finnish",
            description: "Authentic wood-lined saunas with lava stone heaters for high-heat detoxification.",
            icon: Wind,
            href: "#"
          },
          {
            title: "Infrared Technology",
            description: "Modern infrared heaters that penetrate deep into muscles at a lower ambient temperature.",
            icon: Thermometer,
            href: "#"
          },
          {
            title: "Custom Timber Work",
            description: "Hand-picked Canadian Cedar and Hemlock wood for superior durability and aroma.",
            icon: Settings,
            href: "#"
          },
          {
            title: "Smart Controls",
            description: "Programmable sessions with integrated lighting and audio systems.",
            icon: Sparkles,
            href: "#"
          }
        ]
      }}
      projects={{
        subtitle: "RECENT INSTALLATIONS",
        title: "Iconic Sauna Projects",
        description: "Crafted with precision and premium timber, explore our collection of traditional and modern saunas.",
        items: [
          {
            title: "Project 1",
            description: "Panoramic Glass Sauna",
            image: "/services/sauna%20(1).webp",
            badge: "Premium"
          },
          {
            title: "Project 2",
            description: "Minimalist Hemlock Suite",
            image: "/services/sauna%20(2).webp",
            badge: "Signature"
          },
          {
            title: "Project 3",
            description: "Outdoor Garden Sauna",
            image: "/services/sauna%20(3).webp",
            badge: "Exclusive"
          },
          {
            title: "Project 4",
            description: "Luxury Hotel Spa",
            image: "/services/sauna%20(4).webp",
            badge: "Popular"
          },
          {
            title: "Project 5",
            description: "Penthouse Private Suite",
            image: "/services/sauna%20(5).webp",
            badge: "Service"
          },
          {
            title: "Project 6",
            description: "Classic Cedar Cabin",
            image: "/services/sauna.webp",
            badge: "Urban"
          }
        ],
        cta: {
          label: "Request a Custom Design"
        }
      }}
      testimonials={{
        subtitle: "MEMBER STORIES",
        title: "The Heat Experience",
        items: [
          {
            name: "Mark S.",
            role: "Villa Owner",
            avatar: "https://i.pravatar.cc/150?u=mark",
            content: "The aroma of the cedar and the consistent heat levels are professional grade. A brilliant build.",
            rating: 5
          },
          {
            name: "Jasmine T.",
            role: "Spa Manager",
            avatar: "https://i.pravatar.cc/150?u=jasmine",
            content: "Watcon's craftsmanship in timber work is evident. Our guests love the new sauna design.",
            rating: 5
          },
          {
            name: "Richard K.",
            role: "Wellness Advocate",
            avatar: "https://i.pravatar.cc/150?u=richard",
            content: "I've visited saunas globally, and this private installation matches the best I've seen in Finland.",
            rating: 5
          }
        ]
      }}
      contact={{
        title: "Design Your Thermal Retreat",
        description: "Incorporate a bespoke sauna into your wellness routine. Contact us for a quote."
      }}
    />
  );
}
