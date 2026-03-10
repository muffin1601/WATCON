"use client";

import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
import { Cloud, Droplets, Sparkles, Settings, Bath, Wind } from "lucide-react";

export default function SteamRoomPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Atmospheric Rejuvenation",
        title: "Bespoke Steam Rooms & Turkish Baths",
        description: "Envelop yourself in therapeutic vapor. Our custom steam rooms blend sophisticated mosaic tiling with high-performance steam generation systems.",
        image: "https://images.pexels.com/photos/14929512/pexels-photo-14929512.jpeg",
        stats: [
          { label: "Steam Suites", value: "180+" },
          { label: "Mosaic Precision", value: "100%" },
          { label: "Expert Craft", value: "20+ Yrs" }
        ],
        actions: [
          { label: "Request Quote", href: "#contact", primary: true },
          { label: "View Gallery", href: "#projects" }
        ]
      }}
      services={{
        subtitle: "VAPOR MASTERY",
        title: "Steam & Hammam Solutions",
        items: [
          {
            title: "Traditional Hammam",
            description: "Authentic Turkish bath designs with heated marble seating and high-volume steam.",
            icon: Bath,
            href: "#"
          },
          {
            title: "Aromatherapy Systems",
            description: "Automated essence injection systems for a truly sensory and olfactory experience.",
            icon: Cloud,
            href: "#"
          },
          {
            title: "Advanced Tiling",
            description: "Intricate mosaic and large-format porcelain tiling designed for wet environments.",
            icon: Settings,
            href: "#"
          },
          {
            title: "Smart Steam Gen",
            description: "Self-cleaning steam generators with precise humidity and temperature control.",
            icon: Droplets,
            href: "#"
          }
        ]
      }}
      projects={{
        subtitle: "GLOBAL PROJECTS",
        title: "Select Steam Suites",
        items: [
          {
            title: "Project 1",
            description: "Onyx Mosaic Hammam",
            image: "https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg"
          },
          {
            title: "Project 2",
            description: "Glass-Fronted Steam Suite",
            image: "https://images.pexels.com/photos/1036323/pexels-photo-1036323.jpeg"
          },
          {
            title: "Project 3",
            description: "Traditional Marble Spa",
            image: "https://images.pexels.com/photos/14917453/pexels-photo-14917453.jpeg"
          },
          {
            title: "Project 4",
            description: "Modern Recessed Cabin",
            image: "https://images.pexels.com/photos/3068519/pexels-photo-3068519.jpeg"
          },
          {
            title: "Project 5",
            description: "Light-Sculpted Vapor Room",
            image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg"
          },
          {
            title: "Project 6",
            description: "Executive Wellness Suite",
            image: "https://images.pexels.com/photos/1662549/pexels-photo-1662549.jpeg"
          }
        ]
      }}
      testimonials={{
        subtitle: "GUEST REVIEWS",
        title: "Atmospheric Stories",
        items: [
          {
            name: "Sarah V.",
            role: "Interior Designer",
            avatar: "https://i.pravatar.cc/150?u=sarahv",
            content: "The tile work in the hammam is absolute perfection. It's a breathtaking architectural piece.",
            rating: 5
          },
          {
            name: "Thomas B.",
            role: "Health Professional",
            avatar: "https://i.pravatar.cc/150?u=thomasb",
            content: "The steam density and aromatic injection system create the most immersive experience I've had.",
            rating: 5
          },
          {
            name: "Linda M.",
            role: "Property Manager",
            avatar: "https://i.pravatar.cc/150?u=lindam",
            content: "Low maintenance and high performance. Their choice of materials for the wet area is top-notch.",
            rating: 5
          }
        ]
      }}
      contact={{
        title: "Create Your Private Sanctuary",
        description: "Design a bespoke steam room tailored to your wellness needs. Get in touch."
      }}
    />
  );
}
