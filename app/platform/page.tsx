import type { Metadata } from "next";
import { FeatureGrid } from "@/components/feature-grid";
import { CTASection } from "@/components/cta-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Coins, Gem, Shield, Sparkles, Building2, LayoutDashboard, Globe, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "SPNETGRAM enhances the Telegram experience with premium memberships, Coins, Gems, and more.",
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

export default function PlatformPage() {
  return (
    <>
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
              SPNETGRAM enhances the Telegram experience with premium features, digital currencies,
              organization tools, and a growing ecosystem — all on top of your existing Telegram account.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

      <CTASection
        title="Experience the platform"
        description="Join the beta and try SPNETGRAM's enhanced Telegram experience."
        primaryLabel="Join Beta"
        primaryHref="/beta"
        secondaryLabel="View Development"
        secondaryHref="/development"
      />
    </>
  );
}
