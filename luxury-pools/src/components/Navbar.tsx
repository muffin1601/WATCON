"use client";

import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setIsServicesOpen(false);
  };

  const menuLinks = [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Clients", href: "/clients" },
    { name: "Contact Us", href: "/contact" },
  ];

  const services = [
    { name: "Swimming Pools", href: "/services/swimming-pools" },
    { name: "Tiles in Pool", href: "/services/tiles-in-pool" },
    { name: "Water Bodies", href: "/services/water-bodies" },
    { name: "Dehumidifier", href: "/services/dehumidifier" },
    { name: "Koi Ponds", href: "/services/koi-ponds" },
    { name: "Competition Pool", href: "/services/competition-pool" },
    { name: "Spa", href: "/services/spa" },
    { name: "Jacuzzi", href: "/services/jacuzzi" },
    { name: "Sauna", href: "/services/sauna" },
    { name: "Steam", href: "/services/steam" },
    { name: "Cryo Room", href: "/services/cryo-room" },
    { name: "Outdoor Furniture", href: "/services/outdoor-furniture" },
    { name: "Outdoor Fireplaces", href: "/services/outdoor-fireplaces" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${isSidebarOpen ? styles.navbarOpen : ""}`}
      >
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/" onClick={closeSidebar}>
            <Image
              src="/logo2.png"
              alt="WATCON Luxury Pools"
              width={160}
              height={60}
              priority
              className={styles.logoImg}
            />
          </Link>
        </div>


        <div className={styles.right}>
          <Link href="/" className={styles.btnQuote}>
            <Home size={18} className={styles.homeIcon} />
            <span className={styles.homeText}>Home</span>
          </Link>

          <div
            className={`${styles.hamburger} ${isSidebarOpen ? styles.open : ""}`}
            onClick={toggleSidebar}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </motion.nav>


      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`${styles.sidebarOverlay} ${styles.open}`}
              onClick={closeSidebar}
            />

            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`${styles.sidebar} ${styles.open}`}
            >
              <ul className={styles.sidebarNav}>
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link href="/about" className={styles.sidebarLink} onClick={closeSidebar}>
                    <span className={styles.linkText}>About</span>
                  </Link>
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div
                    className={styles.sidebarLink}
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                  >
                    <span className={styles.linkText}>Services</span>
                    <span className={styles.plusMinus}>{isServicesOpen ? "–" : "+"}</span>
                  </div>

                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className={`${styles.servicesDropdown} ${styles.open}`}
                      >
                        <div className={styles.servicesDropdownInner}>
                          <ul className={styles.servicesDropdownList}>
                            {services.map((item, i) => (
                              <li key={i}>
                                <Link 
                                  href={item.href} 
                                  className={styles.servicesDropdownLink} 
                                  onClick={closeSidebar}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>

                {menuLinks.slice(1).map((link, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <Link href={link.href} className={styles.sidebarLink} onClick={closeSidebar}>
                      <span className={styles.linkText}>{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}