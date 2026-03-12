"use client";

import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
import { Waves, Droplet, Sparkles, Settings, Bath, Wind } from "lucide-react";

export default function JacuzziPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Luxury Hydrotherapy",
        title: "Bespoke Jacuzzi & Hot Tub Solutions",
        description: "Immerse yourself in pure relaxation with our custom-engineered jacuzzis, designed to blend luxury with therapeutic benefits.",
        image: "/services/jacuzzi%20(1).webp",
        stats: [
          { label: "Jacuzzis Installed", value: "2500+" },
          { label: "Therapeutic Precision", value: "100%" },
          { label: "Expert Craft", value: "50+ Yrs" }
        ],
        actions: [
          { label: "Get Free Quote", href: "#contact", primary: true },
          { label: "View Systems", href: "#" }
        ]
      }}
      services={{
        subtitle: "WHAT WE OFFER",
        title: "Jacuzzi & Spa Services",
        items: [
          {
            title: "Custom Jacuzzi Design",
            description: "Personalized hydrotherapy solutions tailored to your space and wellness needs.",
            icon: Bath,
            href: "#"
          },
          {
            title: "Hydrotherapy Systems",
            description: "Advanced jet systems and climate control for the perfect therapeutic experience.",
            icon: Droplet,
            href: "#"
          },
          {
            title: "Service & Maintenance",
            description: "Comprehensive care to ensure your jacuzzi remains a pristine sanctuary.",
            icon: Settings,
            href: "#"
          },
          {
            title: "Automation & Control",
            description: "Smart systems to control temperature and lighting from your fingertips.",
            icon: Sparkles,
            href: "#"
          }
        ]
      }}
      projects={{
        subtitle: "OUR PORTFOLIO",
        title: "Iconic Jacuzzi Projects",
        description: "Discover our bespoke hydrotherapy installations designed for absolute comfort and relaxation.",
        items: [
          {
            title: "Project 1",
            description: "Luxury Indoor Suite",
            image: "/services/jacuzzi%20(1).webp",
            badge: "Premium"
          },
          {
            title: "Project 2",
            description: "Outdoor Wellness Retreat",
            image: "/services/jacuzzi%20(2).webp",
            badge: "Signature"
          },
          {
            title: "Project 3",
            description: "Modern Rooftop Spa",
            image: "/services/jacuzzi%20(3).webp",
            badge: "Exclusive"
          },
          {
            title: "Project 4",
            description: "Serene Garden Hideaway",
            image: "/services/jacuzzi%20(4).webp",
            badge: "Popular"
          },
          {
            title: "Project 5",
            description: "Penthouse Hydrotherapy",
            image: "/services/jacuzzi%20(5).webp",
            badge: "Service"
          },
          {
            title: "Project 6",
            description: "Bespoke Hotel Wellness",
            image: "/services/jacuzzi%20(6).webp",
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
            name: "John D.",
            role: "Villa Owner",
            avatar: "https://i.pravatar.cc/150?u=john",
            content: "The custom jacuzzi installation exceeded our expectations. It's our favorite place to unwind.",
            rating: 5
          },
          {
            name: "Emily R.",
            role: "Wellness Consultant",
            avatar: "https://i.pravatar.cc/150?u=emily",
            content: "Technically perfect jet alignment. The hydrotherapy benefits are noticeable from day one.",
            rating: 5
          },
          {
            name: "Michael T.",
            role: "Developer",
            avatar: "https://i.pravatar.cc/150?u=michael",
            content: "Seamless integration into our existing project. Watcon's engineering is top-tier.",
            rating: 5
          }
        ]
      }}
      contact={{
        title: "Ready to Create Your Wellness Oasis?",
        description: "Contact us today for a bespoke jacuzzi consultation."
      }}
    />
  );
}
