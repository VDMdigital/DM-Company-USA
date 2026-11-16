import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Aurelius AI — AI Automation & Technology Agency",
    template: "%s | Aurelius AI",
  },
  description: "We help ambitious US businesses harness AI, intelligent automation, and modern technology to simplify operations, generate leads, and accelerate growth.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Aurelius AI — AI Automation & Technology Agency",
    description: "Premium AI automation, custom software, and growth technology for US businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurelius AI — AI Automation & Technology Agency",
    description: "AI, automation, and modern technology built around your business goals.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${jakarta.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className="bg-cream-light text-charcoal font-sans antialiased"
        suppressHydrationWarning
      >
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}