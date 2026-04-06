"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceHero from "./ServiceHero";
import ServiceGrid from "./ServiceGrid";
import ServiceProjects from "./ServiceProjects";
import WhyChooseWatcon from "./WhyChooseWatcon";

import ServiceTestimonials from "./ServiceTestimonials";
import ContactSection from "@/sections/ContactSection";
import FAQAccordion from "@/components/FAQAccordion";
import { FadeIn } from "@/components/FadeIn";
import ServiceNavigation from "./ServiceNavigation";
import ServiceCatalogue from "./ServiceCatalogue";
import styles from "@/app/faq/FAQ.module.css";


import CtaSection from "@/sections/CtaSection";
import ContentSection from "@/sections/ContentSection";
// import { LucideIcon } from "lucide-react";


interface ServiceItem {
    title: string;
    description: string;
    icon: string;

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
    icon: string;

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

interface FAQItem {
    question: string;
    answer: string;
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
    faqs?: FAQItem[];
    catalogueUrl?: string;
}


export default function ServiceDetailTemplate({
    hero,
    services,
    projects,
    testimonials,
    contact,
    faqs,
    catalogueUrl
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
                    actions={hero.actions}
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
                    catalogueUrl={catalogueUrl}
                />



                <WhyChooseWatcon />

                {/* <ServiceTestimonials
                    subtitle={testimonials.subtitle}
                    title={testimonials.title}
                    testimonials={testimonials.items}
                /> */}

                {faqs && faqs.length > 0 && (
                    <section className={styles.faqSection} style={{ backgroundColor: '#0c0c0c', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        <div className={styles.container}>
                            <div className={styles.hero} style={{ padding: '0 0 60px 0', maxWidth: '100%' }}>
                                <FadeIn>
                                    <p style={{ color: '#bdb595', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '15px' }}>Common Questions</p>
                                    <h2 className={styles.title} style={{ margin: 0 }}>Frequently Asked <span>Questions</span></h2>
                                </FadeIn>
                            </div>
                            <FAQAccordion faqs={faqs} />
                        </div>
                    </section>
                )}

                <ServiceNavigation />

                {catalogueUrl && (
                  <ServiceCatalogue pdfUrl={catalogueUrl} />
                )}
                
                <CtaSection />

                <ContactSection

                    title={contact.title}
                    description={contact.description}
                />
            </main>
            <Footer />
        </>
    );
}
