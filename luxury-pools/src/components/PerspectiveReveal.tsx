"use client";

import { motion } from "framer-motion";

interface PerspectiveRevealProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

export const PerspectiveReveal = ({
    children,
    delay = 0,
    className = "",
}: PerspectiveRevealProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, rotateX: 20, y: 50 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
                duration: 1.5,
                ease: [0.165, 0.84, 0.44, 1],
                delay,
            }}
            style={{ perspective: "1000px" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
