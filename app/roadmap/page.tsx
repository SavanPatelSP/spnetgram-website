import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { CheckCircle, Loader2, Circle } from "lucide-react";
import { getRoadmapPhases } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "SP NET GRAM development roadmap. Explore completed phases, current development, and planned milestones across Foundation, Core Systems, Membership, Infrastructure, Platform Expansion, and Global Expansion.",
};

const phaseConfig = {
  completed: {
    badge: "success" as const,
    indicator: "bg-emerald-500",
    label: "Completed",
    iconBg: "bg-emerald-500/20 text-emerald-400",
    icon: CheckCircle,
  },
  "in-progress": {
    badge: "warning" as const,
    indicator: "bg-amber-500",
    label: "In Progress",
    iconBg: "bg-amber-500/20 text-amber-400",
    icon: Loader2,
  },
  planned: {
    badge: "outline" as const,
    indicator: "bg-muted-foreground/50",
    label: "Planned",
    iconBg: "bg-accent text-muted-foreground",
    icon: Circle,
  },
};

const phaseProgress: Record<string, { current: number; total: number }> = {
  Foundation: { current: 3, total: 3 },
  "Core Systems": { current: 1, total: 3 },
  "Membership Systems": { current: 0, total: 2 },
  "Administrative Infrastructure": { current: 0, total: 3 },
  "Platform Expansion": { current: 0, total: 2 },
  "Global Expansion": { current: 0, total: 3 },
};

export default function RoadmapPage() {
  const phases = getRoadmapPhases();

  const completedPhases = phases.filter((p) => p.status === "completed").length;
  const totalPhases = phases.length;

  return (
    <>
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 text-xs font-medium tracking-wide uppercase">
              <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-muted-foreground">{completedPhases} of {totalPhases} phases completed</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Product Roadmap
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              SP NET GRAM development is organized into six major phases. From
              foundation to global expansion, see exactly where we are and what
              comes next.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-border via-border to-transparent hidden md:block" />
            <div className="space-y-16">
              {phases.map((phase, index) => {
                const cfg = phaseConfig[phase.status];
                const Icon = cfg.icon;
                const progress = phaseProgress[phase.title] || { current: 0, total: 1 };
                const pct = Math.round((progress.current / progress.total) * 100);

                return (
                  <div key={phase.phase} className="relative group">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="hidden md:flex relative z-10">
                        <div
                          className={cn(
                            "flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-bold transition-all duration-300 group-hover:scale-105",
                            cfg.iconBg,
                          )}
                        >
                          {phase.status === "in-progress" ? (
                            <Icon className="h-6 w-6 animate-spin" />
                          ) : (
                            <Icon className="h-6 w-6" />
                          )}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{phase.title}</h2>
                          <Badge variant={cfg.badge}>{cfg.label}</Badge>
                        </div>

                        <div className="mb-4">
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span>{progress.current} of {progress.total} milestones</span>
                            <span className="text-muted-foreground/30">&middot;</span>
                            <span>{pct}% complete</span>
                          </div>
                          <div className="mt-2 h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-secondary">
                            <div
                              className={cn(
                                "h-full rounded-full transition-all duration-700",
                                phase.status === "completed"
                                  ? "bg-emerald-500"
                                  : phase.status === "in-progress"
                                    ? "bg-amber-500"
                                    : "bg-muted-foreground/30",
                              )}
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>

                        <Card className="p-6 border-border/50 hover:border-border hover:shadow-sm transition-all duration-200">
                          <ul className="space-y-4">
                            {phase.items.map((item) => {
                              const [phaseNum, ...rest] = item.split(": ");
                              const desc = rest.join(": ");
                              return (
                                <li
                                  key={item}
                                  className="flex items-start gap-3 text-sm"
                                >
                                  <span
                                    className={cn(
                                      "mt-1.5 h-2 w-2 shrink-0 rounded-full transition-colors",
                                      cfg.indicator,
                                    )}
                                  />
                                  <div>
                                    <span className="font-medium text-foreground">
                                      {phaseNum}
                                    </span>
                                    {desc && (
                                      <span className="text-muted-foreground">
                                        : {desc}
                                      </span>
                                    )}
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </Card>
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
        title="Want to influence the roadmap?"
        description="Join the beta program and help us prioritize what we build next."
        primaryLabel="Join Beta"
        primaryHref="/beta"
      />
    </>
  );
}
