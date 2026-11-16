import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/data/services";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
    title: "Our Services — AI, Automation & Digital Solutions",
    description: "Explore our full range of AI automation, custom development, and digital marketing services.",
};

const serviceImages: Record<string, string> = {
    "ai-chatbot-development": "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop",
    "ai-voice-agent": "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop",
    "ai-automation": "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=800&auto=format&fit=crop",
    "crm-lead-generation": "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    "ai-for-business": "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    "website-development": "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop",
    "mobile-app-development": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    "ai-digital-marketing": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    "ai-seo-geo-ppc": "https://images.unsplash.com/photo-1571721795195-7b8d59b23a45?q=80&w=800&auto=format&fit=crop",
};

export default function ServicesPage() {
    return (
        <>
            <section className="relative bg-charcoal py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
                        alt="Technology Network"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-transparent" />
                </div>
                <div className="container-editorial relative z-10">
                    <span className="eyebrow !text-burgundy">Our Services</span>
                    <h1 className="mt-4 max-w-4xl text-display-lg text-cream-light">
                        Intelligent Solutions for Every Stage of Business Growth.
                    </h1>
                    <p className="prose-editorial mt-6 text-lg text-cream-light/80">
                        From AI-powered customer experiences to intelligent business automation, we create technology solutions designed around your business goals.
                    </p>
                </div>
            </section>

            <section className="bg-white py-20 lg:py-28">
                <div className="container-editorial">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, i) => (
                            <Reveal key={service.slug} delay={i * 40}>
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-beige/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lift hover:border-burgundy/30"
                                >
                                    <div className="relative h-48 w-full overflow-hidden bg-cream">
                                        <Image
                                            src={serviceImages[service.slug] || "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"}
                                            alt={service.title}
                                            width={600}
                                            height={400}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <div className="flex flex-1 flex-col p-6">
                                        <h2 className="font-display text-lg font-bold text-charcoal group-hover:text-burgundy transition-colors">
                                            {service.title}
                                        </h2>
                                        <p className="mt-2 text-sm leading-relaxed text-charcoal/70 flex-1 line-clamp-3">
                                            {service.shortDescription}
                                        </p>
                                        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-burgundy">
                                            Learn More
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-cream py-20 lg:py-28">
                <div className="container-editorial text-center">
                    <Reveal>
                        <h2 className="mx-auto max-w-3xl text-display-md">Not sure which service you need?</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal/70">
                            Book a free consultation and we will help you identify the highest-impact opportunities for your business.
                        </p>
                        <div className="mt-9 flex justify-center">
                            <Link href="/contact" className="btn-primary">Book Your Free Consultation</Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}