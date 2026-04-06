"use client";

import { FileText, Download } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { ScrollParallax } from "@/components/ScrollParallax";
import styles from "./ServiceCatalogue.module.css";

interface ServiceCatalogueProps {
    pdfUrl: string;
}

export default function ServiceCatalogue({ pdfUrl }: ServiceCatalogueProps) {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <ScrollParallax distance={40}>
                    <FadeIn direction="up">
                        <div className={styles.card}>
                            <div className={styles.content}>
                                <div className={styles.iconWrapper}>
                                    <FileText size={40} strokeWidth={1.5} className={styles.icon} />
                                </div>
                                <div className={styles.textContent}>
                                    <p className={styles.subTitle}>OFFICIAL RESOURCE</p>
                                    <h2 className={styles.title}>Download Our <span>Official Catalogue</span></h2>
                                    <p className={styles.description}>
                                        Explore our complete collection of master-engineered aquatic solutions and specialized luxury outdoor products in exhaustive detail.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.actions}>
                                <a 
                                    href={pdfUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className={styles.downloadBtn}
                                    aria-label="Download Full PDF Catalogue"
                                >
                                    View Full Catalogue <Download size={20} style={{ marginLeft: '12px' }} />
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                </ScrollParallax>
            </div>
        </section>
    );
}
