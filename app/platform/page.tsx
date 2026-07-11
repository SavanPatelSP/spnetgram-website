import * as React from "react";
import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  Coins,
  Gem,
  Shield,
  Sparkles,
  Building2,
  LayoutDashboard,
  Globe,
  MessageCircle,
  Smartphone,
  Monitor,
  Laptop,
  Apple,
  Check,
  X,
  ArrowRight,
  Cpu,
  Database,
  Lock,
  Zap,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "SP NET GRAM enhances the Telegram experience with premium memberships, Coins, Gems, AI tools, organization management, and an expanding ecosystem.",
};

const highlightSections = [
  {
    title: "Enhanced Messaging",
    description: "Additional features, customization, and quality-of-life improvements on top of Telegram's reliable infrastructure.",
    tag: "Available",
    tagVariant: "success" as const,
    icon: MessageCircle,
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "Premium Memberships",
    description: "Tiered subscriptions with exclusive features, increased limits, custom themes, and priority support.",
    tag: "Beta",
    tagVariant: "warning" as const,
    icon: Sparkles,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Coins System",
    description: "Digital currency earned through engagement. Unlock features, participate in the ecosystem, and access premium content.",
    tag: "Beta",
    tagVariant: "warning" as const,
    icon: Coins,
    gradient: "from-yellow-500 to-amber-600",
  },
  {
    title: "Gems System",
    description: "Premium currency for exclusive transactions, premium feature access, gifting, and ecosystem services.",
    tag: "Beta",
    tagVariant: "warning" as const,
    icon: Gem,
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "Organizations",
    description: "Enterprise-grade management. Create teams, set permissions, manage members, and control your community.",
    tag: "Beta",
    tagVariant: "warning" as const,
    icon: Building2,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Admin Platform",
    description: "Comprehensive admin tools for user management, content moderation, analytics, and platform oversight.",
    tag: "Coming Soon",
    tagVariant: "outline" as const,
    icon: LayoutDashboard,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Ecosystem Expansion",
    description: "A complete ecosystem including the main app, admin panel, and future services and integrations.",
    tag: "Planned",
    tagVariant: "outline" as const,
    icon: Globe,
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    title: "Security & Privacy",
    description: "Built on Telegram's proven security model with additional privacy controls for premium users.",
    tag: "Available",
    tagVariant: "success" as const,
    icon: Shield,
    gradient: "from-emerald-500 to-teal-600",
  },
];

const platforms = [
  {
    icon: Smartphone,
    title: "Android",
    status: "Available",
    statusVariant: "success" as const,
    description: "Full-featured SP NET GRAM client for Android devices.",
    requirements: "Android 7.0 or later",
  },
  {
    icon: Monitor,
    title: "Windows",
    status: "Coming Soon",
    statusVariant: "outline" as const,
    description: "Desktop client for Windows with full feature parity.",
    requirements: "Windows 10 or later",
  },
  {
    icon: Laptop,
    title: "macOS",
    status: "Coming Soon",
    statusVariant: "outline" as const,
    description: "Native macOS application optimized for Apple silicon.",
    requirements: "macOS 12 or later",
  },
  {
    icon: Globe,
    title: "Linux",
    status: "Coming Soon",
    statusVariant: "outline" as const,
    description: "Cross-platform Linux client with broad distribution support.",
    requirements: "Ubuntu 20.04+ or equivalent",
  },
  {
    icon: Globe,
    title: "Web",
    status: "Coming Soon",
    statusVariant: "outline" as const,
    description: "Browser-based access for instant use without installation.",
    requirements: "Modern web browser",
  },
];

const techSpecs = [
  {
    icon: Cpu,
    title: "Performance",
    description: "Optimized for speed with minimal resource usage. Smooth animations and instant response times across all features.",
  },
  {
    icon: Lock,
    title: "Encryption",
    description: "End-to-end encryption inherited from Telegram. SP NET GRAM does not intercept or store message content.",
  },
  {
    icon: Database,
    title: "Sync",
    description: "Real-time synchronization across all your devices. Messages, settings, and preferences stay consistent everywhere.",
  },
  {
    icon: Zap,
    title: "Reliability",
    description: "Built on Telegram's proven infrastructure. 99.9% uptime with automatic failover and redundancy.",
  },
];

const comparison = [
  { feature: "Enhanced Messaging", spnetgram: true, telegram: true },
  { feature: "Premium Themes", spnetgram: true, telegram: false },
  { feature: "AI-Powered Tools", spnetgram: true, telegram: false },
  { feature: "Coins & Gems", spnetgram: true, telegram: false },
  { feature: "Organization Management", spnetgram: true, telegram: false },
  { feature: "Admin Dashboard", spnetgram: true, telegram: false },
  { feature: "Advanced Customization", spnetgram: true, telegram: false },
  { feature: "E2E Encryption", spnetgram: true, telegram: true },
  { feature: "Cloud Sync", spnetgram: true, telegram: true },
  { feature: "Groups & Channels", spnetgram: true, telegram: true },
];

