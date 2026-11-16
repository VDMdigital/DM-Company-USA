import Link from "next/link";
import Image from "next/image";
import Slider from "@/components/ui/Slider";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import Accordion from "@/components/ui/Accordion";
import HeroVisual from "@/components/sections/HeroVisual";
import Reveal from "@/components/ui/Reveal";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import { homepageFaqs } from "@/lib/data/faqs";

export default function HomePage() {
  return (
    <>
      {/* HERO WITH BACKGROUND IMAGE */}
      <section className="relative overflow-hidden bg-charcoal">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
            alt="Global Tech Network"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/40" />
        </div>

        <div className="container-editorial relative z-10 grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
          <div>
            <span className="eyebrow !text-burgundy">AI Automation & Technology Agency</span>
            <h1 className="mt-5 text-display-xl font-semibold text-cream-light">
              Build Smarter.<br />Automate Better.<br /><span className="text-burgundy">Grow Faster.</span>
            </h1>
            <p className="prose-editorial mt-6 text-lg text-cream-light/80">
              We help ambitious businesses harness the power of artificial intelligence, intelligent automation,
              and modern technology to simplify operations, generate leads, and accelerate growth.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
              <Link href="/services" className="btn-secondary !text-cream-light !border-cream-light/30 hover:!bg-cream-light hover:!text-charcoal">Explore Our Services</Link>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-editorial">
          <Reveal>
            <h2 className="max-w-3xl text-display-md">Technology That Moves Businesses Forward.</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Intelligent AI Solutions", d: "Custom AI systems grounded in your data and business context." },
              { t: "Business Process Automation", d: "Automate repetitive work so your team focuses on higher-value decisions." },
              { t: "Custom Technology Development", d: "Websites, apps, and internal tools built for the way you operate." },
              { t: "Growth-Driven Digital Strategy", d: "Technology decisions tied directly to leads, revenue, and efficiency." },
            ].map((item, i) => (
              <Reveal key={item.t} delay={i * 80}>
                <div className="card h-full p-7 hover:-translate-y-1 transition-transform">
                  <div className="mb-4 h-10 w-10 rounded-lg bg-cream text-burgundy grid place-items-center font-display text-sm font-bold">0{i + 1}</div>
                  <h3 className="font-display text-base font-semibold">{item.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SLIDER */}
      <section id="services" className="bg-cream py-20 lg:py-28 overflow-hidden">
        <div className="container-editorial">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <span className="eyebrow">Our Services</span>
                <h2 className="mt-4 text-display-md">Intelligent Solutions for Every Stage of Business Growth.</h2>
                <p className="prose-editorial mt-4">
                  From AI-powered customer experiences to intelligent business automation, we create technology
                  solutions designed around your business goals.
                </p>
              </div>
              <Link href="/services" className="btn-secondary shrink-0">View All Services</Link>
            </div>
          </Reveal>
          <Slider services={services} />
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="bg-white py-20 lg:py-28">
        <div className="container-editorial">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">Industries</span>
              <h2 className="mt-4 text-display-md">Industry-Specific Technology. Real Business Impact.</h2>
              <p className="prose-editorial mt-4">
                We develop intelligent digital solutions tailored to the unique challenges, workflows,
                and opportunities of different industries.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 30}>
                <Link
                  href={`/industries#${ind.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-beige bg-cream-light p-6 transition-all hover:border-burgundy/40 hover:bg-white hover:shadow-lift"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-base font-semibold">{ind.name}</h3>
                    <span className="text-burgundy transition-transform group-hover:translate-x-1">→</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70 line-clamp-3">{ind.description}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (IMAGE SPLIT) */}
      <section className="bg-charcoal py-20 lg:py-28 overflow-hidden">
        <div className="container-editorial grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl shadow-lift group">
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop"
                alt="Team discussing AI business strategy"
                width={800}
                height={800}
                className="h-[550px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
                  <h3 className="font-display text-xl font-bold text-white">Outcome-Focused Execution</h3>
                  <p className="text-sm text-white/80 mt-2">We build systems that scale and improve over time, driving real business advantage.</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <span className="eyebrow !text-burgundy">Why Choose Us</span>
              <h2 className="mt-4 text-display-md text-cream-light">Beyond Technology. We Build Business Advantage.</h2>
              <p className="prose-editorial mt-4 text-cream-light/70">
                We approach every engagement as a business partnership — not a technology handoff.
                Our work is measured by the outcomes it creates, not the tools it uses.
              </p>
              <div className="mt-8 space-y-4">
                {["Customized Solutions", "Business-First Approach", "Seamless Integrations", "Scalable Technology", "Transparent Communication", "Continuous Optimization"].map((item) => (
                  <div key={item} className="flex items-center gap-3 border-b border-cream-light/10 pb-4 last:border-0">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-burgundy text-white">
                      <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l2.5 2.5L10 3" stroke="currentColor" strokeWidth="1.7" fill="none" /></svg>
                    </span>
                    <span className="font-medium text-cream-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="container-editorial">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">Our Process</span>
              <h2 className="mt-4 text-display-md">A Clear Path from Strategy to Execution.</h2>
            </div>
          </Reveal>
          <ProcessTimeline />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-editorial grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="mt-4 text-display-md">Common Questions.</h2>
              <p className="prose-editorial mt-4">
                If your question is not answered here, book a free consultation — we are happy to talk through your situation.
              </p>
              <Link href="/contact" className="btn-secondary mt-6">Ask Us Anything</Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Accordion items={homepageFaqs} />
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA WITH BACKGROUND IMAGE */}
      <section className="relative bg-charcoal py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop"
            alt="Technology Background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>
        <div className="container-editorial relative z-10 text-center">
          <Reveal>
            <span className="eyebrow !text-cream-light/80">Get Started</span>
            <h2 className="mx-auto mt-5 max-w-3xl text-display-lg text-cream-light">
              Your Next Stage of Growth Starts with Smarter Technology.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-cream-light/70">
              Let us explore how AI, automation, and modern digital solutions can transform your business.
            </p>
            <div className="mt-9 flex justify-center">
              <Link href="/contact" className="btn-primary !bg-burgundy hover:!bg-burgundy-deep">Book Your Free Consultation</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}