import { api } from "@/lib/api-client";
import type { RoadmapPhase } from "@/types";

/* ─── Platform: GET /api/v1/website/roadmap-phases ───
   Route handler at app/api/public/roadmap-phases/route.ts is now OBSOLETE.
   The Platform serves this data via the Website Roadmap Phases module.
*/

export function getRoadmapPhases(): Promise<RoadmapPhase[]> {
  return api.get<RoadmapPhase[]>("/roadmap-phases", {
    revalidate: 600,
    tags: ["roadmap-phases"],
  });
}
