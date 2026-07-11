import { api } from "@/lib/api-client";
import type { StatusMetric } from "@/types";

/* ─── Platform: GET /api/v1/website/status ───
   Route handler at app/api/public/status-metrics/route.ts is now OBSOLETE.
   The Platform serves this data via the Website Status module.
*/

export function getStatusMetrics(): Promise<StatusMetric[]> {
  return api.get<StatusMetric[]>("/status", {
    revalidate: 600,
    tags: ["status"],
  });
}
