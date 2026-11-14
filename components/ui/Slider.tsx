"use client";
import { useRef } from "react";
import Link from "next/link";
import type { Service } from "@/lib/data/services";

export default function Slider({ services }: { services: Service[] }) {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <div className="relative group/slider mt-12 w-full">

            {/* Left Arrow */}
            <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 lg:-ml-5 z-20 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm border border-beige text-charcoal shadow-lift transition-all duration-300 hover:bg-burgundy hover:text-white hover:border-burgundy opacity-0 group-hover/slider:opacity-100"
                aria-label="Previous services"
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>

            {/* Main Slider Track */}
            <div
                ref={sliderRef}
                className="flex gap-4 overflow-x-auto pb-6 pt-4 px-1 snap-x snap-mandatory scroll-smooth"
                style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch"
                }}
            >
                {services.map((service) => (
                    /* Card Container: Fixed Width taake shape kharab na ho */
                    <div
                        key={service.slug}
                        className="w-[260px] sm:w-[280px] flex-shrink-0 snap-start flex"
                    >
                        <Link
                            href={`/services/${service.slug}`}
                            className="group flex h-full w-full flex-col rounded-xl border border-beige/60 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-burgundy/30"
                        >
                            {/* Chota Icon Container */}
                            <div className="mb-3 grid h-9 w-9 place-items-center rounded-lg bg-cream-light text-burgundy border border-beige/50 group-hover:bg-burgundy group-hover:text-white transition-colors duration-300">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                                </svg>
                            </div>

                            <h3 className="font-display text-base font-bold text-charcoal group-hover:text-burgundy transition-colors line-clamp-2">
                                {service.title}
                            </h3>

                            <p className="mt-2 text-xs leading-relaxed text-charcoal/70 flex-1 line-clamp-3">
                                {service.shortDescription}
                            </p>

                            {/* Learn More - Chota aur sleek */}
                            <div className="mt-4 pt-3 border-t border-beige/50 flex items-center gap-1.5 text-xs font-semibold text-burgundy mt-auto">
                                Learn More
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Right Arrow */}
            <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 lg:-mr-5 z-20 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm border border-beige text-charcoal shadow-lift transition-all duration-300 hover:bg-burgundy hover:text-white hover:border-burgundy opacity-0 group-hover/slider:opacity-100"
                aria-label="Next services"
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </button>

            {/* Hide scrollbar for Chrome/Safari */}
            <style dangerouslySetInnerHTML={{
                __html: `
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}} />
        </div>
    );
}