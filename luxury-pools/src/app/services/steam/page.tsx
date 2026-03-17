import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
// import { Cloud, Droplets, Bath } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Steam Room & Turkish Hammam Builders India | Watcon",
  description: "Design your private sanctuary with Watcon's custom steam rooms and traditional Turkish hammams. We combine high-performance steam generation with exquisite mosaic artistry for luxury homes and resorts.",
  alternates: {
    canonical: "https://watcon.co.in/services/steam",
  },
  keywords: [
    "steam room builder india",
    "turkish hammam construction india",
    "custom steam room maker delhi",
    "luxury wellness spa builders",
    "commercial steam room setup india",
    "hammam design and installation"
  ],
  openGraph: {
    title: "Steam Rooms & Turkish Baths | Watcon International",
    description: "Atmospheric rejuvenation and vapor mastery since 1972.",
    images: ["/services/steam.webp"],
  }
};

export default function SteamRoomPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Atmospheric Rejuvenation",
        title: "Steam Rooms & Turkish Baths",
        description: "Envelop yourself in therapeutic vapor. Our custom steam rooms blend sophisticated mosaic tiling with high-performance steam generation systems.",
        image: "/services/steam.webp",
        actions: [
          { label: "Request Quote", href: "/contact", primary: true },
          { label: "View Our Work", href: "#projects" }
        ]

      }}
      services={{
        subtitle: "VAPOR MASTERY",
        title: "Steam & Hammam Solutions",
        items: [
          {
            title: "Holistic Saunas",
            description: "Custom-built timber cabins using premium Canadian cedar, the perfect thermal counterpart to your private steam suite.",
            icon: "Thermometer",
            href: "/services/sauna"
          },
          {
            title: "Expert Tiling",
            description: "Intricate mosaic and large-format porcelain tiling designed specifically for high-vapor spa environments.",
            icon: "Layers",
            href: "/services/tiles-in-pool"
          },
          {
            title: "Vitality Spas",
            description: "Custom-designed hydrotherapy vitality pools that integrate seamlessly within your residence's wellness level.",
            icon: "Heart",
            href: "/services/spa"
          },
          {
            title: "Climate Control",
            description: "Precision air handling and dehumidification systems that protect your luxury home from moisture and vapor.",
            icon: "Wind",
            href: "/services/dehumidifier"
          }
        ]
      }}
      projects={{
        subtitle: "GLOBAL PROJECTS",
        title: "Select Steam Suites",
        description: "Traditional Turkish baths and modern steam rooms built with exquisite mosaic artistry.",
        items: [
          {
            title: "Project 1",
            description: "Onyx Mosaic Hammam",
            image: "/services/steam%20(1).webp",
            badge: "Premium"
          },
          {
            title: "Project 2",
            description: "Glass-Fronted Steam Suite",
            image: "/services/steam%20(2).webp",
            badge: "Signature"
          },
          {
            title: "Project 3",
            description: "Traditional Marble Spa",
            image: "/services/steam%20(3).webp",
            badge: "Exclusive"
          },
          {
            title: "Project 4",
            description: "Modern Recessed Cabin",
            image: "/services/steam%20(4).webp",
            badge: "Popular"
          },
          {
            title: "Project 5",
            description: "Light-Sculpted Vapor Room",
            image: "/services/steam%20(5).webp",
            badge: "Service"
          },
          {
            title: "Project 6",
            description: "Executive Wellness Suite",
            image: "/services/steam.webp",
            badge: "Urban"
          }
        ],
        cta: {
          label: "Request a Custom Design"
        }
      }}
      testimonials={{
        subtitle: "GUEST REVIEWS",
        title: "Atmospheric Stories",
        items: [
          {
            name: "Sarah V.",
            role: "Interior Designer",
            avatar: "https://i.pravatar.cc/150?u=sarahv",
            content: "The tile work in the hammam is absolute perfection. It's a breathtaking architectural piece.",
            rating: 5
          },
          {
            name: "Thomas B.",
            role: "Health Professional",
            avatar: "https://i.pravatar.cc/150?u=thomasb",
            content: "The steam density and aromatic injection system create the most immersive experience I've had.",
            rating: 5
          },
          {
            name: "Linda M.",
            role: "Property Manager",
            avatar: "https://i.pravatar.cc/150?u=lindam",
            content: "Low maintenance and high performance. Their choice of materials for the wet area is top-notch.",
            rating: 5
          }
        ]
      }}
      contact={{
        title: "Create Your Private Sanctuary",
        description: "Design a bespoke steam room tailored to your wellness needs. Get in touch."
      }}
      faqs={[
        {
          question: "Who is the best steam room builder in India?",
          answer: "Watcon International is recognized as the best steam room builder in India, with specialized skills in advanced vapor engineering and high-end mosaic tiling."
        },
        {
          question: "Can you build a private Turkish Hammam in India?",
          answer: "Yes, we specialize in authentic Turkish Hammam construction in India, combining traditional marble artistry with modern heating and steam systems for luxury properties."
        },
        {
          question: "Do you provide custom steam room maker services in Delhi?",
          answer: "Yes, we are a leading custom steam room maker in Delhi, offering personalized designs that include aromatherapy integration and specialized seating for private villas."
        },
        {
          question: "What is involved in a commercial steam room setup?",
          answer: "A commercial steam room setup involves high-capacity steam generators, automated self-cleaning systems, and moisture-resistant structural engineering to handle high-traffic hospitality environments."
        }
      ]}
    />

  );
}

