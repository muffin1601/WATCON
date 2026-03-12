"use client";

import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
import { Thermometer, Zap, ShieldCheck, Settings, Heart, Wind } from "lucide-react";

export default function CryoRoomPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Advanced Recovery",
        title: "Bespoke Cryotherapy & Cold Plunge Suites",
        description: "Harness the power of extreme cold for recovery and longevity. Our custom cryo rooms and cold plunges are designed with surgical precision for elite performance.",
        image: "/services/cryoroom.webp",
        stats: [
          { label: "Recovery Suites", value: "2500+" },
          { label: "Sub-Zero Accuracy", value: "100%" },
          { label: "Expert Craft", value: "50+ Yrs" }
        ],
        actions: [
          { label: "Consult Recovery", href: "#contact", primary: true },
          { label: "View Projects", href: "#projects" }
        ]
      }}
      services={{
        subtitle: "THERMAL SHOCK TECH",
        title: "Cold Therapy Solutions",
        items: [
          {
            title: "Whole Body Cryo",
            description: "Advanced nitrogen or electric systems for extreme sub-zero metabolic boosting.",
            icon: Thermometer,
            href: "#"
          },
          {
            title: "Cold Plunge Systems",
            description: "Temperature-controlled immersion pools with ozone filtration and Chiller tech.",
            icon: Wind,
            href: "#"
          },
          {
            title: "Elite Recovery Tech",
            description: "Customized lighting and bio-metric integration for optimal recovery sessions.",
            icon: Zap,
            href: "#"
          },
          {
            title: "Commercial Grading",
            description: "Robust, heavy-duty cooling systems designed for high-traffic wellness centers.",
            icon: Settings,
            href: "#"
          }
        ]
      }}
      projects={{
        subtitle: "RECOVERY PORTFOLIO",
        title: "Iconic Cold Suites",
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
