import type { Metadata } from "next";
import {
  CheckCircle,
  GitBranch,
  Rocket,
  Server,
  Layout,
  GanttChart,
  Target,
  ArrowRight,
} from "lucide-react";
import { StatusDashboard } from "@/components/status-dashboard";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getStatusMetrics, getRoadmapItems } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Status",
  description:
    "SP NET GRAM public status dashboard. Track development status, beta readiness, infrastructure readiness, platform progress, and milestones.",
};

export default function StatusPage() {
  const metrics = getStatusMetrics();
  const roadmapItems = getRoadmapItems();
  const completedCount = roadmapItems.filter(
    (item) => item.status === "completed",
  ).length;
  const inProgressCount = roadmapItems.filter(
    (item) => item.status === "in-progress",
  ).length;
  const totalCount = roadmapItems.length;
  const roadmapCompletion = Math.round((completedCount / totalCount) * 100);

  const latestMilestones = roadmapItems
    .filter((item) => item.status === "completed")
    .slice(-3);

  const upcomingMilestones = roadmapItems
    .filter(
      (item) =>
        item.status === "in-progress" || item.status === "planned",
    )
    .slice(0, 4);

  const statusCards = [
    {
      icon: GitBranch,
      label: "Development Status",
      value: "72%",
      badge: { text: "Active", variant: "success" as const },
      desc: "Core systems and feature development progressing.",
      color: "text-emerald-400",
    },
    {
      icon: Rocket,
      label: "Beta Readiness",
      value: "48%",
      badge: { text: "In Progress", variant: "warning" as const },
      desc: "Infrastructure and feature readiness for public beta.",
      color: "text-amber-400",
    },
    {
      icon: Server,
      label: "Infrastructure Readiness",
      value: "65%",
      badge: { text: "Scaling", variant: "success" as const },
      desc: "Server deployment and global availability.",
      color: "text-emerald-400",
    },
    {
      icon: Layout,
      label: "Platform Progress",
      value: "58%",
      badge: { text: "Ongoing", variant: "warning" as const },
      desc: "Overall platform completion across all phases.",
      color: "text-amber-400",
    },
    {
      icon: GanttChart,
      label: "Roadmap Completion",
      value: `${roadmapCompletion}%`,
      badge: { text: "On Track", variant: "success" as const },
      desc: `${completedCount} of ${totalCount} milestones completed across ${inProgressCount} active phases.`,
      color: "text-emerald-400",
    },
    {
      icon: CheckCircle,
      label: "System Health",
      value: null,
      badgeNode: (
        <Badge variant="success" className="text-sm px-3 py-1">
          All Systems Operational
        </Badge>
      ),
      desc: "Development environment — v0.2.0 deployed.",
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
                      {card.value}
                    </p>
                    {"badge" in card && card.badge && (
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
                key={milestone.title}
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
                  {milestone.quarter}
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
                key={milestone.title}
                className="p-6 border-border/50 hover:border-amber-500/30 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-center gap-2 text-amber-400 mb-3">
                  <Target className="h-4 w-4" />
                  <span className="text-[11px] font-semibold uppercase tracking-widest">
                    {milestone.status === "in-progress"
                      ? "In Progress"
                      : "Planned"}
                  </span>
                </div>
                <h4 className="font-semibold tracking-tight">{milestone.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                  {milestone.description}
                </p>
                <div className="flex gap-3 mt-3">
                  <span className="text-xs text-muted-foreground/70">
                    {milestone.quarter}
                  </span>
                  <span className="text-xs text-muted-foreground/30">&middot;</span>
                  <span className="text-xs text-muted-foreground/70">
                    {milestone.category}
                  </span>
                </div>
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
