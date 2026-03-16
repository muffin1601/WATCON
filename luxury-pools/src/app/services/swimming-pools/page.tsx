"use client";

import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
import { Waves, Droplet, Wind, ShieldCheck, Award, Timer } from "lucide-react";

export default function SwimmingPoolsPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Luxury Swimming Pool Builder in Delhi & India",
        title: "India's #1 Specialist in <br/> Luxury Pool Construction",
        description: "Watcon International designs and builds luxury swimming pools in Delhi and across India, including resort pools, infinity pools, rooftop pools and villa pools. We specialize in high-end pool filtration, overflow systems, and infinity edge designs.",
        image: "/services/swimmingpools (1).png",
        stats: [
          { label: "Olympic Projects", value: "Asian Games" },
          { label: "Elite Clients", value: "The Oberoi" },
          { label: "Experience", value: "50+ Years" }
        ],
        actions: [
          { label: "Get Free Quote", href: "#contact", primary: true },
          { label: "View Our Work", href: "#projects" }
        ]
      }}
      services={{
        subtitle: "PREMIUM POOL SOLUTIONS",
        title: "Best Swimming Pool Maker in India",
        items: [
          {
            title: "Luxury Residential Pools",
            description: "Bespoke luxury residential pools Delhi NCR and rooftop infinity pools designed for the most exclusive residences.",
            icon: Waves,
            href: "#"
          },
          {
            title: "Olympic Size Pool Builders",
            description: "The #1 choice for Olympic size pool builders in India, delivering international-standard competition facilities.",
            icon: Droplet,
            href: "#"
          },
          {
            title: "Resort Pool Design",
            description: "High-end resort pool filtration, overflow systems, and infinity edge designs for 5-star hotel developments.",
            icon: Wind,
            href: "#"
          },
          {
            title: "Best Swimming Pool Maker",
            description: "Recognized as the best swimming pool maker in India with over 2500+ successful aquatic engineering projects.",
            icon: Droplet,
            href: "#"
          }
        ]
      }}
      projects={{
        subtitle: "PORTFOLIO",
        title: "Our Pool Projects",
        description: "Explore our portfolio of stunning swimming pool installations.",
        items: [
          {
            title: "The Oberoi Collection",
            description: "Signature luxury hospitality project with advanced overflow systems.",
            image: "/services/swimmingpools (1).png",
            badge: "Premium"
          },
          {
            title: "DLF Signature Estate",
            description: "Bespoke residential infinity pool for a premium Delhi NCR estate.",
            image: "/services/swimmingpools (2).png",
            badge: "Signature"
          },
          {
            title: "Olympic Training Facility",
            description: "Full-scale athletic competition pool built to international standards.",
            image: "/services/swimmingpools (3).png",
            badge: "Olympic"
          },
          {
            title: "Hillside Vista Pool",
            description: "Engineering masterpiece featuring a cantilevered infinity edge.",
            image: "/services/swimmingpools (4).png",
            badge: "Exclusive"
          },
          {
            title: "Zen Wellness Resort",
            description: "integrated hydrotherapy and relaxation pool for a 5-star spa.",
            image: "/services/swimmingpools (5).jpeg",
            badge: "Wellness"
          },
          {
            title: "Modern Minimalist Oasis",
            description: "Sleek geometric design with glass-tile finish and mood lighting.",
            image: "/services/swimmingpools (6).png",
            badge: "Urban"
          }
        ],
        cta: {
          label: "Request a Custom Design"
        }
      }}
      testimonials={{
        subtitle: "CLIENT STORIES",
        title: "What Our Clients Say",
        items: [
          {
            name: "Sarah M.",
            role: "Homeowner",
            avatar: "SM",
            content: "Watcon transformed our backyard completely. The pool is stunning and the team was professional throughout.",
            rating: 5
          },
          {
            name: "James T.",
            role: "Villa Owner",
            avatar: "JT",
            content: "Best investment we ever made. The maintenance team keeps our pool in perfect condition all year.",
            rating: 5
          },
          {
            name: "Linda K.",
            role: "Hotel Manager",
            avatar: "LK",
            content: "The renovation they did on our old pool exceeded all expectations. Highly recommend!",
            rating: 5
          }
        ]
      }}
      contact={{
        title: "Ready to Build Your Dream Pool?",
        description: "Book an enquiry for a free consultation and quote."
      }}
    />
  );
}
