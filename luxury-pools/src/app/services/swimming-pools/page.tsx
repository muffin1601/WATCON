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
        image: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg",
        stats: [
          { label: "Pools Built", value: "500+" },
          { label: "Satisfaction Rate", value: "98%" },
          { label: "Years Experience", value: "20+" }
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
            image: "https://images.pexels.com/photos/3068519/pexels-photo-3068519.jpeg",
            badge: "Premium"
          },
          {
            title: "Project 2",
            description: "Luxury Pool",
            image: "https://images.pexels.com/photos/1662549/pexels-photo-1662549.jpeg",
            badge: "Signature"
          },
          {
            title: "Project 3",
            description: "Indoor Pool",
            image: "https://images.pexels.com/photos/14917453/pexels-photo-14917453.jpeg",
            badge: "Exclusive"
          },
          {
            title: "Project 4",
            description: "Family Pool",
            image: "https://images.pexels.com/photos/271815/pexels-photo-271815.jpeg",
            badge: "Popular"
          },
          {
            title: "Project 5",
            description: "Outdoor Pool",
            image: "https://images.pexels.com/photos/12715508/pexels-photo-12715508.jpeg",
            badge: "Service"
          },
          {
            title: "Project 6",
            description: "Modern Pool",
            image: "https://images.pexels.com/photos/9116592/pexels-photo-9116592.jpeg",
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
            role: "Home Owner",
            avatar: "https://i.pravatar.cc/150?u=sarah",
            content: "The team at Watcon turned my backyard into a resort. The attention to detail is simply unmatched.",
            rating: 5
          },
          {
            name: "James K.",
            role: "Architect",
            avatar: "https://i.pravatar.cc/150?u=james",
            content: "As an architect, I appreciate their technical precision. They are the best in the business.",
            rating: 5
          },
          {
            name: "Linda P.",
            role: "Hotel Manager",
            avatar: "https://i.pravatar.cc/150?u=linda",
            content: "Professional, timely, and luxury finishes. Our guests love the new pool installation.",
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
