"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import SnapLessonsLogo from "@/components/svgs/SnapLessonsLogo";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-3 left-1/2 -translate-x-1/2 w-[95vw] max-w-5xl z-50 transition-all duration-300 rounded-2xl shadow-2xl border border-dark-border/60 ${scrolled
                ? "bg-dark/80 backdrop-blur-2xl"
                : "bg-dark/60 backdrop-blur-md"
                }`}
        >
            <div className="px-4 sm:px-8 py-2">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex flex-col items-start group select-none" aria-label="SnapLessons Home">
                        <span className="font-extrabold text-2xl leading-tight text-white tracking-tight drop-shadow-lg">snaplessons</span>
                        <span className="text-[0.85rem] font-semibold text-[#F5A623] -mt-1 drop-shadow">Best IT Services</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-2 ml-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-2 rounded-xl text-base font-semibold transition-all duration-200 ${pathname === link.href
                                    ? "text-gold bg-gold/20 shadow"
                                    : "text-slate-200 hover:text-white hover:bg-gold/10 hover:shadow-md"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-3 ml-4">
                        <a
                            href="https://wa.me/918121919443?text=Hi%20Snap%20Lessons!%20I%20want%20a%20free%20audit."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2.5 bg-gradient-to-r from-primary to-accent text-white text-base font-bold rounded-2xl hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg border border-accent/40"
                        >
                            Free Audit
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-gold/10 transition border border-dark-border/40 bg-dark/60"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-dark/95 backdrop-blur-2xl border-t border-dark-border px-4 py-4 flex flex-col gap-2 rounded-b-2xl shadow-xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`px-4 py-3 rounded-xl text-base font-semibold transition-all ${pathname === link.href
                                ? "text-gold bg-gold/20 shadow"
                                : "text-slate-200 hover:text-white hover:bg-gold/10 hover:shadow-md"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/918121919443?text=Hi%20Snap%20Lessons!%20I%20want%20a%20free%20audit."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white text-base font-bold rounded-2xl text-center border border-accent/40 shadow-lg"
                    >
                        Get Free Audit
                    </a>
                </div>
            </div>
        </nav>
    );
}
