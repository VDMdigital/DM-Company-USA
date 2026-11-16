import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { industries } from "@/lib/data/industries";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
    title: "Industries We Serve — AI & Technology Solutions",
    description: "We develop intelligent digital solutions tailored to the unique challenges, workflows, and opportunities of different industries.",
};

const industryImages: Record<string, string> = {
    "healthcare": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    "retail-fmcg-ecommerce": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    "b2b-b2c": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
    "real-estate": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    "construction-home-services": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
    "travel-hospitality": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=800&auto=format&fit=crop",
    "manufacturing": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    "small-business": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    "trading": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    "energy": "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop",
    "tech-saas-it": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
    "media": "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=800&auto=format&fit=crop",
    "finance-legal-professional": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
};

export default function IndustriesPage() {
    return (
        <>
            <section className="bg-cream-light py-20 lg:py-28">
                <div className="container-editorial">
                    <span className="eyebrow">Industries</span>
                    <h1 className="mt-4 max-w-4xl text-display-lg">
                        Industry-Specific Technology. <br /> <span className="text-burgundy">Real Business Impact.</span>
                    </h1>
                    <p className="prose-editorial mt-6 text-lg">
                        We develop intelligent digital solutions tailored to the unique challenges, workflows,
                        and opportunities of different industries. Explore how AI and automation can transform your specific sector.
                    </p>
                </div>
            </section>

            <section className="bg-white py-20 lg:py-28">
                <div className="container-editorial">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {industries.map((ind, i) => (
                            <Reveal key={ind.slug} delay={i * 40}>
                                <div id={ind.slug} className="group card h-full flex flex-col overflow-hidden scroll-mt-24 p-0 border-beige/50 hover:shadow-lift">
                                    <div className="relative h-56 w-full overflow-hidden">
                                        <Image
                                            src={industryImages[ind.slug] || "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"}
                                            alt={ind.name}
                                            width={600}
                                            height={400}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                                        <div className="absolute bottom-4 left-4 z-20">
                                            <h2 className="font-display text-xl font-bold text-white">{ind.name}</h2>
                                        </div>
                                    </div>

                                    <div className="flex flex-1 flex-col p-6">
                                        <p className="mt-2 text-sm leading-relaxed text-charcoal/70 flex-1">
                                            {ind.description}
                                        </p>

                                        <div className="mt-5 rounded-lg bg-cream-light p-4">
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-burgundy">
                                                AI Use Cases
                                            </div>
                                            <ul className="mt-2 space-y-1.5">
                                                {ind.useCases.map((useCase) => (
                                                    <li key={useCase} className="flex items-center gap-2 text-xs text-charcoal/80">
                                                        <svg width="12" height="12" viewBox="0 0 14 14" className="shrink-0 text-burgundy">
                                                            <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
                                                        </svg>
                                                        {useCase}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mt-5 pt-4 border-t border-beige">
                                            <Link
                                                href={`/services`}
                                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-burgundy hover:gap-2.5 transition-all"
                                            >
                                                Explore Solutions
                                                <svg width="14" height="14" viewBox="0 0 14 14">
                                                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" fill="none" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-charcoal py-20 lg:py-28">
                <div className="container-editorial text-center">
                    <Reveal>
                        <h2 className="mx-auto max-w-3xl text-display-lg text-cream-light">
                            Do not see your industry listed?
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-cream-light/70">
                            Our solutions are adaptable to almost any business model. Let us discuss how we can apply AI and automation to your specific needs.
                        </p>
                        <div className="mt-9 flex justify-center">
                            <Link href="/contact" className="btn-primary !bg-burgundy hover:!bg-burgundy-deep">
                                Book Your Free Consultation
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}