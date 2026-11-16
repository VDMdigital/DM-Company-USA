"use client";
import { useState } from "react";
import Image from "next/image";
import { services } from "@/lib/data/services";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
    const [status, setStatus] = useState<Status>("idle");
    const [errors, setErrors] = useState<Record<string, string>>({});

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form) as any);
        const newErrors: Record<string, string> = {};
        if (!data.name?.trim()) newErrors.name = "Please enter your name.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || "")) newErrors.email = "Please enter a valid email.";
        if (!data.company?.trim()) newErrors.company = "Please enter your company name.";
        if (!data.service) newErrors.service = "Please select a service.";
        if (!data.details || data.details.length < 20) newErrors.details = "Please share at least a sentence about your project.";
        if (data.honeypot) { setStatus("error"); return; }
        if (Object.keys(newErrors).length) { setErrors(newErrors); return; }

        setErrors({});
        setStatus("submitting");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error();
            setStatus("success");
            form.reset();
        } catch {
            setStatus("error");
        }
    }

    return (
        <>
            {/* HERO WITH BACKGROUND IMAGE */}
            <section className="relative bg-charcoal py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2000&auto=format&fit=crop"
                        alt="Contact Background"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/40" />
                </div>
                <div className="container-editorial relative z-10">
                    <span className="eyebrow !text-burgundy">Contact Us</span>
                    <h1 className="mt-4 max-w-4xl text-display-lg text-cream-light">
                        Book a Free Consultation.
                    </h1>
                    <p className="prose-editorial mt-6 text-lg text-cream-light/80">
                        Tell us about your business and where you did like to improve. We'll follow up within one business day with initial thoughts and next steps.
                    </p>
                </div>
            </section>

            {/* FORM SECTION WITH IMAGE */}
            <section className="bg-cream-light py-20 lg:py-28">
                <div className="container-editorial grid gap-14 lg:grid-cols-2">
                    {/* Left Side - Info & Image */}
                    <div>
                        <h2 className="text-display-md">Let us talk about your project.</h2>
                        <p className="prose-editorial mt-4">
                            We work with ambitious businesses across the United States to build smarter, more efficient digital systems.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div>
                                <span className="text-sm font-semibold text-charcoal">Email:</span>{" "}
                                <a href="mailto:hello@your-domain.com" className="text-charcoal/70 hover:text-burgundy">hello@your-domain.com</a>
                            </div>
                            <div>
                                <span className="text-sm font-semibold text-charcoal">Location:</span>{" "}
                                <span className="text-charcoal/70">United States</span>
                            </div>
                        </div>

                        <div className="mt-10 relative h-[300px] w-full rounded-2xl overflow-hidden shadow-lift">
                            <Image
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
                                alt="Our Office"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="card p-6 lg:p-10 bg-white">
                        {status === "success" && (
                            <div role="status" className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                                Thank you — your message has been received. We will be in touch shortly.
                            </div>
                        )}
                        {status === "error" && (
                            <div role="alert" className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                                Something went wrong. Please try again, or email us directly.
                            </div>
                        )}
                        <form onSubmit={onSubmit} noValidate>
                            <div className="grid gap-5 sm:grid-cols-2">
                                <Field label="Name" name="name" required error={errors.name} />
                                <Field label="Business Email" name="email" type="email" required error={errors.email} />
                                <Field label="Company" name="company" required error={errors.company} />
                                <Field label="Phone (optional)" name="phone" type="tel" />
                            </div>
                            <div className="mt-5">
                                <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-charcoal">Service of interest</label>
                                <select id="service" name="service" required className="w-full rounded-md border border-beige bg-white px-4 py-3 text-sm focus:border-burgundy focus:outline-none">
                                    <option value="">Select a service…</option>
                                    {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
                                    <option value="Other">Other / Not sure yet</option>
                                </select>
                                {errors.service && <p className="mt-1 text-xs text-red-600">{errors.service}</p>}
                            </div>
                            <div className="mt-5">
                                <label htmlFor="details" className="mb-1.5 block text-sm font-medium text-charcoal">Project details</label>
                                <textarea id="details" name="details" rows={5} required className="w-full rounded-md border border-beige bg-white px-4 py-3 text-sm focus:border-burgundy focus:outline-none" placeholder="What are you trying to solve or improve?" />
                                {errors.details && <p className="mt-1 text-xs text-red-600">{errors.details}</p>}
                            </div>
                            <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                            <button type="submit" disabled={status === "submitting"} className="btn-primary mt-6 w-full disabled:opacity-60">
                                {status === "submitting" ? "Sending…" : "Send Message"}
                            </button>
                            <p className="mt-3 text-xs text-charcoal/50">By submitting, you agree to be contacted about your inquiry.</p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

function Field({ label, name, type = "text", required, error }: { label: string; name: string; type?: string; required?: boolean; error?: string }) {
    return (
        <div>
            <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-charcoal">{label}</label>
            <input id={name} name={name} type={type} required={required} className="w-full rounded-md border border-beige bg-white px-4 py-3 text-sm focus:border-burgundy focus:outline-none" />
            {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
        </div>
    );
}