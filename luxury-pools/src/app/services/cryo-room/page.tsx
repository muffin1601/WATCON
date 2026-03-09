"use client";

import ServiceDetailTemplate from "@/sections/service-detail/ServiceDetailTemplate";
import { Thermometer, Zap, ShieldCheck, Settings, Heart, Wind } from "lucide-react";

export default function CryoRoomPage() {
  return (
    <ServiceDetailTemplate
      hero={{
        subtitle: "Advanced Recovery",
        title: "Bespoke Cryotherapy & Cold Plunge Suites",
        description: "Harness the power of extreme cold for recovery and longevity. Our custom cryo rooms and cold plunges are designed with surgical precision for elite performance.",
        image: "https://images.pexels.com/photos/1036323/pexels-photo-1036323.jpeg"
      }}
      services={{
        subtitle: "THERMAL SHOCK TECH",
        title: "Cold Therapy Solutions",
        items: [
          {
            title: "Whole Body Cryo",
            description: "Advanced nitrogen or electric systems for extreme sub-zero metabolic boosting.",
            icon: Thermometer,
            href: "#"
          },
          {
            title: "Cold Plunge Systems",
            description: "Temperature-controlled immersion pools with ozone filtration and Chiller tech.",
            icon: Wind,
            href: "#"
          },
          {
            title: "Elite Recovery Tech",
            description: "Customized lighting and bio-metric integration for optimal recovery sessions.",
            icon: Zap,
            href: "#"
          },
          {
            title: "Commercial Grading",
            description: "Robust, heavy-duty cooling systems designed for high-traffic wellness centers.",
            icon: Settings,
            href: "#"
          }
        ]
      }}
      projects={{
        subtitle: "RECOVERY PORTFOLIO",
        title: "Iconic Cold Suites",
        items: [
          {
            title: "Project 1",
            description: "Electric Cryo Chamber",
            image: "https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg"
          },
          {
            title: "Project 2",
            description: "Modern Cold Plunge",
            image: "https://images.pexels.com/photos/14929512/pexels-photo-14929512.jpeg"
          },
          {
            title: "Project 3",
            description: "Sports Medicine Wing",
            image: "https://images.pexels.com/photos/271815/pexels-photo-271815.jpeg"
          },
          {
            title: "Project 4",
            description: "Luxury Home Recovery",
            image: "https://images.pexels.com/photos/1662549/pexels-photo-1662549.jpeg"
          },
          {
            title: "Project 5",
            description: "Biohacking Suite",
            image: "https://images.pexels.com/photos/3068519/pexels-photo-3068519.jpeg"
          },
          {
            title: "Project 6",
            description: "Executive Health Club",
            image: "https://images.pexels.com/photos/14917453/pexels-photo-14917453.jpeg"
          }
        ]
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
        description: "Plan your elite recovery suite with our thermal shock experts. Contact us today."
      }}
    />
  );
}
