"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroReveal, ScrollReveal, StaggerReveal, FadeItem } from "@/components/animations";

const services = [
    "SEO (Local / National)",
    "Google Ads",
    "Facebook / Instagram Ads",
    "Social Media Management",
    "Web Development",
    "Digital Marketing Course",
    "Analytics & Reporting",
    "Not sure — need advice",
];

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "", email: "", phone: "", company: "", service: "", budget: "", message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await new Promise((r) => setTimeout(r, 1200));
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <>
            {/* ── Hero ────────────────────────────────────────── */}
            <section className="pt-32 pb-16 bg-dark bg-grid relative overflow-hidden">
                <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
                <HeroReveal>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-dark-card border border-dark-border text-gold text-xs font-semibold tracking-widest uppercase mb-6">
                            Contact Us
                        </span>
                        <h1 className="text-5xl md:text-6xl font-display font-black text-white mb-6">
                            Let&apos;s Grow Your Business <span className="gradient-text">Together</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Get a free 30-minute audit. Tell us about your business — we&apos;ll tell you exactly
                            how to grow it with digital marketing.
                        </p>
                    </div>
                </HeroReveal>
            </section>

            {/* ── Contact Form (full width) ────────────────────── */}
            <section className="py-12 bg-dark">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="glass-card border border-dark-border p-8 rounded-2xl">
                            <h2 className="text-2xl font-display font-bold text-white mb-2">
                                Send Us a Message
                            </h2>
                            <p className="text-slate-400 text-sm mb-8">
                                We typically respond within 2 hours during business hours.
                            </p>

                            <AnimatePresence mode="wait">
                                {submitted ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.85 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                        className="text-center py-16"
                                    >
                                        <motion.svg
                                            viewBox="0 0 120 120"
                                            fill="none"
                                            className="w-28 h-28 mx-auto mb-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            initial={{ rotate: -20, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            transition={{ delay: 0.15, duration: 0.5, type: "spring" }}
                                        >
                                            <circle cx="60" cy="60" r="56" fill="#22C55E" fillOpacity="0.1" stroke="#22C55E" strokeWidth="3" />
                                            <motion.path
                                                d="M35 60 L52 77 L85 43"
                                                stroke="#22C55E"
                                                strokeWidth="5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1 }}
                                                transition={{ delay: 0.3, duration: 0.6 }}
                                            />
                                            <circle cx="60" cy="60" r="48" stroke="#22C55E" strokeWidth="1" strokeDasharray="6 4" strokeOpacity="0.5" />
                                        </motion.svg>
                                        <h3 className="text-2xl font-display font-bold text-white mb-2">Message Sent! 🎉</h3>
                                        <p className="text-slate-400 mb-6">
                                            We&apos;ll review your details and get back within 2 hours.
                                            Alternatively, <strong className="text-green-400">WhatsApp us</strong> for instant response.
                                        </p>
                                        <a
                                            href="https://wa.me/918121919443"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary"
                                        >
                                            Continue on WhatsApp
                                        </a>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-5"
                                    >
                                        {/* Row 1 */}
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-slate-400 text-xs mb-1.5 font-medium">Full Name *</label>
                                                <input
                                                    required type="text" value={form.name}
                                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                    placeholder="Rahul Sharma"
                                                    className="w-full bg-dark border border-dark-border rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-accent transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-slate-400 text-xs mb-1.5 font-medium">Email Address *</label>
                                                <input
                                                    required type="email" value={form.email}
                                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                    placeholder="rahul@company.com"
                                                    className="w-full bg-dark border border-dark-border rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-accent transition-colors"
                                                />
                                            </div>
                                        </div>

                                        {/* Row 2 */}
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-slate-400 text-xs mb-1.5 font-medium">Phone Number *</label>
                                                <input
                                                    required type="tel" value={form.phone}
                                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                                    placeholder="+91 98765 43210"
                                                    className="w-full bg-dark border border-dark-border rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-accent transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-slate-400 text-xs mb-1.5 font-medium">Company Name</label>
                                                <input
                                                    type="text" value={form.company}
                                                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                                                    placeholder="Your Company Pvt Ltd"
                                                    className="w-full bg-dark border border-dark-border rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-accent transition-colors"
                                                />
                                            </div>
                                        </div>

                                        {/* Service */}
                                        <div>
                                            <label className="block text-slate-400 text-xs mb-1.5 font-medium">Service Interested In *</label>
                                            <select
                                                required value={form.service}
                                                onChange={(e) => setForm({ ...form, service: e.target.value })}
                                                className="w-full bg-dark border border-dark-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent transition-colors appearance-none"
                                            >
                                                <option value="">Select a service...</option>
                                                {services.map((s) => <option key={s} value={s}>{s}</option>)}
                                            </select>
                                        </div>

                                        {/* Budget */}
                                        <div>
                                            <label className="block text-slate-400 text-xs mb-1.5 font-medium">Monthly Budget (INR)</label>
                                            <div className="grid grid-cols-4 gap-2">
                                                {["< ₹10K", "₹10K–30K", "₹30K–60K", "₹60K+"].map((b) => (
                                                    <motion.button
                                                        key={b}
                                                        type="button"
                                                        whileTap={{ scale: 0.95 }}
                                                        onClick={() => setForm({ ...form, budget: b })}
                                                        className={`py-2.5 rounded-xl text-xs font-medium border transition-all duration-200 ${form.budget === b
                                                            ? "border-gold text-gold bg-gold/10"
                                                            : "border-dark-border text-slate-400 hover:border-slate-500"
                                                            }`}
                                                    >
                                                        {b}
                                                    </motion.button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className="block text-slate-400 text-xs mb-1.5 font-medium">Tell us about your business</label>
                                            <textarea
                                                rows={4} value={form.message}
                                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                                placeholder="Brief description of your goals, challenges, and what you're hoping to achieve..."
                                                className="w-full bg-dark border border-dark-border rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-accent transition-colors resize-none"
                                            />
                                        </div>

                                        {/* Submit */}
                                        <motion.button
                                            type="submit"
                                            disabled={loading}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full btn-primary py-4 text-base justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {loading ? (
                                                <>
                                                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                                    </svg>
                                                    Send Message &amp; Get Free Audit
                                                </>
                                            )}
                                        </motion.button>
                                        <p className="text-center text-slate-600 text-xs">
                                            By submitting, you agree to our Privacy Policy. No spam, ever.
                                        </p>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </ScrollReveal>

                    {/* ── Quick Contact Strip ──────────────────── */}
                    <StaggerReveal className="mt-6 grid sm:grid-cols-2 gap-4">
                        <FadeItem>
                            <motion.a
                                href="https://wa.me/918121919443"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.03 }}
                                className="flex items-center gap-4 p-4 rounded-xl bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 transition-colors"
                            >
                                <svg viewBox="0 0 24 24" fill="#22C55E" className="w-8 h-8 shrink-0">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                <div>
                                    <p className="text-green-400 font-semibold text-sm">Chat on WhatsApp</p>
                                    <p className="text-slate-500 text-xs">Instant response · Available 9AM–9PM</p>
                                </div>
                            </motion.a>
                        </FadeItem>
                        <FadeItem>
                            <motion.a
                                href="mailto:info@snaplessons.in"
                                whileHover={{ scale: 1.03 }}
                                className="flex items-center gap-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/20 transition-colors"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" className="w-8 h-8 shrink-0">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <div>
                                    <p className="text-blue-400 font-semibold text-sm">info@snaplessons.in</p>
                                    <p className="text-slate-500 text-xs">We reply within 2–4 hours</p>
                                </div>
                            </motion.a>
                        </FadeItem>
                    </StaggerReveal>
                </div>
            </section>
        </>
    );
}
