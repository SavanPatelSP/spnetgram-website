import { api } from "@/lib/api-client";
import type { DevelopmentPhase } from "@/types";

/* ─── Platform: GET /api/v1/website/development ───
   Route handler at app/api/public/development-phases/route.ts is now OBSOLETE.
   The Platform serves this data via the Website Development module.
*/

export function getDevelopmentPhases(): Promise<DevelopmentPhase[]> {
  return api.get<DevelopmentPhase[]>("/development", {
    revalidate: 600,
    tags: ["development"],
  });
}
