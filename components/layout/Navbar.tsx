"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { services } from "@/lib/data/services";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    // Desktop Dropdowns State
    const [aiMenuOpen, setAiMenuOpen] = useState(false);
    const [marketingMenuOpen, setMarketingMenuOpen] = useState(false);

    // Mobile Dropdowns State
    const [mobileAiOpen, setMobileAiOpen] = useState(false);
    const [mobileMarketingOpen, setMobileMarketingOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Bahar click karne par dropdown band ho jaye
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setAiMenuOpen(false);
                setMarketingMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", onClick);
        return () => document.removeEventListener("mousedown", onClick);
    }, []);

    // Services ko 2 hisson mein baant rahe hain
    const aiServices = services.filter(s =>
        !["website-development", "mobile-app-development", "ai-seo-geo-ppc"].includes(s.slug)
    );

    const marketingServices = [
        { title: "AI Digital Marketing", slug: "ai-digital-marketing", desc: "Smarter campaigns & analytics" },
        { title: "Website Development", slug: "website-development", desc: "Custom high-performance websites" },
        { title: "Mobile App Development", slug: "mobile-app-development", desc: "iOS & Android applications" },
        { title: "AI SEO, GEO & PPC", slug: "ai-seo-geo-ppc", desc: "Search & AI-powered discovery" },
    ];

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-beige bg-cream-light/90 backdrop-blur-lg" : "bg-transparent"
                }`}
        >
            <nav className="container-editorial flex h-20 items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-charcoal">
                    <span className="grid h-8 w-8 place-items-center rounded-md bg-burgundy text-cream-light text-sm font-bold">A</span>
                    Aurelius<span className="text-burgundy">AI</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-8 lg:flex" ref={dropdownRef}>
                    <Link href="/" className="text-sm font-medium text-charcoal/80 hover:text-burgundy transition-colors">Home</Link>

                    {/* AI Services Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => {
                                setAiMenuOpen((v) => !v);
                                setMarketingMenuOpen(false);
                            }}
                            className="flex items-center gap-1 text-sm font-medium text-charcoal/80 hover:text-burgundy transition-colors"
                        >
                            AI Services
                            <svg width="12" height="12" viewBox="0 0 12 12" className={`transition-transform duration-200 ${aiMenuOpen ? "rotate-180" : ""}`}>
                                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                            </svg>
                        </button>

                        {aiMenuOpen && (
                            <div className="absolute left-0 top-full mt-4 w-[320px] rounded-xl border border-beige bg-white p-2 shadow-lift">
                                {aiServices.map((s) => (
                                    <Link
                                        key={s.slug}
                                        href={`/services/${s.slug}`}
                                        onClick={() => setAiMenuOpen(false)}
                                        className="block rounded-lg px-4 py-3 hover:bg-cream-light transition-colors group"
                                    >
                                        <div className="text-sm font-semibold text-charcoal group-hover:text-burgundy transition-colors">{s.title}</div>
                                        <div className="text-xs text-charcoal/60 mt-0.5 line-clamp-1">{s.shortDescription}</div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Digital Marketing Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => {
                                setMarketingMenuOpen((v) => !v);
                                setAiMenuOpen(false);
                            }}
                            className="flex items-center gap-1 text-sm font-medium text-charcoal/80 hover:text-burgundy transition-colors"
                        >
                            Digital Marketing
                            <svg width="12" height="12" viewBox="0 0 12 12" className={`transition-transform duration-200 ${marketingMenuOpen ? "rotate-180" : ""}`}>
                                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                            </svg>
                        </button>

                        {marketingMenuOpen && (
                            <div className="absolute left-0 top-full mt-4 w-[320px] rounded-xl border border-beige bg-white p-2 shadow-lift">
                                {marketingServices.map((s) => (
                                    <Link
                                        key={s.slug}
                                        href={`/services/${s.slug}`}
                                        onClick={() => setMarketingMenuOpen(false)}
                                        className="block rounded-lg px-4 py-3 hover:bg-cream-light transition-colors group"
                                    >
                                        <div className="text-sm font-semibold text-charcoal group-hover:text-burgundy transition-colors">{s.title}</div>
                                        <div className="text-xs text-charcoal/60 mt-0.5 line-clamp-1">{s.desc}</div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link href="/industries" className="text-sm font-medium text-charcoal/80 hover:text-burgundy transition-colors">Industries</Link>
                    <Link href="/about" className="text-sm font-medium text-charcoal/80 hover:text-burgundy transition-colors">About Us</Link>
                    <Link href="/contact" className="text-sm font-medium text-charcoal/80 hover:text-burgundy transition-colors">Contact</Link>
                </div>

                {/* Desktop CTA Button */}
                <div className="hidden lg:block">
                    <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="lg:hidden p-2" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={mobileOpen}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        {mobileOpen
                            ? <path d="M6 6l12 12M18 6L6 18" stroke="#231F1D" strokeWidth="1.6" />
                            : <><path d="M4 7h16M4 12h16M4 17h16" stroke="#231F1D" strokeWidth="1.6" /></>}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="border-t border-beige bg-cream-light lg:hidden max-h-[calc(100vh-5rem)] overflow-y-auto">
                    <div className="container-editorial flex flex-col gap-1 py-4">
                        <Link href="/" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium">Home</Link>

                        {/* Mobile AI Services */}
                        <button
                            onClick={() => setMobileAiOpen((v) => !v)}
                            className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium"
                        >
                            AI Services
                            <svg width="12" height="12" viewBox="0 0 12 12" className={`transition-transform ${mobileAiOpen ? "rotate-180" : ""}`}>
                                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                            </svg>
                        </button>
                        {mobileAiOpen && (
                            <div className="pl-4 py-1 space-y-1">
                                {aiServices.map((s) => (
                                    <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setMobileOpen(false)} className="block rounded-md py-2 text-sm text-charcoal/70">
                                        {s.title}
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* Mobile Digital Marketing */}
                        <button
                            onClick={() => setMobileMarketingOpen((v) => !v)}
                            className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium"
                        >
                            Digital Marketing
                            <svg width="12" height="12" viewBox="0 0 12 12" className={`transition-transform ${mobileMarketingOpen ? "rotate-180" : ""}`}>
                                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                            </svg>
                        </button>
                        {mobileMarketingOpen && (
                            <div className="pl-4 py-1 space-y-1">
                                {marketingServices.map((s) => (
                                    <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setMobileOpen(false)} className="block rounded-md py-2 text-sm text-charcoal/70">
                                        {s.title}
                                    </Link>
                                ))}
                            </div>
                        )}

                        <Link href="/industries" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium">Industries</Link>
                        <Link href="/about" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium">About Us</Link>
                        <Link href="/contact" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium">Contact</Link>
                        <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary mt-3 w-full">Book a Free Consultation</Link>
                    </div>
                </div>
            )}
        </header>
    );
}