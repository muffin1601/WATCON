import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
// import { Wind, Thermometer, Sparkles, Settings } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bespoke Sauna Builders India | Custom Cedar & Infrared Saunas",
  description: "Watcon International is India's premier sauna construction company. We build authentic Finnish saunas, modern infrared suites, and custom Canadian cedar cabins for luxury homes and 5-star hotels in Delhi, Mumbai, and beyond.",
  alternates: {
    canonical: "https://watcon.co.in/services/sauna/",
  },
  keywords: [
    "sauna builder india",
    "custom sauna delhi",
    "infrared sauna installation india",
    "canadian cedar sauna builder",
    "traditional finnish sauna india",
    "commercial sauna room setup",
    "luxury wellness spa builders"
  ],
  openGraph: {
    title: "Sauna & Thermal Therapy Solutions | Watcon International",
    description: "Experience the timeless ritual of sauna therapy with our custom-built timber cabins and smart heating technology.",
    images: ["/services/sauna.webp"],
  }
};

export default function SaunaPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Traditional Detoxification",
        title: "Sauna & Heat Therapy",
        description: "Experience the timeless ritual of sauna therapy. Our custom-built timber saunas use premium Canadian cedar and smart heating technology for a perfect detox, crafted with 50+ years of aquatic and thermal expertise.",
        image: "/services/sauna.webp",
        actions: [
          { label: "Get Free Quote", href: "/contact", primary: true },
          { label: "View Our Work", href: "#projects" }
        ]

      }}
      services={{
        subtitle: "THERMAL MASTERY",
        title: "Traditional & Modern Saunas",
        items: [
          {
            title: "Steam Suites",
            description: "Authentic Turkish Hammam designs with automated aromatherapy, the perfect complement to your luxury sauna room.",
            icon: "Wind",
            href: "/services/steam"
          },
          {
            title: "Cryo Recovery",
            description: "Advanced cryotherapy rooms and cold plunge pools for a complete hot-and-cold thermal recovery circuit.",
            icon: "Zap",
            href: "/services/cryo-room"
          },
          {
            title: "Luxury Spas",
            description: "Custom-designed vitality pools and hydrotherapy systems that integrate seamlessly with your thermal suite.",
            icon: "Heart",
            href: "/services/spa"
          },
          {
            title: "Private Jacuzzis",
            description: "Bespoke hydrotherapy tubs with specialized jet alignment, designed for elite residential wellness sanctuaries.",
            icon: "Bath",
            href: "/services/jacuzzi"
          }
        ]
      }}
      projects={{
        subtitle: "RECENT INSTALLATIONS",
        title: "Iconic Sauna Projects",
        description: "Crafted with precision and premium timber, explore our collection of traditional and modern luxury saunas.",
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
        description: "Incorporate a bespoke sauna into your wellness routine. Contact us for a free quote on custom sauna installations in India."
      }}
      faqs={[
        {
          question: "Who is the best sauna builder in India?",
          answer: "Watcon International is the leading sauna builder in India, with over 50 years of experience in thermal wellness engineering and high-end timber construction."
        },
        {
          question: "Can I get a custom sauna built in Delhi?",
          answer: "Yes, we are experts in custom sauna design and installation in Delhi. We build bespoke sauna cabins that fit perfectly into your home wellness room or outdoor terrace."
        },
        {
          question: "What is the difference between a traditional Finnish sauna and infrared?",
          answer: "A traditional Finnish sauna uses a heater with lava stones to create high ambient heat and steam, while an infrared sauna uses specialized heaters to warm the body directly at a lower, more gentle temperature."
        },
        {
          question: "Why do you use Canadian Cedar for saunas?",
          answer: "As a premier Canadian cedar sauna builder, we use this wood because it is naturally resistant to decay, does not warp under high heat, and releases a beautiful therapeutic aroma."
        }
      ]}
    />

  );
}

