"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ScrollParallaxProps {
  children: ReactNode;
  distance?: number;
  direction?: "up" | "down";
  className?: string;
}

export function ScrollParallax({ 
  children, 
  distance = 50, 
  direction = "up",
  className = ""
}: ScrollParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const range = direction === "up" ? [distance, -distance] : [-distance, distance];
  const y = useTransform(scrollYProgress, [0, 1], range);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  );
}
