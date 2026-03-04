import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal, StaggerReveal, FadeItem, HeroReveal, scalePop, slideLeft } from "@/components/animations";

export const metadata: Metadata = {
    title: "Pricing",
    description:
        "Transparent INR pricing for digital marketing services. Starter ₹9,999/mo, Growth ₹29,999/mo, Enterprise ₹59,999/mo. No hidden costs.",
};

const plans = [
    {
        name: "Starter", price: "9,999", period: "/ month",
        badge: "Best for Startups", badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
        description: "Perfect for small businesses ready to establish their digital presence.",
        gradient: "from-blue-500/10 to-transparent", border: "border-blue-500/30", accentColor: "text-blue-400",
        features: [
            { text: "SEO – On-page + Local SEO", included: true },
            { text: "Social Media (2 platforms)", included: true },
            { text: "8 Social Media Posts/month", included: true },
            { text: "Google My Business Management", included: true },
            { text: "Monthly Performance Report", included: true },
            { text: "WhatsApp & Email Support", included: true },
            { text: "Google / Meta Ads", included: false },
            { text: "Website Development", included: false },
            { text: "CRM Integration", included: false },
        ],
        cta: "Start Growing",
        icon: (
            <svg viewBox="0 0 60 60" fill="none" className="w-16 h-16">
                <circle cx="30" cy="30" r="28" stroke="#3B82F6" strokeWidth="2" fill="#3B82F6" fillOpacity="0.05" />
                <path d="M30 42 L30 22 M22 30 L30 22 L38 30" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="30" cy="46" r="3" fill="#3B82F6" />
            </svg>
        ),
    },
    {
        name: "Growth", price: "29,999", period: "/ month",
        badge: "Most Popular", badgeColor: "bg-gold/20 text-gold border-gold/30",
        description: "The complete digital growth engine for scaling businesses.",
        gradient: "from-gold/10 to-transparent", border: "border-gold/50", accentColor: "text-gold", popular: true,
        features: [
            { text: "Full-Stack SEO (Local + National)", included: true },
            { text: "Social Media (4 platforms)", included: true },
            { text: "20 Social Media Posts/month", included: true },
            { text: "Google Ads Management (₹50K budget)", included: true },
            { text: "Facebook & Instagram Ads", included: true },
            { text: "Landing Page Design (1/mo)", included: true },
            { text: "GA4 + Looker Studio Dashboard", included: true },
            { text: "Priority Support (6 days/week)", included: true },
            { text: "CRM Integration", included: false },
        ],
        cta: "Get Growth Plan",
        icon: (
            <svg viewBox="0 0 60 60" fill="none" className="w-16 h-16">
                <circle cx="30" cy="30" r="28" stroke="#F59E0B" strokeWidth="2" fill="#F59E0B" fillOpacity="0.08" />
                <path d="M14 44 L22 32 L28 38 L36 24 L44 44Z" fill="#F59E0B" fillOpacity="0.3" stroke="#F59E0B" strokeWidth="2" strokeLinejoin="round" />
                <path d="M14 44 L22 32 L28 38 L36 24 L44 28" stroke="#F59E0B" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M38 20 L46 20 L46 28" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        name: "Enterprise", price: "59,999", period: "/ month",
        badge: "All-Inclusive", badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
        description: "End-to-end digital transformation for market leaders.",
        gradient: "from-purple-500/10 to-transparent", border: "border-purple-500/30", accentColor: "text-purple-400",
        features: [
            { text: "Everything in Growth plan", included: true },
            { text: "Custom Website / Web App Development", included: true },
            { text: "CRM + ERP Integration", included: true },
            { text: "Google Ads (₹2L+ budget)", included: true },
            { text: "YouTube & OTT Advertising", included: true },
            { text: "Dedicated Account Manager", included: true },
            { text: "Advanced Analytics & Reporting", included: true },
            { text: "PR & Influencer Marketing", included: true },
            { text: "24/7 Priority Support", included: true },
        ],
        cta: "Contact Sales",
        icon: (
            <svg viewBox="0 0 60 60" fill="none" className="w-16 h-16">
                <circle cx="30" cy="30" r="28" stroke="#8B5CF6" strokeWidth="2" fill="#8B5CF6" fillOpacity="0.05" />
                <path d="M30 14 L34 24 L46 25 L37 33 L40 45 L30 39 L20 45 L23 33 L14 25 L26 24 Z" stroke="#8B5CF6" strokeWidth="2" fill="#8B5CF6" fillOpacity="0.3" strokeLinejoin="round" />
            </svg>
        ),
    },
];

const addOns = [
    { name: "Extra Blog Articles", price: "₹999/article" },
    { name: "Additional Social Platform", price: "₹4,999/mo" },
    { name: "Email Marketing Campaign", price: "₹7,999/mo" },
    { name: "WhatsApp Marketing", price: "₹5,999/mo" },
    { name: "Video Production (30-sec Reel)", price: "₹3,999/video" },
    { name: "Keyword Research Report", price: "₹2,999 one-time" },
];

export default function PricingPage() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-20 bg-dark bg-grid relative overflow-hidden">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
                <HeroReveal>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-dark-card border border-dark-border text-gold text-xs font-semibold tracking-widest uppercase mb-6">
                            Transparent Pricing
                        </span>
                        <h1 className="text-5xl md:text-6xl font-display font-black text-white mb-6">
                            Simple, <span className="gradient-text">Result-Driven</span> Plans
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            No hidden fees. No long-term lock-ins. Just clear pricing and measurable ROI.
                            All plans billed in Indian Rupees (₹).
                        </p>
                    </div>
                </HeroReveal>
            </section>

            {/* Pricing Cards */}
            <section className="py-16 bg-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {plans.map((plan) => (
                            <FadeItem key={plan.name} variants={scalePop}>
                                <div className={`relative glass-card border ${plan.border} bg-gradient-to-b ${plan.gradient} p-8 flex flex-col transition-all duration-300 hover:scale-[1.03] h-full ${plan.popular ? "shadow-glow-gold ring-1 ring-gold/50" : ""}`}>
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                            <span className="px-4 py-1.5 bg-gold text-dark text-xs font-black rounded-full tracking-wide uppercase shadow-glow-gold">
                                                ⭐ Most Popular
                                            </span>
                                        </div>
                                    )}
                                    <div className="flex items-start justify-between mb-6">
                                        {plan.icon}
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${plan.badgeColor}`}>{plan.badge}</span>
                                    </div>
                                    <h2 className="text-2xl font-display font-bold text-white mb-2">{plan.name}</h2>
                                    <p className="text-slate-400 text-sm mb-6">{plan.description}</p>
                                    <div className="flex items-baseline gap-1 mb-8">
                                        <span className={`text-2xl font-semibold ${plan.accentColor}`}>₹</span>
                                        <span className="text-5xl font-display font-black text-white">{plan.price}</span>
                                        <span className="text-slate-500 text-sm">{plan.period}</span>
                                    </div>
                                    <ul className="space-y-3 mb-8 flex-1">
                                        {plan.features.map((f) => (
                                            <li key={f.text} className="flex items-center gap-3 text-sm">
                                                {f.included ? (
                                                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
                                                        <circle cx="8" cy="8" r="7" fill="#22C55E" fillOpacity="0.2" />
                                                        <path d="M5 8 L7 10 L11 6" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                ) : (
                                                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
                                                        <circle cx="8" cy="8" r="7" fill="#334155" />
                                                        <path d="M6 6 L10 10 M10 6 L6 10" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
                                                    </svg>
                                                )}
                                                <span className={f.included ? "text-slate-300" : "text-slate-600 line-through"}>{f.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        href={`https://wa.me/918121919443?text=Hi!%20I%27m%20interested%20in%20the%20${plan.name}%20plan.`}
                                        target="_blank" rel="noopener noreferrer"
                                        className={`w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 ${plan.popular ? "bg-gold text-dark hover:bg-yellow-400 shadow-glow-gold" : "bg-dark-card border border-dark-border text-white hover:border-accent hover:text-accent"}`}
                                    >
                                        {plan.cta}
                                    </a>
                                </div>
                            </FadeItem>
                        ))}
                    </StaggerReveal>

                    {/* Guarantee Banner */}
                    <ScrollReveal className="mt-12" delay={0.1}>
                        <div className="glass-card border border-green-500/30 p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                            <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 flex-shrink-0">
                                <path d="M24 4 L40 10 V24 C40 34 32 41 24 44 C16 41 8 34 8 24 V10 Z" fill="#22C55E" fillOpacity="0.1" stroke="#22C55E" strokeWidth="2" />
                                <path d="M18 24 L22 28 L30 20" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div>
                                <p className="text-white font-semibold">30-Day Results Guarantee</p>
                                <p className="text-slate-400 text-sm">
                                    If you don&apos;t see measurable improvement in 30 days, we&apos;ll refund your first month. No questions asked.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Add-ons */}
            <section className="py-16 bg-dark-card border-t border-dark-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-white mb-3">
                            À La Carte <span className="gradient-text">Add-Ons</span>
                        </h2>
                        <p className="text-slate-400">Boost any plan with powerful extras</p>
                    </ScrollReveal>
                    <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {addOns.map((a) => (
                            <FadeItem key={a.name}>
                                <div className="flex items-center justify-between p-4 rounded-xl bg-dark border border-dark-border hover:border-accent/40 hover:scale-[1.02] transition-all duration-200">
                                    <div className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                                        <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-gold">
                                            <circle cx="8" cy="8" r="6" stroke="#F59E0B" strokeWidth="1.5" />
                                            <path d="M8 5 V8 L10 10" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                        {a.name}
                                    </div>
                                    <span className="text-gold font-semibold text-sm">{a.price}</span>
                                </div>
                            </FadeItem>
                        ))}
                    </StaggerReveal>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-dark">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal className="text-center mb-10">
                        <h2 className="text-3xl font-display font-bold text-white">
                            Frequently Asked <span className="gradient-text">Questions</span>
                        </h2>
                    </ScrollReveal>
                    <StaggerReveal className="space-y-4">
                        {[
                            { q: "Is there a minimum contract period?", a: "No. All plans are month-to-month. You can cancel or upgrade anytime with 15 days notice." },
                            { q: "Are ad spend budgets included in the price?", a: "No. Our prices are management fees. Ad spend goes directly from your account to Google/Meta — we never hold your budget." },
                            { q: "Do you serve clients outside Hyderabad?", a: "Yes! We serve clients pan-India and internationally. All communication is online via WhatsApp, Zoom & email." },
                            { q: "How soon will I see results?", a: "Google Ads can generate leads within 48 hours. SEO typically shows significant results in 60–90 days. Social media growth varies by niche." },
                        ].map((faq) => (
                            <FadeItem key={faq.q} variants={slideLeft}>
                                <div className="glass-card border border-dark-border p-6 hover:border-gold/20 transition-colors duration-200">
                                    <p className="text-white font-semibold mb-2 flex items-start gap-2">
                                        <span className="text-gold mt-0.5">Q</span>{faq.q}
                                    </p>
                                    <p className="text-slate-400 text-sm pl-5">{faq.a}</p>
                                </div>
                            </FadeItem>
                        ))}
                    </StaggerReveal>
                </div>
            </section>
        </>
    );
}
