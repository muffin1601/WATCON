"use client";

import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
import { Sofa, Sun, Wind, ShieldCheck, Settings, Heart } from "lucide-react";

export default function OutdoorFurniturePage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Alfresco Living",
        title: "Curated Luxury Outdoor Furniture",
        description: "Transform your terraces and pool decks into sophisticated living spaces. We provide weather-resistant, designer outdoor furniture that blends comfort with high-end aesthetics.",
        image: "/services/outdoorfurniture.webp",
        stats: [
          { label: "Designer Projects", value: "2500+" },
          { label: "Clients Served", value: "1000+" },
          { label: "Design Mastery", value: "50+ Yrs" }
        ],
        actions: [
          { label: "View Collection", href: "#projects", primary: true },
          { label: "Consult Curator", href: "#contact" }
        ]
      }}
      services={{
        subtitle: "LIFESTYLE CURATION",
        title: "Outdoor Living Solutions",
        items: [
          {
            title: "Designer Seating",
            description: "From luxury loungers to sectional sofas, built with marine-grade materials.",
            icon: Sofa,
            href: "#"
          },
          {
            title: "Dining Sets",
            description: "Elegant outdoor dining solutions designed for hospitality and private villas.",
            icon: Sun,
            href: "#"
          },
          {
            title: "Weather Resistance",
            description: "Advanced fabric tech and UV-resistant frames that withstand extreme climates.",
            icon: ShieldCheck,
            href: "#"
          },
          {
            title: "Custom Accessories",
            description: "Coordinated cushions, rugs, and shading solutions to complete your look.",
            icon: Heart,
            href: "#"
          }
        ]
      }}
      projects={{
        subtitle: "LEISURE PORTFOLIO",
        title: "Iconic Living Spaces",
        description: "Sophisticated outdoor furniture arrangements that redefine alfresco comfort and style.",
        items: [
          {
            title: "Project 1",
            description: "Poolside Lounge Suite",
            image: "/services/outdoorfurniture%20(1).webp",
            badge: "Premium"
          },
          {
            title: "Project 2",
            description: "Terrace Dining Pavilion",
            image: "/services/outdoorfurniture%20(2).webp",
            badge: "Signature"
          },
          {
            title: "Project 3",
            description: "Modern Rooftop Deck",
            image: "/services/outdoorfurniture%20(3).webp",
            badge: "Exclusive"
          },
          {
            title: "Project 4",
            description: "Resort Cabana Furnishing",
            image: "/services/outdoorfurniture%20(4).webp",
            badge: "Popular"
          },
          {
            title: "Project 5",
            description: "Courtyard Sunroom",
            image: "/services/outdoorfurniture%20(5).webp",
            badge: "Service"
          },
          {
            title: "Project 6",
            description: "Private Villa Veranda",
            image: "/services/outdoorfurniture.webp",
            badge: "Urban"
          }
        ],
        cta: {
          label: "Request a Custom Design"
        }
      }}
      testimonials={{
        subtitle: "LIVING TESTIMONIALS",
        title: "Comfort & Style Reviews",
        items: [
          {
            name: "Isabella V.",
            role: "Landscape Designer",
            avatar: "https://i.pravatar.cc/150?u=isabellav",
            content: "The quality of the teak and the performance fabrics Watcon uses are the best in the market.",
            rating: 5
          },
          {
            name: "Peter M.",
            role: "Hotel Manager",
            avatar: "https://i.pravatar.cc/150?u=peterm",
            content: "Our poolside furniture still looks brand new after three seasons of heavy use. Impeccable quality.",
            rating: 5
          },
          {
            name: "Diana S.",
            role: "Homeowner",
            avatar: "https://i.pravatar.cc/150?u=dianas",
            content: "They helped us select a set that perfectly matches our pool design. It's like an extra room for our home.",
            rating: 5
          }
        ]
      }}
      contact={{
        title: "Elevate Your Outdoor Vision",
        description: "Consult with our outdoor lifestyle curators to select your perfect furniture suite."
      }}
    />
  );
}
