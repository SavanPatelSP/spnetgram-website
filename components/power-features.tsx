import { Coins, Gem, Sparkles, Shield, Zap, ArrowRight, Star, Clock, Gift } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Coins,
    title: "SPNETGRAM Coins",
    description: "Earn coins through daily engagement. Unlock features, send gifts, and level up as you chat.",
    gradient: "from-amber-500 to-orange-500",
    accent: "text-amber-400",
    bgGlow: "bg-amber-500/10",
    stat: "Earn while you chat",
    stats: [
      { label: "Daily cap", value: "500" },
      { label: "Streak bonus", value: "2x" },
      { label: "Levels", value: "50+" },
    ],
  },
  {
    icon: Gem,
    title: "Gems — Premium Currency",
    description: "Premium currency for exclusive features, premium badges, custom themes, and special transactions.",
    gradient: "from-blue-500 to-indigo-500",
    accent: "text-blue-400",
    bgGlow: "bg-blue-500/10",
    stat: "Unlock exclusives",
    stats: [
      { label: "Value", value: "1 Gem" },
      { label: "Themes", value: "25+" },
      { label: "Badges", value: "15+" },
    ],
  },
  {
    icon: Sparkles,
    title: "Premium Badges",
    description: "Stand out with exclusive badges. From early adopter to community legend — show your status with style.",
    gradient: "from-purple-500 to-pink-500",
    accent: "text-purple-400",
    bgGlow: "bg-purple-500/10",
    stat: "Show your status",
    stats: [
      { label: "Badges", value: "20+" },
      { label: "Ranks", value: "8 tiers" },
      { label: "Exclusive", value: "Limited" },
    ],
  },
  {
    icon: Shield,
    title: "Enhanced Privacy",
    description: "Additional privacy controls on top of Telegram's security. Granular visibility settings, activity indicators, and more.",
    gradient: "from-emerald-500 to-teal-500",
    accent: "text-emerald-400",
    bgGlow: "bg-emerald-500/10",
    stat: "More control",
    stats: [
      { label: "Controls", value: "12+" },
      { label: "Visibility", value: "Full" },
      { label: "Encryption", value: "E2E" },
    ],
  },
];

export function PowerFeatures() {
  return (
    <section className="border-t border-border/50 py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/[0.08] px-3 py-1 text-xs font-medium backdrop-blur-sm">
            <Zap className="h-3 w-3 text-amber-400" />
            <span className="text-amber-300 font-medium">Power Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
            Everything Telegram has,
            <br />
            <span className="text-muted-foreground/70">plus the extras</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground/70 leading-relaxed max-w-2xl mx-auto">
            Coins, gems, premium badges, enhanced privacy — features that make your
            Telegram experience truly premium.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group card-depth relative overflow-hidden rounded-2xl border border-border/30 bg-card/40 p-6 sm:p-8"
              >
                <div className={`absolute -right-12 -top-12 h-36 w-36 rounded-full ${feature.bgGlow} blur-3xl`} />
                <div className="relative flex flex-col sm:flex-row items-start gap-5">
                  <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-xl shadow-${feature.gradient.split(" ")[0].replace("from-", "")}/20`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-lg font-bold tracking-tight">{feature.title}</h3>
                      <span className={`shrink-0 text-[9px] font-semibold ${feature.accent} bg-${feature.accent.split("-")[1]}-500/10 rounded-full px-2.5 py-0.5 ring-1 ring-${feature.accent.split("-")[1]}-500/20`}>
                        {feature.stat}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground/70 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {feature.stats.map((s) => (
                        <div key={s.label} className="rounded-lg border border-border/15 bg-card/30 px-2.5 py-1.5 text-center">
                          <div className="text-xs font-bold tracking-tight">{s.value}</div>
                          <div className="text-[8px] text-muted-foreground/60">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-3 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className={`h-4 w-4 ${feature.accent}`} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link href="/platform">
            <Button variant="outline" size="lg" className="gap-2">
              Explore All Features
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
