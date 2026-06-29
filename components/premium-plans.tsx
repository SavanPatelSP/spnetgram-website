import { Check, Sparkles, Crown, Shield, Globe, Star, Coins, Gem, Zap, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "Enhanced Telegram experience at no cost.",
    icon: Sparkles,
    accent: "text-zinc-400",
    border: "border-zinc-500/20",
    badge: "bg-zinc-500/10",
    features: [
      "Full Telegram compatibility",
      "Enhanced messaging",
      "5 enhanced profiles",
      "Basic customization",
      "Earn coins",
    ],
    cta: "Get Started",
    href: "/waitlist",
  },
  {
    name: "Pro",
    price: "$4.99",
    period: "/month",
    description: "For Telegram power users who want more.",
    icon: Crown,
    accent: "text-amber-400",
    border: "border-amber-500/30",
    badge: "bg-amber-500/10",
    popular: true,
    features: [
      "Everything in Free",
      "Premium badges",
      "Custom themes",
      "Extended profiles",
      "Faster coin earning",
      "Priority support",
      "50 enhanced communities",
    ],
    cta: "Start Pro",
    href: "/waitlist",
    saving: "Save 20% annually",
  },
  {
    name: "Plus",
    price: "$9.99",
    period: "/month",
    description: "The complete enhanced Telegram experience.",
    icon: Star,
    accent: "text-indigo-400",
    border: "border-indigo-500/20",
    badge: "bg-indigo-500/10",
    features: [
      "Everything in Pro",
      "Unlimited enhanced profiles",
      "Gem rewards monthly",
      "Advanced analytics",
      "Exclusive themes",
      "API access",
      "VIP support",
    ],
    cta: "Go Plus",
    href: "/waitlist",
    saving: "Save 25% annually",
  },
  {
    name: "Business",
    price: "$24.99",
    period: "/month",
    description: "Enhanced Telegram for organizations.",
    icon: Shield,
    accent: "text-emerald-400",
    border: "border-emerald-500/20",
    badge: "bg-emerald-500/10",
    features: [
      "Everything in Plus",
      "Team management",
      "Organization tools",
      "Moderation suite",
      "Custom branding",
      "Dedicated support",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    href: "/waitlist",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored Telegram enhancement for large deployments.",
    icon: Globe,
    accent: "text-purple-400",
    border: "border-purple-500/20",
    badge: "bg-purple-500/10",
    features: [
      "Everything in Business",
      "Custom integrations",
      "Dedicated infrastructure",
      "Advanced compliance",
      "SSO & directory sync",
      "24/7 premium support",
      "Custom contract terms",
    ],
    cta: "Contact Us",
    href: "/waitlist",
  },
];

export function PremiumPlans() {
  return (
    <section id="premium" className="border-t border-border/50 py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/[0.08] px-3 py-1 text-xs font-medium backdrop-blur-sm">
            <Sparkles className="h-3 w-3 text-amber-400" />
            <span className="text-amber-300 font-medium">Premium Memberships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
            Enhance your Telegram
            <br />
            <span className="text-muted-foreground/70">with the right plan</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground/70 leading-relaxed max-w-2xl mx-auto">
            From free enhancement to enterprise-grade features. Every plan works with your Telegram account.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`group relative flex flex-col rounded-2xl border bg-card/30 p-6 transition-all duration-400 card-depth ${
                  plan.popular ? "border-amber-500/40 shadow-lg shadow-amber-500/5" : plan.border
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

                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border ${plan.border} ${plan.badge}`}>
                  <Icon className={`h-6 w-6 ${plan.accent}`} />
                </div>

                <div className="flex items-baseline gap-1 mb-1">
                  <h3 className={`text-xl font-bold tracking-tight ${plan.popular ? "text-amber-400" : ""}`}>
                    {plan.name}
                  </h3>
                  {(plan as any).saving && (
                    <span className={`text-[8px] font-bold ${plan.accent} bg-${plan.accent.split("-")[1]}-500/10 px-1.5 py-0.5 rounded-full ml-auto`}>
                      SAVE
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-0.5 mb-2">
                  <span className="text-3xl font-bold tracking-tight">{plan.price}</span>
                  {plan.period && <span className="text-sm text-muted-foreground/60">{plan.period}</span>}
                </div>

                <p className="text-xs text-muted-foreground/60 leading-relaxed mb-5 min-h-[32px]">
                  {plan.description}
                </p>

                {(plan as any).saving && (
                  <div className="mb-4 rounded-lg border border-amber-500/15 bg-amber-500/[0.04] px-3 py-1.5 text-center">
                    <span className="text-[9px] font-medium text-amber-400/80">{(plan as any).saving}</span>
                  </div>
                )}

                <div className="flex-1 border-t border-border/15 pt-4 mb-5">
                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${plan.accent}`} />
                        <span className="text-xs text-muted-foreground/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={plan.href} className="block">
                  <Button
                    variant={plan.popular ? "primary" : "outline"}
                    className={`w-full h-11 text-sm font-semibold ${
                      plan.popular
                        ? "bg-gradient-to-r from-amber-400 to-amber-500 text-black hover:from-amber-500 hover:to-amber-600 shadow-lg shadow-amber-500/20 shine"
                        : ""
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-border/20 bg-card/20 p-6 sm:p-8 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3390ec] to-blue-500 shadow-lg shadow-blue-500/20">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold tracking-tight">All plans include</h4>
                <p className="text-sm text-muted-foreground/60">Full Telegram compatibility and real-time sync</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 sm:ml-auto">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1.5">
                <Coins className="h-3.5 w-3.5 text-amber-400" />
                <span className="text-[10px] text-amber-400 font-medium">Coin rewards</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1.5">
                <Zap className="h-3.5 w-3.5 text-blue-400" />
                <span className="text-[10px] text-blue-400 font-medium">Enhanced performance</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1.5">
                <Shield className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-[10px] text-emerald-400 font-medium">Telegram security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
