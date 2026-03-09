"use client";

import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
import { Flame, Sun, Wind, Sparkles, Settings, ShieldCheck } from "lucide-react";

export default function OutdoorFireplacesPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "The Element of Fire",
        title: "Bespoke Outdoor Fireplaces & Fire Pits",
        description: "Add warmth and soul to your outdoor spaces. Our custom-engineered fireplaces and automated fire pits create the perfect evening ambiance for your terrace or pool deck.",
        image: "https://images.pexels.com/photos/1662549/pexels-photo-1662549.jpeg"
      }}
      services={{
        subtitle: "WARMTH & DESIGN",
        title: "Fire Feature Solutions",
        items: [
          {
            title: "Architectural Fireplaces",
            description: "Custom masonry and stone fireplaces that serve as the focal point of your outdoor lounge.",
            icon: Flame,
            href: "#"
          },
          {
            title: "Automated Fire Pits",
            description: "Smart gas-powered fire pits with electronic ignition and safety sensors.",
            icon: ShieldCheck,
            href: "#"
          },
          {
            title: "Fire & Water Features",
            description: "Breathtaking installations that blend the elements of fire and flowing water.",
            icon: Sparkles,
            href: "#"
          },
          {
            title: "Luxury Grills & Ovens",
            description: "High-end outdoor cooking solutions integrated into your fire feature design.",
            icon: Settings,
            href: "#"
          }
        ]
      }}
      projects={{
        subtitle: "EVENING PORTFOLIO",
        title: "Selected Fire Projects",
        items: [
          {
            title: "Project 1",
            description: "Modern Travertine Fireplace",
            image: "https://images.pexels.com/photos/3068519/pexels-photo-3068519.jpeg"
          },
          {
            title: "Project 2",
            description: "Infinite Rim Fire Pit",
            image: "https://images.pexels.com/photos/14929512/pexels-photo-14929512.jpeg"
          },
          {
            title: "Project 3",
            description: "Rooftop Gas Hearth",
            image: "https://images.pexels.com/photos/1036323/pexels-photo-1036323.jpeg"
          },
          {
            title: "Project 4",
            description: "Sunken Fire Seating",
            image: "https://images.pexels.com/photos/271815/pexels-photo-271815.jpeg"
          },
          {
            title: "Project 5",
            description: "Dual Element Cascade",
            image: "https://images.pexels.com/photos/14917453/pexels-photo-14917453.jpeg"
          },
          {
            title: "Project 6",
            description: "Villa Courtyard Hearth",
            image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg"
          }
        ]
      }}
      testimonials={{
        subtitle: "GATHERING STORIES",
        title: "Client Ambiance Feedback",
        items: [
          {
            name: "Julian P.",
            role: "Hospitality Architect",
            avatar: "https://i.pravatar.cc/150?u=julianp",
            content: "The electronic ignition systems Watcon installs are flawlessly reliable. A key safety requirement for us.",
            rating: 5
          },
          {
            name: "Monica G.",
            role: "Private Client",
            avatar: "https://i.pravatar.cc/150?u=monicag",
            content: "Our evenings have completely changed since the fireplace was installed. It's truly a piece of art.",
            rating: 5
          },
          {
            name: "Steve J.",
            role: "Estate Manager",
            avatar: "https://i.pravatar.cc/150?u=stevej",
            content: "They managed to build a fireplace that perfectly matches our existing stone architecture. Seamless.",
            rating: 5
          }
        ]
      }}
      contact={{
        title: "Ignite Your Outdoor Living",
        description: "Let's design a custom fire feature that brings warmth to your home. Contact us today."
      }}
    />
  );
}
