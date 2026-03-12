"use client";

import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
import { Waves, Droplet, Wind, ShieldCheck, Award, Timer } from "lucide-react";

export default function SwimmingPoolsPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Professional Pool Services",
        title: "Transform Your Space with a Dream Swimming Pool",
        description: "Professional pool installation, maintenance, and renovation services tailored to your vision. Building dreams since 2004.",
        image: "/services/premium.png",
        stats: [
          { label: "Pools Built", value: "2500+" },
          { label: "Satisfaction Rate", value: "98%" },
          { label: "Years Experience", value: "50+" }
        ],
        actions: [
          { label: "Get Free Quote", href: "#contact", primary: true },
          { label: "View Our Work", href: "#projects" }
        ]
      }}
      services={{
        subtitle: "WHAT WE OFFER",
        title: "Our Swimming Pool Services",
        items: [
          {
            title: "Pool Installation",
            description: "Custom designed pools built to your exact specifications, from shape to accessories.",
            icon: Waves,
            href: "#"
          },
          {
            title: "Pool Maintenance",
            description: "Expert cleaning, chemical balancing, and equipment checks to keep your pool pristine.",
            icon: Droplet,
            href: "#"
          },
          {
            title: "Pool Renovation",
            description: "Update your existing pool with modern additions, energy-efficient equipment, and new tiling or finishes.",
            icon: Wind,
            href: "#"
          },
          {
            title: "Pool Cleaning",
            description: "Thorough cleaning of pool surfaces, filters, and skimmers for a hygienic and sparkling pool environment.",
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
            title: "Project 1",
            description: "Residential Pool",
            image: "/services/premium.png",
            badge: "Premium"
          },
          {
            title: "Project 2",
            description: "Luxury Pool",
            image: "/services/signature.png",
            badge: "Signature"
          },
          {
            title: "Project 3",
            description: "Indoor Pool",
            image: "/services/exclusive.png",
            badge: "Exclusive"
          },
          {
            title: "Project 4",
            description: "Family Pool",
            image: "/services/popular.png",
            badge: "Popular"
          },
          {
            title: "Project 5",
            description: "Outdoor Pool",
            image: "/services/service.png",
            badge: "Service"
          },
          {
            title: "Project 6",
            description: "Modern Pool",
            image: "/services/urban.png",
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
