import type { Metadata } from "next";
import {
  Sparkles,
  Shield,
  CreditCard,
  RefreshCw,
  CheckCircle2,
  Crown,
  MessageSquare,
  Zap,
  Globe,
  Palette,
  Lock,
  Bot,
  ArrowRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Breadcrumbs } from "@/components/breadcrumbs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Premium Help",
  description:
    "Get help with SP NET GRAM Premium. Troubleshoot activation issues, manage your subscription, and resolve payment problems.",
};

const membershipIssues = [
  {
    icon: Shield,
    title: "Activation Problems",
    description:
      "Having trouble activating your premium membership? This can happen due to network issues, app version mismatches, or account sync delays. Follow our troubleshooting steps to resolve it quickly.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: RefreshCw,
    title: "Subscription Management",
    description:
      "Manage, upgrade, or downgrade your subscription plan. Learn how to check your current plan status, billing cycle, and renewal dates from within the app.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: CreditCard,
    title: "Payment Issues",
    description:
      "Experiencing problems with payments or billing? Check our solutions for failed transactions, double charges, and payment method updates through SP NET CONTROL CENTER.",
    gradient: "from-amber-500 to-orange-500",
  },
];

const commonSolutions = [
  "Check your internet connection and try again",
  "Restart the SP NET GRAM app completely",
  "Verify you are logged into the correct account",
  "Update SP NET GRAM to the latest version",
  "Clear the app cache and restart",
  "Ensure your payment method is valid and has sufficient funds",
];

const premiumFeatures = [
  {
    icon: Zap,
    title: "Enhanced Speed",
    description: "Faster message delivery and priority processing",
  },
  {
    icon: Globe,
    title: "Larger Groups",
    description: "Create and manage groups with higher member limits",
  },
  {
    icon: Palette,
    title: "Custom Themes",
    description: "Access exclusive themes and advanced customization options",
  },
  {
    icon: Lock,
    title: "Advanced Privacy",
    description: "Extra privacy controls and enhanced security features",
  },
  {
    icon: Bot,
    title: "AI Features",
    description: "Priority access to AI-powered tools and smart features",
  },
  {
    icon: Crown,
    title: "Priority Support",
    description: "Get faster responses from our dedicated support team",
  },
];

const faqs = [
  {
    q: "How do I activate my premium membership?",
    a: "Open SP NET GRAM, go to Settings, and select Premium. Choose your preferred plan and complete the payment process. Your premium features will be activated instantly after successful payment.",
  },
  {
    q: "I upgraded but cannot access premium features",
    a: "First, restart the app and ensure you are connected to the internet. Check your subscription status in Settings under Premium. If the issue persists, log out and log back in. Contact support if features are still unavailable.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "You can cancel your subscription through SP NET CONTROL CENTER or your device app store settings. Your premium features will remain active until the end of your current billing period.",
  },
  {
    q: "Can I get a refund?",
    a: "Refund policies depend on your platform and subscription type. Contact our support team with your order details and we will review your request. Refunds are typically processed within 5 to 10 business days.",
  },
  {
    q: "How do I restore a previous purchase?",
    a: "If you switched devices or reinstalled the app, open Settings and select Restore Purchases. Make sure you are signed in with the same account used for the original purchase. Your premium status will be restored automatically.",
  },
];

export default function PremiumHelpPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/[0.08] px-3 py-1 text-xs font-medium backdrop-blur-sm">
              <Sparkles className="h-3 w-3 text-amber-300" />
              <span className="text-amber-300 font-medium">Premium</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Premium Help
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Need help with your SP NET GRAM Premium membership? Find
              solutions for activation, subscription management, and payment
              issues.
            </p>
          </div>
        </div>
      </section>

      <Breadcrumbs />

      {/* ── Membership Issues ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Membership Issues
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Common premium membership issues and how to resolve them.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {membershipIssues.map((issue, i) => {
              const Icon = issue.icon;
              return (
                <ScrollReveal key={issue.title} delay={i * 80}>
                  <Card className="p-8 border-border/50 hover:border-border hover:shadow-sm transition-all duration-300 h-full">
                    <div
                      className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${issue.gradient} shadow-lg`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight mb-3">
                      {issue.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {issue.description}
                    </p>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Common Solutions ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Common Solutions
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Try these quick fixes before contacting support. They resolve most
              premium-related issues.
            </p>
          </ScrollReveal>
          <div className="mx-auto max-w-2xl space-y-4">
            {commonSolutions.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <Card className="p-5 border-border/50 hover:border-border transition-all duration-200">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/50">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500/70" />
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

      {/* ── Premium Benefits Reminder ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Premium Benefits Reminder
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Here is what you get with your SP NET GRAM Premium membership.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        title="Unlock SP NET GRAM Premium"
        description="Get access to exclusive features, enhanced performance, and priority support with a Premium membership."
        primaryLabel="View Premium Plans"
        primaryHref="/premium"
        secondaryLabel="Compare Plans"
        secondaryHref="/premium/compare"
      />
    </>
  );
}
