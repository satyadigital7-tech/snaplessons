import type { Metadata } from "next";
import Link from "next/link";
import HeroIllustration from "@/components/svgs/HeroIllustration";
import { clientLogos } from "@/components/svgs/ClientLogos";
import {
    ScrollReveal,
    StaggerReveal,
    FadeItem,
    HeroReveal,
    slideLeft,
    slideRight,
    scalePop,
} from "@/components/animations";

export const metadata: Metadata = {
    title: "Home",
    description:
        "SnapLessons – Hyderabad's leading digital marketing agency. SEO, Google Ads, Social Media, Web Development & Digital Marketing Courses. Grow 10x with us.",
};

const stats = [
    { value: "500+", label: "Clients Served", icon: "👥" },
    { value: "₹20Cr+", label: "Ad Spend Managed", icon: "📈" },
    { value: "98%", label: "Client Retention", icon: "🏆" },
    { value: "8+", label: "Years Experience", icon: "⚡" },
];

const services = [
    {
        icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                <rect x="4" y="8" width="32" height="24" rx="4" stroke="#3B82F6" strokeWidth="2" />
                <path d="M4 14h32" stroke="#3B82F6" strokeWidth="2" />
                <circle cx="9" cy="11" r="1.5" fill="#F59E0B" />
                <circle cx="14" cy="11" r="1.5" fill="#22C55E" />
                <circle cx="19" cy="11" r="1.5" fill="#EF4444" />
                <path d="M10 22 L16 18 L22 21 L30 16" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        title: "Web Development",
        desc: "React, Next.js, CRM integrations — blazing fast websites that convert.",
        color: "from-blue-500/20 to-blue-600/5",
        border: "border-blue-500/30",
    },
    {
        icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                <circle cx="20" cy="20" r="14" stroke="#F59E0B" strokeWidth="2" />
                <path d="M20 6 C20 6 28 14 28 20 C28 26 20 34 20 34 C20 34 12 26 12 20 C12 14 20 6 20 6Z" stroke="#F59E0B" strokeWidth="2" />
                <line x1="6" y1="20" x2="34" y2="20" stroke="#F59E0B" strokeWidth="2" />
                <path d="M8 14 Q20 17 32 14M8 26 Q20 23 32 26" stroke="#F59E0B" strokeWidth="1.5" />
            </svg>
        ),
        title: "SEO (Local & National)",
        desc: "Dominate Google in Hyderabad and beyond with proven white-hat SEO.",
        color: "from-yellow-500/20 to-yellow-600/5",
        border: "border-yellow-500/30",
    },
    {
        icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                <rect x="6" y="10" width="28" height="20" rx="3" stroke="#EF4444" strokeWidth="2" />
                <path d="M6 16h28" stroke="#EF4444" strokeWidth="2" />
                <rect x="10" y="20" width="8" height="6" rx="1" fill="#EF4444" fillOpacity="0.4" />
                <rect x="22" y="20" width="8" height="6" rx="1" fill="#EF4444" fillOpacity="0.2" />
            </svg>
        ),
        title: "Google & FB Ads",
        desc: "Performance marketing with measurable ROI and transparent reporting.",
        color: "from-red-500/20 to-red-600/5",
        border: "border-red-500/30",
    },
    {
        icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                <rect x="12" y="4" width="16" height="26" rx="4" stroke="#8B5CF6" strokeWidth="2" />
                <path d="M16 8h8M16 12h8M16 16h5" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="20" cy="36" r="3" stroke="#8B5CF6" strokeWidth="2" />
                <circle cx="8" cy="26" r="5" fill="#8B5CF6" fillOpacity="0.2" stroke="#8B5CF6" strokeWidth="2" />
                <circle cx="32" cy="26" r="5" fill="#8B5CF6" fillOpacity="0.2" stroke="#8B5CF6" strokeWidth="2" />
            </svg>
        ),
        title: "Social Media Growth",
        desc: "Build brand authority and engaged communities across all platforms.",
        color: "from-purple-500/20 to-purple-600/5",
        border: "border-purple-500/30",
    },
    {
        icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                <rect x="4" y="24" width="8" height="12" rx="2" fill="#22C55E" fillOpacity="0.5" />
                <rect x="16" y="16" width="8" height="20" rx="2" fill="#22C55E" fillOpacity="0.7" />
                <rect x="28" y="8" width="8" height="28" rx="2" fill="#22C55E" />
                <path d="M6 20 L20 14 L34 8" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2" />
            </svg>
        ),
        title: "Analytics & Reporting",
        desc: "Real-time dashboards and actionable insights to drive decisions.",
        color: "from-green-500/20 to-green-600/5",
        border: "border-green-500/30",
    },
    {
        icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                <path d="M20 6 L34 12 V22 C34 29 27 34 20 36 C13 34 6 29 6 22 V12 Z" stroke="#F59E0B" strokeWidth="2" fill="#F59E0B" fillOpacity="0.1" />
                <path d="M15 20 L18 23 L25 16" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "Digital Marketing Courses",
        desc: "Certifications in SEO, Ads & Social Media with placement support.",
        color: "from-amber-500/20 to-amber-600/5",
        border: "border-amber-500/30",
    },
];

