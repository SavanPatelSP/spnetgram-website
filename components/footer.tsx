import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Zap,
  Shield,
  Bot,
  Gem,
  Palette,
  Users,
  Smartphone,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import {
  footerSections,
  footerFeatures,
  footerEmails,
  siteConfig,
} from "@/config/site";
import { FooterSocialLinks } from "@/components/footer-social-links";
import { FooterEmailCard } from "@/components/footer-email-card";

const featureIcons = [
  Zap,
  Shield,
  Bot,
  Gem,
  Palette,
  Users,
  Smartphone,
  RefreshCw,
];

const featureIconsMotion = [
  "group-hover:translate-y-[-2px]",
  "group-hover:translate-x-[1px]",
  "group-hover:rotate-6",
  "group-hover:scale-110",
  "group-hover:-rotate-3",
  "group-hover:translate-y-[-1px]",
  "group-hover:rotate-12",
  "group-hover:scale-110",
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.04] bg-gradient-to-b from-transparent to-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* ── Brand + Description + Download ── */}
        <div className="flex flex-col items-center gap-8 mb-16 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-lg text-center lg:text-left">
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
            <p className="mt-5 text-sm text-muted-foreground/60 leading-relaxed max-w-md">
              {siteConfig.description}
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/waitlist"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 shine"
            >
              <Sparkles className="h-4 w-4" />
              Download SP NET GRAM
            </Link>
          </div>
        </div>

        {/* ── Feature Highlights ── */}
        <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {footerFeatures.map((feature, i) => {
            const Icon = featureIcons[i];
            const iconMotion = featureIconsMotion[i];
            return (
              <div
                key={feature.title}
                className="group flex flex-col items-center text-center gap-3 rounded-2xl border border-white/[0.04] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.12] hover:bg-white/[0.04] hover:shadow-[0_4px_20px_rgba(255,255,255,0.03)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B0B0F] border border-white/[0.06] shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:border-white/[0.12] group-hover:shadow-[0_4px_16px_rgba(255,255,255,0.04)]">
                  <Icon className={`h-4 w-4 text-white transition-transform duration-300 ${iconMotion}`} />
                </div>
                <div>
                  <span className="text-xs font-semibold text-foreground/80 leading-tight block mb-1">
                    {feature.title}
                  </span>
                  <span className="text-[11px] text-muted-foreground/50 leading-relaxed block">
                    {feature.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Links Grid ── */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-4">
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

        {/* ── Emails Section ── */}
        <div className="mt-14 border-t border-white/[0.04] pt-10">
          <h3 className="mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/50 text-center lg:text-left">
            Emails
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {footerEmails.map((item) => (
              <FooterEmailCard
                key={item.title}
                title={item.title}
                email={item.email}
              />
            ))}
          </div>
        </div>

        {/* ── Social Links Section ── */}
        <div className="mt-10 border-t border-white/[0.04] pt-8">
          <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/50 text-center">
            Connect With Us
          </h3>
          <FooterSocialLinks />
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-10 flex flex-col items-center gap-6 border-t border-white/[0.04] pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground/50">
            &copy; 2026 SP NET GRAM. All Rights Reserved. SP NET INC.
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
            <Link href="/contact" className="text-xs text-muted-foreground/50 hover:text-foreground/70 transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* ── Legal Notice Card ── */}
        <div className="mt-8 rounded-2xl border border-white/[0.06] bg-[#0B0B0F]/80 backdrop-blur-sm shadow-[0_1px_8px_rgba(0,0,0,0.3)] p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_2px_20px_rgba(255,255,255,0.02)] hover:border-white/[0.08]">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.06]">
              <ShieldCheck className="h-3.5 w-3.5 text-white/60" />
            </div>
            <h3 className="text-xs font-semibold text-foreground/80 tracking-wide">
              Third-Party Notice
            </h3>
          </div>
          <div className="space-y-3 text-[11px] text-muted-foreground/50 leading-[1.8]">
            <p>
              SP NET GRAM is an independent third-party Telegram client developed by SP NET INC.
              It enhances the Telegram experience through thoughtfully designed client-side features,
              AI-powered services, premium memberships, productivity tools, advanced customization,
              and an expanding ecosystem developed by SP NET INC.
            </p>
            <p>
              SP NET GRAM operates independently and focuses on delivering an improved client
              experience while remaining compatible with the Telegram ecosystem. Telegram and all
              related trademarks, product names, logos, and brand assets are the property of
              their respective owners.
            </p>
            <p>
              SP NET GRAM is not affiliated with, endorsed by, sponsored by, or officially
              associated with Telegram or its owners. Any references to Telegram are solely
              for the purpose of describing compatibility with the Telegram platform.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
