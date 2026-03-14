"use client";

import { motion } from "framer-motion";

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    scale?: number;
    distance?: number;
    duration?: number;
    className?: string;
    viewMargin?: string;
}

export const FadeIn = ({
    children,
    delay = 0,
    direction = "up",
    scale = 1,
    distance = 40,
    duration = 1.2,
    className = "",
    viewMargin = "-10%",
}: FadeInProps) => {
    const directions = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance },
        none: { x: 0, y: 0 },
    };

    return (
        <motion.div
            initial={{ 
                opacity: 0, 
                ...directions[direction],
                scale: scale !== 1 ? scale : 1 
            }}
            whileInView={{ 
                opacity: 1, 
                x: 0, 
                y: 0, 
                scale: 1 
            }}
            viewport={{ once: true, margin: viewMargin }}
            transition={{
                duration: duration,
                ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for a "premium" feel
                delay,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
