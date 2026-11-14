import Image from "next/image";

export default function HeroVisual() {
    return (
        <div className="relative mx-auto w-full max-w-lg" aria-hidden="true">
            {/* Glowing Background Effect */}
            <div className="absolute inset-0 -z-10 rounded-full bg-burgundy/20 blur-3xl" />

            {/* Main Premium Image Card */}
            <div className="relative overflow-hidden rounded-2xl border border-beige bg-white shadow-lift group">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80" />

                <Image
                    src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200&auto=format&fit=crop"
                    alt="AI Automation Dashboard"
                    width={800}
                    height={800}
                    className="h-[450px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                />

                {/* Floating Overlay UI Elements */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                    <div className="rounded-xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-xs font-bold uppercase tracking-widest text-cream-light">Live AI Integration</div>
                                <div className="mt-1 font-display text-xl font-semibold text-white">Business Growth</div>
                            </div>
                            <div className="flex gap-1.5 h-10 items-end">
                                <div className="w-2.5 bg-burgundy h-1/3 rounded-t-sm" />
                                <div className="w-2.5 bg-burgundy h-1/2 rounded-t-sm" />
                                <div className="w-2.5 bg-burgundy h-3/4 rounded-t-sm" />
                                <div className="w-2.5 bg-burgundy h-full rounded-t-sm" />
                                <div className="w-2.5 bg-burgundy h-2/3 rounded-t-sm" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}