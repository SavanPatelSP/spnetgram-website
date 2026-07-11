"use client";

import * as React from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/loaders/skeleton";
import { BarChart3, Code2, GitCommit, Box, Layers, Monitor, Shield, Blocks, Database, RefreshCw } from "lucide-react";
import { useStatusMetrics } from "@/hooks/use-status-metrics";

const fallbackMetrics = [
  { icon: BarChart3, value: "72%", label: "Development Progress", description: "Core systems and feature development across all products" },
  { icon: Code2, value: "156", label: "Features Implemented", description: "Completed features across the SP NET ecosystem" },
  { icon: GitCommit, value: "2.4k+", label: "Commits", description: "Across private monorepo and public repositories" },
  { icon: Box, value: "47", label: "Components Built", description: "Reusable UI and system components in the design system" },
  { icon: Layers, value: "5", label: "Product Modules", description: "GRAM, ADMIN, AI, CLOUD, API — all under active development" },
  { icon: Monitor, value: "6", label: "Supported Platforms", description: "iOS, Android, Windows, macOS, Linux, Web" },
  { icon: Shield, value: "12", label: "Security Layers", description: "Encryption, authentication, authorization, and audit systems" },
  { icon: Blocks, value: "8", label: "Open Source Components", description: "Libraries and tools available to the developer community" },
];

export function StatisticsSection() {
  const query = useStatusMetrics();

  const metrics = query.data && query.data.length > 0
    ? fallbackMetrics.map((m) => {
        const match = query.data!.find((s) => s.label.includes(m.label.split(" ")[0]));
        if (match) {
          return { ...m, value: `${match.value}${m.value.includes("%") ? "%" : ""}`, description: match.description };
        }
        return m;
      })
    : fallbackMetrics;

  return (
    <section className="relative border-t border-white/[0.04] py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.02] via-transparent to-purple-500/[0.02]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500/[0.03] to-purple-500/[0.03] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <Badge variant="default" className="mb-5">
              <BarChart3 className="h-3 w-3 mr-1" />
              Development Metrics
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Built with intention.
              <br />
              <span className="text-muted-foreground/40">Measured by progress.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/60 leading-relaxed max-w-2xl mx-auto">
              Every metric represents real work — features shipped, systems built, and infrastructure hardened.
              Live data from SP NET ADMIN powers these metrics.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal key={stat.label} delay={i * 60}>
                <div className="group text-center rounded-2xl border border-white/[0.06] bg-white/[0.03] p-7 transition-all duration-300 card-depth">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/15 to-purple-500/10 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground/70 mb-1">{stat.label}</div>
                  <div className="text-[11px] text-muted-foreground/40 leading-relaxed">{stat.description}</div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-xl border border-border/10 bg-card/10 px-5 py-3">
              <BarChart3 className="h-4 w-4 text-muted-foreground/30" />
              <span className="text-xs text-muted-foreground/30">
                Metrics powered by SP NET ADMIN. Updates are reflected automatically.
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
