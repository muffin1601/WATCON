import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
// import { Timer, Ruler, Waves, Settings } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Olympic Size Pool Builders India | FINA Standard Competition Pools",
  description: "Watcon International is India's #1 contractor for Olympic-standard competition pools. We build FINA-compliant aquatic centers with advanced anti-wave technology and precision timing systems for institutions and sports academies.",
  alternates: {
    canonical: "https://watcon.co.in/services/competition-pool/",
  },
  keywords: [
    "olympic size pool builders india",
    "fina standard pool construction",
    "competition swimming pool makers india",
    "high performance aquatic centers delhi",
    "swimming pool timing system installation",
    "anti-wave pool gutter systems",
    "athletic training pool builders"
  ],
  openGraph: {
    title: "High-Performance Competition Pools | Watcon International",
    description: "Engineered for speed and precision. Olympic-standard pools with advanced overflow and anti-wave technology.",
    images: ["/services/competitionpools%20(1).webp"],
  }
};

export default function CompetitionPoolPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Olympic Standards",
        title: "High-Performance Competition Pools",
        description: "Engineered for speed and precision. We design and build Olympic-standard pools with advanced overflow systems and FINA-compliant dimensions for India's leading sports institutions and private academies.",
        image: "/services/competitionpools%20(1).webp",
        actions: [
          { label: "Request Spec", href: "/contact", primary: true },
          { label: "View Our Work", href: "#projects" }
        ]

      }}
      services={{
        subtitle: "PERFORMANCE ENGINEERING",
        title: "Athletic Aquatic Solutions",
        items: [
          {
            title: "FINA Compliance",
            description: "Strict adherence to international competitive standards for dimensions and depth, ensuring Olympic-grade precision.",
            icon: "Ruler",

            href: "/about"
          },
          {
            title: "Anti-Wave Tech",
            description: "Advanced gutter and overflow systems designed to minimize surface turbulence for maximum speed and performance.",
            icon: "Waves",

            href: "/services/swimming-pools"
          },
          {
            title: "Precision Timing",
            description: "Seamless integration of professional-grade touch pads and starting block infrastructures for competitive meets.",
            icon: "Timer",

            href: "/contact"
          },
          {
            title: "High-Speed Filtration",
            description: "Massive scale filtration systems ensuring peak water quality for high-load environments and professional athletes.",
            icon: "Settings",

            href: "/services/dehumidifier"
          }
        ]
      }}
      projects={{
        subtitle: "INSTITUTIONAL PORTFOLIO",
        title: "Public & Private Arenas",
        description: "Explore our collection of Olympic-standard competition pools and professional athletic training facilities across India.",
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
        description: "Consult with India's most experienced high-performance aquatic engineers. Plan your arena today for a FINA-compliant build."
      }}
      faqs={[
        {
          question: "Who are the best Olympic size pool builders in India?",
          answer: "Watcon International is the premier choice for Olympic size pool builders in India. With a portfolio that includes major sports arenas and institutional aquatic centers, we deliver FINA-standard pools built for peak performance."
        },
        {
          question: "What is FINA standard pool construction?",
          answer: "FINA standard pool construction involves meeting strict international regulations for pool length, depth, water temperature, and lane dimensions, ensuring the facility is suitable for official competitive events."
        },
        {
          question: "What is an anti-wave pool gutter system?",
          answer: "An anti-wave pool gutter system is designed to absorb surface waves created by swimmers, reducing turbulence and allowing for faster swimming times during competitions. Watcon specializes in these high-precision engineering features."
        },
        {
          question: "Can you install professional swimming pool timing systems?",
          answer: "Yes, we provide end-to-end swimming pool timing system installation, integrating touch pads, scoreboards, and starting blocks for high-performance aquatic centers in Delhi and across India."
        }
      ]}
      catalogueUrl="/services/watcon profile and fountain 2026_web 1.pdf"
    />

  );
}

