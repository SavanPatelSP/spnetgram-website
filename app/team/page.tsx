import type { Metadata } from "next";
import { TestimonialsSection } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Card } from "@/components/ui/card";
import {
  Users,
  Rocket,
  Heart,
  Shield,
  Globe,
  Code2,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet the team behind SP NET GRAM. Learn about the people building the next generation of enhanced Telegram experiences at SP NET INC.",
};

const cultureValues = [
  {
    icon: Rocket,
    title: "Innovation",
    description:
      "We challenge conventions and explore new possibilities in communication technology.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Every team member is deeply committed to building something meaningful and impactful.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We operate with honesty, transparency, and respect for our users and each other.",
  },
  {
    icon: Globe,
    title: "Impact",
    description:
      "We measure our success by the positive difference we make in people's daily communication.",
  },
];

const principles = [
  {
    icon: Code2,
    title: "Craft Over Speed",
    description:
      "We take pride in building things well. Quality code, thoughtful design, and careful architecture are non-negotiable.",
  },
  {
    icon: Users,
    title: "Small Team, Big Vision",
    description:
      "A focused, talented team can achieve extraordinary things. We stay lean, move fast, and punch above our weight.",
  },
  {
    icon: Globe,
    title: "User-Driven",
    description:
      "Our users are our compass. Every feature, every decision starts with understanding what people actually need.",
  },
  {
    icon: Briefcase,
    title: "Ownership",
    description:
      "We give team members autonomy and ownership. When you own a problem, you own the solution.",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.08] px-3 py-1 text-xs font-medium backdrop-blur-sm">
              <Users className="h-3 w-3 text-blue-300" />
              <span className="text-blue-300 font-medium">Our Team</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              The people behind
              <br />
              <span className="text-muted-foreground/70">SP NET GRAM</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/70 leading-relaxed max-w-2xl mx-auto">
              A dedicated team building the next generation of enhanced
              Telegram experiences. Meet the people who make SP NET GRAM
              possible.
            </p>
          </div>
        </div>
      </section>

      <Breadcrumbs />

      {/* ── Team Profiles ── */}
      <TestimonialsSection />

      {/* ── Culture ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Our Culture
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              The values that define how we work and what we stand for.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {cultureValues.map((value, i) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={value.title} delay={i * 80}>
                  <Card className="p-6 border-border/50 hover:border-border hover:shadow-sm transition-all duration-300 h-full text-center">
                    <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/50">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold tracking-tight mb-2">
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

      {/* ── Engineering Principles ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              How We Work
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              The principles that guide our development culture.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2">
            {principles.map((item, i) => {
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

      {/* ── Growing Together ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <Users className="mx-auto h-12 w-12 text-muted-foreground/50 mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Growing Together
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                SP NET GRAM started with a single founder and a bold vision.
                As the platform grows, so does the team. We are always looking
                for talented, passionate individuals who want to be part of
                something meaningful. Check our{" "}
                <Link
                  href="/careers"
                  className="text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors"
                >
                  careers page
                </Link>{" "}
                for current opportunities.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        title="Join the team"
        description="We are building something special. If you are passionate about technology and want to make an impact, we would love to hear from you."
        primaryLabel="View Careers"
        primaryHref="/careers"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
