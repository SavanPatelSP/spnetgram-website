import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  Book,
  Sparkles,
  Building2,
  LifeBuoy,
  Code,
  FileText,
  Rocket,
  Shield,
  Download,
  Settings,
  MessageCircle,
  HelpCircle,
  ArrowRight,
  Zap,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Comprehensive documentation for SP NET GRAM. Getting started guides, feature documentation, configuration, troubleshooting, and developer resources.",
};

const docSections = [
  {
    icon: Rocket,
    title: "Getting Started",
    description:
      "Everything you need to start using SP NET GRAM. Download, install, connect your Telegram account, and explore enhanced features in minutes.",
    href: "#getting-started",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Sparkles,
    title: "Premium",
    description:
      "Learn about SP NET GRAM Premium memberships, tiered subscriptions, exclusive features, and how to unlock the full platform experience.",
    href: "#premium",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Building2,
    title: "Organizations",
    description:
      "Set up and manage organizations, teams, roles, permissions, and enterprise-grade community management tools.",
    href: "#organizations",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: LifeBuoy,
    title: "Support",
    description:
      "Troubleshooting guides, FAQ, common issues, and how to get help from the SP NET GRAM support team.",
    href: "/support",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Code,
    title: "Developer API",
    description:
      "Developer documentation for integrating with the SP NET GRAM ecosystem. APIs, SDKs, and integration guides.",
    href: "#developer",
    gradient: "from-zinc-500 to-zinc-600",
    comingSoon: true,
  },
  {
    icon: FileText,
    title: "Release Notes",
    description:
      "Detailed release notes for every SP NET GRAM version, including new features, improvements, and bug fixes.",
    href: "/changelog",
    gradient: "from-sky-500 to-cyan-500",
  },
];

const gettingStarted = [
  {
    step: "01",
    title: "Download SP NET GRAM",
    description:
      "Visit the downloads page and select your platform. SP NET GRAM is available for Android, with Windows, macOS, Linux, and Web coming soon.",
  },
  {
    step: "02",
    title: "Install & Open",
    description:
      "Follow the installation instructions for your device. The app will guide you through the initial setup process.",
  },
  {
    step: "03",
    title: "Connect Telegram",
    description:
      "Log in with your existing Telegram account. SP NET GRAM connects directly to Telegram's infrastructure — your messages and contacts sync automatically.",
  },
  {
    step: "04",
    title: "Explore Enhanced Features",
    description:
      "Discover premium themes, AI-powered tools, Coins and Gems, organization features, and all the enhancements SP NET GRAM provides.",
  },
];

const premiumFeatures = [
  {
    icon: Sparkles,
    title: "Tiered Memberships",
    description:
      "Choose from multiple premium tiers, each unlocking additional features, higher limits, and exclusive capabilities.",
  },
  {
    icon: Shield,
    title: "Priority Support",
    description:
      "Premium members receive priority support with faster response times and dedicated assistance channels.",
  },
  {
    icon: Zap,
    title: "Exclusive Features",
    description:
      "Access advanced customization, enhanced AI tools, increased storage, and premium-only capabilities.",
  },
  {
    icon: Settings,
    title: "Advanced Customization",
    description:
      "Full theme control, custom layouts, advanced notification settings, and personalization options beyond standard Telegram.",
  },
];

const troubleshooting = [
  {
    issue: "App not installing",
    solution:
      "Ensure your device meets the minimum system requirements. On Android, enable installations from unknown sources if required. Check available storage space.",
  },
  {
    issue: "Login issues",
    solution:
      "Verify your Telegram credentials are correct. If using two-factor authentication, ensure you have your authentication key available. Contact support if problems persist.",
  },
  {
    issue: "Messages not syncing",
    solution:
      "Check your internet connection. Try logging out and back in. SP NET GRAM uses Telegram's sync infrastructure, so sync issues are typically network-related.",
  },
  {
    issue: "Feature not working",
    solution:
      "Ensure you are running the latest version of SP NET GRAM. Some features require premium membership. Check the feature documentation for requirements.",
  },
  {
    issue: "Performance issues",
    solution:
      "Clear the app cache, close background applications, and ensure your device has sufficient resources. SP NET GRAM is optimized for performance on modern devices.",
  },
];

