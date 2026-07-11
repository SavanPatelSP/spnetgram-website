"use client";

import * as React from "react";
import { Check, Clock, Circle, Zap, Layers } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { cn } from "@/lib/utils";
import { useRoadmapItems } from "@/hooks/use-roadmap";
import { DataLoader } from "@/components/ui/loaders/data-loader";
import type { RoadmapItem } from "@/types/api";

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

const phaseDetails: Record<string, { longDescription: string; features: string[] }> = {
  "roadmap-1": {
    longDescription:
      "Establish the organizational backbone of SP NET GRAM with formal governance structures, decision-making frameworks, and contributor guidelines. This foundational layer defines how the project evolves, who maintains it, and how community input shapes the roadmap.",
    features: ["Steering committee formation", "RFC proposal workflow", "Contributor license agreements", "Release cadence policy"],
  },
  "roadmap-2": {
    longDescription:
      "Architect the core application on Telegram's Mini App platform, leveraging its native authentication, payment rails, and social graph. Build a modular service layer that cleanly separates business logic from the Telegram-specific interface, enabling future expansion to standalone clients.",
    features: ["Telegram Mini App shell", "Modular service architecture", "Type-safe API contracts", "Offline-first data sync"],
  },
  "roadmap-3": {
    longDescription:
      "Craft a cohesive visual language spanning typography, color systems, iconography, and motion design. Establish a reusable component library documented in Storybook that enforces consistency across every surface of the product while remaining flexible enough for brand evolution.",
    features: ["Design token system", "Component library in Storybook", "Dark and light theme tokens", "Responsive breakpoint system"],
  },
  "roadmap-4": {
    longDescription:
      "Build the complete identity and account layer: Telegram-native sign-in, user profiles with avatars and bios, granular privacy settings, notification preferences, and account lifecycle management including deletion and data export.",
    features: ["Telegram OAuth integration", "Profile customization", "Privacy and visibility controls", "Session and device management"],
  },
  "roadmap-5": {
    longDescription:
      "Introduce SP Coin as the native digital currency powering transactions, rewards, and value transfer across the platform. Implement a secure wallet system with balance tracking, transaction history, earning mechanisms through platform engagement, and spending pathways across premium features.",
    features: ["Wallet with balance and history", "Earn rewards for engagement", "Peer-to-peer transfers", "Secure transaction signing"],
  },
  "roadmap-6": {
    longDescription:
      "Launch SP Gems as the premium virtual currency for exclusive features, cosmetic upgrades, and priority access. Gems complement SP Coin by providing a premium-tier economy that funds platform development while giving engaged users enhanced capabilities.",
    features: ["Premium currency wallet", "Exclusive feature unlocking", "Cosmetic customization store", "Tiered bonus multipliers"],
  },
  "roadmap-7": {
    longDescription:
      "Deploy a multi-tier membership program with Bronze, Silver, Gold, and Platinum levels, each offering escalating benefits. Build the subscription management infrastructure with billing cycles, upgrade/downgrade flows, and a member dashboard showing active perks and usage analytics.",
    features: ["Four-tier membership structure", "Monthly and annual billing", "Member benefits dashboard", "Prorated upgrade flows"],
  },
  "roadmap-8": {
    longDescription:
      "Create a structured request system where premium members can submit feature requests, bug reports, and support inquiries with priority routing. Implement SLA tracking, real-time status updates, and notification pipelines that keep requesters informed throughout the resolution process.",
    features: ["Priority request queue", "SLA tracking and metrics", "Real-time status updates", "Automated routing and assignment"],
  },
  "roadmap-9": {
    longDescription:
      "Build a comprehensive administrative layer including a dashboard for platform analytics, content moderation tools, user management, system health monitoring, and a licensing engine for managing premium subscriptions and enterprise agreements at scale.",
    features: ["Admin analytics dashboard", "Content moderation queue", "User management console", "Licensing and billing engine"],
  },
  "roadmap-10": {
    longDescription:
      "Enable organizations to create persistent team spaces with role-based access control, shared resources, billing management, and hierarchical structures. Support everything from small teams to enterprise divisions with granular permissions and audit logging.",
    features: ["Organization creation and invites", "Role-based access control", "Shared channels and resources", "Enterprise billing and invoicing"],
  },
  "roadmap-11": {
    longDescription:
      "Develop an integrated support ecosystem combining ticketing, live chat, knowledge base, and community moderation tools. Empower moderators with automated flagging, escalation workflows, and analytics that identify trending issues before they escalate.",
    features: ["Ticketing and live chat", "Knowledge base and FAQs", "Automated content flagging", "Moderator analytics dashboard"],
  },
  "roadmap-12": {
    longDescription:
      "Prepare and deploy the public beta infrastructure including load testing, staging environments, feature flags, crash reporting, and automated rollback mechanisms. Ensure the platform can handle rapid user growth while maintaining performance and reliability standards.",
    features: ["Load testing and benchmarks", "Feature flag management", "Crash reporting and alerts", "Automated rollback system"],
  },
  "roadmap-13": {
    longDescription:
      "Expand the ecosystem with a marketing website, developer documentation portal, public API, and third-party integrations. Build the growth engine through referral programs, SEO optimization, content marketing infrastructure, and partnership management tools.",
    features: ["Marketing website launch", "Developer API and docs", "Referral program engine", "SEO and analytics pipeline"],
  },
  "roadmap-14": {
    longDescription:
      "Open SP NET GRAM to the general public with a coordinated launch strategy. Activate onboarding flows, welcome tutorials, community programs, and feedback collection systems designed to convert trial users into engaged long-term community members.",
    features: ["Public registration launch", "Onboarding tutorial flow", "Community welcome program", "Public feedback channels"],
  },
  "roadmap-15": {
    longDescription:
      "Scale to enterprise clients with white-label solutions, custom deployments, dedicated support, and compliance certifications. Expand globally with multi-language support, regional data residency, and partnerships that bring SP NET GRAM to organizations worldwide.",
    features: ["Enterprise white-label solution", "Multi-language localization", "Regional data residency", "Compliance and certifications"],
  },
};

