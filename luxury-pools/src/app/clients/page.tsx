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
            { name: "Mr Rajiv Juneja", entity: "Mankind Pharma", logo: "/clients/mankind.webp" },
            { name: "Mr Sheetal Arora", entity: "Mankind Pharma", logo: "/clients/mankind.webp" },
            { name: "Mr KP Singh", entity: "DLF", logo: "/clients/dlf.jpg" },
            { name: "Mr Pankaj Bansal", entity: "M3M", logo: "/clients/m3m-logo-1.png" },
            { name: "Mr Rutash Goel", entity: "Omaxe", logo: "/clients/emaar.jpg" }, 
            { name: "Mr Khalid Massod", entity: "Shalimaar Group Lucknow", logo: "/clients/shalimar-logo-og-img.png" },
            { name: "Mr Ravi Jaipuria", entity: "Varun Beverages", logo: "/clients/1e65dbc089e721dbb7f49b7042a98d51.jpg" },
            { name: "Mr Sanjeev Aggarwal", entity: "Moon Beverages", logo: "/clients/logo_e3fe3c22-37c0-40c7-ab2c-dd4012a16bce.jpg" },
            { name: "Mr Goenka", entity: "Sanjiv Goenka Group", logo: "/clients/aditya-birla.png" },
            { name: "Mr Ponty Chaddha", entity: "Wave Group", logo: "/clients/images.png" },
            { name: "Mr Burman", entity: "Dabur", logo: "/clients/Dabur_Logo.svg.png" },
            { name: "Mr Minda", entity: "UNO Minda", logo: "/clients/images (1).png" },
            { name: "Mr Uppal", entity: "Richa Exports", logo: "/clients/images.jpg" },
            { name: "Mr Pankaj Munjal", entity: "Hero Cycles", logo: "/clients/97d6b2e43ea0d33d4615393b4e6ac9d43d8c3f4aa024ee199fc64cb3231ea2ab.webp" },
            { name: "Mr Sunil Munjal", entity: "Hero Motor", logo: "/clients/Hero_MotoCorp-Logo.wine.png" },
            { name: "Mr Sameer Munjal", entity: "Satyam Auto", logo: "/clients/1622542056.png" },
            { name: "Mr LN Mittal", entity: "Arcelor Mittal", logo: "/clients/arcelormittal.svg" },
            { name: "Mr Rajan Mittal", entity: "Bharti Airtel", logo: "/clients/airtel.png" },
            { name: "Mr Vikrampati Singhania", entity: "JK", logo: "/clients/JK-finner-logo.png" },
            { name: "Mr Shrivats Singhania", entity: "JK", logo: "/clients/JK-finner-logo.png" },
            { name: "Mr Yashpati Singhania", entity: "JK", logo: "/clients/JK-finner-logo.png" },
            { name: "Mr Raghavpati Singhania", entity: "JK", logo: "/clients/JK-finner-logo.png" },
            { name: "Mr Kumar Manglam Birla", entity: "Aditya Birla Group", logo: "/clients/aditya-birla.png" },
            { name: "Mr Aggarwal", entity: "Hira Group", logo: "/clients/images (2).png" },
            // { name: "Mr Sailesh Arora", entity: "Mankind Pharma", logo: "/clients/mankind.webp" },
            // { name: "Mr Mukul Rohatgi", entity: "Senior Advocate", logo: "" },
            // { name: "Mr Kapil Sibal", entity: "Senior Advocate", logo: "" },
            { name: "Mr Singh", entity: "Max Estate", logo: "/clients/images (3).png" },
            { name: "Mr Bhartiya", entity: "Hindustan Times", logo: "/clients/images (4).png" },
            { name: "Mr Jain", entity: "Pan Bahar", logo: "/clients/images (5).png" },
            { name: "Mr Roshan", entity: "Shikhar Gutkha", logo: "/clients/the_shikhar_group_logo.jpg" },
            { name: "Mr Arora", entity: "Dilbagh", logo: "/clients/01-500x500.webp" },
            { name: "Mr Chaurasiya", entity: "Kamla Pasand", logo: "/clients/images (1).jpg" },
            { name: "Rajdarbar Reality", entity: "Rajdarbar Reality", logo: "/clients/logo.png" },
            // { name: "Mr Anurag Gupta", entity: "Rashmi Gutkha", logo: "" },
            // { name: "Tilak Raj Sharma", entity: "Kanpur", logo: "" },
            { name: "Mr Moin Qureshi", entity: "Great Value Foods", logo: "/clients/images (2).jpg" },
            // { name: "Mr Kahndelwal", entity: "Kattha Industry", logo: "" },
            // { name: "Mr Garg", entity: "Tobacco Industry", logo: "" },
            { name: "Mr Kurele", entity: "Jaquar Group", logo: "/clients/Official_Jaquar_Group_Logo.png" },
            { name: "Mr Mehra", entity: "Jaquar Group", logo: "/clients/Official_Jaquar_Group_Logo.png" },
            // { name: "Mr Sirsa", entity: "Politician", logo: "" },
            // { name: "Mr Navjot Singh Siddhu", entity: "Politician", logo: "" }
        ]
    },
    {
        category: "Hotels Projects",
        icon: <Building2 size={24} />,
        clients: [
            { name: "The Oberoi", entity: "New Delhi", logo: "/clients/oberoi.jpg" },
            { name: "The Oberoi", entity: "Chandigarh", logo: "/clients/oberoi.jpg" },
            { name: "The Oberoi", entity: "Gurgaon", logo: "/clients/oberoi.jpg" },
            { name: "The Oberoi", entity: "Bandhavgarh, MP", logo: "/clients/oberoi.jpg" },
            { name: "Mr Vikram Oberoi", entity: "Private Residence", logo: "/clients/oberoi.jpg" },
            { name: "The Taj", entity: "Delhi", logo: "/clients/taj.png" },
            { name: "The Taj Vivanta", entity: "Srinagar", logo: "/clients/taj.png" },
            { name: "The Taj", entity: "Chandigarh", logo: "/clients/taj.png" },
            { name: "The Radisson", entity: "Delhi (Mahipalpur)", logo: "/clients/images (6).png" },
            { name: "The Radisson", entity: "Noida", logo: "/clients/images (6).png" },
            { name: "The Radisson", entity: "Shimla", logo: "/clients/images (6).png" },
            { name: "Westin Hotel", entity: "Gurgaon", logo: "/clients/westin.webp" },
            { name: "Westin Hotel", entity: "Rishikesh", logo: "/clients/westin.webp" },
            { name: "Westin Hotel", entity: "Sohna", logo: "/clients/westin.webp" },
            { name: "ITC Maurya", entity: "Sheraton New Delhi", logo: "/clients/sheraton.png" },
            { name: "Ananda (IHHR)", entity: "Rishikesh", logo: "/clients/images (7).png" },
            { name: "Shangri-la Hotel", entity: "Eros Group, Delhi", logo: "/clients/images (8).png" },
            { name: "Hyatt- Samhi Hotel", entity: "Delhi", logo: "/clients/grand-hyatt.png" },
            { name: "Hyatt Place", entity: "Kathmandu, Nepal", logo: "/clients/images (3).jpg" },
            { name: "Le Meridien", entity: "Thimphu, Bhutan", logo: "/clients/le-meridien.png" },
            // { name: "Shekhar Resorts", entity: "Agra", logo: "" }
        ]
    },
    {
        category: "School / Institutional",
        icon: <School size={24} />,
        clients: [
            { name: "Shiv Nadar School", entity: "Faridabad", logo: "/clients/shiv-nadar-school.png" },
            { name: "Shiv Nadar School", entity: "Noida", logo: "/clients/shiv-nadar-school.png" },
            { name: "Shiv Nadar University", entity: "Dadri", logo: "/clients/shiv-nadar-univ.png" },
            { name: "British School", entity: "Chankyapuri, Delhi", logo: "/clients/british-school.png" },
            { name: "St. Paul George School", entity: "New Delhi", logo: "/clients/pggs-logos.jpg" },
            { name: "Step By Step School", entity: "Noida", logo: "/clients/step-by-step.png" },
            { name: "Ambience School", entity: "New Delhi", logo: "/clients/ambience.jpg" },
            { name: "Sagar Shiksha Santhan", entity: "Tijara, Rajasthan", logo: "/clients/images (4).jpg" },
            // { name: "Brazilian High Commission", entity: "New Delhi", logo: "" },
            // { name: "New Zealand High Commission", entity: "New Delhi", logo: "" },
            { name: "American Embassy", entity: "Kathmandu", logo: "/clients/us-embassy.avif" },
            { name: "American Embassy", entity: "New Delhi", logo: "/clients/us-embassy.avif" }
        ]
    },
    {
        category: "Competition Pools",
        icon: <Trophy size={24} />,
        clients: [
            { name: "Sirifort Sports Complex", entity: "New Delhi", logo: "/clients/sirifort.jpg" },
            { name: "Yamuna Sports Complex", entity: "New Delhi", logo: "" },
            { name: "Games Village", entity: "New Delhi", logo: "" },
            { name: "S.P. Mukerji Pool", entity: "New Delhi", logo: "" }
        ]
    },
    {
        category: "Commercial",
        icon: <Briefcase size={24} />,
        clients: [
            { name: "DLF Magnolias", entity: "Gurgaon", logo: "/clients/dlf.jpg" },
            { name: "DLF Aralias", entity: "Gurgaon", logo: "/clients/dlf.jpg" },
            { name: "DLF Golf Course", entity: "Gurgaon", logo: "/clients/dlf.jpg" },
            { name: "DLF Pavillion", entity: "Gurgaon", logo: "/clients/dlf.jpg" },
            { name: "DLF Mall Of India", entity: "Noida", logo: "/clients/dlf.jpg" },
            { name: "DLF Garden City", entity: "Chennai", logo: "/clients/dlf.jpg" },
            { name: "DLF Purseni Club", entity: "Lucknow", logo: "/clients/dlf.jpg" },
            { name: "DLF Vibhutikhand", entity: "Lucknow", logo: "/clients/dlf.jpg" },
            { name: "Larsen & Turbo", entity: "DLF Mall Of India", logo: "/clients/l-and-t.png" },
            { name: "L&T Projects", entity: "Karnataka / Lucknow", logo: "/clients/l-and-t.png" },
            { name: "Emaar Palm Terace", entity: "Gurgaon", logo: "/clients/emaar.jpg" },
            { name: "Emaar Palm Enclave", entity: "Gurgaon", logo: "/clients/emaar.jpg" },
            { name: "Emaar Gurgaon Green", entity: "Gurgaon", logo: "/clients/emaar.jpg" },
            { name: "Emaar Imperial Garden", entity: "Gurgaon", logo: "/clients/emaar.jpg" },
            { name: "Emaar Palm Drive", entity: "Gurgaon", logo: "/clients/emaar.jpg" },
            { name: "Emaar Palm House", entity: "Gurgaon", logo: "/clients/emaar.jpg" },
            { name: "Ireo Skyone", entity: "Gurgaon", logo: "/clients/images (9).png" },
            { name: "Ireo Club House", entity: "Ludhiana", logo: "/clients/images (9).png" },
            { name: "Ireo The Corridor", entity: "Gurgaon", logo: "/clients/images (9).png" },
            { name: "Ford Foundation", entity: "New Delhi", logo: "/clients/ford.webp" },
            { name: "Adobe Campus", entity: "Noida", logo: "/clients/adobe.jpg" },
            { name: "Sangam Theatre", entity: "New Delhi", logo: "/clients/sangam-cinemas-logo.jpg" },
            { name: "India Bulls Enigma", entity: "Gurgaon", logo: "/clients/indiabulls-enigma-township-logo.png" },
            { name: "Villa Balle Goa", entity: "Goa", logo: "/clients/images (10).png" },
            { name: "Hero Steel Ltd", entity: "New Delhi", logo: "/clients/Hero_MotoCorp-Logo.wine.png" }
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
                                                    {client.entity.split(' ').filter(word => word.length > 0).map(word => word[0].toUpperCase()).join('').substring(0, 3)}
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
