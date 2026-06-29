import Link from "next/link";
import { Check, Sparkles, Crown, Star, Shield, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "Get started with powerful messaging.",
    icon: Sparkles,
    accent: "text-muted-foreground",
    border: "border-border/30",
    features: [
      "Full messaging suite",
      "End-to-end encryption",
      "100GB cloud storage",
      "Basic AI features",
      "Community access",
    ],
    cta: "Get Started",
    href: "/waitlist",
  },
  {
    name: "Pro",
    price: "$4.99",
    period: "/month",
    description: "For power users who want more.",
    icon: Crown,
    accent: "text-amber-400",
    border: "border-amber-500/30",
    popular: true,
    features: [
      "Everything in Free",
      "Unlimited storage",
      "Advanced AI assistant",
      "Custom themes & badges",
      "Priority support",
      "Early access features",
      "50 enhanced communities",
    ],
    cta: "Start Pro",
    href: "/waitlist",
    saving: "Save 20% yearly",
  },
  {
    name: "Business",
    price: "$24.99",
    period: "/month",
    description: "For teams and organizations.",
    icon: Shield,
    accent: "text-emerald-400",
    border: "border-emerald-500/20",
    features: [
      "Everything in Pro",
      "Team management",
      "Analytics dashboard",
      "Moderation tools",
      "Custom branding",
      "Dedicated support",
      "API access",
    ],
    cta: "Contact Sales",
    href: "/waitlist",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored for large organizations.",
    icon: Globe,
    accent: "text-purple-400",
    border: "border-purple-500/20",
    features: [
      "Everything in Business",
      "SSO & directory sync",
      "Custom integrations",
      "Dedicated infrastructure",
      "Advanced compliance",
      "24/7 premium support",
      "SLA guarantee",
    ],
    cta: "Contact Us",
    href: "/waitlist",
  },
];

export function PremiumSection() {
  return (
    <section id="premium" className="border-t border-border/30 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <Badge variant="premium" className="mb-5">
              <Sparkles className="h-3 w-3 mr-1" />
              Premium Membership
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Elevate your
              <br />
              <span className="text-muted-foreground/40">experience.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/60 leading-relaxed max-w-2xl mx-auto">
              From free to enterprise, every plan unlocks more power, more features, and more control.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <ScrollReveal key={plan.name} delay={i * 80}>
                <div
                  className={`group relative flex flex-col rounded-2xl border bg-card/30 p-6 sm:p-7 transition-all duration-300 card-depth ${
                    plan.popular ? "border-amber-500/40 shadow-lg shadow-amber-500/10" : plan.border
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                      <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-3.5 py-1 text-[9px] font-bold text-black uppercase tracking-wider shadow-lg shadow-amber-500/20">
                        <Sparkles className="h-3 w-3" />
                        Best Value
                      </span>
                    </div>
                  )}

                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border ${plan.border} bg-background/50 ${plan.accent}`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="flex items-baseline gap-1 mb-1">
                    <h3 className={`text-xl font-bold tracking-tight ${plan.popular ? "text-amber-400" : ""}`}>
                      {plan.name}
                    </h3>
                  </div>

                  <div className="flex items-baseline gap-0.5 mb-2">
                    <span className="text-3xl font-bold tracking-tight">{plan.price}</span>
                    {plan.period && <span className="text-sm text-muted-foreground/50">{plan.period}</span>}
                  </div>

                  <p className="text-xs text-muted-foreground/50 leading-relaxed mb-5">{plan.description}</p>

                  {plan.saving && (
                    <div className="mb-4 rounded-lg border border-amber-500/15 bg-amber-500/[0.04] px-3 py-1.5 text-center">
                      <span className="text-[9px] font-medium text-amber-400/80">{plan.saving}</span>
                    </div>
                  )}

                  <div className="flex-1 border-t border-border/15 pt-4 mb-5">
                    <ul className="space-y-2.5">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <Check className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${plan.accent}`} />
                          <span className="text-xs text-muted-foreground/60">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={plan.href} className="block">
                    <Button
                      variant={plan.popular ? "premium" : "outline"}
                      className="w-full h-11 text-sm font-semibold"
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
