"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceHero from "./ServiceHero";
import ServiceGrid from "./ServiceGrid";
import ServiceProjects from "./ServiceProjects";
import WhyChooseWatcon from "./WhyChooseWatcon";

import ServiceTestimonials from "./ServiceTestimonials";
import ContactSection from "@/sections/ContactSection";
import CtaSection from "@/sections/CtaSection";
import ContentSection from "@/sections/ContentSection";
import { LucideIcon } from "lucide-react";

interface ServiceItem {
    title: string;
    description: string;
    icon: LucideIcon;
    href: string;
}

interface Project {
    title: string;
    description: string;
    image: string;
    badge?: string;
}

interface FeatureItem {
    title: string;
    description: string;
    icon: LucideIcon;
    value: string;
}

interface Testimonial {
    name: string;
    role: string;
    content: string;
    rating: number;
    avatar: string;
}

interface Stat {
    label: string;
    value: string;
}

interface Action {
    label: string;
    href: string;
    primary?: boolean;
}

interface ServiceDetailTemplateProps {
    hero: {
        subtitle: string;
        title: string;
        description: string;
        image?: string;
        stats?: Stat[];
        actions?: Action[];
    };
    services: {
        subtitle: string;
        title: string;
        items: ServiceItem[];
    };
    projects: {
        subtitle: string;
        title: string;
        description?: string;
        items: Project[];
        cta?: {
            label: string;
            href?: string;
        };
    };
    testimonials: {
        subtitle: string;
        title: string;
        items: Testimonial[];
    };
    contact: {
        title: string;
        description: string;
    };
}

export default function ServiceDetailTemplate({
    hero,
    services,
    projects,
    testimonials,
    contact
}: ServiceDetailTemplateProps) {
    return (
        <>
            <Navbar />
            <main>
                <ServiceHero
                    subtitle={hero.subtitle}
                    title={hero.title}
                    description={hero.description}
                    image={hero.image}
                    stats={hero.stats}
                />

                <ServiceGrid
                    subtitle={services.subtitle}
                    title={services.title}
                    services={services.items}
                />

                <ServiceProjects
                    subtitle={projects.subtitle}
                    title={projects.title}
                    description={projects.description}
                    projects={projects.items}
                    cta={projects.cta}
                />



                <WhyChooseWatcon />

                {/* <ServiceTestimonials
                    subtitle={testimonials.subtitle}
                    title={testimonials.title}
                    testimonials={testimonials.items}
                /> */}

                {/* <CtaSection /> */}
                {/* <ContentSection /> */}

                <ContactSection
                    title={contact.title}
                    description={contact.description}
                />
            </main>
            <Footer />
        </>
    );
}
