"use client";

import { motion } from "framer-motion";

export const FadeIn = ({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 1,
                ease: [0.21, 0.47, 0.32, 0.98], // smooth luxury easing curve
                delay,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
