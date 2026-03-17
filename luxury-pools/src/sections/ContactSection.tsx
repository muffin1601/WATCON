"use client";

import styles from "./ContactSection.module.css";
import { FadeIn } from "../components/FadeIn";
import { StaggerContainer, StaggerItem } from "../components/StaggerContainer";
import { Phone, Mail, MapPin, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { ScrollParallax } from "../components/ScrollParallax";
import { useState } from "react";

interface ContactSectionProps {
  title?: string;
  description?: string;
  subTitle?: string;
}

export default function ContactSection({
  title = "Begin Your Journey",
  description = "Tell us about your vision — our design consultants will reach out within 24 hours to discuss how we can bring it to life.",
  subTitle = "PRIVATE CONSULTATION"
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          pageSource: typeof window !== "undefined" ? window.location.pathname : "Unknown"
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send enquiry. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again later.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className={styles.section} id="contact">

      <div className={styles.container}>
        <div className={styles.header}>
          <FadeIn delay={0.1}>
            <p className={styles.subTitle}>{subTitle}</p>
          </FadeIn>
          
          <ScrollParallax distance={30}>
            <FadeIn delay={0.2}>
              <h2 className={styles.title}>
                {title.split(' ').map((word, i) => {
                  const pureWord = word.toLowerCase().replace(/[.,!?]/g, '');
                  const highlights = ['journey', 'pool', 'dream', 'extraordinary', 'project', 'vision', 'consultation'];
                  return highlights.includes(pureWord) ?
                    <span key={i} className={styles.accent}>{word} </span> : word + ' '
                })}
              </h2>

            </FadeIn>
          </ScrollParallax>

          <FadeIn delay={0.3}>
            <p className={styles.description}>{description}</p>
          </FadeIn>
        </div>

        <div className={styles.mainGrid}>
          {/* Form Side */}
          <ScrollParallax distance={40} direction="up" className={styles.formContainer}>
            <FadeIn delay={0.4} scale={0.95}>
              <div className={styles.formCard}>
                <h3 className={styles.formHeading}>Send an Enquiry</h3>
                
                {status === "success" ? (
                  <div className={styles.successState}>
                    <CheckCircle2 size={48} color="#22c55e" />
                    <h4>Enquiry Sent Successfully</h4>
                    <p>Thank you for reaching out. We have sent a confirmation email to {formData.email} and our team will contact you shortly.</p>
                    <button onClick={() => setStatus("idle")} className={styles.submitButton}>
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="name">Your Name</label>
                      <input 
                        id="name"
                        name="name"
                        type="text" 
                        placeholder="Your Name" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                        disabled={status === "submitting"}
                      />
                    </div>
    
                    <div className={styles.inputGroup}>
                      <label htmlFor="email">Email Address</label>
                      <input 
                        id="email"
                        name="email"
                        type="email" 
                        placeholder="mail@example.com" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        disabled={status === "submitting"}
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="message">Message (Optional)</label>
                      <textarea 
                        id="message"
                        name="message"
                        placeholder="Tell us about your project..."
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        disabled={status === "submitting"}
                        style={{
                          width: '100%',
                          padding: '1rem',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#fff',
                          fontFamily: 'inherit',
                          fontSize: '0.9rem',
                          outline: 'none',
                          transition: 'border-color 0.3s ease'
                        }}
                      />
                    </div>

                    {status === "error" && (
                      <p className={styles.errorText}>{errorMessage}</p>
                    )}
    
                    <button 
                      type="submit" 
                      className={styles.submitButton}
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? (
                        <>Sending... <Loader2 size={18} className={styles.spinner} /></>
                      ) : (
                        <>Send Enquiry <ArrowRight size={18} className="ml-2" /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </ScrollParallax>

          {/* Info Side */}
          <ScrollParallax distance={40} direction="down" className={styles.infoContainer}>
            <FadeIn delay={0.6} scale={0.95}>
              <div className={styles.infoCard}>
                <h2 className={styles.infoHeading}>Get in Touch</h2>
                <p className={styles.infoDesc}>Our team of pool specialists is ready to help you create the pool of your dreams. Reach us via phone or email — we respond within 24 hours.</p>
  
                <StaggerContainer className={styles.contactList}>
                  <StaggerItem>
                    <a href="https://maps.app.goo.gl/A1TGVLrXHFqGyu3C6" target="_blank" rel="noopener noreferrer" className={styles.contactItemBox} style={{ textDecoration: 'none' }}>
                      <div className={styles.iconCircle}>
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className={styles.contactLabel}>ADDRESS</p>
                        <p className={styles.contactValue}>343, Mehrauli-Gurgaon Rd, Sultanpur, New Delhi, Delhi 110030, India</p>
                      </div>
                    </a>
                  </StaggerItem>

                  <StaggerItem>
                    <div className={styles.contactItemBox}>
                      <div className={styles.iconCircle}>
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className={styles.contactLabel}>PHONE</p>
                        <p className={styles.contactValue}>+91 99998 39999</p>
                      </div>
                    </div>
                  </StaggerItem>
  
                  <StaggerItem>
                    <div className={styles.contactItemBox}>
                      <div className={styles.iconCircle}>
                        <Mail size={18} />
                      </div>
                      <div>
                        <p className={styles.contactLabel}>EMAIL</p>
                        <p className={styles.contactValue}>adit@watcon.net</p>
                      </div>
                    </div>
                  </StaggerItem>
  
                  <StaggerItem>
                    <div className={styles.contactItemBoxHours}>
                      <p className={styles.contactLabel}>WORKING HOURS</p>
                      <p className={styles.contactValueHours}>Mon - Sat: 11:00 AM - 7:00 PM</p>
                      <p className={styles.contactValueHours}>Sunday: Closed</p>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </FadeIn>
          </ScrollParallax>
        </div>
      </div>
    </section>
  );
}


