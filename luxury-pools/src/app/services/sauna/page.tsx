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
        image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
        stats: [
          { label: "Saunas Built", value: "250+" },
          { label: "Premium Timber", value: "CEDAR" },
          { label: "Expert Craft", value: "20+ Yrs" }
        ],
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
        items: [
          {
            title: "Project 1",
            description: "Panoramic Glass Sauna",
            image: "https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg"
          },
          {
            title: "Project 2",
            description: "Minimalist Hemlock Suite",
            image: "https://images.pexels.com/photos/14929512/pexels-photo-14929512.jpeg"
          },
          {
            title: "Project 3",
            description: "Outdoor Garden Sauna",
            image: "https://images.pexels.com/photos/3068519/pexels-photo-3068519.jpeg"
          },
          {
            title: "Project 4",
            description: "Luxury Hotel Spa",
            image: "https://images.pexels.com/photos/1662549/pexels-photo-1662549.jpeg"
          },
          {
            title: "Project 5",
            description: "Penthouse Private Suite",
            image: "https://images.pexels.com/photos/1036323/pexels-photo-1036323.jpeg"
          },
          {
            title: "Project 6",
            description: "Classic Cedar Cabin",
            image: "https://images.pexels.com/photos/14917453/pexels-photo-14917453.jpeg"
          }
        ]
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
