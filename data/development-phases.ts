import type { DevelopmentPhase } from "@/types";

const phases: DevelopmentPhase[] = [
  {
    phase: "Phase 0",
    title: "Project Governance",
    status: "completed",
    description: "Establish project governance, framework, and standards.",
    items: [
      "Project charter and governance model",
      "Development workflow and CI/CD",
      "Code standards and contribution guidelines",
      "Community and communication channels",
    ],
  },
  {
    phase: "Phase 1",
    title: "Foundation",
    status: "completed",
    description: "Build the core application framework on Telegram.",
    items: [
      "Core application architecture",
      "Telegram API integration layer",
      "Authentication and session management",
      "Basic messaging interface",
    ],
  },
  {
    phase: "Phase 2",
    title: "Branding",
    status: "completed",
    description: "Develop brand identity and design system.",
    items: [
      "Brand identity and visual language",
      "UI component library and design system",
      "Website and marketing materials",
      "App icon and branding assets",
    ],
  },
  {
    phase: "Phase 3",
    title: "User System",
    status: "completed",
    description: "Comprehensive user management system.",
    items: [
      "User registration and profiles",
      "Account settings and preferences",
      "Multi-device session management",
      "User search and discovery",
    ],
  },
  {
    phase: "Phase 4",
    title: "Coin System",
    status: "in-progress",
    description: "Build SP NET GRAM Coins digital currency.",
    items: [
      "Coin wallet and transaction engine",
      "Earning mechanisms and rewards",
      "Coin-based feature unlocking",
      "Transaction history and analytics",
    ],
  },
  {
    phase: "Phase 5",
    title: "Gems System",
    status: "in-progress",
    description: "Implement Gems premium currency system.",
    items: [
      "Gem wallet and purchase flow",
      "Premium feature gating with Gems",
      "Gift and transfer system",
      "Gem analytics dashboard",
    ],
  },
  {
    phase: "Phase 6",
    title: "Premium Membership",
    status: "in-progress",
    description: "Tiered premium membership system.",
    items: [
      "Membership tier definition and pricing",
      "Subscription management and billing",
      "Premium feature access control",
      "Member portal and benefits hub",
    ],
  },
  {
    phase: "Phase 7",
    title: "Premium Requests",
    status: "planned",
    description: "Premium request and support infrastructure.",
    items: [
      "Request submission system",
      "Priority queuing and routing",
      "Request tracking and status updates",
      "Integration with support systems",
    ],
  },
  {
    phase: "Phase 8+",
    title: "Platform Expansion",
    status: "planned",
    description: "Administrative, organizational, and infrastructure systems.",
    items: [
      "Administrative control panel",
      "Organization management",
      "Support and moderation tools",
      "Infrastructure scaling and optimization",
    ],
  },
];

export function getDevelopmentPhases(): Promise<DevelopmentPhase[]> {
  return Promise.resolve(phases);
}
