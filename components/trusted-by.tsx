import { Zap, Shield, Bot, Globe, Sparkles, Layout, Building2, Users } from "lucide-react";

const logos = [
  { icon: Zap, label: "Lightning" },
  { icon: Shield, label: "SecureNet" },
  { icon: Bot, label: "AI Labs" },
  { icon: Globe, label: "GlobalMesh" },
  { icon: Sparkles, label: "NovaTech" },
  { icon: Layout, label: "ArcStudio" },
  { icon: Building2, label: "Quantum" },
  { icon: Users, label: "Collective" },
];

export function TrustedBy() {
  return (
    <section className="border-t border-border/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground/40">
            Trusted by innovators worldwide
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex gap-12 sm:gap-16 animate-marquee">
            {[...logos, ...logos].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.label}-${i}`}
                  className="flex shrink-0 items-center gap-3 text-muted-foreground/30 hover:text-muted-foreground/50 transition-colors duration-300"
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-sm font-semibold tracking-tight whitespace-nowrap">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
