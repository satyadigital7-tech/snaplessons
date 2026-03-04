"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerReveal, FadeItem, HeroReveal, slideLeft, slideRight, scalePop } from "@/components/animations";


const milestones = [
    { year: "2016", event: "Founded in a small office in Jubilee Hills" },
    { year: "2018", event: "First major IT infrastructure project delivered" },
    { year: "2020", event: "Expanded to cloud, cybersecurity, and managed IT services" },
    { year: "2022", event: "Reached 100+ IT clients, opened Hitech City office" },
    { year: "2024", event: "Launched 24/7 managed IT support and consulting" },
    { year: "2026", event: "Serving 200+ businesses with end-to-end IT solutions" },
];

const values = [
    { icon: "⚡", title: "Speed", desc: "We move fast. Results in days, not months." },
    { icon: "📊", title: "Data-First", desc: "Every decision backed by analytics, not guesswork." },
    { icon: "🤝", title: "Transparency", desc: "No hidden fees, no black boxes — complete clarity." },
    { icon: "🏆", title: "Excellence", desc: "We accept nothing less than outstanding results." },
];

export default function AboutPage() {
    return (
        <>
            {/* ── Hero ─────────────────────────────────────────── */}
            <section className="pt-32 pb-20 bg-dark bg-grid relative overflow-hidden">
                <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Text */}
                        <HeroReveal>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-dark-card border border-dark-border text-gold text-xs font-semibold tracking-widest uppercase mb-6">
                                Our Story
                            </span>
                            <h1 className="text-5xl md:text-6xl font-display font-black text-white mb-6">
                                Built by Marketers,{" "}
                                <span className="gradient-text">for Businesses</span>
                            </h1>
                            <p className="text-lg text-slate-400 leading-relaxed mb-6">
                                Snap Lessons was founded in 2016 in Hyderabad with a simple mission: deliver reliable, innovative IT services to businesses of all sizes.
                            </p>
                            <p className="text-lg text-slate-400 leading-relaxed mb-8">
                                We started with three passionate IT professionals and a vision for smarter business technology. Today, we&apos;re a team of 30+ engineers and consultants, helping 200+ organizations across India with web development, cloud, cybersecurity, and managed IT support.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact" className="btn-primary">Work With Us</Link>
                                <Link href="/careers" className="btn-outline">Join Our Team</Link>
                            </div>
                        </HeroReveal>

                        {/* Mission SVG */}
                        <ScrollReveal variants={slideRight} delay={0.2}>
                            <svg viewBox="0 0 500 400" fill="none" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="missionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.4" />
                                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
                                    </linearGradient>
                                </defs>
                                <circle cx="250" cy="200" r="180" fill="url(#missionGrad)" />
                                <path d="M250 80 L330 112 V200 C330 254 290 290 250 300 C210 290 170 254 170 200 V112 Z" fill="#1E3A8A" fillOpacity="0.6" stroke="#3B82F6" strokeWidth="2" />
                                <path d="M220 200 L240 220 L280 178" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="120" cy="120" r="36" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
                                <text x="110" y="115" fill="#F59E0B" fontSize="11" fontFamily="Inter" fontWeight="700">500+</text>
                                <text x="108" y="130" fill="#94A3B8" fontSize="9" fontFamily="Inter">Clients</text>
                                <circle cx="380" cy="120" r="36" fill="#1E293B" stroke="#3B82F6" strokeWidth="2" />
                                <text x="372" y="115" fill="#3B82F6" fontSize="11" fontFamily="Inter" fontWeight="700">8+</text>
                                <text x="365" y="130" fill="#94A3B8" fontSize="9" fontFamily="Inter">Years Exp.</text>
                                <circle cx="120" cy="300" r="36" fill="#1E293B" stroke="#22C55E" strokeWidth="2" />
                                <text x="107" y="295" fill="#22C55E" fontSize="10" fontFamily="Inter" fontWeight="700">₹20Cr</text>
                                <text x="112" y="310" fill="#94A3B8" fontSize="9" fontFamily="Inter">Ad Spend</text>
                                <circle cx="380" cy="300" r="36" fill="#1E293B" stroke="#8B5CF6" strokeWidth="2" />
                                <text x="372" y="295" fill="#8B5CF6" fontSize="11" fontFamily="Inter" fontWeight="700">30+</text>
                                <text x="367" y="310" fill="#94A3B8" fontSize="9" fontFamily="Inter">Specialists</text>
                                <line x1="155" y1="137" x2="195" y2="155" stroke="#334155" strokeWidth="1" strokeDasharray="4 3" />
                                <line x1="345" y1="137" x2="305" y2="155" stroke="#334155" strokeWidth="1" strokeDasharray="4 3" />
                                <line x1="155" y1="283" x2="195" y2="268" stroke="#334155" strokeWidth="1" strokeDasharray="4 3" />
                                <line x1="345" y1="283" x2="305" y2="268" stroke="#334155" strokeWidth="1" strokeDasharray="4 3" />
                            </svg>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ── Core Values ─────────────────────────────────── */}
            <section className="py-16 bg-dark-card border-y border-dark-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-white">
                            Our <span className="gradient-text">Core Values</span>
                        </h2>
                    </ScrollReveal>
                    <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v) => (
                            <FadeItem key={v.title}>
                                <motion.div
                                    whileHover={{ scale: 1.04, y: -4 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="glass-card border border-dark-border p-6 text-center hover:border-gold/30 transition-colors duration-300 h-full"
                                >
                                    <div className="text-4xl mb-4">{v.icon}</div>
                                    <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                                    <p className="text-slate-400 text-sm">{v.desc}</p>
                                </motion.div>
                            </FadeItem>
                        ))}
                    </StaggerReveal>
                </div>
            </section>

            {/* ── Timeline ─────────────────────────────────────── */}
            <section className="py-20 bg-dark border-t border-dark-border">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal className="text-center mb-16">
                        <h2 className="text-3xl font-display font-bold text-white">
                            Our <span className="gradient-text">Journey</span>
                        </h2>
                    </ScrollReveal>
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-gold" />
                        <div className="space-y-12">
                            {milestones.map((m, i) => (
                                <ScrollReveal
                                    key={m.year}
                                    variants={i % 2 === 0 ? slideLeft : slideRight}
                                    delay={i * 0.08}
                                >
                                    <div className={`flex items-center gap-8 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                                        <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                                            <motion.div
                                                whileHover={{ scale: 1.03 }}
                                                className="glass-card border border-dark-border p-5 inline-block max-w-xs hover:border-gold/30 transition-colors"
                                            >
                                                <div className="text-gold font-display font-black text-xl mb-1">{m.year}</div>
                                                <p className="text-slate-300 text-sm">{m.event}</p>
                                            </motion.div>
                                        </div>
                                        {/* Center dot */}
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ type: "spring", stiffness: 400, delay: i * 0.08 }}
                                            className="relative z-10 w-4 h-4 rounded-full bg-gold border-4 border-dark flex-shrink-0"
                                        />
                                        <div className="flex-1" />
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
