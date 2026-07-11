import { api } from "@/lib/api-client";
import type { Announcement } from "@/types/api";

/* ─── Platform: GET /api/v1/website/announcements ───
   Route handler at app/api/public/announcements/active/route.ts is now OBSOLETE.
   The rewrite in next.config.ts proxies this directly to the Platform.
*/

export function getActiveAnnouncements(): Promise<Announcement[]> {
  return api.get<Announcement[]>("/announcements", {
    revalidate: 120,
    tags: ["announcements"],
  });
}
