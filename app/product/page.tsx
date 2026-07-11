import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  Rocket,
  MessageCircle,
  Sparkles,
  Crown,
  Coins,
  Gem,
  Palette,
  Users,
  Shield,
  Monitor,
  Zap,
  Clock,
  Lock,
  Check,
  ArrowRight,
  Download,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SP NET GRAM",
  description:
    "SP NET GRAM is an independent third-party Telegram client by SP NET INC, offering enhanced messaging, AI tools, premium memberships, and an expanding ecosystem.",
};

const stats = [
  { label: "Uptime", value: "99.9%", icon: Clock },
  { label: "Free Core", value: "100%", icon: Coins },
  { label: "Response", value: "<50ms", icon: Zap },
  { label: "E2E Encrypted", value: "Always", icon: Lock },
];

const whyCards = [
  {
    icon: Sparkles,
    title: "Enhanced Experience",
    description:
      "SP NET GRAM builds on Telegram's reliable infrastructure with additional features, customization options, and quality-of-life improvements that enhance everyday messaging.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Shield,
    title: "Built on Trust",
    description:
      "Operating on Telegram's proven security model with end-to-end encryption. SP NET GRAM does not access, store, or intercept your private messages or data.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Rocket,
    title: "Expanding Ecosystem",
    description:
      "More than a client — a growing ecosystem with premium memberships, digital currencies, AI tools, and community features designed to evolve with its users.",
    gradient: "from-amber-500 to-orange-500",
  },
];

const capabilities = [
  {
    icon: MessageCircle,
    title: "Enhanced Messaging",
    description:
      "Additional features and quality-of-life improvements layered on top of Telegram's core messaging capabilities.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Tools",
    description:
      "Intelligent assistance and automation tools designed to enhance productivity and streamline your messaging experience.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Crown,
    title: "Premium Memberships",
    description:
      "Tiered subscriptions with exclusive features, increased limits, custom themes, and priority support.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Gem,
    title: "Coins & Gems",
    description:
      "Digital currencies earned through engagement. Unlock features, participate in the ecosystem, and access premium content.",
    gradient: "from-yellow-500 to-amber-600",
  },
  {
    icon: Palette,
    title: "Advanced Customization",
    description:
      "Deep personalization options including themes, layouts, and interface tweaks to make the experience truly yours.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Users,
    title: "Community Tools",
    description:
      "Organization management, admin dashboards, and community features for teams and groups of all sizes.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    description:
      "Built on Telegram's proven security model with additional privacy controls and end-to-end encryption.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Monitor,
    title: "Cross-Platform",
    description:
      "Available on Android with Windows, macOS, Linux, and web clients planned as the ecosystem expands.",
    gradient: "from-sky-500 to-cyan-500",
  },
];

const featureCategories = [
  {
    title: "Communication",
    features: [
      "Enhanced messaging with additional features",
      "HD media sharing and larger file support",
      "Advanced search and conversation tools",
      "Custom notification preferences",
    ],
  },
  {
    title: "Productivity",
    features: [
      "AI-powered writing and summarization tools",
      "Smart replies and quick actions",
      "Task management and reminders",
      "Cloud-synced preferences and settings",
    ],
  },
  {
    title: "Ecosystem",
    features: [
      "Coins earned through daily engagement",
      "Gems for premium transactions",
      "Premium memberships with exclusive perks",
      "Organization and team management",
    ],
  },
  {
    title: "Platform",
    features: [
      "Cross-platform availability",
      "Real-time sync across devices",
      "Lightweight and performant design",
      "Regular updates and feature releases",
    ],
  },
];

