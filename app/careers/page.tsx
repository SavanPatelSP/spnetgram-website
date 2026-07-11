import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  Briefcase,
  Users,
  Rocket,
  Heart,
  Globe,
  Shield,
  Zap,
  Code2,
  Palette,
  BarChart3,
  Headphones,
  GraduationCap,
  ArrowRight,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join SP NET GRAM and help build the future of enhanced communication on Telegram. Explore career opportunities, our culture, and engineering philosophy.",
};

const cultureValues = [
  {
    icon: Rocket,
    title: "Innovation First",
    description:
      "We push the boundaries of what is possible in communication technology. Every team member is empowered to explore new ideas, experiment with approaches, and challenge assumptions.",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description:
      "Great things happen when talented people work together. We foster an environment of openness, respect, and shared purpose where every voice matters.",
  },
  {
    icon: Heart,
    title: "User Obsession",
    description:
      "Every decision we make starts with the user experience. We build products that people love to use every day, and we measure success by user satisfaction.",
  },
  {
    icon: Globe,
    title: "Remote-First Culture",
    description:
      "Work from anywhere in the world. We believe great talent exists everywhere, and we have built our processes, tools, and culture around this belief.",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "We operate with honesty and transparency. Team members have visibility into company direction, decisions, and the reasoning behind them.",
  },
  {
    icon: Zap,
    title: "Ship & Iterate",
    description:
      "We value action over perfection. Ship early, learn from real usage, and continuously improve. Speed and quality are not mutually exclusive.",
  },
];

const benefits = [
  {
    icon: Globe,
    title: "Remote Work",
    description: "Work from anywhere. Flexible hours, async communication, and a results-oriented culture.",
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    description: "Annual budget for courses, conferences, books, and professional development.",
  },
  {
    icon: Zap,
    title: "Latest Tools",
    description: "Access to the best development tools, hardware, and software you need to do your best work.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health benefits and wellness programs to keep you at your best.",
  },
  {
    icon: BarChart3,
    title: "Competitive Compensation",
    description: "Industry-competitive salaries and equity opportunities for all full-time team members.",
  },
  {
    icon: Shield,
    title: "Unlimited PTO",
    description: "We trust you to manage your time. Take the time you need to recharge and stay productive.",
  },
];

const engineering = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description: "We build with clean, maintainable architecture. Code reviews, testing, and documentation are part of the process.",
  },
  {
    icon: Rocket,
    title: "Continuous Delivery",
    description: "Frequent releases with automated testing, staging environments, and rollback capabilities.",
  },
  {
    icon: Shield,
    title: "Security Focus",
    description: "Security is not an afterthought. We build security into every layer of the platform from day one.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven",
    description: "Decisions backed by data. We measure everything that matters and use insights to guide development.",
  },
];

const roles = [
  {
    icon: Code2,
    title: "Software Engineering",
    description: "Build and scale the SP NET GRAM platform across mobile, web, and backend systems.",
    availability: "Future",
  },
  {
    icon: Palette,
    title: "Product Design",
    description: "Craft beautiful, intuitive experiences that make SP NET GRAM a pleasure to use.",
    availability: "Future",
  },
  {
    icon: Globe,
    title: "Infrastructure & DevOps",
    description: "Design and maintain the infrastructure that powers millions of messages and transactions.",
    availability: "Future",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Help users get the most out of SP NET GRAM through exceptional support experiences.",
    availability: "Future",
  },
];

