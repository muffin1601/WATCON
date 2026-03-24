import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
// import { Flower2, Waves, Heart, Droplets } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Koi Pond Builders India | Luxury Garden Water Features Delhi NCR",
  description: "Watcon International is India's leading koi pond construction company. We design biological koi ponds, architectural waterfalls, and sustainable garden ecosystems for luxury homes in Delhi, Gurgaon, and Noida.",
  alternates: {
    canonical: "https://watcon.co.in/services/koi-ponds/",
  },
  keywords: [
    "koi pond builder india",
    "biological filtration koi pond delhi",
    "luxury garden water features india",
    "koi pond designer gurgaon",
    "architectural waterfall construction",
    "japanese garden pond builder delhi",
    "modern ecosystem pond india"
  ],
  openGraph: {
    title: "Eco-Friendly Koi Ponds & Ecosystems | Watcon International",
    description: "Creating living masterpieces with advanced life support systems for crystal clear water.",
    images: ["/services/koiponds%20(1).webp"],
  }
};

export default function KoiPondsPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Ecosystems of Serenity",
        title: "Koi Ponds & Ecosystems",
        description: "Create a living masterpiece in your garden. Our koi ponds are engineered with advanced life support systems for crystal clear water and healthy aquatic life, blending seamless aesthetics with biological efficiency.",
        image: "/services/koiponds%20(1).webp",
        actions: [
          { label: "Consult Expert", href: "/contact", primary: true },
          { label: "View Our Work", href: "#projects" }
        ]

      }}
      services={{
        subtitle: "LIVING WATER",
        title: "Koi & Ecosystem Specialists",
        items: [
          {
            title: "Pond Engineering",
            description: "Precision-designed ponds featuring bottom drains and skimmers for optimal flow, perfect for your luxury garden.",
            icon: "Waves",

            href: "/services/water-bodies"
          },
          {
            title: "Filtration Systems",
            description: "State-of-the-art biological and mechanical filtration for ultra-clear water, essential for a healthy koi habitat.",
            icon: "Droplets",

            href: "/services/swimming-pools"
          },
          {
            title: "Aquatic Landscaping",
            description: "Natural stone placements and aquatic planting to create a harmonious ecosystem that feels like a natural retreat.",
            icon: "Flower2",

            href: "/portfolio"
          },
          {
            title: "Bio-Security",
            description: "Systems designed to keep your valuable koi safe and healthy year-round, backed by 50+ years of aquatic expertise.",
            icon: "Heart",

            href: "/contact"
          }
        ]
      }}
      projects={{
        subtitle: "RECENT ECOSYSTEMS",
        title: "Selected Ponds & Lakes",
        description: "From traditional Japanese ponds to modern infinity pools, our koi ponds are designed to be the centerpiece of your sanctuary.",
        items: [
          {
            title: "Project 1",
            description: "Traditional Japanese Koi Pond",
            image: "/services/koiponds%20(1).webp",
            badge: "Premium"
          },
          {
            title: "Project 2",
            description: "Modern Infinity Pond",
            image: "/services/koiponds%20(2).webp",
            badge: "Signature"
          },
          {
            title: "Project 3",
            description: "Courtyard Reflection Pond",
            image: "/services/koiponds%20(3).webp",
            badge: "Exclusive"
          },
          {
            title: "Project 4",
            description: "Large Estate Lake",
            image: "/services/koiponds%20(4).webp",
            badge: "Popular"
          },
          {
            title: "Project 5",
            description: "Indoor Atrium Pond",
            image: "/services/koiponds%20(5).webp",
            badge: "Service"
          },
          {
            title: "Project 6",
            description: "Waterfall-Fed Pond",
            image: "/services/koiponds%20(6).webp",
            badge: "Urban"
          }
        ],
        cta: {
          label: "Request a Custom Design"
        }
      }}
      testimonials={{
        subtitle: "LIVING TESTIMONIALS",
        title: "Stories from the Water Edge",
        items: [
          {
            name: "Masao T.",
            role: "Collector",
            avatar: "https://i.pravatar.cc/150?u=masao",
            content: "Watcon's understanding of water chemistry is unmatched. My koi have never been healthier.",
            rating: 5
          },
          {
            name: "Sarah M.",
            role: "Garden Designer",
            avatar: "https://i.pravatar.cc/150?u=sarah",
            content: "They blend technical necessity with pure art. The pond detail is the soul of our garden.",
            rating: 5
          },
          {
            name: "William J.",
            role: "Nature Lover",
            avatar: "https://i.pravatar.cc/150?u=william",
            content: "Sitting by the pond they built is the most peaceful part of my day. A true masterpiece.",
            rating: 5
          }
        ]
      }}
      contact={{
        title: "Start Your Living Water Journey",
        description: "Let's design a sustainable and beautiful koi pond for your home. Reach out for a free design consultation."
      }}
      faqs={[
        {
          question: "Who is the best koi pond builder in India?",
          answer: "Watcon International is widely regarded as the best koi pond builder in India, with specialized expertise in biological filtration and long-term ecosystem health."
        },
        {
          question: "What is biological filtration for a koi pond in Delhi?",
          answer: "Biological filtration for a koi pond in Delhi involves using beneficial bacteria to break down fish waste, ensuring crystal clear water and a healthy environment for your koi, even in varying outdoor temperatures."
        },
        {
          question: "Can you design a luxury garden water feature with a waterfall?",
          answer: "Yes, we specialize in luxury garden water features and architectural waterfall construction. We combine natural aesthetics with advanced pumping and filtration systems to create stunning focal points."
        },
        {
          question: "Do you build traditional Japanese garden ponds in Delhi?",
          answer: "Yes, Watcon is an expert Japanese garden pond builder in Delhi. We follow traditional design principles while integrating modern life support systems for the best of both worlds."
        }
      ]}
    />

  );
}

