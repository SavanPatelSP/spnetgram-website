import type { SiteConfig } from "@/types/api";

const config: SiteConfig = {
  appName: "SP NET GRAM",
  tagline: "The Future of Messaging",
  description:
    "A next-generation Telegram experience with premium services, digital economy, and organization tools.",
  featureFlags: {
    waitlistEnabled: true,
    premiumEnabled: true,
    newsroomEnabled: true,
    roadmapEnabled: true,
    downloadsEnabled: true,
  },
};

export function getSiteConfiguration(): Promise<SiteConfig | null> {
  return Promise.resolve(config);
}
