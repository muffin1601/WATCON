"use client";

import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

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

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${isSidebarOpen ? styles.navbarOpen : ""}`}>
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
            Home
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
      </nav>


      <div
        className={`${styles.sidebarOverlay} ${isSidebarOpen ? styles.open : ""}`}
        onClick={closeSidebar}
      />


      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}>
        <ul className={styles.sidebarNav}>
          {/* <li>
            <Link href="/" className={styles.sidebarLink} onClick={closeSidebar}>
              <span className={styles.linkText}>Home</span>
            </Link>
          </li> */}

          <li>
            <Link href="/about" className={styles.sidebarLink} onClick={closeSidebar}>
              <span className={styles.linkText}>About</span>
            </Link>
          </li>

          <li>
            <div
              className={styles.sidebarLink}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              <span className={styles.linkText}>Services</span>
              <span className={styles.plusMinus}>{isServicesOpen ? "–" : "+"}</span>
            </div>


            <div className={`${styles.servicesDropdown} ${isServicesOpen ? styles.open : ""}`}>
              <div className={styles.servicesDropdownInner}>
                <ul className={styles.servicesDropdownList}>
                  <li><Link href="/services/swimming-pools" className={styles.servicesDropdownLink} onClick={closeSidebar}>Swimming Pools</Link></li>
                  <li><Link href="/services/tiles-in-pool" className={styles.servicesDropdownLink} onClick={closeSidebar}>Tiles in Pool</Link></li>
                  <li><Link href="/services/water-bodies" className={styles.servicesDropdownLink} onClick={closeSidebar}>Water Bodies</Link></li>
                  <li><Link href="/services/dehumidifier" className={styles.servicesDropdownLink} onClick={closeSidebar}>Dehumidifier</Link></li>
                  <li><Link href="/services/koi-ponds" className={styles.servicesDropdownLink} onClick={closeSidebar}>Koi Ponds</Link></li>
                  <li><Link href="/services/competition-pool" className={styles.servicesDropdownLink} onClick={closeSidebar}>Competition Pool</Link></li>
                  <li><Link href="/services/spa" className={styles.servicesDropdownLink} onClick={closeSidebar}>Spa</Link></li>
                  <li><Link href="/services/jacuzzi" className={styles.servicesDropdownLink} onClick={closeSidebar}>Jacuzzi</Link></li>
                  <li><Link href="/services/sauna" className={styles.servicesDropdownLink} onClick={closeSidebar}>Sauna</Link></li>
                  <li><Link href="/services/steam" className={styles.servicesDropdownLink} onClick={closeSidebar}>Steam</Link></li>
                  <li><Link href="/services/cryo-room" className={styles.servicesDropdownLink} onClick={closeSidebar}>Cryo Room</Link></li>
                  <li><Link href="/services/outdoor-furniture" className={styles.servicesDropdownLink} onClick={closeSidebar}>Outdoor Furniture</Link></li>
                  <li><Link href="/services/outdoor-fireplaces" className={styles.servicesDropdownLink} onClick={closeSidebar}>Outdoor Fireplaces</Link></li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <Link href="/portfolio" className={styles.sidebarLink} onClick={closeSidebar}>
              <span className={styles.linkText}>Portfolio</span>
            </Link>
          </li>

          <li>
            <Link href="/clients" className={styles.sidebarLink} onClick={closeSidebar}>
              <span className={styles.linkText}>Clients</span>
            </Link>
          </li>

          <li>
            <Link href="/contact" className={styles.sidebarLink} onClick={closeSidebar}>
              <span className={styles.linkText}>Contact Us</span>
            </Link>
          </li>
        </ul>


      </div>
    </>
  );
}