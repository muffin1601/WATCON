import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
import { Waves, Droplet, Wind } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Swimming Pool Builders in Delhi NCR | Luxury Pool Construction India",
  description: "Watcon International is India's #1 swimming pool maker since 1972. We design and build luxury residential pools, Olympic-size competition pools, and rooftop infinity pools for Delhi NCR's most exclusive residences.",
  alternates: {
    canonical: "https://watcon.co.in/services/swimming-pools",
  },
  keywords: [
    "swimming pool builder delhi",
    "luxury swimming pool construction india",
    "infinity pool designer delhi ncr",
    "olympic size pool builders india",
    "best pool maker in india",
    "rooftop pool construction delhi"
  ],
  openGraph: {
    title: "Luxury Swimming Pool Construction | Watcon International",
    description: "Expertly engineered luxury pools and aquatic environments since 1972.",
    images: ["/services/swimmingpools (1).png"],
  }
};

export default function SwimmingPoolsPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "The Art of Aquatic Living",
        title: "Luxury <br/> <span>Swimming Pool</span> Construction",
        description: "Where master engineering meets architectural artistry. We design and build India's most iconic aquatic environments, from the legendary pools of The Oberoi to private infinity sanctuaries for the world's most discerning homeowners.",
        image: "/swimmingpool.webp",
        stats: [
          { label: "Pools Built", value: "2500+" },
          { label: "Expert Engineers", value: "45+" },
          { label: "Years Experience", value: "50+" }
        ],
        actions: [
          { label: "Get Free Quote", href: "/contact", primary: true },
          { label: "View Our Work", href: "#projects" }
        ]

      }}
      services={{
        subtitle: "PREMIUM POOL SOLUTIONS",
        title: "Best Swimming Pool Maker in India",
        items: [
          {
            title: "Competition Pools",
            description: "The #1 choice for Olympic size pool builders in India, delivering FINA-standard competition facilities.",
            icon: "Droplet",
            href: "/services/competition-pool"
          },
          {
            title: "Luxury Spas",
            description: "High-end resort pool filtration, integrated hydrotherapy, and infinity edge designs for 5-star developments.",
            icon: "Heart",
            href: "/services/spa"
          },
          {
            title: "Expert Tiling",
            description: "Master-crafted Bisazza glass mosaic and large-format porcelain finishes for a truly exquisite aquatic aesthetic.",
            icon: "Layers",
            href: "/services/tiles-in-pool"
          },
          {
            title: "Water Features",
            description: "Custom-built architectural fountains and musical water displays synchronized with light and sound.",
            icon: "Droplets",
            href: "/services/water-bodies"
          }
        ]
      }}
      projects={{
        subtitle: "PORTFOLIO",
        title: "Our Pool Projects",
        description: "Explore our portfolio of stunning swimming pool installations.",
        items: [
          {
            title: "The Oberoi Collection",
            description: "Signature luxury hospitality project with advanced overflow systems.",
            image: "/services/swimmingpools (1).png",
            badge: "Premium"
          },
          {
            title: "DLF Signature Estate",
            description: "Bespoke residential infinity pool for a premium Delhi NCR estate.",
            image: "/services/swimmingpools (2).png",
            badge: "Signature"
          },
          {
            title: "Olympic Training Facility",
            description: "Full-scale athletic competition pool built to international standards.",
            image: "/services/swimmingpools (3).png",
            badge: "Olympic"
          },
          {
            title: "Hillside Vista Pool",
            description: "Engineering masterpiece featuring a cantilevered infinity edge.",
            image: "/services/swimmingpools (4).png",
            badge: "Exclusive"
          },
          {
            title: "Zen Wellness Resort",
            description: "integrated hydrotherapy and relaxation pool for a 5-star spa.",
            image: "/services/swimmingpools (5).jpeg",
            badge: "Wellness"
          },
          {
            title: "Modern Minimalist Oasis",
            description: "Sleek geometric design with glass-tile finish and mood lighting.",
            image: "/services/swimmingpools (6).png",
            badge: "Urban"
          }
        ],
        cta: {
          label: "Request a Custom Design",
          href: "/contact"
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
      faqs={[
        {
          question: "Who is the best swimming pool builder in Delhi?",
          answer: "Watcon International is widely recognized as the best swimming pool builder in Delhi, with over 50 years of experience in luxury swimming pool construction and iconic projects for hospitality leaders like The Oberoi Group."
        },
        {
          question: "What is the average cost of luxury swimming pool construction in India?",
          answer: "The cost of luxury swimming pool construction in India varies based on dimensions, depth, equipment, and finishes. We provide customized quotes for high-end residential and commercial projects after a thorough engineering consultation."
        },
        {
          question: "Can you build a rooftop infinity pool in Delhi?",
          answer: "Yes, Watcon specializes in rooftop pool construction in Delhi. We handle everything from structural weight analysis and advanced waterproofing to the installation of vanishing edges for a seamless infinity look."
        },
        {
          question: "Do you build Olympic size competition pools?",
          answer: "Absolutely. Watcon is India's leading Olympic size pool builder. We construct FINA-compliant competition pools for sports academies, schools, and international aquatic centers."
        }
      ]}
    />

  );
}

