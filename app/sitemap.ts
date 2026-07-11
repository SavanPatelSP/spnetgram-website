import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const staticRoutes = [
  "",
  "/ai",
  "/beta",
  "/careers",
  "/changelog",
  "/coins-gems",
  "/community",
  "/company",
  "/contact",
  "/cookies",
  "/development",
  "/disclaimer",
  "/docs",
  "/download-help",
  "/downloads",
  "/faq",
  "/feature-requests",
  "/newsroom",
  "/platform",
  "/premium",
  "/premium-help",
  "/privacy",
  "/product",
  "/report-bug",
  "/roadmap",
  "/status",
  "/support",
  "/team",
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
