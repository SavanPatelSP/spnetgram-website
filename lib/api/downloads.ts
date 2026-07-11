import { api } from "@/lib/api-client";
import type { DownloadInfo } from "@/types/api";

/* ─── Platform: GET /api/v1/website/downloads ───
   Route handler at app/api/public/downloads/route.ts is now OBSOLETE.
   The Platform serves this data via the Website Downloads module.
*/

export function getDownloadInfo(): Promise<DownloadInfo[]> {
  return api.get<DownloadInfo[]>("/downloads", {
    revalidate: 600,
    tags: ["downloads"],
  });
}
