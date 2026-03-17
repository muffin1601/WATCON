import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
// import { Flame, Sparkles, Settings, ShieldCheck } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outdoor Fireplace & Fire Pit Builders India | Luxury Terrace Design",
  description: "Watcon International designs and builds custom outdoor fireplaces, automated gas fire pits, and integrated fire-and-water features for luxury homes and rooftop terraces in Delhi, Gurgaon, and across India.",
  alternates: {
    canonical: "https://watcon.co.in/services/outdoor-fireplaces",
  },
  keywords: [
    "outdoor fireplace builder india",
    "custom fire pit delhi",
    "luxury terrace fire features delhi ncr",
    "automated gas fire pits india",
    "poolside fire feature construction",
    "stone fireplace outdoor india",
    "rooftop fire pit designer"
  ],
  openGraph: {
    title: "Outdoor Fireplaces & Fire Pits | Watcon International",
    description: "Add warmth and soul to your outdoor spaces with custom-engineered fireplaces and automated fire pits.",
    images: ["/services/outdoorfire.webp"],
  }
};

export default function OutdoorFireplacesPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "The Element of Fire",
        title: "Outdoor Fireplaces & Fire Pits",
        description: "Add warmth and soul to your outdoor spaces. Our custom-engineered fireplaces and automated fire pits create the perfect evening ambiance for your terrace or pool deck, designed for Delhi's most luxury modern homes.",
        image: "/services/outdoorfire.webp",
        actions: [
          { label: "Request Spec", href: "/contact", primary: true },
          { label: "View Our Work", href: "#projects" }
        ]
      }}
      services={{
        subtitle: "WARMTH & DESIGN",
        title: "Fire Feature Solutions",
        items: [
          {
            title: "Outdoor Furniture",
            description: "Curated designer seating and dining sets from our premium collection, built to complement your luxury fireplace setting.",
            icon: "Sofa",
            href: "/services/outdoor-furniture"
          },
          {
            title: "Water Features",
            description: "Breathtaking installations that blend the elements of fire and flowing water for a dramatic resort-style sensory experience.",
            icon: "Waves",
            href: "/services/water-bodies"
          },
          {
            title: "Koi Ponds",
            description: "Eco-friendly garden ponds featuring advanced biological filtration, creating a harmonious backdrop for your fire pit.",
            icon: "Fish",
            href: "/services/koi-ponds"
          },
          {
            title: "Rooftop Pools",
            description: "Expertly engineered rooftop infinity pools designed to integrate with automated fire features for an elite social space.",
            icon: "Waves",
            href: "/services/swimming-pools"
          }
        ]
      }}
      projects={{
        subtitle: "EVENING PORTFOLIO",
        title: "Selected Fire Projects",
        description: "From architectural masonry to automated gas pits, our fire features are designed to be the heart of your luxury outdoor gatherings.",  
        items: [
          {
            title: "Project 1",
            description: "Modern Travertine Fireplace",
            image: "/services/outdoorfire%20(1).webp",
            badge: "Premium"
          },
          {
            title: "Project 2",
            description: "Infinite Rim Fire Pit",
            image: "/services/outdoorfire%20(2).webp",
            badge: "Signature"
          },
          {
            title: "Project 3",
            description: "Rooftop Gas Hearth",
            image: "/services/outdoorfire%20(3).webp",
            badge: "Exclusive"
          },
          {
            title: "Project 4",
            description: "Sunken Fire Seating",
            image: "/services/outdoorfire%20(4).webp",
            badge: "Popular"
          },
          {
            title: "Project 5",
            description: "Dual Element Cascade",
            image: "/services/outdoorfire%20(5).webp",
            badge: "Service"
          },
          {
            title: "Project 6",
            description: "Villa Courtyard Hearth",
            image: "/services/outdoorfire.webp",
            badge: "Urban"
          }
        ],
        cta: {
          label: "Request a Custom Design"
        }
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
        description: "Let's design a custom fire feature that brings warmth to your home. Contact us today for a free design consultation."
      }}
      faqs={[
        {
          question: "Who is the best outdoor fireplace builder in India?",
          answer: "Watcon International is a leading outdoor fireplace builder in India, known for integrating high-end masonry with modern automation and safety systems."
        },
        {
          question: "Can I get a custom fire pit built for my terrace in Delhi?",
          answer: "Yes, we are expert custom fire pit designers in Delhi. We specialize in building luxury terrace fire features that are both safe and aesthetically stunning, perfect for Delhi NCR's social lifestyle."
        },
        {
          question: "What are automated gas fire pits?",
          answer: "Automated gas fire pits are modern fire features that use electronic ignition systems and safety sensors, allowing you to ignite a beautiful fire with the touch of a button, without the hassle of wood and smoke."
        },
        {
          question: "Do you build stone fireplaces for outdoor spaces?",
          answer: "Yes, we design and build bespoke stone fireplaces for outdoor spaces in India, using premium materials like travertine, granite, and marble to match your home's architecture."
        }
      ]}
    />

  );
}

