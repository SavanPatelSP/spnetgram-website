import { api } from "@/lib/api-client";
import type { RoadmapItem } from "@/types/api";

/* ─── Platform: GET /api/v1/website/roadmap ───
   Route handler at app/api/public/roadmap/route.ts is now OBSOLETE.
   The Platform serves this data directly via the Website Roadmap module.
*/

export function getRoadmapItems(): Promise<RoadmapItem[]> {
  return api.get<RoadmapItem[]>("/roadmap", {
    revalidate: 300,
    tags: ["roadmap"],
  });
}
