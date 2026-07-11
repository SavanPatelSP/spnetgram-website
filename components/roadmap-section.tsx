"use client";

import * as React from "react";
import { Check, Clock, Circle, Zap, Layers } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { cn } from "@/lib/utils";
import { useRoadmapItems } from "@/hooks/use-roadmap";
import { DataLoader } from "@/components/ui/loaders/data-loader";

function normalizeRoadmapStatus(status: string): string {
  if (status === "in_progress") return "in-progress";
  if (status === "planned") return "future";
  return status;
}

const statusConfig: Record<string, { icon: typeof Circle; color: string; border: string; bg: string; text: string; label: string }> = {
  completed: { icon: Check, color: "bg-emerald-500", border: "border-emerald-500/30", bg: "bg-emerald-500/10", text: "text-emerald-400", label: "Completed" },
  "in-progress": { icon: Zap, color: "bg-blue-500", border: "border-blue-500/30", bg: "bg-blue-500/10", text: "text-blue-400", label: "In Progress" },
  next: { icon: Clock, color: "bg-amber-500", border: "border-amber-500/30", bg: "bg-amber-500/10", text: "text-amber-400", label: "Up Next" },
  later: { icon: Layers, color: "bg-purple-500", border: "border-purple-500/20", bg: "bg-purple-500/10", text: "text-purple-400", label: "On the Horizon" },
  future: { icon: Circle, color: "bg-muted-foreground/20", border: "border-muted-foreground/10", bg: "bg-muted-foreground/5", text: "text-muted-foreground/40", label: "Future" },
};

const filterCategories = [
  { id: "completed", label: "Completed", icon: Check },
  { id: "in-progress", label: "Now", icon: Zap },
  { id: "next", label: "Next", icon: Clock },
  { id: "later", label: "Later", icon: Layers },
  { id: "future", label: "Future", icon: Circle },
];

export function RoadmapSection() {
  const [activeFilter, setActiveFilter] = React.useState<string | null>(null);
  const query = useRoadmapItems();

  return (
    <section id="roadmap" className="border-t border-white/[0.04] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-muted-foreground/60 mb-5 backdrop-blur-sm">
              <Clock className="h-3 w-3" />
              Product Roadmap
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              The path ahead
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/60 leading-relaxed max-w-2xl mx-auto">
              From foundation to enterprise. Every milestone brings us closer to redefining communication.
            </p>
          </div>
        </ScrollReveal>

        <DataLoader
          query={query}
          empty={
            <div className="text-center py-12">
              <p className="text-sm text-muted-foreground/40">Roadmap data not yet published.</p>
            </div>
          }
        >
          {(milestones) => {
            const filtered = activeFilter
              ? milestones.filter((m) => normalizeRoadmapStatus(m.status) === activeFilter)
              : milestones;

            const sorted = [...filtered].sort((a, b) => a.displayOrder - b.displayOrder);

            return (
              <>
                {/* Filter bar */}
                <ScrollReveal delay={50}>
                  <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-12">
                    <button
                      onClick={() => setActiveFilter(null)}
                      className={cn(
                        "rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-300",
                        activeFilter === null
                          ? "bg-foreground text-background shadow-sm"
                          : "text-muted-foreground/50 hover:text-foreground border border-white/[0.06]",
                      )}
                    >
                      All
                    </button>
                    {filterCategories.map((cat) => {
                      const Icon = cat.icon;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setActiveFilter(activeFilter === cat.id ? null : cat.id)}
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-300",
                            activeFilter === cat.id
                              ? "bg-foreground text-background shadow-sm"
                              : "text-muted-foreground/50 hover:text-foreground border border-white/[0.06]",
                          )}
                        >
                          <Icon className="h-3 w-3" />
                          {cat.label}
                        </button>
                      );
                    })}
                  </div>
                </ScrollReveal>

                {/* Timeline */}
                <div className="relative">
                  {/* Vertical connector line */}
                  <div className="absolute left-6 md:left-[104px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/20 via-purple-500/10 to-transparent hidden md:block" />

                  <div className="space-y-5">
                    {sorted.map((milestone, i) => {
                      const config = statusConfig[normalizeRoadmapStatus(milestone.status)] ?? statusConfig.future;
                      const CircleIcon = Circle;
                      const StatusIcon = config.icon;

                      return (
                        <ScrollReveal key={milestone.id} delay={i * 60}>
                          <div className="group relative flex flex-col md:flex-row gap-4 md:gap-0">
                            {/* Timeline node */}
                            <div className="flex md:flex-col items-center gap-3 shrink-0 md:w-28 md:pt-1">
                              <div
                                className={cn(
                                  "relative z-10 flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-500 md:ml-6",
                                  config.border,
                                  config.bg,
                                  "group-hover:scale-110 group-hover:shadow-lg",
                                )}
                              >
                                <CircleIcon className={cn("h-4 w-4", config.text)} />
                              </div>
                              <span className={cn("text-[9px] font-semibold uppercase tracking-widest whitespace-nowrap hidden md:block", config.text)}>
                                {config.label}
                              </span>
                            </div>

                            {/* Card */}
                            <div className="flex-1 rounded-xl border border-white/[0.05] bg-white/[0.02] p-5 sm:p-6 transition-all duration-400 hover:border-white/[0.08] hover:bg-white/[0.03] card-depth md:-ml-5">
                              <div className="flex items-center gap-2 mb-1">
                                <StatusIcon className={cn("h-3 w-3", config.text)} />
                                <span className={cn("text-[10px] font-semibold uppercase tracking-widest", config.text)}>
                                  {config.label}
                                </span>
                              </div>

                              <h4 className="text-lg font-bold tracking-tight mb-1.5">{milestone.title}</h4>
                              <p className="text-sm text-muted-foreground/60 leading-relaxed mb-3">{milestone.description}</p>

                              {milestone.release && (
                                <div className="mb-3 text-[11px] text-muted-foreground/30 font-medium">
                                  Expected: {milestone.release}
                                </div>
                              )}

                              {milestone.progress > 0 && (
                                <div>
                                  <div className="flex items-center justify-between text-[10px] text-muted-foreground/30 mb-1">
                                    <span>Progress</span>
                                    <span>{milestone.progress}%</span>
                                  </div>
                                  <div className="h-1 rounded-full bg-white/[0.04] overflow-hidden">
                                    <div
                                      className={cn("h-full rounded-full transition-all duration-500", config.color)}
                                      style={{ width: `${milestone.progress}%` }}
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </ScrollReveal>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          }}
        </DataLoader>

        <ScrollReveal delay={200}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/[0.04] bg-white/[0.02] px-4 py-2.5 max-w-full">
              <Clock className="h-3.5 w-3.5 text-muted-foreground/30 shrink-0" />
              <span className="text-xs text-muted-foreground/30 text-center">
                Timeline is managed in SP NET CONTROL CENTER and subject to change.
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
