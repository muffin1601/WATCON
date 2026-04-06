import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
// import { Waves, Droplet, Layers, Anchor } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Musical Fountain Makers India | Oase Fountain Partners Delhi NCR",
  description: "Watcon International is the best musical fountain maker in India. Official Oase partners, we specialize in synchronized light and sound fountains, architectural waterfalls, and luxury resort water bodies.",
  alternates: {
    canonical: "https://watcon.co.in/services/water-bodies/",
  },
  keywords: [
    "musical fountain maker india",
    "oase fountain technology delhi",
    "architectural water features india",
    "fountain designers delhi ncr",
    "resort water body construction",
    "programmable fountains india",
    "synchronized water show builders"
  ],
  openGraph: {
    title: "India's Best Musical Fountain Maker | Watcon International",
    description: "Official partners for Oase Fountain Technology. Designing iconic water shows for landmarks.",
    images: ["/services/waterbodies (2).jpeg"],
  }
};

export default function WaterBodiesPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Official Oase Fountain Partner Delhi",
        title: "India's Best Musical Fountain Maker",
        description: "Official partners for Oase Fountain Technology. We design the best musical fountains in India, combining synchronized light and sound for public parks, hotels, and luxury commercial spaces across the nation.",
        image: "/services/waterbodies (2).png",
        actions: [
          { label: "Consult Oase Expert", href: "/contact", primary: true },
          { label: "View Our Work", href: "#projects" }
        ]

      }}
      services={{
        subtitle: "AQUATIC SHOW Engineering",
        title: "Fountains & Water Features",
        items: [
          {
            title: "Swimming Pools",
            description: "Luxury residential and hotel swimming pools designed to integrate with architectural waterfalls and fountains.",
            icon: "Waves",
            href: "/services/swimming-pools"
          },
          {
            title: "Competition Pools",
            description: "Olympic-standard aquatic facilities for sports complexes featuring advanced water management and filtration.",
            icon: "Droplet",
            href: "/services/competition-pool"
          },
          {
            title: "Koi Ponds",
            description: "Natural garden ponds with advanced biological filtration, the perfect natural counterpart to architectural water features.",
            icon: "Fish",
            href: "/services/koi-ponds"
          },
          {
            title: "Outdoor Living",
            description: "Automated fire pits and designer furniture suites that create the perfect viewing deck for your synchronized fountain shows.",
            icon: "Flame",
            href: "/services/outdoor-fireplaces"
          }
        ]
      }}
      projects={{
        subtitle: "AQUATIC PORTFOLIO",
        title: "Stunning Water Features",
        description: "Explore our collection of world-class water bodies and architectural fountains designed for maximum visual impact.",
        items: [
          {
            title: "Corporate Grand Fountain",
            description: "Architectural Landmark",
            image: "/services/waterbodies (1).png",
            badge: "Premium"
          },
          {
            title: "Zen Reflecting Pond",
            description: "Tranquil Sanctuary",
            image: "/services/waterbodies (3).png",
            badge: "Signature"
          },
          {
            title: "Infinite Cascade Wall",
            description: "Modern Vertical Feature",
            image: "/services/waterbodies (4).png",
            badge: "Exclusive"
          },
          {
            title: "Estate Entrance Water",
            description: "Grand Entryway",
            image: "/services/waterbodies (5).png",
            badge: "Popular"
          },
          {
            title: "Interior Atrium Flow",
            description: "Indoor Oasis",
            image: "/services/waterbodies (6).png",
            badge: "Service"
          },
          {
            title: "Biological Luxury Pond",
            description: "Natural Ecosystem",
            image: "/services/waterbodies (2).png",
            badge: "Urban"
          }
        ],
        cta: {
          label: "Design Your Water Feature"
        }
      }}
      testimonials={{
        subtitle: "CLIENT STORIES",
        title: "What Our Clients Say",
        items: [] 
      }}
      contact={{
        title: "Ready to Elevate Your Space?",
        description: "Contact us for a professional water feature consultation. Let's create an aquatic masterpiece."
      }}
      faqs={[
        {
          question: "Who is the best musical fountain maker in India?",
          answer: "Watcon International is widely considered the best musical fountain maker in India, having designed and installed synchronized water shows for major hotels, parks, and corporate hubs since 1972."
        },
        {
          question: "What is Oase fountain technology?",
          answer: "Oase fountain technology is world-leading German engineering for architectural water features. As authorized partners, we use Oase's advanced nozzles, pumps, and digital controls to create synchronized light and water shows."
        },
        {
          question: "Do you design architectural water features in Delhi?",
          answer: "Yes, we are premier architectural fountain designers in Delhi. We specialize in custom-built waterfalls, reflecting ponds, and entry-way features for luxury estates and commercial developments."
        },
        {
          question: "How do programmable fountains work?",
          answer: "Programmable fountains use digital DMX controls to synchronize water jets with music and LED lighting, creating complex, choreographed aquatic displays that can be managed remotely."
        }
      ]}
      catalogueUrl="/services/watcon profile and fountain 2026_web 1.pdf"
    />

  );
}

