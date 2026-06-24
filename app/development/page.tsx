import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { ProgressCard } from "@/components/progress-card";
import { CheckCircle, ArrowRight, GitBranch, Rocket, Target, Code2 } from "lucide-react";
import { getDevelopmentPhases, getStatusMetrics } from "@/lib/content";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Development",
  description:
    "SP NET GRAM public engineering portal. Track development progress, current focus, active phases, and upcoming work.",
};

const phaseBadge = {
  completed: { variant: "success" as const, label: "Completed" },
  "in-progress": { variant: "warning" as const, label: "In Progress" },
  planned: { variant: "outline" as const, label: "Planned" },
};

export default function DevelopmentPage() {
  const phases = getDevelopmentPhases();
  const metrics = getStatusMetrics();

  const activePhase = phases.find((p) => p.status === "in-progress");
  const completedPhases = phases.filter((p) => p.status === "completed");
  const plannedPhases = phases.filter((p) => p.status === "planned");

  return (
    <>
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 text-xs font-medium tracking-wide uppercase">
              <GitBranch className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-muted-foreground">Public Engineering Portal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Development
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Public engineering portal. Track every phase of SP NET GRAM from
              foundation to global expansion with full transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Dashboard */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <Rocket className="h-5 w-5 text-foreground" />
            <h2 className="text-2xl font-bold tracking-tight">Development Overview</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric) => (
              <ProgressCard
                key={metric.label}
                label={metric.label}
                value={metric.value}
                description={metric.description}
                status={metric.status}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Active Sprint */}
      {activePhase && (
        <section className="border-t border-border/50 bg-accent/[0.03] py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-5 w-5 text-amber-400" />
                <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 text-xs font-medium tracking-wide uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                  Current Sprint
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{activePhase.title}</h2>
                <Badge variant="warning">{activePhase.phase} &middot; In Progress</Badge>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                {activePhase.description}
              </p>
              <Card className="p-6 border-border/50 hover:border-border transition-all duration-200">
                <ul className="space-y-3">
                  {activePhase.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm"
                    >
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Completed */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="h-5 w-5 text-emerald-400" />
            <h2 className="text-2xl font-bold tracking-tight">Recently Completed</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-8">
            {completedPhases.length} phases completed
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {completedPhases.slice(-3).reverse().map((phase) => (
              <Card
                key={phase.phase}
                className="p-6 border-border/50 hover:border-emerald-500/30 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-emerald-400 font-medium uppercase tracking-wider">
                    {phase.phase}
                  </span>
                  <Badge variant="success">Completed</Badge>
                </div>
                <h3 className="font-semibold tracking-tight mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {phase.description}
                </p>
                <ul className="space-y-2">
                  {phase.items.slice(0, 3).map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <Code2 className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-2xl font-bold tracking-tight">Upcoming Work</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-8">
            {plannedPhases.length} phases planned
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {plannedPhases.map((phase) => (
              <Card
                key={phase.phase}
                className="p-6 border-border/50 hover:border-border hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    {phase.phase}
                  </span>
                  <Badge variant="outline">Planned</Badge>
                </div>
                <h3 className="font-semibold tracking-tight mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {phase.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Phases */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight mb-10">All Phases</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-border via-border to-transparent hidden md:block" />
            <div className="space-y-8">
              {phases.map((phase) => {
                const cfg = phaseBadge[phase.status];
                return (
                  <div key={phase.phase} className="relative group">
                    <div className="flex items-start gap-6">
                      <div
                        className={cn(
                          "relative z-10 mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition-all duration-300 group-hover:scale-105",
                          phase.status === "completed"
                            ? "bg-emerald-500/20 text-emerald-400"
                            : phase.status === "in-progress"
                              ? "bg-amber-500/20 text-amber-400"
                              : "bg-accent text-muted-foreground",
                        )}
                      >
                        {phase.phase.replace("Phase ", "")}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <h3 className="font-semibold tracking-tight">{phase.title}</h3>
                          <Badge variant={cfg.variant}>{cfg.label}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          {phase.description}
                        </p>
                        {phase.items.length > 0 && (
                          <Card className="p-5 border-border/50 hover:border-border transition-all duration-200">
                            <ul className="space-y-2">
                              {phase.items.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2 text-sm"
                                >
                                  <span
                                    className={cn(
                                      "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
                                      phase.status === "completed"
                                        ? "bg-emerald-500"
                                        : phase.status === "in-progress"
                                          ? "bg-amber-500"
                                          : "bg-muted-foreground/50",
                                    )}
                                  />
                                  <span className="text-muted-foreground">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </Card>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Follow our progress"
        description="Join the beta program and be part of SP NET GRAM development journey."
        primaryLabel="Join Beta"
        primaryHref="/beta"
        secondaryLabel="View Roadmap"
        secondaryHref="/roadmap"
      />
    </>
  );
}
