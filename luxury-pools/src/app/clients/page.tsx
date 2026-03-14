"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollParallax } from "@/components/ScrollParallax";
import ContactSection from "@/sections/ContactSection";
import styles from './clients.module.css';
import { Users, Building2, School, Trophy, Briefcase, FileText } from 'lucide-react';

const clientData = [
    {
        category: "Private Residences",
        icon: <Users size={24} />,
        clients: [
            { name: "Mr Shiv Nadar", entity: "HCL", logo: "/clients/hcl.png" },
            { name: "Mr Arjun Juneja", entity: "Mankind Pharma", logo: "/clients/mankind.webp" },
            { name: "Mr KP Singh", entity: "DLF", logo: "/clients/dlf.jpg" },
            { name: "Mr LN Mittal", entity: "Arcelor Mittal", logo: "/clients/arcelormittal.svg" },
            { name: "Mr Rajan Mittal", entity: "Bharti Airtel", logo: "/clients/airtel.png" },
            { name: "Mr Kumar Manglam Birla", entity: "Aditya Birla Group", logo: "/clients/aditya-birla.png" }
        ]
    },
    {
        category: "Hotels Projects",
        icon: <Building2 size={24} />,
        clients: [
            { name: "The Oberoi Group", entity: "Delhi / Gurgaon", logo: "/clients/oberoi.jpg" },
            { name: "The Taj Group", entity: "Delhi / Chandigarh", logo: "/clients/taj.png" },
            { name: "Grand Hyatt", entity: "Delhi", logo: "/clients/grand-hyatt.png" },
            { name: "The Westin Group", entity: "Gurgaon / Sohna", logo: "/clients/westin.webp" },
            { name: "The Sheraton Group", entity: "ITC Maurya", logo: "/clients/sheraton.png" },
            { name: "Le Meridien", entity: "New Delhi", logo: "/clients/le-meridien.png" }
        ]
    },
    {
        category: "School / Institutional",
        icon: <School size={24} />,
        clients: [
            { name: "Shiv Nadar School", entity: "Faridabad / Noida", logo: "/clients/shiv-nadar-school.png" },
            { name: "British School", "entity": "Chankyapuri, Delhi", logo: "/clients/british-school.png" },
            { name: "Shiv Nadar University", "entity": "Dadri, Noida", logo: "/clients/shiv-nadar-univ.png" },
            { name: "Step By Step School", "entity": "Noida", logo: "/clients/step-by-step.png" },
            { name: "Ambience School", "entity": "New Delhi", logo: "/clients/ambience.jpg" },
            { name: "Embassy Projects", "entity": "New Delhi", logo: "/clients/us-embassy.avif" }
        ]
    },
    {
        category: "Competition Pools",
        icon: <Trophy size={24} />,
        clients: [
            { name: "Sirifort Sports Complex", entity: "New Delhi", logo: "/clients/sirifort.jpg" },
            { name: "Yamuna Sports Complex", entity: "New Delhi", logo: "" },
            { name: "Games Village", entity: "New Delhi", logo: "" },
            { name: "S.P. Mukerji Complex", entity: "New Delhi", logo: "" },
        ]
    },
    {
        category: "Commercial",
        icon: <Briefcase size={24} />,
        clients: [
            { name: "DLF Magnolias", entity: "DLF Group, Gurgaon", logo: "/clients/dlf.jpg" },
            { name: "DLF Aralias", entity: "DLF Group, Gurgaon", logo: "/clients/dlf.jpg" },
            { name: "Larsen & Toubro", entity: "Construction", logo: "/clients/l-and-t.png" },
            { name: "Emaar Palm Terace", entity: "Emaar MGF, Gurgaon", logo: "/clients/emaar.jpg" },
            { name: "Adobe Campus", entity: "Noida", logo: "/clients/adobe.jpg" },
            { name: "Ford Foundation", entity: "New Delhi", logo: "/clients/ford.webp" }
        ]
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export default function ClientsPage() {
    return (
        <div className={styles.clientsPage}>
            <Navbar />
            
            <section className={styles.hero}>
                <ScrollParallax distance={40}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Our Distinguished Clients</h1>
                        <p>
                            Partnering with visionaries and industry leaders to create aquatic 
                            masterpieces that define luxury and excellence across the globe.
                        </p>
                    </motion.div>
                </ScrollParallax>
            </section>

            <main className={styles.content}>
                {clientData.map((section, sectionIdx) => (
                    <section key={sectionIdx} className={styles.categorySection}>
                        <ScrollParallax distance={20} direction="up">
                            <motion.div 
                                className={styles.categoryHeader}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <span style={{ color: '#bdb595' }}>{section.icon}</span>
                                <h2>{section.category}</h2>
                                <div className={styles.line}></div>
                            </motion.div>
                        </ScrollParallax>

                        <motion.div 
                            className={styles.clientGrid}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {section.clients.map((client, clientIdx) => (
                                <motion.div 
                                    key={clientIdx} 
                                    className={styles.clientCard}
                                    variants={itemVariants}
                                >
                                    <ScrollParallax distance={15 + (clientIdx % 3) * 10} direction={clientIdx % 2 === 0 ? "up" : "down"}>
                                        <div className={styles.logoWrapper}>
                                            {client.logo ? (
                                                <div className={styles.logoContainer}>
                                                    <Image 
                                                        src={client.logo} 
                                                        alt={`${client.name} logo`}
                                                        width={80}
                                                        height={80}
                                                        className={styles.clientLogo}
                                                        unoptimized
                                                    />
                                                </div>
                                            ) : (
                                                <div className={styles.logoPlaceholder}>
                                                    {client.entity.split(' ').filter(word => word.length > 0).map(word => word[0].toUpperCase()).join('')}
                                                </div>
                                            )}
                                        </div>
                                        <div className={styles.clientName}>{client.name}</div>
                                        <div className={styles.clientSub}>{client.entity}</div>
                                    </ScrollParallax>
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>
                ))}

                <motion.section 
                    className={styles.pdfCtaSection}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3>Explore Our Full Legacy</h3>
                    <p>
                        We have partnered with hundreds of distinguished clients over the decades. 
                        View our comprehensive portfolio to see our complete list of projects.
                    </p>
                    <a 
                        href="/clients-list.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.pdfButton}
                    >
                        <FileText size={20} />
                        View More
                    </a>
                </motion.section>
            </main>

            <ContactSection />
            <Footer />
        </div>
    );
}
