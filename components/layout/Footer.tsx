import Link from "next/link";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import { siteConfig } from "@/lib/site";

export default function Footer() {
    return (
        <footer className="bg-charcoal text-cream-light/80">
            <div className="container-editorial py-16">
                <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

                    <div>
                        <div className="flex items-center gap-2.5 font-display text-lg font-bold text-cream-light">
                            <span className="grid h-8 w-8 place-items-center rounded-md bg-burgundy text-sm text-white">A</span>
                            Aurelius<span className="text-burgundy">AI</span>
                        </div>
                        <p className="mt-4 max-w-sm text-sm leading-relaxed">
                            An AI automation and technology agency helping US businesses simplify operations, generate leads,
                            and build smarter digital systems.
                        </p>
                        <div className="mt-6 flex gap-3">
                            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-md border border-cream-light/20 hover:border-burgundy hover:text-burgundy transition-colors" aria-label="LinkedIn">
                                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                            <a href={siteConfig.social.x} target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-md border border-cream-light/20 hover:border-burgundy hover:text-burgundy transition-colors" aria-label="X (Twitter)">
                                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cream-light/50">Services</div>
                        <ul className="mt-4 space-y-2.5 text-sm">
                            {services.map((s) => (
                                <li key={s.slug}>
                                    <Link href={`/services/${s.slug}`} className="hover:text-burgundy transition-colors">{s.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cream-light/50">Industries</div>
                        <ul className="mt-4 space-y-2.5 text-sm">
                            {industries.slice(0, 8).map((i) => (
                                <li key={i.slug}>
                                    <Link href={`/industries#${i.slug}`} className="hover:text-burgundy transition-colors">{i.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cream-light/50">Company</div>
                        <ul className="mt-4 space-y-2.5 text-sm">
                            <li><Link href="/about" className="hover:text-burgundy transition-colors">About Us</Link></li>
                            {/* "Our Process" yahan se remove kar diya gaya hai */}
                            <li><Link href="/contact" className="hover:text-burgundy transition-colors">Contact</Link></li>
                            <li><Link href="/privacy" className="hover:text-burgundy transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-burgundy transition-colors">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-cream-light/10 pt-6 text-xs text-cream-light/50 sm:flex-row sm:items-center">
                    <div>&copy; 2026 {siteConfig.name}. All rights reserved.</div>
                    <div>United States</div>
                </div>
            </div>
        </footer>
    );
}