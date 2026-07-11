import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  Building2,
  Eye,
  Shield,
  Zap,
  Target,
  Lightbulb,
  Globe,
  Code2,
  Users,
  Rocket,
  Calendar,
  Heart,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about SP NET GRAM's mission, vision, values, technology philosophy, and the team behind the independent Telegram client by SP NET INC.",
};

const values = [
  {
    icon: Zap,
    title: "Enhancement Over Replacement",
    description:
      "We believe in building on existing infrastructure rather than reinventing it. SP NET GRAM enhances Telegram's proven platform with additional value, creating a richer experience without fragmenting the ecosystem.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "Our community drives our roadmap. We build features that people actually need and want, shaped by real feedback, genuine conversations, and a deep understanding of what matters to users.",
  },
  {
    icon: Shield,
    title: "Privacy & Trust",
    description:
      "We respect user privacy and operate with transparency. SP NET GRAM is built on trust, and we protect that trust in everything we do — from data handling to feature decisions.",
  },
  {
    icon: Eye,
    title: "Continuous Innovation",
    description:
      "SP NET GRAM is never finished. We constantly iterate, improve, and expand the ecosystem with new features, services, and integrations that push the boundaries of what a messaging client can do.",
  },
  {
    icon: Heart,
    title: "User Experience",
    description:
      "Every pixel, every interaction, every feature is designed with the user in mind. We obsess over details that make the difference between a good experience and a great one.",
  },
  {
    icon: Globe,
    title: "Open Ecosystem",
    description:
      "We envision an open, extensible platform where developers, creators, and communities can build upon SP NET GRAM's foundation to create something greater together.",
  },
];

const philosophy = [
  {
    icon: Code2,
    title: "Engineering Excellence",
    description:
      "We write clean, maintainable, and performant code. Every component is built with care, tested thoroughly, and designed to scale as the platform grows.",
  },
  {
    icon: Rocket,
    title: "Rapid Iteration",
    description:
      "We ship frequently and learn from real-world usage. Short development cycles allow us to respond quickly to feedback and continuously improve the product.",
  },
  {
    icon: Target,
    title: "Purpose-Driven Development",
    description:
      "Every feature has a clear purpose. We do not build for the sake of building — we solve real problems for real users and measure success by impact, not volume.",
  },
  {
    icon: Lightbulb,
    title: "Informed Decisions",
    description:
      "Data, user research, and technical analysis guide our decisions. We combine quantitative insights with qualitative understanding to make the right call.",
  },
];

const timeline = [
  {
    year: "2024",
    title: "Foundation",
    description:
      "SP NET INC founded. Vision established for an enhanced Telegram client experience. Initial architecture and core development begins.",
  },
  {
    year: "2025",
    title: "Core Development",
    description:
      "SP NET GRAM enters active development. Enhanced messaging, customization features, and the premium membership system are built. Beta testing program launches.",
  },
  {
    year: "2025",
    title: "Ecosystem Expansion",
    description:
      "Coins and Gems digital currency systems introduced. Organizations and enterprise features developed. AI-powered tools integrated into the platform.",
  },
  {
    year: "2026",
    title: "Public Launch",
    description:
      "SP NET GRAM reaches public availability. Admin platform, advanced analytics, and the full ecosystem suite become accessible to all users.",
  },
];

