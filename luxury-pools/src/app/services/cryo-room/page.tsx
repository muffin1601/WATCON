import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
// import { Thermometer, Zap, Settings, Wind } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cold Plunge Pool Manufacturer India | Cryotherapy Room Builders",
  description: "Watcon International is the best cold plunge pool manufacturer in India. We build professional ice bath systems, cryotherapy rooms, and contrast therapy pools for elite athletes and luxury wellness centers.",
  alternates: {
    canonical: "https://watcon.co.in/services/cryo-room/",
  },
  keywords: [
    "cold plunge pool manufacturer india",
    "cryotherapy room builder delhi",
    "ice bath system india",
    "professional cryo chamber delhi ncr",
    "contrast therapy pool construction",
    "buy cold plunge pool india",
    "athlete recovery suite designer"
  ],
  openGraph: {
    title: "Cryotherapy Rooms & Ice Bath Systems | Watcon International",
    description: "Harness the power of extreme cold for recovery and longevity with professional-grade cryo engineering.",
    images: ["/services/cryoroom.webp"],
  }
};

export default function CryoRoomPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Best Cold Plunge Pool Manufacturer India",
        title: "Cryotherapy Rooms & <br/> Ice Bath Systems",
        description: "Watcon International builds professional cold plunge pools and cryotherapy rooms used by athletes, wellness centres and luxury spas. Harness the power of extreme cold for recovery and longevity with our master-engineered systems.",
        image: "/services/cryoroom.webp",
        actions: [
          { label: "Consult Recovery", href: "/contact", primary: true },
          { label: "View Our Work", href: "#projects" }
        ]

      }}
      services={{
        subtitle: "THERMAL RECOVERY",
        title: "Cold Plunge Pool India",
        items: [
          {
            title: "Vitality Spas",
            description: "Temperature-controlled ice bath pools with advanced ozone filtration, often paired with luxury spa vitality pools.",
            icon: "Thermometer",
            href: "/services/spa"
          },
          {
            title: "Thermal Wellness",
            description: "Custom-built Cryo Rooms and cryotherapy installations, perfect complements to our bespoke saunas and steam rooms.",
            icon: "Wind",
            href: "/services/sauna"
          },
          {
            title: "Contrast Therapy",
            description: "Dual-temperature systems for high-performance contrast therapy, often built alongside our luxury swimming pools.",
            icon: "Zap",
            href: "/services/swimming-pools"
          },
          {
            title: "Professional Recovery",
            description: "Complete recovery suite design including cold plunges and rehabilitation zones for elite sports arenas.",
            icon: "Settings",
            href: "/services/competition-pool"
          }
        ]
      }}
      projects={{
        subtitle: "RECOVERY PORTFOLIO",
        title: "Iconic Cold Suites",
         description: "Explore our collection of cutting-edge recovery environments, where cryogenic science meets sophisticated architectural design.",
        
        items: [
          {
            title: "Project 1",
            description: "Electric Cryo Chamber",
            image: "/services/cryoroom%20(1).webp",
            badge: "Premium"
          },
          {
            title: "Project 2",
            description: "Modern Cold Plunge",
            image: "/services/cryoroom%20(2).webp",
            badge: "Signature"
          },
          {
            title: "Project 3",
            description: "Sports Medicine Wing",
            image: "/services/cryoroom%20(3).webp",
            badge: "Exclusive"
          },
          {
            title: "Project 4",
            description: "Luxury Home Recovery",
            image: "/services/cryoroom%20(4).webp",
            badge: "Popular"
          },
          {
            title: "Project 5",
            description: "Biohacking Suite",
            image: "/services/cryoroom%20(5).webp",
            badge: "Service"
          },
          {
            title: "Project 6",
            description: "Executive Health Club",
            image: "/services/cryoroom.webp",
            badge: "Urban"
          }
        ],
        cta: {
          label: "Request a Custom Design"
        }
      }}
      testimonials={{
        subtitle: "RECOVERY STORIES",
        title: "Cold Shock Feedback",
        items: [
          {
            name: "Alex M.",
            role: "Pro Athlete",
            avatar: "https://i.pravatar.cc/150?u=alexm",
            content: "The cold plunge they installed has significantly reduced my recovery time between matches.",
            rating: 5
          },
          {
            name: "Dr. Sarah",
            role: "Wellness Doctor",
            avatar: "https://i.pravatar.cc/150?u=drsarah",
            content: "Technically a masterpiece. The temperature consistency in the cryo chamber is perfect.",
            rating: 5
          },
          {
            name: "Chris L.",
            role: "Biohacker",
            avatar: "https://i.pravatar.cc/150?u=chrisl",
            content: "Watcon's design for our recovery suite is out of this world. It's the highlight of our facility.",
            rating: 5
          }
        ]
      }}
      contact={{
        title: "Master the Element of Cold",
        description: "Plan your elite recovery suite with India's best cold plunge manufacturers. Contact us today for a free quote."
      }}
      faqs={[
        {
          question: "Who is the leading cold plunge pool manufacturer in India?",
          answer: "Watcon International is recognized as the leading cold plunge pool manufacturer in India, specializing in custom-built ice bath systems for professional recovery, luxury homes, and wellness centers."
        },
        {
          question: "Where can I buy a cold plunge pool in India?",
          answer: "You can buy a professional high-end cold plunge pool directly from Watcon International. We provide turnkey solutions including design, engineering, and installation of temperature-controlled recovery pools."
        },
        {
          question: "What is contrast therapy pool construction?",
          answer: "Contrast therapy pool construction involves building adjacent hot and cold pools to allow users to alternate between temperatures, which is a proven method for muscle recovery and metabolic health."
        },
        {
          question: "Do you design professional cryotherapy rooms in Delhi?",
          answer: "Yes, Watcon is a specialist cryotherapy room builder in Delhi. We design and install professional-grade cryo chambers that maintain consistent extreme low temperatures for effective therapy."
        }
      ]}
      catalogueUrl="/services/watcon profile and fountain 2026_web 1.pdf"
    />

  );
}

