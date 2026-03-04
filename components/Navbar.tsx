"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
    { href: "/", label: "Home", emoji: "🏠" },
    { href: "/services", label: "Services", emoji: "⚡" },
    { href: "/pricing", label: "Pricing", emoji: "💰" },
    { href: "/about", label: "About", emoji: "👥" },
    { href: "/careers", label: "Careers", emoji: "🚀" },
    { href: "/contact", label: "Contact Us", emoji: "📩" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    // Close on route change
    useEffect(() => { setIsOpen(false); }, [pathname]);

    return (
        <>
            <nav
                className={`fixed top-3 left-1/2 -translate-x-1/2 w-[95vw] max-w-5xl z-50 transition-all duration-300 rounded-2xl shadow-2xl border border-dark-border/60 ${scrolled
                    ? "bg-dark/90 backdrop-blur-2xl"
                    : "bg-dark/70 backdrop-blur-md"
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
                            {navLinks.map((link) => {
                                const isContact = link.href === "/contact";
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={
                                            isContact
                                                ? `px-5 py-2 rounded-xl text-base font-bold transition-all duration-200 shadow-lg border ${isActive
                                                    ? "bg-blue-500 text-white border-blue-400"
                                                    : "bg-gradient-to-r from-blue-600 to-blue-500 text-white border-blue-500/50 hover:opacity-90 hover:scale-105"
                                                }`
                                                : `px-4 py-2 rounded-xl text-base font-semibold transition-all duration-200 ${isActive
                                                    ? "text-gold bg-gold/20 shadow"
                                                    : "text-slate-200 hover:text-white hover:bg-gold/10 hover:shadow-md"
                                                }`
                                        }
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </div>



                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors border border-dark-border/40 bg-dark/60"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-72 z-50 md:hidden flex flex-col
                    bg-[#0a0f1e] border-l border-dark-border/60 shadow-2xl
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Drawer Header */}
                <div className="flex items-center justify-between px-5 py-5 border-b border-dark-border/40">
                    <div className="flex flex-col">
                        <span className="font-extrabold text-xl text-white tracking-tight">snaplessons</span>
                        <span className="text-xs font-semibold text-[#F5A623]">Best IT Services</span>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                        aria-label="Close menu"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Nav Links */}
                <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
                    {navLinks.map((link) => {
                        const active = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-semibold text-[15px] transition-all duration-150
                                    ${active
                                        ? "bg-gold/15 text-gold border border-gold/25"
                                        : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent"
                                    }`}
                            >
                                <span className="flex items-center gap-3">
                                    <span className="text-lg">{link.emoji}</span>
                                    {link.label}
                                </span>
                                <ChevronRight size={15} className={active ? "text-gold" : "text-slate-600"} />
                            </Link>
                        );
                    })}
                </nav>

                {/* Drawer Footer */}
                <div className="px-4 py-5 border-t border-dark-border/40">
                    <p className="text-center text-slate-600 text-xs">© 2025 SnapLessons · Hyderabad</p>
                </div>
            </div>
        </>
    );
}
