import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  Coins,
  Gem,
  Gift,
  ShoppingBag,
  Star,
  Zap,
  Sparkles,
  TrendingUp,
  Lock,
  Shield,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coins & Gems",
  description:
    "SP NET GRAM digital currency ecosystem. Learn about Coins, Gems, how to earn, spend, and participate in the SP NET GRAM economy.",
};

const earnMethods = [
  {
    icon: Star,
    title: "Daily Engagement",
    description:
      "Log in daily, interact with features, and maintain your streak to earn Coins consistently over time.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Sparkles,
    title: "Community Contributions",
    description:
      "Help others, provide feedback, and contribute to the community. Active members earn Coins as recognition.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Lock,
    title: "Achievements",
    description:
      "Unlock milestones and complete challenges throughout the platform. Each achievement rewards you with Coins.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Zap,
    title: "Beta Testing",
    description:
      "Join the beta program and test new features early. Beta testers earn Coins for their participation and feedback.",
    gradient: "from-purple-500 to-pink-500",
  },
];

const gemUses = [
  {
    icon: Sparkles,
    title: "Premium Features",
    description:
      "Unlock exclusive premium features and capabilities that go beyond the standard experience.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Gift,
    title: "Exclusive Content",
    description:
      "Access special content, themes, and customization options available only through Gems.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: ShoppingBag,
    title: "Gifting",
    description:
      "Send Gems to other users as gifts. Share premium experiences with friends and community members.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: TrendingUp,
    title: "Ecosystem Services",
    description:
      "Access advanced ecosystem services, priority features, and enhanced capabilities across the platform.",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const faqs = [
  {
    q: "What are Coins?",
    a: "Coins are the standard digital currency within the SP NET GRAM ecosystem. They are earned through daily engagement, community contributions, achievements, and beta testing. Coins can be used to access features and participate in the economy.",
  },
  {
    q: "What are Gems?",
    a: "Gems are the premium digital currency in SP NET GRAM. They unlock exclusive features, premium content, gifting capabilities, and access to advanced ecosystem services. Gems provide access to the most valuable parts of the platform.",
  },
  {
    q: "How do I earn Coins?",
    a: "You can earn Coins through daily engagement, community contributions, completing achievements, and participating in the beta program. The more active you are, the more Coins you earn.",
  },
  {
    q: "What is the difference between Coins and Gems?",
    a: "Coins are earned through regular activity and participation, while Gems are the premium currency used for exclusive features and services. Both are integral to the SP NET GRAM economy but serve different purposes.",
  },
  {
    q: "Are Coins and Gems required to use SP NET GRAM?",
    a: "No. SP NET GRAM's core messaging features are free. Coins and Gems enhance your experience with additional features, customization, and premium capabilities — they are entirely optional.",
  },
];

export default function CoinsGemsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/[0.08] px-3 py-1 text-xs font-medium backdrop-blur-sm">
              <Coins className="h-3 w-3 text-amber-300" />
              <span className="text-amber-300 font-medium">Ecosystem</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Coins &amp; Gems
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/70 leading-relaxed max-w-2xl mx-auto">
              A digital currency ecosystem built into SP NET GRAM. Earn Coins
              through engagement, unlock premium experiences with Gems, and
              participate in a growing economy.
            </p>
          </div>
        </div>
      </section>

      {/* ── Coins & Gems Overview ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <ScrollReveal>
              <div className="group card-depth relative overflow-hidden rounded-2xl border border-border/30 bg-card/40 p-8 h-full">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-yellow-500/10 to-amber-600/10 blur-3xl" />
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 shadow-lg">
                  <Coins className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight mb-3">
                  Coins
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  The standard digital currency earned through daily engagement,
                  community contributions, and platform participation. Coins
                  unlock features and let you participate in the SP NET GRAM
                  economy.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Earned Freely", "Daily Rewards", "Feature Access"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium rounded-full px-2.5 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div className="group card-depth relative overflow-hidden rounded-2xl border border-border/30 bg-card/40 p-8 h-full">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-blue-500/10 to-indigo-500/10 blur-3xl" />
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg">
                  <Gem className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight mb-3">
                  Gems
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  The premium digital currency for exclusive features, premium
                  content, and advanced ecosystem services. Gems provide access
                  to the most valuable parts of the SP NET GRAM experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Premium Currency",
                    "Exclusive Access",
                    "Gifting",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium rounded-full px-2.5 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── How to Earn Coins ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              How to Earn Coins
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Multiple ways to earn Coins as you use and contribute to the
              SP NET GRAM platform.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {earnMethods.map((method, i) => {
              const Icon = method.icon;
              return (
                <ScrollReveal key={method.title} delay={i * 80}>
                  <Card className="p-6 border-border/50 hover:border-border hover:shadow-sm transition-all duration-300 h-full">
                    <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${method.gradient} shadow-lg`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-semibold tracking-tight mb-2">
                      {method.title}
                    </h3>
                    <p className="text-xs text-muted-foreground/70 leading-relaxed">
                      {method.description}
                    </p>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How to Use Gems ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              How to Use Gems
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Gems unlock premium experiences and exclusive capabilities across
              the SP NET GRAM ecosystem.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {gemUses.map((use, i) => {
              const Icon = use.icon;
              return (
                <ScrollReveal key={use.title} delay={i * 80}>
                  <Card className="p-6 border-border/50 hover:border-border hover:shadow-sm transition-all duration-300 h-full">
                    <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${use.gradient} shadow-lg`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-semibold tracking-tight mb-2">
                      {use.title}
                    </h3>
                    <p className="text-xs text-muted-foreground/70 leading-relaxed">
                      {use.description}
                    </p>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Premium Integration ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <Shield className="mx-auto h-12 w-12 text-amber-500/70 mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Premium Integration
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Coins and Gems integrate seamlessly with SP NET GRAM Premium
                memberships. Premium subscribers receive enhanced earning rates,
                exclusive Gem rewards, and access to premium-only features that
                combine the best of both systems. Your membership amplifies
                everything the digital economy has to offer.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Economy Vision ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <TrendingUp className="mx-auto h-12 w-12 text-emerald-500/70 mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Economy Vision
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                SP NET GRAM is building an expanding digital economy where
                engagement is rewarded and value flows back to the community.
                As the platform grows, new earning opportunities, spending
                options, and ecosystem services will continue to be introduced —
                creating a sustainable and dynamic currency system for all users.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24" id="faq">
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
        title="Join the SP NET GRAM Economy"
        description="Start earning Coins, unlock premium features with Gems, and participate in the growing SP NET GRAM digital economy."
        primaryLabel="Join Beta"
        primaryHref="/beta"
        secondaryLabel="View Premium"
        secondaryHref="/premium"
      />
    </>
  );
}
