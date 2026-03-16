"use client";

import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
import { Thermometer, Zap, ShieldCheck, Settings, Heart, Wind } from "lucide-react";

export default function CryoRoomPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Best Cold Plunge Pool Manufacturer India",
        title: "Bespoke Cryotherapy Rooms & <br/> Ice Bath Systems",
        description: "Watcon International builds professional cold plunge pools and cryotherapy rooms used by athletes, wellness centres and luxury spas. Harness the power of extreme cold for recovery and longevity.",
        image: "/services/cryoroom.webp",

        actions: [
          { label: "Consult Recovery", href: "#contact", primary: true },
          { label: "View Projects", href: "#projects" }
        ]
      }}
      services={{
        subtitle: "THERMAL RECOVERY",
        title: "Cold Plunge Pool India",
        items: [
          {
            title: "Professional Cold Plunges",
            description: "Temperature-controlled ice bath pools with advanced ozone filtration, used by physiotherapy centres and elite athletes.",
            icon: Thermometer,
            href: "#"
          },
          {
            title: "Cryotherapy Rooms",
            description: "Custom-built Cryo Rooms and cryotherapy installations for wellness resorts and luxury health clubs.",
            icon: Wind,
            href: "#"
          },
          {
            title: "Contrast Therapy Pools",
            description: "Dual-temperature systems for high-performance contrast therapy and metabolic boosting.",
            icon: Zap,
            href: "#"
          },
          {
            title: "Professional Recovery Hubs",
            description: "Complete recovery suite design including salt rooms, cold plunges, and rehabilitation zones.",
            icon: Settings,
            href: "#"
          }
        ]
      }}
      projects={{
        subtitle: "RECOVERY PORTFOLIO",
        title: "Iconic Cold Suites",
         description: "Explore our collection of cutting-edge recovery environments, where cryogenic science meets sophisticated architectural design to deliver unparalleled wellness benefits.",
        
        items: [
          {
            title: "Project 1",
            description: "Electric Cryo Chamber",
            image: "/services/cryoroom%20(1).webp",
            badge: "Premium"
          },
          {
            title: "Project 2",
            description: "Modern Cold Plunge",
            image: "/services/cryoroom%20(2).webp",
            badge: "Signature"
          },
          {
            title: "Project 3",
            description: "Sports Medicine Wing",
            image: "/services/cryoroom%20(3).webp",
            badge: "Exclusive"
          },
          {
            title: "Project 4",
            description: "Luxury Home Recovery",
            image: "/services/cryoroom%20(4).webp",
            badge: "Popular"
          },
          {
            title: "Project 5",
            description: "Biohacking Suite",
            image: "/services/cryoroom%20(5).webp",
            badge: "Service"
          },
          {
            title: "Project 6",
            description: "Executive Health Club",
            image: "/services/cryoroom.webp",
            badge: "Urban"
          }
        ],
        cta: {
          label: "Request a Custom Design"
        }
      }}
      testimonials={{
        subtitle: "RECOVERY STORIES",
        title: "Cold Shock Feedback",
        items: [
          {
            name: "Alex M.",
            role: "Pro Athlete",
            avatar: "https://i.pravatar.cc/150?u=alexm",
            content: "The cold plunge they installed has significantly reduced my recovery time between matches.",
            rating: 5
          },
          {
            name: "Dr. Sarah",
            role: "Wellness Doctor",
            avatar: "https://i.pravatar.cc/150?u=drsarah",
            content: "Technically a masterpiece. The temperature consistency in the cryo chamber is perfect.",
            rating: 5
          },
          {
            name: "Chris L.",
            role: "Biohacker",
            avatar: "https://i.pravatar.cc/150?u=chrisl",
            content: "Watcon's design for our recovery suite is out of this world. It's the highlight of our facility.",
            rating: 5
          }
        ]
      }}
      contact={{
        title: "Master the Element of Cold",
        description: "Plan your elite recovery suite with our thermal shock experts. Contact us today."
      }}
    />
  );
}