const goals = [
  "Launch the complete SP NET GRAM ecosystem across all platforms",
  "Build a thriving developer community around the platform",
  "Introduce advanced AI features that genuinely help users",
  "Expand enterprise and organization management capabilities",
  "Establish SP NET GRAM as the preferred enhanced Telegram client",
  "Create sustainable revenue through premium services while keeping core features free",
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.08] px-3 py-1 text-xs font-medium backdrop-blur-sm">
              <Building2 className="h-3 w-3 text-blue-300" />
              <span className="text-blue-300 font-medium">About SP NET INC</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Building the future of
              <br />
              <span className="text-muted-foreground/70">enhanced communication</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/70 leading-relaxed max-w-2xl mx-auto">
              SP NET INC is the company behind SP NET GRAM, an independent
              third-party Telegram client designed to enhance the messaging
              experience through premium features, AI tools, and an expanding
              ecosystem.
            </p>
          </div>
        </div>
      </section>

      <Breadcrumbs />

      {/* ── Mission & Vision ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                  Our Mission
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  To enhance the Telegram experience by providing premium
                  features, organization tools, digital economies, and ecosystem
                  services that empower individuals, communities, and
                  enterprises. We believe messaging should be more than
                  basic — it should be powerful, beautiful, and adaptable to
                  every user&apos;s needs.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                  Our Vision
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  A world where Telegram users have access to a rich ecosystem of
                  enhanced features, premium services, and community tools — all
                  built with privacy, transparency, and user value in mind. We
                  see a future where SP NET GRAM is the definitive way to
                  experience Telegram, offering something for everyone from
                  casual users to enterprise teams.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Why SP NET GRAM Exists ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Why SP NET GRAM Exists
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Telegram is an incredible platform. But we saw an opportunity to
                make it even better. SP NET GRAM was created because we believe
                users deserve more — more customization, more powerful tools,
                more premium experiences, and a richer ecosystem that adapts to
                how they communicate. We are not here to replace Telegram. We
                are here to elevate it.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Enhanced Experience",
                text: "Additional features, customization, and quality-of-life improvements that Telegram users have been asking for.",
              },
              {
                icon: Shield,
                title: "Built on Trust",
                text: "Operating on Telegram's proven infrastructure means users get enhanced features without sacrificing the reliability they depend on.",
              },
              {
                icon: Globe,
                title: "Expanding Ecosystem",
                text: "Beyond messaging — a complete platform with premium memberships, digital currencies, organization tools, and AI-powered services.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 80}>
                  <Card className="p-8 border-border/50 hover:border-border hover:shadow-sm transition-all duration-300 h-full text-center">
                    <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/50">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight mb-3">
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

      {/* ── Values ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16">
              Our Values
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={value.title} delay={i * 60}>
                  <Card className="p-8 border-border/50 hover:border-border hover:shadow-sm transition-all duration-300 h-full">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/50">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Technology Philosophy ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Technology &amp; Development Philosophy
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              How we build shapes what we build. Our engineering principles
              guide every decision.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2">
            {philosophy.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 80}>
                  <Card className="p-6 border-border/50 hover:border-border transition-all duration-200 h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/50">
                        <Icon className="h-5 w-5" />
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
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16">
              Our Journey
            </h2>
          </ScrollReveal>
          <div className="mx-auto max-w-3xl space-y-8">
            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/50 border border-border/50">
                      <Calendar className="h-4 w-4" />
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-border/50 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="text-xs font-medium text-muted-foreground/70 bg-accent/50 px-2.5 py-1 rounded-full">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold tracking-tight mt-3 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16">
              Leadership
            </h2>
          </ScrollReveal>
          <div className="mx-auto max-w-lg">
            <Card className="text-center p-10 border-border/50 hover:border-border transition-all duration-200">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-accent/50 ring-1 ring-border/50">
                <span className="text-3xl font-bold">SP</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Savan Patel</h3>
              <p className="text-lg text-muted-foreground">Founder &amp; Lead Developer</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
                Savan Patel founded SP NET INC with a vision to build technology
                that empowers people. He leads product strategy, architecture,
                and engineering for the SP NET GRAM ecosystem, driving the
                vision from concept to reality.
              </p>
              <Link
                href="/#team"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                View Full Profile
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Future Goals ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Future Goals
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We have ambitious plans for SP NET GRAM. Here is what we are
                working toward.
              </p>
            </div>
          </ScrollReveal>
          <div className="mx-auto max-w-3xl space-y-4">
            {goals.map((goal, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <Card className="p-5 border-border/50 hover:border-border transition-all duration-200">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/50 mt-0.5">
                      <Target className="h-4 w-4" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {goal}
                    </p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
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
            {[
              {
                q: "What is SP NET GRAM?",
                a: "SP NET GRAM is an independent third-party Telegram client developed by SP NET INC. It enhances the Telegram experience with premium features, AI tools, digital currencies, and an expanding ecosystem.",
              },
              {
                q: "Is SP NET GRAM affiliated with Telegram?",
                a: "No. SP NET GRAM is an independent client developed by SP NET INC. It is not affiliated with, endorsed by, or sponsored by Telegram. All Telegram trademarks belong to their respective owners.",
              },
              {
                q: "Who founded SP NET INC?",
                a: "SP NET INC was founded by Savan Patel, who leads product strategy, architecture, and engineering for the SP NET GRAM ecosystem.",
              },
              {
                q: "How does SP NET GRAM make money?",
                a: "SP NET GRAM generates revenue through premium memberships, Coins and Gems digital currencies, and enterprise features. Core messaging features remain free for all users.",
              },
              {
                q: "Is my data safe with SP NET GRAM?",
                a: "SP NET GRAM operates on Telegram's proven infrastructure. We do not store message content and operate with a privacy-first approach. Your data remains under your control.",
              },
            ].map((faq, i) => (
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
        title="Join us on this journey"
        description="Follow SP NET GRAM's development and be part of the community shaping the future of communication."
        primaryLabel="Join Beta"
        primaryHref="/beta"
        secondaryLabel="View Roadmap"
        secondaryHref="/roadmap"
      />
    </>
  );
}
