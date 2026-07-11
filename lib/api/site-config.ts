import { api } from "@/lib/api-client";
import type { SiteConfig } from "@/types/api";

/* ─── Platform: GET /api/v1/website/settings ───
   Route handler at app/api/public/site-config/route.ts is now OBSOLETE.
   The Platform serves the consolidated website settings via the Website Settings endpoint.
*/

export function getSiteConfiguration(): Promise<SiteConfig | null> {
  return api.get<SiteConfig | null>("/settings", {
    revalidate: 600,
    tags: ["site-config"],
  });
}
