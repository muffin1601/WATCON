"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 20, stiffness: 150, mass: 0.2 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {

        const hasTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
        if (hasTouch) {
            setIsTouchDevice(true);
            return;
        }

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 10); // offset by half the width to center the 20px circle
            cursorY.set(e.clientY - 10);
            if (!isVisible) setIsVisible(true);

            // Check if hovering over clickable elements to increase scale
            const target = e.target as HTMLElement;
            const clickable = target.closest("a, button, input, textarea, li");
            setIsHovering(!!clickable);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", moveCursor);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [cursorX, cursorY, isVisible]);

    if (isTouchDevice) return null;

    return (
        <motion.div
            className={styles.cursor}
            animate={{
                scale: isHovering ? 1.5 : 1,
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
                opacity: isVisible ? 1 : 0,
            }}
        />
    );
}