export default function HomePage() {
    return (
        <>
            {/* ========== HERO ========== */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-dark bg-grid pt-20">
                {/* Blurred glow blobs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center w-full">
                    {/* Text */}
                    <HeroReveal>
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-card border border-dark-border text-sm text-gold font-medium">
                                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                                #1 Digital Agency in Hyderabad
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black leading-none text-white">
                                Grow Your{" "}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-gold to-primary">
                                    Business
                                </span>{" "}
                                10x Faster
                            </h1>
                            <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
                                From SEO to Google Ads to stunning websites — we deliver
                                data-driven digital marketing that turns clicks into customers.
                                Hyderabad&apos;s trusted agency since 2016.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://wa.me/918121919443?text=Hi%21%20I%27d%20like%20a%20free%20audit."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary text-base px-8 py-4"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Free Audit on WhatsApp
                                </a>
                                <Link href="/services" className="btn-outline text-base px-8 py-4">
                                    Our Services
                                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </div>
                            {/* Trust badges */}
                            <div className="flex flex-wrap gap-6 pt-2">
                                {["Google Partner", "Meta Business Partner", "ISO Certified"].map((b) => (
                                    <div key={b} className="flex items-center gap-2 text-sm text-slate-400">
                                        <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-gold">
                                            <path d="M8 1 L9.8 5.8 L15 6.1 L11 9.5 L12.4 14.8 L8 12 L3.6 14.8 L5 9.5 L1 6.1 L6.2 5.8Z" fill="#F59E0B" />
                                        </svg>
                                        {b}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </HeroReveal>

                    {/* SVG Illustration */}
                    <ScrollReveal variants={slideRight} delay={0.2}>
                        <div className="relative animate-float">
                            <HeroIllustration />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ========== STATS ========== */}
            <section className="py-16 bg-dark-card border-y border-dark-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <StaggerReveal className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((s) => (
                            <FadeItem key={s.label} variants={scalePop}>
                                <div className="text-center">
                                    <div className="text-3xl mb-2">{s.icon}</div>
                                    <div className="text-4xl font-display font-black text-white gradient-text">{s.value}</div>
                                    <div className="text-slate-400 text-sm mt-1">{s.label}</div>
                                </div>
                            </FadeItem>
                        ))}
                    </StaggerReveal>
                </div>
            </section>

            {/* ========== SERVICES OVERVIEW ========== */}
            <section className="py-24 bg-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal className="text-center mb-16">
                        <span className="text-gold text-sm font-semibold tracking-widest uppercase">What We Do</span>
                        <h2 className="section-heading mt-3">
                            Full-Stack <span className="gradient-text">Digital Growth</span>
                        </h2>
                        <p className="section-sub">
                            Six powerful services working in harmony to skyrocket your brand online.
                        </p>
                    </ScrollReveal>
                    <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((s) => (
                            <FadeItem key={s.title}>
                                <div
                                    className={`glass-card p-8 border ${s.border} bg-gradient-to-br ${s.color} hover:scale-[1.03] transition-all duration-300 group cursor-pointer h-full`}
                                >
                                    <div className="mb-5">{s.icon}</div>
                                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gold transition-colors">
                                        {s.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                                    <div className="mt-4 flex items-center gap-1 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                        Learn more
                                        <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
                                            <path d="M8.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L10.586 9H3a1 1 0 010-2h7.586L8.293 4.707a1 1 0 010-1.414z" />
                                        </svg>
                                    </div>
                                </div>
                            </FadeItem>
                        ))}
                    </StaggerReveal>
                    <ScrollReveal className="text-center mt-12" delay={0.1}>
                        <Link href="/services" className="btn-primary">
                            Explore All Services
                        </Link>
                    </ScrollReveal>
                </div>
            </section>

            {/* ========== CLIENT LOGOS MARQUEE ========== */}
            <section className="py-16 bg-dark-card border-y border-dark-border overflow-hidden">
                <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
                    <p className="text-slate-500 text-sm font-medium tracking-widest uppercase">
                        Trusted by 500+ Brands Across India
                    </p>
                </ScrollReveal>
                <div className="relative">
                    <div className="flex animate-marquee gap-16 items-center w-max">
                        {[...clientLogos, ...clientLogos].map((client, i) => (
                            <div key={i} className="text-slate-500 hover:text-slate-300 transition-colors flex-shrink-0">
                                {client.logo}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== TESTIMONIAL ========== */}
            <section className="py-24 bg-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal className="text-center mb-16">
                        <span className="text-gold text-sm font-semibold tracking-widest uppercase">Testimonials</span>
                        <h2 className="section-heading mt-3">What Our <span className="gradient-text">Clients Say</span></h2>
                    </ScrollReveal>
                    <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { name: "Rahul Sharma", company: "TechNova Pvt Ltd", text: "SnapLessons tripled our organic traffic in just 4 months. Their SEO strategy is unmatched in Hyderabad!", rating: 5 },
                            { name: "Priya Reddy", company: "EcoSpark Organics", text: "Our Google Ads ROI improved by 340% after hiring SnapLessons. Every rupee spent shows clear results.", rating: 5 },
                            { name: "Mohammed Ali", company: "SwiftSell", text: "The website they built is lightning fast and beautiful. Our conversion rate jumped from 1.2% to 4.8%!", rating: 5 },
                        ].map((t) => (
                            <FadeItem key={t.name}>
                                <div className="glass-card p-8 border border-dark-border hover:border-gold/30 hover:scale-[1.02] transition-all duration-300 h-full">
                                    {/* Stars */}
                                    <div className="flex gap-1 mb-4">
                                        {Array.from({ length: t.rating }).map((_, i) => (
                                            <svg key={i} viewBox="0 0 16 16" fill="#F59E0B" className="w-4 h-4">
                                                <path d="M8 1 L9.8 5.8 L15 6.1 L11 9.5 L12.4 14.8 L8 12 L3.6 14.8 L5 9.5 L1 6.1 L6.2 5.8Z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">&quot;{t.text}&quot;</p>
                                    <div className="flex items-center gap-3">
                                        <svg viewBox="0 0 40 40" className="w-10 h-10 flex-shrink-0">
                                            <circle cx="20" cy="20" r="20" fill="#1E3A8A" />
                                            <circle cx="20" cy="16" r="7" fill="#3B82F6" />
                                            <ellipse cx="20" cy="34" rx="12" ry="8" fill="#3B82F6" />
                                        </svg>
                                        <div>
                                            <div className="text-white font-semibold text-sm">{t.name}</div>
                                            <div className="text-slate-500 text-xs">{t.company}</div>
                                        </div>
                                    </div>
                                </div>
                            </FadeItem>
                        ))}
                    </StaggerReveal>
                </div>
            </section>

            {/* ========== CTA BANNER ========== */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-90" />
                <div className="absolute inset-0 bg-grid opacity-20" />
                <ScrollReveal variants={scalePop} className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        Ready to Dominate Your Market?
                    </h2>
                    <p className="text-blue-100 text-xl mb-10">
                        Get a FREE 30-minute digital marketing audit. No strings attached.
                        Just pure value for your business.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="https://wa.me/918121919443"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-gold text-dark font-bold rounded-xl hover:bg-yellow-400 hover:scale-105 transition-all duration-200 text-lg shadow-glow-gold"
                        >
                            Book Free Audit Now
                        </a>
                        <Link
                            href="/pricing"
                            className="px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 text-lg"
                        >
                            View Pricing
                        </Link>
                    </div>
                </ScrollReveal>
            </section>
        </>
    );
}
