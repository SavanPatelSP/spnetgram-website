import { api } from "@/lib/api-client";
import type { TeamMember } from "@/types/api";

/* ─── Platform: GET /api/v1/website/team ───
   Route handler at app/api/public/team/route.ts is now OBSOLETE.
   The Platform serves this data via the Website Team module.
*/

export function getTeamMembers(): Promise<TeamMember[]> {
  return api.get<TeamMember[]>("/team", {
    revalidate: 600,
    tags: ["team"],
  });
}
