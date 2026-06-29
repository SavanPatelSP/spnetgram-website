import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Users, Globe, Shield } from "lucide-react";

const stats = [
  { icon: Users, value: "10M+", label: "Active Users", description: "And growing every day" },
  { icon: Globe, value: "190+", label: "Countries", description: "Global reach and coverage" },
  { icon: Shield, value: "99.99%", label: "Uptime", description: "Enterprise-grade reliability" },
  { icon: BarChart3, value: "<100ms", label: "Delivery Time", description: "Messages arrive instantly" },
];

export function StatisticsSection() {
  return (
    <section className="relative border-t border-border/30 py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.02] via-transparent to-purple-500/[0.02]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500/[0.03] to-purple-500/[0.03] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <Badge variant="default" className="mb-5">
              <BarChart3 className="h-3 w-3 mr-1" />
              By the Numbers
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Built for scale.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal key={stat.label} delay={i * 80}>
                <div className="group text-center rounded-2xl border border-border/20 bg-card/30 p-8 transition-all duration-300 card-depth">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/15 to-purple-500/10 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-base font-semibold text-muted-foreground/70 mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground/40">{stat.description}</div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
