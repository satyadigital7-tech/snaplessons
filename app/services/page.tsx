import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal, StaggerReveal, FadeItem, HeroReveal, slideLeft, slideRight, scalePop } from "@/components/animations";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Explore Snap Lessons' full suite of digital marketing services: Web Development, SEO, Google Ads, Social Media, Analytics, and Digital Marketing Courses in Hyderabad.",
};

const services = [
    {
        id: "web",
        icon: (
            <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20">
                <rect x="8" y="16" width="64" height="48" rx="8" stroke="#3B82F6" strokeWidth="3" fill="#3B82F6" fillOpacity="0.05" />
                <path d="M8 28h64" stroke="#3B82F6" strokeWidth="2" />
                <circle cx="18" cy="22" r="3" fill="#EF4444" /><circle cx="28" cy="22" r="3" fill="#F59E0B" /><circle cx="38" cy="22" r="3" fill="#22C55E" />
                <rect x="18" y="36" width="18" height="12" rx="3" fill="#3B82F6" fillOpacity="0.4" />
                <rect x="44" y="36" width="18" height="4" rx="2" fill="#334155" /><rect x="44" y="44" width="12" height="4" rx="2" fill="#334155" />
                <path d="M18 56 L26 48 L32 52 L40 44 L50 52 L56 46" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "Web Development",
        subtitle: "React · Next.js · API Integrations",
        borderColor: "border-blue-500/40", tagColor: "bg-blue-500/10 text-blue-400",
        features: ["Custom business websites", "Web apps & portals", "API & CRM integrations", "E-commerce solutions", "Mobile-first & PWA development", "Ongoing maintenance & support"],
        deliverable: "Live website in 30 days",
    },
    {
        id: "consulting",
        icon: (
            <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20">
                <rect x="16" y="16" width="48" height="48" rx="8" stroke="#6366F1" strokeWidth="3" fill="#6366F1" fillOpacity="0.05" />
                <path d="M24 40h32" stroke="#6366F1" strokeWidth="2" />
                <circle cx="40" cy="40" r="8" fill="#6366F1" fillOpacity="0.2" />
                <circle cx="40" cy="40" r="4" fill="#6366F1" />
            </svg>
        ),
        title: "IT Consulting",
        subtitle: "Strategy · Planning · Implementation",
        borderColor: "border-indigo-500/40", tagColor: "bg-indigo-500/10 text-indigo-400",
        features: ["IT strategy & roadmap", "Process automation", "Technology assessment", "Cloud migration planning", "IT budgeting & cost optimization", "Vendor selection & management"],
        deliverable: "Actionable IT roadmap in 2 weeks",
    },
    {
        id: "cloud",
        icon: (
            <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20">
                <ellipse cx="40" cy="50" rx="24" ry="14" fill="#06B6D4" fillOpacity="0.1" />
                <ellipse cx="40" cy="50" rx="18" ry="10" fill="#06B6D4" fillOpacity="0.2" />
                <ellipse cx="40" cy="50" rx="12" ry="6" fill="#06B6D4" />
                <rect x="20" y="30" width="40" height="10" rx="5" fill="#06B6D4" fillOpacity="0.2" />
            </svg>
        ),
        title: "Cloud Solutions",
        subtitle: "AWS · Azure · Google Cloud",
        borderColor: "border-cyan-500/40", tagColor: "bg-cyan-500/10 text-cyan-400",
        features: ["Cloud migration & setup", "Serverless architecture", "DevOps & CI/CD", "Cloud security & compliance", "Backup & disaster recovery", "Cost optimization"],
        deliverable: "Cloud deployment in 14 days",
    },
    {
        id: "cybersecurity",
        icon: (
            <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20">
                <rect x="16" y="24" width="48" height="32" rx="8" stroke="#F59E0B" strokeWidth="3" fill="#F59E0B" fillOpacity="0.05" />
                <path d="M24 40h32" stroke="#F59E0B" strokeWidth="2" />
                <circle cx="40" cy="40" r="8" fill="#F59E0B" fillOpacity="0.2" />
                <circle cx="40" cy="40" r="4" fill="#F59E0B" />
            </svg>
        ),
        title: "Cybersecurity",
        subtitle: "Risk Assessment · Protection · Compliance",
        borderColor: "border-yellow-500/40", tagColor: "bg-yellow-500/10 text-yellow-400",
        features: ["Vulnerability assessment", "Penetration testing", "Firewall & endpoint security", "Security awareness training", "Regulatory compliance (ISO, GDPR)", "Incident response & recovery"],
        deliverable: "Security audit in 10 days",
    },
    {
        id: "managed",
        icon: (
            <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20">
                <rect x="12" y="20" width="56" height="40" rx="10" stroke="#22C55E" strokeWidth="3" fill="#22C55E" fillOpacity="0.05" />
                <path d="M20 40h40" stroke="#22C55E" strokeWidth="2" />
                <circle cx="40" cy="40" r="10" fill="#22C55E" fillOpacity="0.2" />
                <circle cx="40" cy="40" r="5" fill="#22C55E" />
            </svg>
        ),
        title: "Managed IT Support",
        subtitle: "Helpdesk · Monitoring · Maintenance",
        borderColor: "border-green-500/40", tagColor: "bg-green-500/10 text-green-400",
        features: ["24/7 helpdesk support", "Remote & onsite troubleshooting", "Proactive monitoring", "Patch management", "IT asset management", "User onboarding & training"],
        deliverable: "Support setup in 3 days",
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-20 bg-dark bg-grid relative overflow-hidden">
                <div className="absolute top-20 left-1/3 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
                <HeroReveal>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-dark-card border border-dark-border text-gold text-xs font-semibold tracking-widest uppercase mb-6">
                            Our Services
                        </span>
                        <h1 className="text-5xl md:text-6xl font-display font-black text-white mb-6">
                            Everything You Need to <br />
                            <span className="gradient-text">Win Online</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
                            Six integrated digital services designed to generate leads, increase revenue,
                            and build an unstoppable online presence — all under one roof.
                        </p>
                        <a href="https://wa.me/918121919443" target="_blank" rel="noopener noreferrer" className="btn-primary text-base">
                            Get a Free Strategy Call
                        </a>
                    </div>
                </HeroReveal>
            </section>

            {/* Services Grid */}
            <section className="py-16 bg-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                    {services.map((service, i) => (
                        <ScrollReveal key={service.id} variants={i % 2 === 0 ? slideLeft : slideRight} delay={0.05}>
                            <div id={service.id} className={`glass-card border ${service.borderColor} p-8 md:p-12 flex flex-col md:flex-row gap-10 items-start hover:shadow-glow hover:scale-[1.01] transition-all duration-300`}>
                                <div className="flex-shrink-0">{service.icon}</div>
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-3 mb-3">
                                        <h2 className="text-2xl font-display font-bold text-white">{service.title}</h2>
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${service.tagColor}`}>{service.subtitle}</span>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-2 mb-6">
                                        {service.features.map((f) => (
                                            <div key={f} className="flex items-center gap-2.5 text-slate-300 text-sm">
                                                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
                                                    <circle cx="8" cy="8" r="7" fill="#22C55E" fillOpacity="0.15" />
                                                    <path d="M5 8 L7 10 L11 6" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                {f}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-lg text-gold text-sm font-semibold">
                                            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                                                <path d="M8 2 L8 8 L12 10" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
                                                <circle cx="8" cy="8" r="6" stroke="#F59E0B" strokeWidth="1.5" />
                                            </svg>
                                            {service.deliverable}
                                        </div>
                                        <a href="https://wa.me/918121919443" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">Get Started</a>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-dark-card border-t border-dark-border">
                <ScrollReveal variants={scalePop}>
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-display font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
                        <p className="text-slate-400 mb-8">
                            Let&apos;s hop on a free 30-minute consultation. We&apos;ll audit your current digital presence and recommend the perfect growth plan for your business.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a href="https://wa.me/918121919443" target="_blank" rel="noopener noreferrer" className="btn-primary">Book Free Consultation</a>
                            <Link href="/pricing" className="btn-outline">See Pricing Plans</Link>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </>
    );
}