export default function PlatformPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.08] px-3 py-1 text-xs font-medium backdrop-blur-sm">
              <MessageCircle className="h-3 w-3 text-blue-300" />
              <span className="text-blue-300 font-medium">Platform</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Everything Telegram has,
              <br />
              <span className="text-muted-foreground/70">plus the extras</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/70 leading-relaxed max-w-2xl mx-auto">
              SP NET GRAM enhances the Telegram experience with premium features, digital currencies,
              organization tools, and a growing ecosystem — all on top of your existing Telegram account.
            </p>
          </div>
        </div>
      </section>

      {/* ── Feature Grid ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Platform Features
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              A comprehensive suite of features designed to enhance every aspect of your Telegram experience.
            </p>
          </ScrollReveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {highlightSections.map((section, i) => {
              const Icon = section.icon;
              const tagColors: Record<string, string> = {
                success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
                warning: "bg-amber-500/10 text-amber-400 border-amber-500/20",
                outline: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
              };
              return (
                <ScrollReveal key={i} delay={i * 50}>
                  <div className="group card-depth relative overflow-hidden rounded-2xl border border-border/30 bg-card/40 p-6">
                    <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${section.gradient}/10 blur-3xl`} />
                    <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${section.gradient} shadow-lg`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-sm font-bold tracking-tight">{section.title}</h3>
                      <span className={`shrink-0 text-[9px] font-semibold rounded-full px-2 py-0.5 border ${tagColors[section.tagVariant]}`}>
                        {section.tag}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground/70 leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Supported Platforms ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Supported Platforms
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              SP NET GRAM is being built for every platform. Start on Android
              and expand to desktop and web as the ecosystem grows.
            </p>
          </ScrollReveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {platforms.map((platform, i) => {
              const Icon = platform.icon;
              const tagColors: Record<string, string> = {
                success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
                outline: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
              };
              return (
                <ScrollReveal key={platform.title} delay={i * 60}>
                  <Card className="p-6 border-border/50 hover:border-border hover:shadow-sm transition-all duration-300 h-full text-center">
                    <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/50">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold tracking-tight mb-1">
                      {platform.title}
                    </h3>
                    <span className={`inline-block text-[10px] font-semibold rounded-full px-2 py-0.5 border mb-3 ${tagColors[platform.statusVariant]}`}>
                      {platform.status}
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                      {platform.description}
                    </p>
                    <p className="text-[10px] text-muted-foreground/50">
                      {platform.requirements}
                    </p>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Technical Specifications ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Technical Specifications
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Built on solid foundations for performance, security, and reliability.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {techSpecs.map((spec, i) => {
              const Icon = spec.icon;
              return (
                <ScrollReveal key={spec.title} delay={i * 80}>
                  <Card className="p-6 border-border/50 hover:border-border transition-all duration-200 h-full text-center">
                    <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/50">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold tracking-tight mb-2">
                      {spec.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {spec.description}
                    </p>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              SP NET GRAM vs Telegram
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              SP NET GRAM builds on Telegram's foundation with additional
              features that enhance the experience.
            </p>
          </ScrollReveal>
          <div className="mx-auto max-w-2xl">
            <Card className="overflow-hidden border-border/50">
              <div className="grid grid-cols-3 gap-px bg-border/30 text-sm">
                <div className="bg-card/60 p-4 font-semibold tracking-tight">
                  Feature
                </div>
                <div className="bg-card/60 p-4 font-semibold tracking-tight text-center">
                  SP NET GRAM
                </div>
                <div className="bg-card/60 p-4 font-semibold tracking-tight text-center">
                  Telegram
                </div>
                {comparison.map((row, i) => (
                  <React.Fragment key={i}>
                    <div className="bg-card/30 p-4 text-muted-foreground">
                      {row.feature}
                    </div>
                    <div className="bg-card/30 p-4 flex justify-center">
                      {row.spnetgram ? (
                        <Check className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground/30" />
                      )}
                    </div>
                    <div className="bg-card/30 p-4 flex justify-center">
                      {row.telegram ? (
                        <Check className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground/30" />
                      )}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ── System Requirements ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                System Requirements
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                SP NET GRAM is designed to run efficiently on modern devices.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                platform: "Android",
                specs: [
                  "Android 7.0 or later",
                  "2 GB RAM minimum",
                  "100 MB available storage",
                  "Internet connection required",
                ],
              },
              {
                platform: "Windows",
                specs: [
                  "Windows 10 or later",
                  "4 GB RAM minimum",
                  "200 MB available storage",
                  "DirectX 11 compatible GPU",
                ],
              },
              {
                platform: "macOS",
                specs: [
                  "macOS 12 or later",
                  "4 GB RAM minimum",
                  "200 MB available storage",
                  "Apple Silicon or Intel",
                ],
              },
            ].map((req, i) => (
              <ScrollReveal key={req.platform} delay={i * 80}>
                <Card className="p-6 border-border/50 hover:border-border transition-all duration-200 h-full">
                  <h3 className="font-semibold tracking-tight mb-4">
                    {req.platform}
                  </h3>
                  <ul className="space-y-2">
                    {req.specs.map((spec, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Experience the platform"
        description="Join the beta and try SP NET GRAM's enhanced Telegram experience today."
        primaryLabel="Join Beta"
        primaryHref="/beta"
        secondaryLabel="View Development"
        secondaryHref="/development"
      />
    </>
  );
}
