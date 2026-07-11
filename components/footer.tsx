import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { footerSections, siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.04] bg-gradient-to-b from-transparent to-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Top section with brand */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          <div className="max-w-sm">
            <Link href="/" className="group inline-flex items-center gap-2.5">
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/group59.png"
                  alt="SP NET GRAM"
                  fill
                  className="object-contain"
                  sizes="40px"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight leading-tight">
                  SP NET GRAM
                </span>
                <span className="text-[8px] font-medium text-muted-foreground/40 tracking-widest uppercase leading-tight">
                  By SP NET INC
                </span>
              </div>
            </Link>
            <p className="mt-5 text-sm text-muted-foreground/60 leading-relaxed">
              Speed, privacy, AI, and premium features — all in one platform. Built for communities,
              creators, and businesses.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Speed", "Privacy", "AI", "Premium"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-[10px] font-medium text-muted-foreground/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="flex items-start gap-2">
            <Link
              href="/waitlist"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 shine"
            >
              <Sparkles className="h-4 w-4" />
              Download SP NET GRAM
            </Link>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/50">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground/60 transition-colors duration-200 hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/[0.04] pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground/50">
            &copy; {currentYear} {siteConfig.name}. All Rights Reserved. SP NET INC.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-muted-foreground/50 hover:text-foreground/70 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground/50 hover:text-foreground/70 transition-colors">
              Terms
            </Link>
            <Link href="/cookies" className="text-xs text-muted-foreground/50 hover:text-foreground/70 transition-colors">
              Cookies
            </Link>
            <Link href="/support" className="text-xs text-muted-foreground/50 hover:text-foreground/70 transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 rounded-xl border border-white/[0.04] bg-white/[0.02] p-5">
          <p className="text-[10px] text-muted-foreground/40 leading-relaxed">
            SP NET GRAM is an independent communication platform. All trademarks, including product names and logos,
            are the property of their respective owners. SP NET GRAM provides enhanced features, AI services,
            premium memberships, and ecosystem capabilities built on proprietary infrastructure.
          </p>
        </div>
      </div>
    </footer>
  );
}