const process = [
  {
    step: "01",
    title: "Application Review",
    description:
      "Submit your application through the appropriate channel. We review every application carefully and respond within two weeks.",
  },
  {
    step: "02",
    title: "Initial Conversation",
    description:
      "A casual conversation to understand your background, interests, and what you are looking for in your next role.",
  },
  {
    step: "03",
    title: "Technical Assessment",
    description:
      "A practical assessment relevant to the role. We value clean thinking and clear communication over trivia and algorithms.",
  },
  {
    step: "04",
    title: "Team Interview",
    description:
      "Meet the team you would be working with. This is a two-way conversation — ask us questions too.",
  },
  {
    step: "05",
    title: "Offer & Onboarding",
    description:
      "Receive your offer and begin a structured onboarding process designed to set you up for success from day one.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/[0.08] px-3 py-1 text-xs font-medium backdrop-blur-sm">
              <Briefcase className="h-3 w-3 text-amber-300" />
              <span className="text-amber-300 font-medium">Careers</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Build the future of
              <br />
              <span className="text-muted-foreground/70">communication</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Join SP NET GRAM and help create the next generation of enhanced
              Telegram experiences. We are building something special, and we
              want talented people to be part of it.
            </p>
          </div>
        </div>
      </section>

      {/* ── Culture ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Our Culture
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              The values that define how we work, build, and grow together.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cultureValues.map((value, i) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={value.title} delay={i * 60}>
                  <Card className="p-8 border-border/50 hover:border-border hover:shadow-sm transition-all duration-300 h-full">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/50">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight mb-3">
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

      {/* ── Benefits ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Benefits &amp; Perks
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              We take care of our team so they can focus on doing their best
              work.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <ScrollReveal key={benefit.title} delay={i * 60}>
                  <Card className="p-6 border-border/50 hover:border-border transition-all duration-200 h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/50">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold tracking-tight mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {benefit.description}
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

      {/* ── Engineering Philosophy ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Engineering Philosophy
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              How we build shapes what we build. Our engineering principles
              guide every technical decision.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2">
            {engineering.map((item, i) => {
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

      {/* ── Open Positions ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Current Openings
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              We are not actively hiring at the moment, but these are the roles
              we anticipate filling as the team grows.
            </p>
          </ScrollReveal>
          <div className="mx-auto max-w-3xl">
            <Card className="text-center py-12 border-border/50 mb-8">
              <Briefcase className="mx-auto h-10 w-10 text-muted-foreground/50 mb-4" />
              <h3 className="text-xl font-semibold tracking-tight mb-2">
                No Open Positions Right Now
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                We are not actively hiring at the moment, but we are always
                interested in connecting with talented individuals. Reach out
                for future opportunities.
              </p>
            </Card>
            <div className="grid gap-4 md:grid-cols-2">
              {roles.map((role, i) => {
                const Icon = role.icon;
                return (
                  <ScrollReveal key={role.title} delay={i * 60}>
                    <Card className="p-6 border-border/50 hover:border-border transition-all duration-200 h-full">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/50">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <h3 className="font-semibold tracking-tight">
                              {role.title}
                            </h3>
                            <span className="shrink-0 text-[10px] font-medium text-muted-foreground/70 bg-accent/50 px-2 py-0.5 rounded-full">
                              {role.availability}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {role.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Application Process ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Application Process
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Our hiring process is designed to be transparent, respectful of
              your time, and informative for both sides.
            </p>
          </ScrollReveal>
          <div className="mx-auto max-w-3xl space-y-6">
            {process.map((item, i) => (
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
        </div>
      </section>

      {/* ── Location ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <MapPin className="mx-auto h-12 w-12 text-muted-foreground/50 mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Remote-First
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                SP NET GRAM is a remote-first company. Our team members work
                from locations around the world. We believe that great talent
                is not limited by geography, and we have built our culture,
                tools, and processes to support distributed collaboration
                effectively.
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
            {[
              {
                q: "Is SP NET GRAM hiring?",
                a: "We are not actively hiring at the moment, but we are building our team and will have openings in the future. Follow us for updates.",
              },
              {
                q: "Can I apply for internships?",
                a: "We do not currently offer internships, but this may change as the team grows. We are always interested in connecting with talented individuals.",
              },
              {
                q: "What is the interview process?",
                a: "Our process includes an application review, initial conversation, technical assessment, team interview, and offer. We aim to be transparent and respectful of your time.",
              },
              {
                q: "Do you offer remote work?",
                a: "Yes. SP NET GRAM is a remote-first company. Team members work from locations around the world with flexible hours.",
              },
              {
                q: "How do I stay informed about openings?",
                a: "Follow us on social media, join our Telegram community, and check this page regularly. We post all open positions here first.",
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
        title="Stay connected"
        description="Follow us for updates on future career opportunities and company news."
        primaryLabel="Join Community"
        primaryHref="https://t.me/SPNETGRAM"
        secondaryLabel="View Company"
        secondaryHref="/company"
      />
    </>
  );
}
