"use client";

import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
import { Sparkles, Wind, Droplet, Heart, Thermometer, UserCheck } from "lucide-react";

export default function SpaPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Sanctuary of Wellness",
        title: "Bespoke Spa & Wellness Environments",
        description: "Experience the pinnacle of restoration with our custom-designed spa solutions, from aromatic steam rooms to detoxifying saunas.",
        image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
        stats: [
          { label: "Spas Designed", value: "200+" },
          { label: "Wellness Projects", value: "150+" },
          { label: "Expert Craft", value: "20+ Yrs" }
        ],
        actions: [
          { label: "Book Consultation", href: "#contact", primary: true },
          { label: "Explore Features", href: "#" }
        ]
      }}
      services={{
        subtitle: "OUR EXPERTISE",
        title: "Comprehensive Spa Solutions",
        items: [
          {
            title: "Steam & Sauna",
            description: "Custom-built thermal rooms designed for detoxification and mental clarity.",
            icon: Wind,
            href: "#"
          },
          {
            title: "Vitality Pools",
            description: "Temperature-controlled aquatic environments with advanced filtration.",
            icon: Droplet,
            href: "#"
          },
          {
            title: "Cryotherapy Rooms",
            description: "State-of-the-art cold therapy installations for recovery and rejuvenation.",
            icon: Thermometer,
            href: "#"
          },
          {
            title: "Wellness Consulting",
            description: "Expert guidance on designing human-centric wellness spaces.",
            icon: UserCheck,
            href: "#"
          }
        ]
      }}
      projects={{
        subtitle: "WELLNESS PORTFOLIO",
        title: "Premier Spa Installations",
        items: [
          {
            title: "Project 1",
            description: "Floating Forest Spa",
            image: "https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg"
          },
          {
            title: "Project 2",
            description: "Minimalist Zen Retreat",
            image: "https://images.pexels.com/photos/14929512/pexels-photo-14929512.jpeg"
          },
          {
            title: "Project 3",
            description: "Urban Sanctuary",
            image: "https://images.pexels.com/photos/1036323/pexels-photo-1036323.jpeg"
          },
          {
            title: "Project 4",
            description: "Mountain Vista Wellness",
            image: "https://images.pexels.com/photos/3068519/pexels-photo-3068519.jpeg"
          },
          {
            title: "Project 5",
            description: "Desert Oasis Spa",
            image: "https://images.pexels.com/photos/1662549/pexels-photo-1662549.jpeg"
          },
          {
            title: "Project 6",
            description: "Coastal Vitality Suite",
            image: "https://images.pexels.com/photos/14917453/pexels-photo-14917453.jpeg"
          }
        ]
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
    />
  );
}
