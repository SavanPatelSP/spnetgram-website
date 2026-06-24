import { Hero } from "@/components/hero";
import { FeatureGrid } from "@/components/feature-grid";
import { CTASection } from "@/components/cta-section";
import { ProgressCard } from "@/components/progress-card";
import { NewsroomGrid } from "@/components/newsroom-grid";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  Sparkles,
  CircleDollarSign,
  Gem,
  Building2,
  Shield,
  Globe,
  Monitor,
  Smartphone,
  CheckCircle,
  ArrowRight,
  ArrowDown,
  Layers,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  getPlatformFeatures,
  getNewsroomArticles,
  getStatusMetrics,
} from "@/lib/content";

export default function HomePage() {
  const features = getPlatformFeatures().slice(0, 4);
  const articles = getNewsroomArticles().slice(0, 3);
  const metrics = getStatusMetrics();

  return (
    <>
      <Hero />

      {/* Platform Foundation */}
      <section className="border-t border-border/50 py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 text-xs font-medium tracking-wide uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Platform Foundation
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1]">
              Built on Telegram. Enhanced by SP NET GRAM.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              SP NET GRAM is an independent third-party Telegram client.
              Telegram provides the messaging infrastructure. SP NET GRAM
              focuses on additional platform features, premium services, tools,
              memberships, organizations, and future ecosystem enhancements.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border/50 bg-border/50 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: MessageSquare,
                title: "Telegram Infrastructure",
                desc: "Reliable messaging from Telegram's proven platform.",
              },
              {
                icon: Sparkles,
                title: "Enhanced Experiences",
                desc: "Premium features and quality-of-life improvements.",
              },
              {
                icon: Building2,
                title: "Organization Tools",
                desc: "Enterprise-grade management and administration.",
              },
              {
                icon: Globe,
                title: "Ecosystem Services",
                desc: "Coins, Gems, memberships, and platform expansion.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card p-8 transition-all duration-200 hover:bg-accent/30"
              >
                <item.icon className="h-6 w-6 mb-4 text-foreground" />
                <h3 className="font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="border-t border-border/50 py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 text-xs font-medium tracking-wide uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Platform Features
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1]">
              Everything SP NET GRAM Offers
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              From enhanced messaging to premium services, SP NET GRAM builds on
              Telegram foundation to deliver a superior experience.
            </p>
          </div>
          <FeatureGrid features={features} columns={4} />
          <div className="mt-10 text-center">
            <Link href="/platform">
              <Button variant="outline" size="lg">
                View All Features
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Ecosystem Architecture */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 text-xs font-medium tracking-wide uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Platform Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1]">
              Connected Ecosystem Architecture
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              SP NET GRAM is a growing ecosystem of interconnected products and
              services, each building on the next.
            </p>
          </div>

          {/* Ecosystem Flow */}
          <div className="relative mx-auto max-w-5xl">
            <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-gradient-to-b from-blue-500/20 via-amber-500/20 to-emerald-500/20" />

            <div className="space-y-8 lg:space-y-16">
              {[
                {
                  icon: Monitor,
                  title: "SP NET GRAM Website",
                  role: "Portal & Hub",
                  description:
                    "The central portal for documentation, community, and platform access.",
                  color: "from-blue-500/20 to-blue-600/20",
                  textColor: "text-blue-400",
                  borderColor: "border-blue-500/20",
                  side: "left" as const,
                },
                {
                  icon: Smartphone,
                  title: "SP NET GRAM App",
                  role: "Core Experience",
                  description:
                    "Enhanced Telegram client with premium features, coins, gems, and memberships.",
                  color: "from-indigo-500/20 to-indigo-600/20",
                  textColor: "text-indigo-400",
                  borderColor: "border-indigo-500/20",
                  side: "right" as const,
                },
                {
                  icon: Shield,
                  title: "SP NET Admin Panel",
                  role: "Administration",
                  description:
                    "Administrative control panel for organizations, moderation, and analytics.",
                  color: "from-amber-500/20 to-amber-600/20",
                  textColor: "text-amber-400",
                  borderColor: "border-amber-500/20",
                  side: "left" as const,
                },
                {
                  icon: Layers,
                  title: "Future Services",
                  role: "Expansion",
                  description:
                    "Expanding ecosystem of products, integrations, and platform services.",
                  color: "from-emerald-500/20 to-emerald-600/20",
                  textColor: "text-emerald-400",
                  borderColor: "border-emerald-500/20",
                  side: "right" as const,
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="relative flex items-center gap-8 lg:gap-16"
                >
                  <div className="hidden lg:flex lg:w-1/2 justify-end">
                    {item.side === "left" && (
                      <div className="w-full max-w-md">
                        <div
                          className={`rounded-xl border ${item.borderColor} bg-gradient-to-br ${item.color} p-6 backdrop-blur-sm`}
                        >
                          <item.icon className={`h-8 w-8 mb-3 ${item.textColor}`} />
                          <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                          <p className={`text-sm font-medium ${item.textColor} mt-1`}>{item.role}</p>
                          <p className="text-sm text-muted-foreground/80 mt-2 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    )}
                    {item.side === "right" && <div className="w-full max-w-md" />}
                  </div>

                  <div className="hidden lg:flex relative z-10">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent border border-border/50 text-sm font-mono font-bold text-muted-foreground">
                      {i + 1}
                    </div>
                  </div>

                  <div className="hidden lg:flex lg:w-1/2">
                    {item.side === "right" && (
                      <div className="w-full max-w-md">
                        <div
                          className={`rounded-xl border ${item.borderColor} bg-gradient-to-br ${item.color} p-6 backdrop-blur-sm`}
                        >
                          <item.icon className={`h-8 w-8 mb-3 ${item.textColor}`} />
                          <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                          <p className={`text-sm font-medium ${item.textColor} mt-1`}>{item.role}</p>
                          <p className="text-sm text-muted-foreground/80 mt-2 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    )}
                    {item.side === "left" && <div className="w-full max-w-md" />}
                  </div>

                  {/* Mobile layout */}
                  <div className="lg:hidden w-full">
                    <div
                      className={`rounded-xl border ${item.borderColor} bg-gradient-to-br ${item.color} p-6 backdrop-blur-sm`}
                    >
                      <item.icon className={`h-8 w-8 mb-3 ${item.textColor}`} />
                      <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                      <p className={`text-sm font-medium ${item.textColor} mt-1`}>{item.role}</p>
                      <p className="text-sm text-muted-foreground/80 mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Digital Economy */}
      <section className="border-t border-border/50 py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 text-xs font-medium tracking-wide uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
              Digital Economy
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1]">
              Economy & Value Systems
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Coins, Gems, and premium memberships power the SP NET GRAM
              ecosystem.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="group text-center p-8 border-border/50 hover:border-amber-500/30 hover:shadow-sm transition-all duration-200">
              <CircleDollarSign className="mx-auto h-10 w-10 mb-4 text-amber-400" />
              <Badge variant="warning" className="mb-3">Beta</Badge>
              <h3 className="text-lg font-semibold tracking-tight">Coins</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Digital currency earned through engagement. Unlock features and
                participate in the ecosystem.
              </p>
            </Card>
            <Card className="group text-center p-8 border-border/50 hover:border-blue-500/30 hover:shadow-sm transition-all duration-200">
              <Gem className="mx-auto h-10 w-10 mb-4 text-blue-400" />
              <Badge variant="warning" className="mb-3">Beta</Badge>
              <h3 className="text-lg font-semibold tracking-tight">Gems</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Premium currency for exclusive transactions, features, and
                premium services.
              </p>
            </Card>
            <Card className="group text-center p-8 border-border/50 hover:border-primary/30 hover:shadow-sm transition-all duration-200">
              <Sparkles className="mx-auto h-10 w-10 mb-4 text-foreground" />
              <Badge variant="warning" className="mb-3">Beta</Badge>
              <h3 className="text-lg font-semibold tracking-tight">Premium Memberships</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Tiered subscriptions with escalating benefits, limits, and
                priority support.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Progress */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 text-xs font-medium tracking-wide uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Development Progress
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1]">
              Building in Public
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Track our progress toward the public beta launch with full transparency.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.slice(0, 3).map((metric) => (
              <ProgressCard
                key={metric.label}
                label={metric.label}
                value={metric.value}
                description={metric.description}
                status={metric.status}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/development">
              <Button variant="outline" size="lg">
                View Full Development Progress
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Roadmap Preview */}
      <section className="border-t border-border/50 py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 text-xs font-medium tracking-wide uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              Roadmap
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1]">
              What We Are Building
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              From foundation to global expansion. See exactly where we are and what comes next.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <Card className="p-6 border-border/50 hover:border-emerald-500/30 transition-all duration-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold tracking-tight text-sm">Foundation</h3>
                <Badge variant="success">Completed</Badge>
              </div>
              <p className="text-xs text-muted-foreground">3 milestones</p>
            </Card>
            <Card className="p-6 border-border/50 hover:border-amber-500/30 transition-all duration-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold tracking-tight text-sm">Core Systems</h3>
                <Badge variant="warning">In Progress</Badge>
              </div>
              <p className="text-xs text-muted-foreground">3 milestones</p>
            </Card>
            <Card className="p-6 border-border/50 hover:border-amber-500/30 transition-all duration-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold tracking-tight text-sm">Membership Systems</h3>
                <Badge variant="warning">In Progress</Badge>
              </div>
              <p className="text-xs text-muted-foreground">2 milestones</p>
            </Card>
            <Card className="p-6 border-border/50 hover:border-border transition-all duration-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold tracking-tight text-sm">Admin Infrastructure</h3>
                <Badge variant="outline">Planned</Badge>
              </div>
              <p className="text-xs text-muted-foreground">3 milestones</p>
            </Card>
            <Card className="p-6 border-border/50 hover:border-border transition-all duration-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold tracking-tight text-sm">Platform Expansion</h3>
                <Badge variant="outline">Planned</Badge>
              </div>
              <p className="text-xs text-muted-foreground">2 milestones</p>
            </Card>
            <Card className="p-6 border-border/50 hover:border-border transition-all duration-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold tracking-tight text-sm">Global Expansion</h3>
                <Badge variant="outline">Planned</Badge>
              </div>
              <p className="text-xs text-muted-foreground">3 milestones</p>
            </Card>
          </div>
          <div className="mt-10 text-center">
            <Link href="/roadmap">
              <Button variant="outline" size="lg">
                View Full Roadmap
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsroom */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 text-xs font-medium tracking-wide uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Newsroom
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1]">
              Latest Updates
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Stay informed with product updates, development news, and
              announcements.
            </p>
          </div>
          <NewsroomGrid articles={articles} />
          <div className="mt-10 text-center">
            <Link href="/newsroom">
              <Button variant="outline" size="lg">
                View All News
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Early Access CTA */}
      <section className="border-t border-border/50 py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-accent/30 to-background p-12 sm:p-16 text-center">
            <div className="absolute top-0 right-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/[0.04] blur-3xl" />
            <div className="absolute bottom-0 left-0 h-48 w-48 -translate-x-1/3 translate-y-1/3 rounded-full bg-primary/[0.02] blur-3xl" />
            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 text-xs font-medium tracking-wide uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                Early Access
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1]">
                Be Among The First
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                Join the SP NET GRAM Early Access Program and help shape the
                future of the platform.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/waitlist">
                  <Button variant="primary" size="lg">
                    Join Waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/platform">
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to experience SP NET GRAM?"
        description="Join the beta program and be among the first to experience enhanced Telegram features."
        primaryLabel="Join Beta"
        primaryHref="/beta"
        secondaryLabel="View Development"
        secondaryHref="/development"
      />
    </>
  );
}