const faqs = [
  {
    q: "What is SP NET GRAM?",
    a: "SP NET GRAM is an independent third-party Telegram client developed by SP NET INC. It builds on Telegram's core messaging infrastructure with additional features like AI tools, premium memberships, digital currencies, and enhanced customization options.",
  },
  {
    q: "Is SP NET GRAM affiliated with Telegram?",
    a: "No. SP NET GRAM is developed by SP NET INC and is not affiliated with, endorsed by, or connected to Telegram FZ-LLC or Telegram Messenger Inc. It is an independent client that connects to Telegram's API.",
  },
  {
    q: "Is SP NET GRAM safe to use?",
    a: "SP NET GRAM operates on Telegram's proven security model with end-to-end encryption. The client does not access, store, or intercept your private messages. Your account security is maintained through Telegram's authentication system.",
  },
  {
    q: "How much does SP NET GRAM cost?",
    a: "SP NET GRAM's core messaging features are completely free. Optional premium memberships, Coins, and Gems provide additional features and capabilities for users who want an enhanced experience.",
  },
  {
    q: "Which platforms are supported?",
    a: "SP NET GRAM is currently available on Android. Windows, macOS, Linux, and web clients are planned as the ecosystem expands. The platform is designed to eventually offer full coverage across all major devices.",
  },
];

export default function ProductPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.08] px-3 py-1 text-xs font-medium backdrop-blur-sm">
              <Rocket className="h-3 w-3 text-blue-300" />
              <span className="text-blue-300 font-medium">Product</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              SP NET GRAM
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/70 leading-relaxed max-w-2xl mx-auto">
              An independent third-party Telegram client by SP NET INC, offering
              enhanced messaging, AI tools, premium memberships, and an expanding
              ecosystem — all built on Telegram&apos;s trusted foundation.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="https://t.me/SPNETGRAM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:shadow-blue-500/30 hover:brightness-110"
              >
                <Download className="h-4 w-4" />
                Download
              </Link>
              <Link
                href="#capabilities"
                className="inline-flex items-center gap-2 rounded-lg border border-border/50 px-6 py-3 text-sm font-medium text-foreground/80 transition-all duration-200 hover:border-border hover:text-foreground"
              >
                Explore Features
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <ScrollReveal key={stat.label} delay={i * 60}>
                  <div className="text-center">
                    <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/50">
                      <Icon className="h-5 w-5 text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground/70 mt-1">
                      {stat.label}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why SP NET GRAM ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Why SP NET GRAM
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              A purpose-built client that extends Telegram with features designed
              for the modern messaging experience.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {whyCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <ScrollReveal key={card.title} delay={i * 80}>
                  <Card className="p-8 border-border/50 hover:border-border hover:shadow-sm transition-all duration-300 h-full">
                    <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient} shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Key Capabilities ── */}
      <section id="capabilities" className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Key Capabilities
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              A comprehensive set of features that enhance every aspect of the
              Telegram experience.
            </p>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <ScrollReveal key={cap.title} delay={i * 50}>
                  <Card className="p-6 border-border/50 hover:border-border hover:shadow-sm transition-all duration-300 h-full">
                    <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${cap.gradient} shadow-lg`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-sm font-bold tracking-tight mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-muted-foreground/70 leading-relaxed">
                      {cap.description}
                    </p>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Feature Categories ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Feature Categories
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Organized feature sets that cover communication, productivity,
              ecosystem, and platform capabilities.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featureCategories.map((category, i) => (
              <ScrollReveal key={category.title} delay={i * 80}>
                <Card className="p-6 border-border/50 hover:border-border transition-all duration-200 h-full">
                  <h3 className="font-semibold tracking-tight mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {category.features.map((feature, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Security & Privacy ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <Shield className="mx-auto h-12 w-12 text-emerald-500/70 mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Security &amp; Privacy
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                SP NET GRAM operates on Telegram&apos;s proven security model.
                Your messages are protected by end-to-end encryption, and the
                client does not access, store, or intercept your private data.
                Account authentication is handled directly through Telegram&apos;s
                secure login system, ensuring your credentials remain safe at
                all times.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-border/50 py-24" id="faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>
          <div className="mx-auto max-w-3xl space-y-6">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <Card className="p-6 border-border/50">
                  <h3 className="font-semibold tracking-tight mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Experience SP NET GRAM"
        description="Download the client, explore the features, and see how SP NET GRAM enhances your Telegram experience."
        primaryLabel="Download SP NET GRAM"
        primaryHref="https://t.me/SPNETGRAM"
        secondaryLabel="View Platform"
        secondaryHref="/platform"
      />
    </>
  );
}
