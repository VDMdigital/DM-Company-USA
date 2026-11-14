"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { services } from "@/lib/data/services";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    // Sub-menu ke liye state
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);

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
                setServicesOpen(false);
                setSubMenuOpen(false); // Sub-menu bhi band karein
            }
        };
        document.addEventListener("mousedown", onClick);
        return () => document.removeEventListener("mousedown", onClick);
    }, []);

    // Services list ko 2 hisson mein baant rahe hain
    const mainServices = services.filter(s =>
        !["website-development", "mobile-app-development", "ai-seo-geo-ppc"].includes(s.slug)
    );

    const marketingServices = [
        { title: "Website Development", slug: "website-development" },
        { title: "Mobile App Development", slug: "mobile-app-development" },
        { title: "AI SEO, GEO & Google PPC", slug: "ai-seo-geo-ppc" },
    ];

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-beige bg-cream-light/90 backdrop-blur-lg" : "bg-transparent"
                }`}
        >
            <nav className="container-editorial flex h-20 items-center justify-between">
                <Link href="/" className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-charcoal">
                    <span className="grid h-8 w-8 place-items-center rounded-md bg-burgundy text-cream-light text-sm font-bold">A</span>
                    Aurelius<span className="text-burgundy">AI</span>
                </Link>

                <div className="hidden items-center gap-8 lg:flex">
                    <Link href="/" className="text-sm font-medium text-charcoal/80 hover:text-burgundy">Home</Link>

                    {/* SERVICES DROPDOWN (Normal List) */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setServicesOpen((v) => !v)}
                            className="flex items-center gap-1 text-sm font-medium text-charcoal/80 hover:text-burgundy"
                            aria-expanded={servicesOpen}
                        >
                            Services
                            <svg width="12" height="12" viewBox="0 0 12 12" className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}>
                                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                            </svg>
                        </button>

                        {servicesOpen && (
                            <div className="absolute left-0 top-full mt-3 w-[280px] rounded-xl border border-beige bg-white p-2 shadow-lift flex flex-col">
                                {/* Baqi Services */}
                                {mainServices.map((s) => (
                                    <Link
                                        key={s.slug}
                                        href={`/services/${s.slug}`}
                                        onClick={() => setServicesOpen(false)}
                                        className="block rounded-lg px-4 py-2.5 text-sm font-medium text-charcoal hover:bg-cream-light hover:text-burgundy transition-colors"
                                    >
                                        {s.title}
                                    </Link>
                                ))}

                                {/* AI Digital Marketing (Sub-menu Trigger) */}
                                <div
                                    className="relative group/sub"
                                    onMouseEnter={() => setSubMenuOpen(true)}
                                    onMouseLeave={() => setSubMenuOpen(false)}
                                >
                                    <button
                                        className="flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium text-charcoal hover:bg-cream-light hover:text-burgundy transition-colors"
                                    >
                                        AI Digital Marketing
                                        <svg width="12" height="12" viewBox="0 0 12 12" className="rotate-[-90deg]"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" /></svg>
                                    </button>

                                    {/* Sub-menu (Right Side) */}
                                    {subMenuOpen && (
                                        <div className="absolute left-full top-0 ml-2 w-[240px] rounded-xl border border-beige bg-white p-2 shadow-lift">
                                            {marketingServices.map((sub) => (
                                                <Link
                                                    key={sub.slug}
                                                    href={`/services/${sub.slug}`}
                                                    onClick={() => setServicesOpen(false)}
                                                    className="block rounded-lg px-4 py-2.5 text-sm font-medium text-charcoal hover:bg-cream-light hover:text-burgundy transition-colors"
                                                >
                                                    {sub.title}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    <Link href="/industries" className="text-sm font-medium text-charcoal/80 hover:text-burgundy">Industries</Link>
                    <Link href="/about" className="text-sm font-medium text-charcoal/80 hover:text-burgundy">About Us</Link>
                    <Link href="/contact" className="text-sm font-medium text-charcoal/80 hover:text-burgundy">Contact</Link>
                </div>

                <div className="hidden lg:block">
                    <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
                </div>

                <button className="lg:hidden p-2" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={mobileOpen}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        {mobileOpen
                            ? <path d="M6 6l12 12M18 6L6 18" stroke="#231F1D" strokeWidth="1.6" />
                            : <><path d="M4 7h16M4 12h16M4 17h16" stroke="#231F1D" strokeWidth="1.6" /></>}
                    </svg>
                </button>
            </nav>

            {/* MOBILE MENU */}
            {mobileOpen && (
                <div className="border-t border-beige bg-cream-light lg:hidden max-h-[calc(100vh-5rem)] overflow-y-auto">
                    <div className="container-editorial flex flex-col gap-1 py-4">
                        <Link href="/" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium">Home</Link>

                        {/* Mobile Services */}
                        <button
                            onClick={() => setMobileServicesOpen((v) => !v)}
                            className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium"
                            aria-expanded={mobileServicesOpen}
                        >
                            Services
                            <svg width="12" height="12" viewBox="0 0 12 12" className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}>
                                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                            </svg>
                        </button>

                        {mobileServicesOpen && (
                            <div className="pl-4 space-y-1">
                                {mainServices.map((s) => (
                                    <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setMobileOpen(false)} className="block rounded-md py-2 text-sm text-charcoal/70">
                                        {s.title}
                                    </Link>
                                ))}

                                {/* Mobile Submenu */}
                                <button
                                    onClick={() => setMobileSubMenuOpen((v) => !v)}
                                    className="flex w-full items-center justify-between rounded-md py-2 text-sm text-charcoal/70"
                                >
                                    AI Digital Marketing
                                    <svg width="12" height="12" viewBox="0 0 12 12" className={`transition-transform ${mobileSubMenuOpen ? "rotate-180" : ""}`}>
                                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                    </svg>
                                </button>
                                {mobileSubMenuOpen && (
                                    <div className="pl-4">
                                        {marketingServices.map((s) => (
                                            <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setMobileOpen(false)} className="block rounded-md py-1.5 text-xs text-charcoal/70">
                                                {s.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
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