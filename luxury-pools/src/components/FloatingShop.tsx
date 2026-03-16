"use client";

import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FloatingShop.module.css';

export default function FloatingShop() {
    return (
        <motion.a
            href="https://buyonlineglobal.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.floatingContainer}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className={styles.iconWrapper}>
                <ShoppingBag size={24} strokeWidth={1.5} />
                <div className={styles.pulse}></div>
            </div>
            <div className={styles.labelWrapper}>
                <span className={styles.labelSub}>Global Store</span>
                <span className={styles.labelMain}>Buy Online</span>
            </div>
        </motion.a>
    );
}
