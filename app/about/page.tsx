import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
    title: "About Us — AI Automation & Technology Agency",
    description: "We're a US-based AI automation and technology agency helping businesses build smarter digital systems.",
};

const teamImages = [
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
];

export default function AboutPage() {
    return (
        <>
            {/* HERO */}
            <section className="relative overflow-hidden bg-cream-light py-20 lg:py-32">
                <div className="absolute right-0 top-0 -z-10 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/4 rounded-full bg-burgundy/10 blur-3xl" />
                <div className="container-editorial grid items-center gap-12 lg:grid-cols-2">
                    <div className="max-w-3xl">
                        <span className="eyebrow">About Us</span>
                        <h1 className="mt-4 text-display-lg">
                            A technology partner built around <span className="text-burgundy">your business.</span>
                        </h1>
                        <p className="prose-editorial mt-6 text-lg">
                            We are a US-based technology consultancy that helps businesses apply AI, automation, and modern digital
                            systems in ways that create measurable operational and commercial value — not novelty.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-burgundy/5 rounded-full blur-2xl" />
                        <Image
                            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
                            alt="Technology team at work"
                            width={800}
                            height={800}
                            className="relative rounded-2xl shadow-lift object-cover h-[450px] w-full"
                        />
                    </div>
                </div>
            </section>

            {/* VALUES GRID */}
            <section className="bg-white py-20 lg:py-28">
                <div className="container-editorial">
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            { t: "Our Approach", d: "We start with your business goals, then design technology to serve them. Every engagement begins with discovery, not a demo." },
                            { t: "Our Values", d: "Transparency in scope and pricing, honesty about tradeoffs, and a bias toward outcomes over outputs." },
                            { t: "Our Focus", d: "AI, automation, custom software, and growth technology for mid-market and growing US businesses." },
                        ].map((c, i) => (
                            <Reveal key={c.t} delay={i * 80}>
                                <div className="card p-8 border-t-4 border-t-burgundy hover:-translate-y-1 transition-transform h-full">
                                    <div className="mb-4 text-xs font-bold uppercase tracking-widest text-burgundy">
                                        0{i + 1}
                                    </div>
                                    <h2 className="font-display text-xl font-semibold text-charcoal">{c.t}</h2>
                                    <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{c.d}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* TEAM IN ACTION (3 Images) */}
            <section className="bg-cream py-20 lg:py-28">
                <div className="container-editorial">
                    <Reveal>
                        <div className="text-center mb-14">
                            <span className="eyebrow justify-center">Our Team in Action</span>
                            <h2 className="mt-4 text-display-md">Real people. Real partnerships.</h2>
                        </div>
                    </Reveal>
                    <div className="grid gap-6 md:grid-cols-3">
                        {teamImages.map((src, i) => (
                            <Reveal key={i} delay={i * 80}>
                                <div className="relative overflow-hidden rounded-2xl shadow-soft group h-[350px]">
                                    <Image
                                        src={src}
                                        alt={`Team working ${i + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-charcoal py-20 lg:py-28">
                <div className="container-editorial text-center">
                    <h2 className="mx-auto max-w-3xl text-display-lg text-cream-light">
                        Let us build something intelligent together.
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-cream-light/70">
                        Ready to transform your operations with AI and modern technology?
                    </p>
                    <div className="mt-9 flex justify-center">
                        <Link href="/contact" className="btn-primary !bg-burgundy hover:!bg-burgundy-deep">
                            Book a Free Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}