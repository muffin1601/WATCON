"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ScrollParallax } from "./ScrollParallax";
import { FileText } from 'lucide-react';
import styles from '@/app/clients/clients.module.css';

interface Client {
    name: string;
    entity: string;
    logo: string;
}

interface ClientSection {
    category: string;
    icon: React.ReactNode;
    clients: Client[];
}

interface ClientsContentProps {
    clientData: ClientSection[];
}

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

export default function ClientsContent({ clientData }: ClientsContentProps) {
    return (
        <>
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
        </>
    );
}
