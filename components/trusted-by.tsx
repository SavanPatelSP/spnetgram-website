import { Code2, Lock, Zap, Globe, Shield, Cpu, Sparkles, Layers } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const principles = [
  { icon: Code2, label: "Engineered for the future" },
  { icon: Lock, label: "Privacy by design" },
  { icon: Zap, label: "Built for performance" },
  { icon: Globe, label: "Coming soon worldwide" },
  { icon: Shield, label: "Security first" },
  { icon: Cpu, label: "AI-native architecture" },
  { icon: Sparkles, label: "Crafted with purpose" },
  { icon: Layers, label: "Modular by design" },
];

export function TrustedBy() {
  return (
    <section className="border-t border-white/[0.04] py-16 sm:py-20 overflow-hidden">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground/50">
              Designed for developers, creators, and communities
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex gap-16 sm:gap-20 animate-marquee">
              {[...principles, ...principles].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={`${item.label}-${i}`}
                    className="flex shrink-0 items-center gap-3 text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors duration-500"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="text-sm font-semibold tracking-tight whitespace-nowrap">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
