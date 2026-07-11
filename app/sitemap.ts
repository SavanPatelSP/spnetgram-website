import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const staticRoutes = [
  "",
  "/beta",
  "/careers",
  "/changelog",
  "/company",
  "/cookies",
  "/development",
  "/disclaimer",
  "/docs",
  "/newsroom",
  "/platform",
  "/premium",
  "/privacy",
  "/roadmap",
  "/status",
  "/support",
  "/terms",
  "/waitlist",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" as const : "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