export default function DocsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.08] px-3 py-1 text-xs font-medium backdrop-blur-sm">
              <Book className="h-3 w-3 text-blue-300" />
              <span className="text-blue-300 font-medium">Documentation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Documentation
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about SP NET GRAM. From installation
              to advanced features, this documentation covers the complete
              platform.
            </p>
          </div>
        </div>
      </section>

      {/* ── Doc Sections Grid ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {docSections.map((section, i) => {
              const Icon = section.icon;
              const Component = section.href.startsWith("/") ? Link : "a";
              return (
                <ScrollReveal key={section.title} delay={i * 60}>
                  <Component
                    href={section.href}
                    className="block h-full"
                  >
                    <Card className="group p-6 border-border/50 hover:border-border hover:shadow-sm transition-all duration-300 h-full">
                      <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${section.gradient} shadow-lg`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-semibold tracking-tight group-hover:text-foreground transition-colors duration-200">
                        {section.title}
                        {section.comingSoon && (
                          <span className="ml-2 text-xs text-muted-foreground/70 font-normal">
                            (Coming Later)
                          </span>
                        )}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {section.description}
                      </p>
                    </Card>
                  </Component>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Getting Started ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24" id="getting-started">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Getting Started
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Follow these steps to start using SP NET GRAM in minutes.
            </p>
          </ScrollReveal>
          <div className="mx-auto max-w-3xl space-y-6">
            {gettingStarted.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <Card className="p-6 border-border/50 hover:border-border transition-all duration-200">
                  <div className="flex items-start gap-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/50 border border-border/50">
                      <span className="text-sm font-bold text-muted-foreground/70">
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold tracking-tight mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/waitlist"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              <Download className="h-4 w-4" />
              Download SP NET GRAM
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Premium Features ── */}
      <section className="border-t border-border/50 py-24" id="premium">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Premium Features
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Unlock the full SP NET GRAM experience with premium memberships.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2">
            {premiumFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal key={feature.title} delay={i * 80}>
                  <Card className="p-6 border-border/50 hover:border-border transition-all duration-200 h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/50">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold tracking-tight mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/premium"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              View Premium Plans
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Organizations ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24" id="organizations">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Organizations
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                SP NET GRAM provides enterprise-grade organization management.
                Create teams, assign roles, set permissions, and manage your
                community with professional tools designed for scale.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Building2,
                title: "Team Management",
                text: "Create and manage teams with role-based access control, permissions, and administrative tools.",
              },
              {
                icon: Shield,
                title: "Access Control",
                text: "Define granular permissions for team members, moderators, and administrators across your organization.",
              },
              {
                icon: MessageCircle,
                title: "Community Tools",
                text: "Moderation, analytics, member management, and community health tools for organizations of any size.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 80}>
                  <Card className="p-6 border-border/50 hover:border-border transition-all duration-200 h-full text-center">
                    <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/50">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Troubleshooting ── */}
      <section className="border-t border-border/50 py-24" id="troubleshooting">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Troubleshooting
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Common issues and their solutions. If your problem is not listed
              here, contact our support team.
            </p>
          </ScrollReveal>
          <div className="mx-auto max-w-3xl space-y-4">
            {troubleshooting.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <Card className="p-6 border-border/50 hover:border-border transition-all duration-200">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/50">
                      <HelpCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold tracking-tight mb-1">
                        {item.issue}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/support"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Visit Support Center
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Developer API ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24" id="developer">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <Code className="mx-auto h-12 w-12 text-muted-foreground/50 mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Developer API
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                The SP NET GRAM Developer API is currently in development. It
                will provide REST APIs, webhooks, and SDKs for integrating with
                the SP NET GRAM ecosystem. Stay tuned for updates.
              </p>
              <div className="mt-8">
                <Link
                  href="/support#contact-support"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  Get Notified When Available
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        title="Need help?"
        description="Our support team is ready to assist with any questions or issues."
        primaryLabel="Get Support"
        primaryHref="/support"
        secondaryLabel="Join Community"
        secondaryHref="https://t.me/SPNETGRAM"
      />
    </>
  );
}
