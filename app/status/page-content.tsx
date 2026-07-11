"use client";

import * as React from "react";
import {
  CheckCircle,
  GitBranch,
  Rocket,
  Server,
  Layout,
  GanttChart,
  Target,
  ArrowRight,
  Database,
  RefreshCw,
} from "lucide-react";
import { StatusDashboard } from "@/components/status-dashboard";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/loaders/skeleton";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRoadmapItems } from "@/hooks/use-roadmap";
import { useDownloadInfo } from "@/hooks/use-downloads";
import { useStatusMetrics } from "@/hooks/use-status-metrics";

export function StatusPageContent() {
  const roadmapQuery = useRoadmapItems();
  const downloadsQuery = useDownloadInfo();
  const metricsQuery = useStatusMetrics();

  const isLoading = roadmapQuery.isLoading || downloadsQuery.isLoading || metricsQuery.isLoading;
  const isError = roadmapQuery.isError || downloadsQuery.isError || metricsQuery.isError;

  const refetchAll = React.useCallback(() => {
    roadmapQuery.refetch();
    downloadsQuery.refetch();
    metricsQuery.refetch();
  }, [roadmapQuery, downloadsQuery, metricsQuery]);

  if (isLoading) {
    return (
      <div className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <Skeleton className="h-5 w-48 mx-auto" />
            <Skeleton className="h-14 w-96 mx-auto" />
            <Skeleton className="h-5 w-80 mx-auto" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="p-6 border-border/50">
                <div className="space-y-3">
                  <Skeleton className="h-10 w-10" />
                  <Skeleton className="h-5 w-40" />
                  <Skeleton className="h-8 w-24" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center py-20">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-border/20 bg-card/30">
              <Database className="h-6 w-6 text-muted-foreground/30" />
            </div>
            <h3 className="text-lg font-semibold tracking-tight mb-2">Status temporarily unavailable</h3>
            <p className="text-sm text-muted-foreground/50 max-w-md mb-6 leading-relaxed">
              We&apos;re having trouble loading status data. Please try again shortly.
            </p>
            <button
              onClick={refetchAll}
              className="inline-flex items-center gap-2 rounded-xl border border-border/20 bg-card/30 px-5 py-2.5 text-sm font-medium text-muted-foreground/70 hover:text-foreground hover:bg-card/50 transition-all"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Try again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const roadmapItems = roadmapQuery.data ?? [];
  const downloads = downloadsQuery.data ?? [];
  const metrics = metricsQuery.data ?? [];

  const latestVersion = downloads.find((d) => d.active)?.version ?? "v0.2.0";
  const completedCount = roadmapItems.filter((item) => item.status === "completed").length;
  const inProgressCount = roadmapItems.filter((item) => item.status === "in_progress").length;
  const totalCount = roadmapItems.length;
  const roadmapCompletion = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const latestMilestones = roadmapItems
    .filter((item) => item.status === "completed")
    .slice(-3);

  const upcomingMilestones = roadmapItems
    .filter((item) => item.status === "in_progress" || item.status === "planned")
    .slice(0, 4);

  const statusCards = [
    {
      icon: GitBranch,
      label: "Development Status",
      value: metrics.find((m) => m.label === "Development Status")?.value ?? 72,
      badge: { text: "Active", variant: "success" as const },
      desc: metrics.find((m) => m.label === "Development Status")?.description ?? "Core systems and feature development progressing.",
      color: "text-emerald-400",
    },
    {
      icon: Rocket,
      label: "Beta Readiness",
      value: metrics.find((m) => m.label === "Beta Readiness")?.value ?? 48,
      badge: { text: "In Progress", variant: "warning" as const },
      desc: metrics.find((m) => m.label === "Beta Readiness")?.description ?? "Infrastructure and feature readiness for public beta.",
      color: "text-amber-400",
    },
    {
      icon: Server,
      label: "Infrastructure Readiness",
      value: metrics.find((m) => m.label === "Infrastructure Readiness")?.value ?? 65,
      badge: { text: "Scaling", variant: "success" as const },
      desc: metrics.find((m) => m.label === "Infrastructure Readiness")?.description ?? "Server deployment and global availability.",
      color: "text-emerald-400",
    },
    {
      icon: Layout,
      label: "Platform Progress",
      value: metrics.find((m) => m.label === "Platform Progress")?.value ?? 58,
      badge: { text: "Ongoing", variant: "warning" as const },
      desc: metrics.find((m) => m.label === "Platform Progress")?.description ?? "Overall platform completion across all phases.",
      color: "text-amber-400",
    },
    {
      icon: GanttChart,
      label: "Roadmap Completion",
      value: roadmapCompletion,
      badge: { text: "On Track", variant: "success" as const },
      desc: `${completedCount} of ${totalCount} milestones completed across ${inProgressCount} active phases.`,
      color: "text-emerald-400",
    },
    {
      icon: CheckCircle,
      label: "System Health",
      value: null as number | null,
      badgeNode: (
        <Badge variant="success" className="text-sm px-3 py-1">
          All Systems Operational
        </Badge>
      ),
      desc: `Development environment — ${latestVersion} deployed.`,
      color: "text-emerald-400",
    },
  ];

  return (
    <>
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-4 py-1.5 text-sm">
              <CheckCircle className="h-4 w-4 text-emerald-400" />
              <span className="text-muted-foreground">
                Development active — Beta in progress
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Platform Status
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Public dashboard tracking SP NET GRAM development, beta readiness,
              infrastructure, and milestone progress.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {statusCards.map((card) => (
              <Card
                key={card.label}
                className="p-6 border-border/50 hover:border-border hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg bg-accent/50", card.color)}>
                    <card.icon className={cn("h-5 w-5", card.color)} />
                  </div>
                  <h3 className="font-semibold tracking-tight">{card.label}</h3>
                </div>
                {card.value !== null ? (
                  <div className="flex items-baseline gap-2">
                    <p className={cn("text-3xl font-bold tracking-tight", card.color)}>
                      {card.value}%
                    </p>
                    {card.badge && (
                      <Badge variant={card.badge.variant}>
                        {card.badge.text}
                      </Badge>
                    )}
                  </div>
                ) : (
                  card.badgeNode
                )}
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                  {card.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-center mb-12">
            Detailed Metrics
          </h2>
          <StatusDashboard metrics={metrics} />
        </div>
      </section>

      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            Latest Milestones
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {latestMilestones.map((milestone) => (
              <Card
                key={milestone.id}
                className="p-6 border-border/50 hover:border-emerald-500/30 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-center gap-2 text-emerald-400 mb-3">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-[11px] font-semibold uppercase tracking-widest">
                    Completed
                  </span>
                </div>
                <h4 className="font-semibold tracking-tight">{milestone.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {milestone.release ?? milestone.status}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            Upcoming Milestones
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {upcomingMilestones.map((milestone) => (
              <Card
                key={milestone.id}
                className="p-6 border-border/50 hover:border-amber-500/30 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-center gap-2 text-amber-400 mb-3">
                  <Target className="h-4 w-4" />
                  <span className="text-[11px] font-semibold uppercase tracking-widest">
                    {milestone.status === "in_progress" ? "In Progress" : "Planned"}
                  </span>
                </div>
                <h4 className="font-semibold tracking-tight">{milestone.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                  {milestone.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/development">
              <Button variant="primary" size="lg">
                View Development Progress
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/roadmap">
              <Button variant="outline" size="lg">
                Full Roadmap
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
