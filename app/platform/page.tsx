import type { Metadata } from "next";
import { FeatureGrid } from "@/components/feature-grid";
import { CTASection } from "@/components/cta-section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getPlatformFeatures } from "@/lib/content";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Explore SP NET GRAM platform — an enhanced Telegram client with premium memberships, Coins, Gems, organizations, and ecosystem features.",
};

const highlightSections = [
  {
    title: "Enhanced Messaging Experience",
    description:
      "SP NET GRAM enhances the Telegram messaging experience with additional features, customization options, and quality-of-life improvements while leveraging Telegram reliable infrastructure.",
    tag: "Available",
    tagVariant: "success" as const,
  },
  {
    title: "Premium Memberships",
    description:
      "Tiered premium subscriptions with exclusive features, increased limits, custom themes, priority support, and early access to new capabilities.",
    tag: "Beta",
    tagVariant: "warning" as const,
  },
  {
    title: "Coins System",
    description:
      "SP NET GRAM Coins are a digital currency earned through platform engagement. Use Coins to unlock features, participate in the ecosystem, and access premium content.",
    tag: "Beta",
    tagVariant: "warning" as const,
  },
  {
    title: "Gems System",
    description:
      "Gems are SP NET GRAM premium currency for exclusive transactions, premium feature access, gifting, and ecosystem services.",
    tag: "Beta",
    tagVariant: "warning" as const,
  },
  {
    title: "Organizations",
    description:
      "Enterprise-grade organization management. Create teams, set permissions, manage members, and maintain administrative control over your community.",
    tag: "Beta",
    tagVariant: "warning" as const,
  },
  {
    title: "Admin Platform",
    description:
      "Comprehensive administrative infrastructure for user management, content moderation, analytics, and platform oversight.",
    tag: "Coming Soon",
    tagVariant: "outline" as const,
  },
  {
    title: "Ecosystem Expansion",
    description:
      "SP NET GRAM is building a complete ecosystem including the main app, admin panel, and future services and integrations.",
    tag: "Planned",
    tagVariant: "outline" as const,
  },
  {
    title: "Security & Privacy",
    description:
      "Built on Telegram proven security model with additional privacy controls for premium users.",
    tag: "Available",
    tagVariant: "success" as const,
  },
];

export default function PlatformPage() {
  const features = getPlatformFeatures();

  return (
    <>
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Platform
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              SP NET GRAM enhances the Telegram experience with premium
              features, digital currencies, organization tools, and a growing
              ecosystem of services.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FeatureGrid features={features} columns={4} />
        </div>
      </section>

      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {highlightSections.map((section, i) => (
              <Card
                key={i}
                className="p-6 border-border/50 hover:border-border hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-base font-semibold tracking-tight">{section.title}</h3>
                  <Badge variant={section.tagVariant} className="shrink-0">{section.tag}</Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Experience the platform"
        description="Join the beta and try SP NET GRAM enhanced features."
        primaryLabel="Join Beta"
        primaryHref="/beta"
        secondaryLabel="View Development"
        secondaryHref="/development"
      />
    </>
  );
}
