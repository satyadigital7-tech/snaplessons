import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers",
    description:
        "Join snaplessons – Hyderabad's fastest-growing digital marketing agency. Open positions in SEO, Ads, Development, Social Media and more. Apply today!",
};

const openings = [
    {
        title: "Business Development Executive (BDE)",
        type: "Full-time",
        mode: "On-site",
        exp: "Fresher – 2 years",
        dept: "IT Sales",
        color: "text-blue-400",
        bgColor: "bg-blue-500/10",
        borderColor: "border-blue-500/30",
        skills: ["Lead Generation", "Client Communication", "CRM", "Cold Calling"],
        desc: "Identify and pursue new business opportunities in IT services. Build client relationships and support the sales process.",
    },
    {
        title: "Business Development Manager (BDM)",
        type: "Full-time",
        mode: "On-site",
        exp: "1 – 2 years",
        dept: "IT Sales",
        color: "text-indigo-400",
        bgColor: "bg-indigo-500/10",
        borderColor: "border-indigo-500/30",
        skills: ["Sales Strategy", "Team Leadership", "Client Acquisition", "Negotiation"],
        desc: "Drive IT sales growth, manage a team of BDEs, and develop strategies to acquire and retain clients.",
    },
    {
        title: "Business Development Associate (BDA)",
        type: "Full-time",
        mode: "On-site",
        exp: "Fresher – 2 years",
        dept: "IT Sales",
        color: "text-cyan-400",
        bgColor: "bg-cyan-500/10",
        borderColor: "border-cyan-500/30",
        skills: ["Market Research", "Prospecting", "Presentation Skills", "Follow-ups"],
        desc: "Support the business development team in researching markets, prospecting clients, and preparing proposals for IT services.",
    },
    {
        title: "Web Developer",
        type: "Full-time",
        mode: "On-site",
        exp: "Fresher – 2 years",
        dept: "Development",
        color: "text-green-400",
        bgColor: "bg-green-500/10",
        borderColor: "border-green-500/30",
        skills: ["HTML", "CSS", "JavaScript", "React/Next.js", "APIs"],
        desc: "Develop and maintain modern web applications for clients. Collaborate with designers and project managers to deliver quality IT solutions.",
    },
];

const perks = [
    { icon: "💰", title: "Competitive Salary", desc: "Market-beating salaries + performance bonuses" },
    { icon: "🏠", title: "Flexible Work", desc: "Hybrid / remote options for most roles" },
    { icon: "📚", title: "Learning Budget", desc: "₹15,000/year for courses and certifications" },
    { icon: "🏥", title: "Health Insurance", desc: "Comprehensive coverage for you and family" },
    { icon: "🎯", title: "Growth Path", desc: "Clear career ladder with quarterly reviews" },
    { icon: "🎉", title: "Fun Culture", desc: "Team outings, hackathons, and office celebrations" },
];

export default function CareersPage() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-20 bg-dark bg-grid relative overflow-hidden">
                <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-dark-card border border-dark-border text-gold text-xs font-semibold tracking-widest uppercase mb-6">
                        We&apos;re Hiring
                    </span>
                    <h1 className="text-5xl md:text-6xl font-display font-black text-white mb-6">
                        Shape the Future of <br />
                        <span className="gradient-text">Digital Marketing</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
                        Join a team of 30+ passionate digital experts in Hyderabad. Build real campaigns,
                        real skills, and a real career — all while making a measurable impact.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#openings" className="btn-primary">View Open Roles</a>
                        <a
                            href="https://wa.me/918121919443?text=Hi!%20I%27m%20interested%20in%20working%20at%20Snap%20Lessons."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline"
                        >
                            Send Your CV
                        </a>
                    </div>
                </div>
            </section>

            {/* Perks */}
            <section className="py-16 bg-dark-card border-y border-dark-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-white">
                            Why Work at <span className="gradient-text">snaplessons?</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {perks.map((p) => (
                            <div key={p.title} className="glass-card border border-dark-border p-6 flex gap-4 hover:border-gold/30 transition-all duration-200">
                                <div className="text-3xl flex-shrink-0">{p.icon}</div>
                                <div>
                                    <h3 className="text-white font-semibold mb-1">{p.title}</h3>
                                    <p className="text-slate-400 text-sm">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section id="openings" className="py-20 bg-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-gold text-sm font-semibold tracking-widest uppercase">Open Roles</span>
                        <h2 className="section-heading mt-3">
                            {openings.length} Positions <span className="gradient-text">Available</span>
                        </h2>
                    </div>
                    <div className="space-y-5">
                        {openings.map((job) => (
                            <div
                                key={job.title}
                                className={`glass-card border ${job.borderColor} p-8 hover:scale-[1.01] transition-all duration-300 group`}
                            >
                                <div className="flex flex-col md:flex-row md:items-start gap-6">
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 mb-3">
                                            <h3 className="text-xl font-display font-bold text-white">{job.title}</h3>
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${job.bgColor} ${job.color} border ${job.borderColor}`}>
                                                {job.dept}
                                            </span>
                                        </div>
                                        <p className="text-slate-400 text-sm mb-4">{job.desc}</p>
                                        {/* Meta */}
                                        <div className="flex flex-wrap gap-4 mb-4">
                                            {[
                                                { icon: "💼", text: job.type },
                                                { icon: "🏠", text: job.mode },
                                                { icon: "⏱️", text: job.exp + " experience" },
                                            ].map((m) => (
                                                <span key={m.text} className="flex items-center gap-1.5 text-slate-300 text-xs">
                                                    <span>{m.icon}</span> {m.text}
                                                </span>
                                            ))}
                                        </div>
                                        {/* Skills */}
                                        <div className="flex flex-wrap gap-2">
                                            {job.skills.map((skill) => (
                                                <span key={skill} className="px-2.5 py-1 rounded-lg bg-dark border border-dark-border text-slate-400 text-xs">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Apply CTA */}
                                    <div className="flex-shrink-0">
                                        <a
                                            href={`https://wa.me/918121919443?text=Hi!%20I%27m%20applying%20for%20the%20${encodeURIComponent(job.title)}%20role%20at%20Snap%20Lessons.`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl border ${job.borderColor} ${job.color} font-semibold text-sm hover:bg-white/5 transition-all duration-200 group-hover:shadow-md`}
                                        >
                                            Apply Now
                                            <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
                                                <path d="M8.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L10.586 9H3a1 1 0 010-2h7.586L8.293 4.707a1 1 0 010-1.414z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </section>
        </>
    );
}
