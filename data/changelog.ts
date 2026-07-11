import type { ChangelogEntry } from "@/types";

const changelog: ChangelogEntry[] = [
  {
    version: "v0.2.0",
    date: "2026-06-12",
    type: "release",
    title: "Organization Tools and Coins System",
    description:
      "Initial release of organization management tools and Coin system foundation.",
    changes: [
      "Organization creation and management interface",
      "Role-based access controls for organizations",
      "SP NET GRAM Coins wallet implementation",
      "Coin earning through platform engagement",
      "Enhanced group management features",
      "Performance improvements across the platform",
    ],
  },
  {
    version: "v0.1.1",
    date: "2026-05-28",
    type: "update",
    title: "Bug Fixes and Performance Improvements",
    description:
      "Stability improvements and bug fixes based on internal testing feedback.",
    changes: [
      "Fixed session management edge cases",
      "Improved message sync reliability",
      "Reduced memory usage in chat lists",
      "Enhanced error handling for API requests",
      "Updated UI components for consistency",
    ],
  },
  {
    version: "v0.1.0",
    date: "2026-05-15",
    type: "release",
    title: "Initial SP NET GRAM Foundation",
    description:
      "First release establishing the foundation for enhanced Telegram experiences.",
    changes: [
      "Core application framework on Telegram infrastructure",
      "User authentication and profile management",
      "Basic messaging and group functionality",
      "Brand design system implemented",
      "Cross-platform session synchronization",
      "Initial security and encryption layers",
    ],
  },
];

export function getChangelog(): Promise<ChangelogEntry[]> {
  return Promise.resolve(changelog);
}
