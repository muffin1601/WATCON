"use client";

import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
import { Timer, Ruler, Waves, Settings, ShieldCheck, Zap } from "lucide-react";

export default function CompetitionPoolPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Olympic Standards",
        title: "High-Performance Competition Pools",
        description: "Engineered for speed and precision. We design and build Olympic-standard pools with advanced overflow systems and FINA-compliant dimensions.",
        image: "/services/competitionpools%20(1).webp",
        stats: [
          { label: "Arenas Built", value: "2500+" },
          { label: "FINA Compliant", value: "100%" },
          { label: "Engineering Flow", value: "50+ Yrs" }
        ],
        actions: [
          { label: "Consult Engineers", href: "#contact", primary: true },
          { label: "View Arenas", href: "#projects" }
        ]
      }}
      services={{
        subtitle: "PERFORMANCE ENGINEERING",
        title: "Athletic Aquatic Solutions",
        items: [
          {
            title: "FINA Compliance",
            description: "Strict adherence to international competitive standards for dimensions and depth.",
            icon: Ruler,
            href: "#"
          },
          {
            title: "Anti-Wave Tech",
            description: "Advanced gutter and overflow systems designed to minimize surface turbulence for maximum speed.",
            icon: Waves,
            href: "#"
          },
          {
            title: "Precision Timing",
            description: "Integration of professional-grade touch pads and starting block infrastructures.",
            icon: Timer,
            href: "#"
          },
          {
            title: "High-Speed Filtration",
            description: "Massive scale filtration systems ensuring peak water quality for high-load environments.",
            icon: Settings,
            href: "#"
          }
        ]
      }}
      projects={{
        subtitle: "INSTITUTIONAL PORTFOLIO",
        title: "Public & Private Arenas",
        description: "Explore our collection of Olympic-standard competition pools and professional training facilities.",
        items: [
          {
            title: "Project 1",
            description: "University Olympic Center",
            image: "/services/competitionpools%20(1).webp",
            badge: "Premium"
          },
          {
            title: "Project 2",
            description: "Semi-Olympic Training Pool",
            image: "/services/competitionpools%20(2).webp",
            badge: "Signature"
          },
          {
            title: "Project 3",
            description: "Municipal Aquatic Hub",
            image: "/services/competitionpools%20(3).webp",
            badge: "Exclusive"
          },
          {
            title: "Project 4",
            description: "Diving Well & Platform",
            image: "/services/competitionpools%20(4).webp",
            badge: "Popular"
          },
          {
            title: "Project 5",
            description: "Elite Swim Academy",
            image: "/services/competitionpools%20(5).webp",
            badge: "Service"
          },
          {
            title: "Project 6",
            description: "Commercial Lap Pool",
            image: "/services/competitionpools%20(6).webp",
            badge: "Urban"
          }
        ],
        cta: {
          label: "Request a Custom Design"
        }
      }}
      testimonials={{
        subtitle: "COACH & ATHLETE STORIES",
        title: "Performance Feedback",
        items: [
          {
            name: "Coach Miller",
            role: "Head Coach",
            avatar: "https://i.pravatar.cc/150?u=miller",
            content: "The water turbulence management in this pool is the best I've encountered. Our swimmers are hitting PRs.",
            rating: 5
          },
          {
            name: "Dr. James",
            role: "Sports Scientist",
            avatar: "https://i.pravatar.cc/150?u=james",
            content: "Technically precise construction. The dimensions are perfect to the millimeter.",
            rating: 5
          },
          {
            name: "Steve P.",
            role: "Facility Director",
            avatar: "https://i.pravatar.cc/150?u=stevep",
            content: "Watcon's massive filtration system handles our swim meets with ease. Water clarity is perfect.",
            rating: 5
          }
        ]
      }}
      contact={{
        title: "Build Your Athletic Legacy",
        description: "Consult with our high-performance aquatic engineers. Plan your arena today."
      }}
    />
  );
}
