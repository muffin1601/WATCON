import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
// import { Sofa, Sun, ShieldCheck, Heart } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Outdoor Furniture India | Designer Poolside Seating Delhi",
  description: "Watcon International provides curated, weather-resistant outdoor furniture for luxury homes, terraces, and 5-star resorts in India. Explore our designer loungers, marine-grade sofas, and premium garden dining sets.",
  alternates: {
    canonical: "https://watcon.co.in/services/outdoor-furniture/",
  },
  keywords: [
    "luxury outdoor furniture india",
    "designer poolside loungers delhi",
    "garden furniture for luxury homes",
    "marine grade outdoor sofas india",
    "weather resistant furniture delhi ncr",
    "premium terrace furniture india",
    "outdoor dining sets for hotels"
  ],
  openGraph: {
    title: "Curated Luxury Outdoor Furniture | Watcon International",
    description: "Transform your terraces and pool decks into sophisticated living spaces with weather-resistant, designer outdoor furniture.",
    images: ["/services/outdoorfurniture.webp"],
  }
};

export default function OutdoorFurniturePage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Alfresco Living",
        title: "Curated Luxury Outdoor Furniture",
        description: "Transform your terraces and pool decks into sophisticated living spaces. We provide weather-resistant, designer outdoor furniture that blends comfort with high-end aesthetics, tailored for India's elite residential landscapes.",
        image: "/services/outdoorfurniture.webp",
        actions: [
          { label: "View Collection", href: "#projects", primary: true },
          { label: "Consult Curator", href: "/contact" }
        ]

      }}
      services={{
        subtitle: "LIFESTYLE CURATION",
        title: "Outdoor Living Solutions",
        items: [
          {
            title: "Outdoor Fireplaces",
            description: "Custom masonry and stone fireplaces that serve as the focal point of your outdoor lounge area.",
            icon: "Flame",
            href: "/services/outdoor-fireplaces"
          },
          {
            title: "Swimming Pools",
            description: "Luxury residential pools and infinity edge designs that provide the perfect backdrop for your outdoor furniture.",
            icon: "Waves",
            href: "/services/swimming-pools"
          },
          {
            title: "Koi Ponds",
            description: "Natural garden ponds with advanced biological filtration, creating a serene environment for your outdoor living space.",
            icon: "Fish",
            href: "/services/koi-ponds"
          },
          {
            title: "Water Bodies",
            description: "Architectural water features and musical fountains that enhance the ambiance of your luxury alfresco terrace.",
            icon: "Waves",
            href: "/services/water-bodies"
          }
        ]
      }}
      projects={{
        subtitle: "LEISURE PORTFOLIO",
        title: "Iconic Living Spaces",
        description: "Sophisticated outdoor furniture arrangements that redefine alfresco comfort and style in premium properties.",
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
        title: "Elevate Your Outdoor Lifestyle",
        description: "Consult with our outdoor curators to select your perfect designer furniture suite. Contact us for a personalized catalog."
      }}
      faqs={[
        {
          question: "Where can I find luxury outdoor furniture in India?",
          answer: "Watcon International provides a curated collection of luxury outdoor furniture in India, featuring high-end designs and marine-grade materials suitable for the most exclusive residences and hotels."
        },
        {
          question: "What is marine-grade outdoor furniture?",
          answer: "Marine-grade outdoor furniture is built with materials like 316-grade stainless steel, powder-coated aluminum, and weather-resistant fabrics that are designed to withstand extreme sunlight, rain, and humidity without corroding or fading."
        },
        {
          question: "Do you provide designer poolside loungers in Delhi?",
          answer: "Yes, we offer a range of designer poolside loungers in Delhi, crafted for both aesthetic appeal and ergonomic comfort, making them the perfect addition to any luxury pool area."
        },
        {
          question: "Is your garden furniture truly weather-resistant for India?",
          answer: "Absolutely. Our garden furniture is specifically curated for India's harsh climate. We use UV-resistant fibers and quick-dry foams ensure your investment stays beautiful and functional for years."
        }
      ]}
    />

  );
}

