"use client";
import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

// ── fade-up on scroll (most common section animation) ──────────────
const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

// ── fade-in (no movement) ──────────────────────────────────────────
const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

// ── slide in from left / right ─────────────────────────────────────
const slideLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
};

const slideRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
};

// ── scale pop ──────────────────────────────────────────────────────
const scalePop: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

// ── stagger container ───────────────────────────────────────────────
const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

// ── Re-export variants for use in pages ────────────────────────────
export { fadeUp, fadeIn, slideLeft, slideRight, scalePop, stagger };

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    variants?: Variants;
    delay?: number;
    duration?: number;
    once?: boolean;
}

/**
 * ScrollReveal — wraps children in a motion.div that animates when it enters the viewport.
 */
export function ScrollReveal({
    children,
    className,
    variants = fadeUp,
    delay = 0,
    duration = 0.6,
    once = true,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once, margin: "-80px" });

    return (
        <motion.div
            ref={ref}
            className={className}
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}

/**
 * StaggerReveal — stagger-animates a list of children on scroll.
 */
export function StaggerReveal({
    children,
    className,
    once = true,
}: {
    children: React.ReactNode;
    className?: string;
    once?: boolean;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once, margin: "-80px" });

    return (
        <motion.div
            ref={ref}
            className={className}
            variants={stagger}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            {children}
        </motion.div>
    );
}

/**
 * FadeItem — used as a child of StaggerReveal.
 */
export function FadeItem({
    children,
    className,
    variants: v = fadeUp,
}: {
    children: React.ReactNode;
    className?: string;
    variants?: Variants;
}) {
    return (
        <motion.div
            className={className}
            variants={v}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}

/**
 * HeroReveal — for page hero sections; animates on mount (no scroll trigger).
 */
export function HeroReveal({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}
