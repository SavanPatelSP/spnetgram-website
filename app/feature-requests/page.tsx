import type { Metadata } from "next";
import {
  Lightbulb,
  Send,
  MessageCircle,
  Hammer,
  FileText,
  Target,
  Gauge,
  Users,
  CheckCircle2,
  Zap,
  Crown,
  Monitor,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Breadcrumbs } from "@/components/breadcrumbs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Feature Requests",
  description:
    "Request new features for SP NET GRAM. Share your ideas, vote on community suggestions, and help shape the future of the platform.",
};

const howItWorks = [
  {
    icon: Send,
    title: "Submit",
    description:
      "Share your feature idea with a clear description, use case, and any supporting details. The more context you provide, the better we can evaluate your request.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: MessageCircle,
    title: "Discuss",
    description:
      "Engage with the community and our team. Share feedback, refine ideas together, and help prioritize features that matter most to users.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Hammer,
    title: "Build",
    description:
      "Top-voted and well-scoped features enter our development pipeline. We share progress updates and release features based on community input.",
    gradient: "from-amber-500 to-orange-500",
  },
];

const goodRequest = [
  {
    icon: FileText,
    title: "Clear Description",
    description:
      "Explain the feature in simple terms. What should it do? How should it work? Clear descriptions help us understand and evaluate your idea quickly.",
  },
  {
    icon: Target,
    title: "Use Case",
    description:
      "Describe the problem this feature solves. Understanding the use case helps us prioritize and design solutions that truly address user needs.",
  },
  {
    icon: Gauge,
    title: "Feasibility",
    description:
      "Consider whether the feature is realistic given the platform scope. Ideas that align with SP NET GRAMs vision and technical capabilities are more likely to be implemented.",
  },
  {
    icon: Users,
    title: "Community Support",
    description:
      "Features with strong community support and upvotes get prioritized. Share your idea with others who would benefit from it to build momentum.",
  },
];

const priorities = [
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimizing app speed, reducing memory usage, and improving overall performance across all devices and network conditions.",
  },
  {
    icon: Sparkles,
    title: "AI Features",
    description:
      "Expanding AI-powered tools including smart replies, translation, content generation, and intelligent automation features.",
  },
  {
    icon: Crown,
    title: "Premium",
    description:
      "Enhancing premium membership benefits, adding exclusive features, and improving the overall premium experience.",
  },
  {
    icon: Monitor,
    title: "Cross-Platform",
    description:
      "Improving feature parity across Android, iOS, Desktop, and Web platforms for a consistent experience everywhere.",
  },
];

const faqs = [
  {
    q: "How do I submit a feature request?",
    a: "You can submit feature requests through our Telegram group, GitHub discussions, or by contacting our support team. Include a clear description, use case, and any mockups or examples.",
  },
  {
    q: "How are features prioritized?",
    a: "We consider community votes, technical feasibility, alignment with our vision, and overall user impact. Features with strong community support and clear use cases are prioritized first.",
  },
  {
    q: "Will my feature request be implemented?",
    a: "We cannot guarantee implementation of every request, but we review all suggestions carefully. Features that align with SP NET GRAMs direction and have strong community support have the best chance of being built.",
  },
];

export default function FeatureRequestsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1 text-xs font-medium backdrop-blur-sm">
              <Lightbulb className="h-3 w-3 text-emerald-300" />
              <span className="text-emerald-300 font-medium">Community</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Feature Requests
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Your ideas shape the future of SP NET GRAM. Submit feature
              requests, vote on community suggestions, and help us build what
              matters most.
            </p>
          </div>
        </div>
      </section>

      <Breadcrumbs />

      {/* ── How It Works ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              How It Works
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              From idea to implementation, here is how feature requests move
              through our process.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {howItWorks.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.title} delay={i * 80}>
                  <Card className="p-8 border-border/50 hover:border-border hover:shadow-sm transition-all duration-300 h-full">
                    <div
                      className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${step.gradient} shadow-lg`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What Makes a Good Request ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              What Makes a Good Request
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Well-crafted requests have a higher chance of being prioritized
              and implemented.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {goodRequest.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 80}>
                  <Card className="p-6 border-border/50 hover:border-border hover:shadow-sm transition-all duration-300 h-full">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/50">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Submission Guidelines ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500/70 mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Submission Guidelines
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                When submitting a feature request, include a descriptive title, a
                detailed explanation of the feature, the problem it solves,
                expected behavior, and any mockups or examples. Mention whether
                you would be willing to help test the feature. The more context
                and detail you provide, the easier it is for our team to
                evaluate and prioritize your request.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Current Priorities ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16">
              Current Priorities
            </h2>
          </ScrollReveal>
          <div className="mx-auto max-w-3xl space-y-4">
            {priorities.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 80}>
                  <Card className="p-6 border-border/50 hover:border-border transition-all duration-200">
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
        title="Join the SP NET GRAM community"
        description="Share your ideas, connect with other users, and help shape the future of SP NET GRAM."
        primaryLabel="Join Community"
        primaryHref="/community"
        secondaryLabel="View Roadmap"
        secondaryHref="/roadmap"
      />
    </>
  );
}
