import type { Metadata } from "next";
import {
  AlertTriangle,
  FileText,
  ListChecks,
  ArrowRightLeft,
  Monitor,
  CheckCircle2,
  MessageSquare,
  Mail,
  Github,
  Clock,
  Search,
  Wrench,
  Rocket,
  ChevronRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Report a Bug",
  description:
    "Report bugs and issues in SP NET GRAM. Help us improve the platform by providing detailed bug reports with steps to reproduce and environment details.",
};

const guidelines = [
  {
    icon: FileText,
    title: "Describe the Issue",
    description:
      "Provide a clear and concise summary of what went wrong. Include what you were doing when the bug occurred and what you expected to happen instead.",
  },
  {
    icon: ListChecks,
    title: "Steps to Reproduce",
    description:
      "List the exact steps needed to reproduce the bug. The more detailed your steps, the faster our team can identify and fix the issue.",
  },
  {
    icon: ArrowRightLeft,
    title: "Expected vs Actual",
    description:
      "Clearly state what you expected to happen and what actually happened. This helps the development team understand the scope of the problem.",
  },
  {
    icon: Monitor,
    title: "Include Environment Info",
    description:
      "Share your device model, operating system version, and SP NET GRAM version. Environment details help us narrow down platform-specific issues.",
  },
];

const requiredInfo = [
  "Device model and manufacturer",
  "Operating system version (e.g., Android 14, iOS 17)",
  "SP NET GRAM app version number",
  "Clear description of the issue",
  "Step-by-step reproduction instructions",
  "Screenshots or screen recordings if applicable",
];

const reportOptions = [
  {
    icon: MessageSquare,
    title: "Telegram Group",
    description:
      "Get quick help and report bugs directly in our Telegram group. Our community and team members are active and ready to assist.",
    href: "https://t.me/SPNETGRAM_CHAT",
    label: "Join Group",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Mail,
    title: "Support Email",
    description:
      "Send a detailed bug report to our support email. Ideal for sensitive issues or when you need to include attachments and detailed logs.",
    href: "mailto:support.spnetgram@sp-net.in",
    label: "Send Email",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Github,
    title: "GitHub Issues",
    description:
      "Open an issue on our GitHub repository. Best for technical bugs where you can provide detailed logs, stack traces, and code context.",
    href: "https://github.com/SP-NET-GRAM/spnetgram/issues",
    label: "Open Issue",
    gradient: "from-purple-500 to-pink-500",
  },
];

const processSteps = [
  {
    icon: CheckCircle2,
    title: "Acknowledgment",
    description:
      "We acknowledge all bug reports within 24 hours. You will receive a confirmation that your report has been received and is being reviewed.",
  },
  {
    icon: Search,
    title: "Triage",
    description:
      "Our team evaluates the severity and impact of each report. Critical issues are prioritized and assigned immediately for investigation.",
  },
  {
    icon: Wrench,
    title: "Fix",
    description:
      "Once identified, our developers work on a fix. We keep you updated on the progress and may reach out for additional details if needed.",
  },
  {
    icon: Rocket,
    title: "Release",
    description:
      "Fixes are included in the next available update. Critical patches may be released as emergency updates to resolve urgent issues quickly.",
  },
];

const faqs = [
  {
    q: "How quickly are bugs addressed?",
    acknowledgment: "Response time varies by severity.",
    a: "Critical bugs affecting many users are addressed within 24 to 48 hours. Minor issues are typically resolved in the next scheduled release. We prioritize fixes based on severity and user impact.",
  },
  {
    q: "Will I be notified when my bug is fixed?",
    a: "If you report a bug through our support email or Telegram group, we will notify you when a fix is released. For GitHub issues, you will receive updates directly on the issue thread.",
  },
  {
    q: "Can I report security vulnerabilities?",
    a: "For security-related issues, please email us directly at support.spnetgram@sp-net.in with the subject line containing 'Security'. Do not post security vulnerabilities in public channels.",
  },
];

export default function ReportBugPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/[0.08] px-3 py-1 text-xs font-medium backdrop-blur-sm">
              <AlertTriangle className="h-3 w-3 text-amber-300" />
              <span className="text-amber-300 font-medium">Support</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Report a Bug
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Help us improve SP NET GRAM by reporting bugs and issues. Your
              detailed reports help our team identify and fix problems faster.
            </p>
          </div>
        </div>
      </section>

      {/* ── Reporting Guidelines ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Reporting Guidelines
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Follow these guidelines to ensure your bug report is clear,
              actionable, and gets resolved quickly.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {guidelines.map((item, i) => {
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

      {/* ── Required Information ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Required Information
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Include as much of the following information as possible in your
              bug report to help us resolve the issue faster.
            </p>
          </ScrollReveal>
          <div className="mx-auto max-w-2xl space-y-4">
            {requiredInfo.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <Card className="p-5 border-border/50 hover:border-border transition-all duration-200">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/50">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    <p className="text-sm font-medium tracking-tight">
                      {item}
                    </p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to Report ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              How to Report
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Choose the reporting channel that works best for you.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {reportOptions.map((option, i) => {
              const Icon = option.icon;
              return (
                <ScrollReveal key={option.title} delay={i * 80}>
                  <Link
                    href={option.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <Card className="group p-8 border-border/50 hover:border-border hover:shadow-sm transition-all duration-300 h-full">
                      <div
                        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${option.gradient} shadow-lg`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-foreground transition-colors">
                        {option.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {option.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                        {option.label}
                      </span>
                    </Card>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What Happens Next ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16">
              What Happens Next
            </h2>
          </ScrollReveal>
          <div className="mx-auto max-w-3xl space-y-8">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/50 border border-border/50">
                        <Icon className="h-4 w-4" />
                      </div>
                      {i < processSteps.length - 1 && (
                        <div className="w-px flex-1 bg-border/50 mt-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <span className="text-xs font-medium text-muted-foreground/70 bg-accent/50 px-2.5 py-1 rounded-full">
                        Step {i + 1}
                      </span>
                      <h3 className="text-lg font-bold tracking-tight mt-3 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
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
        title="Need more help?"
        description="Visit our support page for additional resources, troubleshooting guides, and direct contact options."
        primaryLabel="Visit Support"
        primaryHref="/support"
        secondaryLabel="Join Community"
        secondaryHref="/community"
      />
    </>
  );
}
