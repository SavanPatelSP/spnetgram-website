import type { RoadmapPhase } from "@/types";

const phases: RoadmapPhase[] = [
  {
    phase: "Foundation",
    title: "Foundation",
    status: "completed",
    items: [
      "Phase 0 — Project Governance: Governance model, guidelines, and standards.",
      "Phase 1 — Core Framework: Application architecture and Telegram integration.",
      "Phase 2 — Brand Identity: Design system, UI library, and brand assets.",
    ],
  },
  {
    phase: "Core Systems",
    title: "Core Systems",
    status: "in-progress",
    items: [
      "Phase 3 — User System: Authentication, profiles, and settings.",
      "Phase 4 — Coin System: Digital currency and transaction engine.",
      "Phase 5 — Gems System: Premium currency for exclusive features.",
    ],
  },
  {
    phase: "Membership",
    title: "Membership Systems",
    status: "in-progress",
    items: [
      "Phase 6 — Premium Membership: Tiered subscriptions and benefits.",
      "Phase 7 — Premium Requests: Request infrastructure and support.",
    ],
  },
  {
    phase: "Infrastructure",
    title: "Administrative Infrastructure",
    status: "planned",
    items: [
      "Admin Systems: Control panel, moderation, and analytics.",
      "Organizations: Enterprise orgs, teams, and role management.",
      "Support: Ticketing system and community moderation tools.",
    ],
  },
  {
    phase: "Platform Expansion",
    title: "Platform Expansion",
    status: "planned",
    items: [
      "Beta Infrastructure: Public beta services and scaling.",
      "Ecosystem Growth: Website, admin platform, and integrations.",
    ],
  },
  {
    phase: "Global Expansion",
    title: "Global Expansion",
    status: "planned",
    items: [
      "Public Beta: Open platform to the public.",
      "Enterprise Solutions: SSO, compliance, and support.",
      "Future Products: Additional ecosystem services.",
    ],
  },
];

export function getRoadmapPhases(): Promise<RoadmapPhase[]> {
  return Promise.resolve(phases);
}
