import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Globe, Lock, Users, Image, Wifi, Download } from "lucide-react";

interface FeatureBlock {
  id: string;
  badge: string;
  badgeVariant: "default" | "success" | "warning" | "ai";
  title: string;
  highlight: string;
  description: string;
  features: { icon: typeof Shield; label: string; description: string }[];
  gradient: string;
  accent: string;
  reversed?: boolean;
}

const featureBlocks: FeatureBlock[] = [
  {
    id: "privacy",
    badge: "Privacy First",
    badgeVariant: "success",
    title: "Your conversations.",
    highlight: "Yours alone.",
    description: "We believe privacy is a fundamental right. SP NET GRAM is built with end-to-end encryption, zero data collection, and complete user control.",
    features: [
      { icon: Lock, label: "End-to-End Encrypted", description: "Messages, calls, and media are encrypted by default" },
      { icon: Shield, label: "Zero Data Collection", description: "We don't track, store, or sell your data. Period." },
      { icon: Users, label: "Complete Control", description: "Granular privacy settings for every aspect of your account" },
    ],
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    accent: "text-emerald-400",
  },
  {
    id: "performance",
    badge: "Lightning Fast",
    badgeVariant: "default",
    title: "Speed that",
    highlight: "keeps up.",
    description: "Messages deliver in milliseconds. Media loads instantly. The interface responds without hesitation. Built for real-time communication.",
    features: [
      { icon: Zap, label: "Instant Delivery", description: "Messages delivered in under 100ms globally" },
      { icon: Wifi, label: "Optimized Protocol", description: "Efficient data usage even on slow connections" },
      { icon: Download, label: "Smart Preloading", description: "Content loads before you need it with predictive caching" },
    ],
    gradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
    accent: "text-blue-400",
  },
  {
    id: "security",
    badge: "Enterprise Security",
    badgeVariant: "warning",
    title: "Security that",
    highlight: "never sleeps.",
    description: "Protect your communications with military-grade encryption, advanced threat detection, and comprehensive security auditing.",
    features: [
      { icon: Shield, label: "256-Bit Encryption", description: "AES-256 encryption for all data at rest and in transit" },
      { icon: Lock, label: "Zero-Knowledge Architecture", description: "Even we can't read your messages" },
      { icon: Globe, label: "SOC 2 Compliance", description: "Enterprise-grade security with regular third-party audits" },
    ],
    gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    accent: "text-amber-400",
  },
];

export function FeatureBlocks() {
  return (
    <>
      {featureBlocks.map((block, idx) => {
        const IconRow = block.features;
        return (
          <section
            key={block.id}
            id={block.id}
            className="border-t border-border/30 py-28 sm:py-36"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className={`grid items-center gap-12 lg:gap-20 ${block.reversed ? "lg:grid-flow-dense" : ""} lg:grid-cols-2`}>
                {/* Text side */}
                <ScrollReveal>
                  <div>
                    <Badge variant={block.badgeVariant} className="mb-5">
                      {block.badge}
                    </Badge>
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
                      {block.title}
                      <br />
                      <span className="text-muted-foreground/40">{block.highlight}</span>
                    </h2>
                    <p className="mt-5 text-base sm:text-lg text-muted-foreground/60 leading-relaxed max-w-lg">
                      {block.description}
                    </p>
                    <div className="mt-10 space-y-5">
                      {IconRow.map((f) => {
                        const Icon = f.icon;
                        const c = block.accent;
                        return (
                          <div key={f.label} className="flex items-start gap-4">
                            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/20 bg-card/30 ${c}`}>
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold">{f.label}</div>
                              <div className="text-xs text-muted-foreground/50 mt-0.5">{f.description}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Visual side */}
                <ScrollReveal delay={100}>
                  <div className="relative">
                    <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-br ${block.gradient} blur-2xl opacity-50`} />
                    <div className={`relative rounded-2xl border border-border/30 bg-gradient-to-br ${block.gradient} p-8 sm:p-10 overflow-hidden`}>
                      {/* Abstract visualization */}
                      <div className="grid grid-cols-2 gap-4">
                        {IconRow.map((f) => {
                          const Icon = f.icon;
                          return (
                            <div
                              key={f.label}
                              className="group flex flex-col items-center justify-center rounded-xl border border-border/20 bg-background/30 backdrop-blur-sm p-6 text-center transition-all duration-300 card-depth"
                            >
                              <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-2xl ${block.accent} bg-gradient-to-br from-white/[0.06] to-white/[0.02]`}>
                                <Icon className="h-6 w-6" />
                              </div>
                              <span className="text-xs font-medium text-muted-foreground/70">{f.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
