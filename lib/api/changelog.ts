import { api } from "@/lib/api-client";
import type { ChangelogEntry } from "@/types";

/* ─── Platform: GET /api/v1/website/changelog ───
   Route handler at app/api/public/changelog/route.ts is now OBSOLETE.
   The Platform serves this data via the Website Changelog module.
*/

export function getChangelog(): Promise<ChangelogEntry[]> {
  return api.get<ChangelogEntry[]>("/changelog", {
    revalidate: 600,
    tags: ["changelog"],
  });
}