function getPhaseDetails(item: RoadmapItem) {
  return (
    phaseDetails[item.id] ?? {
      longDescription: item.description ?? "",
      features: [],
    }
  );
}

const categoryOrder = ["Foundation", "Core Systems", "Membership", "Infrastructure", "Platform Expansion", "Global Expansion"];

const categoryColors: Record<string, string> = {
  Foundation: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
  "Core Systems": "text-blue-400 border-blue-500/20 bg-blue-500/5",
  Membership: "text-amber-400 border-amber-500/20 bg-amber-500/5",
  Infrastructure: "text-purple-400 border-purple-500/20 bg-purple-500/5",
  "Platform Expansion": "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
  "Global Expansion": "text-rose-400 border-rose-500/20 bg-rose-500/5",
};

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
                  {/* Continuous background connector line */}
                  {sorted.length > 1 && (
                    <div
                      className="absolute top-5 bottom-5 w-px bg-gradient-to-b from-blue-500/20 via-purple-500/10 to-blue-500/20 z-0 left-[19px] md:left-[44px]"
                    />
                  )}

                  <div className="space-y-4 sm:space-y-5">
                    {sorted.map((milestone, i) => {
                      const config = statusConfig[normalizeRoadmapStatus(milestone.status)] ?? statusConfig.future;
                      const StatusIcon = config.icon;
                      const details = getPhaseDetails(milestone);
                      const showCategory =
                        milestone.category &&
                        (i === 0 || sorted[i - 1].category !== milestone.category);

                      return (
                        <ScrollReveal key={milestone.id} delay={i * 50}>
                          {/* Category divider */}
                          {showCategory && milestone.category && (
                            <div className="flex items-center gap-3 mb-4 mt-2 first:mt-0">
                              <div className="h-px flex-1 bg-white/[0.04]" />
                              <span
                                className={cn(
                                  "text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full border",
                                  categoryColors[milestone.category] ?? "text-muted-foreground/40 border-white/[0.06] bg-white/[0.02]",
                                )}
                              >
                                {milestone.category}
                              </span>
                              <div className="h-px flex-1 bg-white/[0.04]" />
                            </div>
                          )}

                          <div className="group relative flex flex-col md:flex-row gap-4 md:gap-0">
                            {/* Timeline node */}
                            <div className="flex md:flex-col items-center md:items-start gap-3 shrink-0 md:w-28 md:pt-1 z-10">
                              <div
                                className={cn(
                                  "relative z-10 flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-500 md:ml-6",
                                  config.border,
                                  config.bg,
                                  "group-hover:scale-110 group-hover:shadow-lg",
                                )}
                              >
                                <StatusIcon className={cn("h-4 w-4", config.text)} />
                              </div>
                              <span className={cn("text-[9px] font-semibold uppercase tracking-widest whitespace-nowrap hidden md:block", config.text)}>
                                {config.label}
                              </span>
                            </div>

                            {/* Card */}
                            <div className="flex-1 ml-[52px] md:ml-0 rounded-xl border border-white/[0.05] bg-white/[0.02] p-5 sm:p-6 transition-all duration-400 hover:border-white/[0.08] hover:bg-white/[0.03] card-depth md:-ml-5 z-10">
                              <div className="flex items-center gap-2 mb-2">
                                <StatusIcon className={cn("h-3 w-3", config.text)} />
                                <span className={cn("text-[10px] font-semibold uppercase tracking-widest", config.text)}>
                                  {config.label}
                                </span>
                                {milestone.release && (
                                  <>
                                    <span className="text-white/[0.06]">|</span>
                                    <span className="text-[10px] text-muted-foreground/30 font-medium">{milestone.release}</span>
                                  </>
                                )}
                              </div>

                              <h4 className="text-lg font-bold tracking-tight mb-2">{milestone.title}</h4>
                              <p className="text-sm text-muted-foreground/60 leading-relaxed mb-3">{details.longDescription}</p>

                              {details.features.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 mb-3">
                                  {details.features.map((feature) => (
                                    <span
                                      key={feature}
                                      className="inline-flex items-center gap-1 rounded-md border border-white/[0.05] bg-white/[0.02] px-2 py-0.5 text-[10px] text-muted-foreground/50"
                                    >
                                      <span className={cn("h-1 w-1 rounded-full", config.color)} />
                                      {feature}
                                    </span>
                                  ))}
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
