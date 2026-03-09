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
        image: "https://images.pexels.com/photos/271815/pexels-photo-271815.jpeg"
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
        items: [
          {
            title: "Project 1",
            description: "Poolside Lounge Suite",
            image: "https://images.pexels.com/photos/3068519/pexels-photo-3068519.jpeg"
          },
          {
            title: "Project 2",
            description: "Terrace Dining Pavilion",
            image: "https://images.pexels.com/photos/14929512/pexels-photo-14929512.jpeg"
          },
          {
            title: "Project 3",
            description: "Modern Rooftop Deck",
            image: "https://images.pexels.com/photos/1036323/pexels-photo-1036323.jpeg"
          },
          {
            title: "Project 4",
            description: "Resort Cabana Furnishing",
            image: "https://images.pexels.com/photos/1662549/pexels-photo-1662549.jpeg"
          },
          {
            title: "Project 5",
            description: "Courtyard Sunroom",
            image: "https://images.pexels.com/photos/14917453/pexels-photo-14917453.jpeg"
          },
          {
            title: "Project 6",
            description: "Private Villa Veranda",
            image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg"
          }
        ]
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
