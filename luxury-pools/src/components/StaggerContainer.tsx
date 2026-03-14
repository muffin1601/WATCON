"use client";

import { motion } from "framer-motion";

interface StaggerContainerProps {
    children: React.ReactNode;
    delay?: number;
    staggerChildren?: number;
    className?: string;
    viewMargin?: string;
}

export const StaggerContainer = ({
    children,
    delay = 0,
    staggerChildren = 0.1,
    className = "",
    viewMargin = "-10%",
}: StaggerContainerProps) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: viewMargin }}
            variants={{
                hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: {
                        staggerChildren: staggerChildren,
                        delayChildren: delay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({
    children,
    direction = "up",
    distance = 30,
    duration = 1,
    className = "",
}: {
    children: React.ReactNode;
    direction?: "up" | "down" | "left" | "right" | "none";
    distance?: number;
    duration?: number;
    className?: string;
}) => {
    const directions = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance },
        none: { x: 0, y: 0 },
    };

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, ...directions[direction] },
                show: { 
                    opacity: 1, 
                    x: 0, 
                    y: 0,
                    transition: {
                        duration: duration,
                        ease: [0.22, 1, 0.36, 1],
                    }
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
