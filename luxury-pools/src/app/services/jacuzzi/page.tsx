import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
// import { Waves, Droplet, Bath } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Jacuzzi & Hot Tub Installation India | Watcon",
  description: "Immerse yourself in pure relaxation with Watcon's custom-engineered jacuzzis. We provide professional hydrotherapy solutions and luxury hot tub installations for homes and wellness suites across India.",
  alternates: {
    canonical: "https://watcon.co.in/services/jacuzzi/",
  },
  keywords: [
    "jacuzzi installation india",
    "custom hot tub builder delhi",
    "luxury jacuzzi for home india",
    "hydrotherapy tub installation",
    "indoor jacuzzi designers",
    "outdoor spa tub builders"
  ],
  openGraph: {
    title: "Jacuzzi & Hot Tub Solutions | Watcon International",
    description: "Experience luxury hydrotherapy with our custom-engineered systems.",
    images: ["/services/jacuzzi%20(1).webp"],
  }
};

export default function JacuzziPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Luxury Hydrotherapy",
        title: "<span>Jacuzzi</span> & Hot Tub Solutions",
        description: "Immerse yourself in pure relaxation with our custom-engineered jacuzzis, designed to blend luxury with therapeutic benefits.",
        image: "/services/jacuzzi%20(1).webp",
        actions: [
          { label: "Get Free Quote", href: "/contact", primary: true },
          { label: "View Our Work", href: "#projects" }
        ]

      }}
      services={{
        subtitle: "WHAT WE OFFER",
        title: "Jacuzzi & Spa Services",
        items: [
          {
            title: "Vitality Spas",
            description: "Custom hydrotherapy systems integrated into larger vitality pools for a complete wellness circuit experience.",
            icon: "Heart",
            href: "/services/spa"
          },
          {
            title: "Thermal Suites",
            description: "Pair your luxury jacuzzi with our bespoke saunas and steam rooms for the ultimate residential wellness retreat.",
            icon: "Thermometer",
            href: "/services/sauna"
          },
          {
            title: "Crystal Water",
            description: "Hospital-grade filtration and water treatment systems used in our premium-standard swimming pool installations.",
            icon: "Droplets",
            href: "/services/swimming-pools"
          },
          {
            title: "Performance Recovery",
            description: "Advanced hydrotherapy jets designed to complement professional-scale cryo rooms and cold plunge systems.",
            icon: "Zap",
            href: "/services/cryo-room"
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
      faqs={[
        {
          question: "Who provides professional jacuzzi installation in India?",
          answer: "Watcon International is a leading provider of professional jacuzzi installation in India, offering custom-engineered hydrotherapy solutions for luxury residences and high-end hotels."
        },
        {
          question: "Can I get a custom hot tub built in Delhi?",
          answer: "Yes, Watcon is a specialist custom hot tub builder in Delhi. We design and build bespoke hot tubs that fit perfectly into your terrace, garden, or indoor wellness suite with advanced jet systems."
        },
        {
          question: "What is involved in a hydrotherapy tub installation?",
          answer: "A hydrotherapy tub installation involves precise plumbing for high-pressure jets, heating systems for consistent water temperature, and specialized filtration to maintain water clarity and hygiene."
        },
        {
          question: "Do you design indoor jacuzzis for luxury homes?",
          answer: "Yes, we are expert indoor jacuzzi designers. we handle the structural requirements, moisture control, and aesthetic integration to create a seamless spa experience inside your home."
        }
      ]}
    />

  );
}

