import { api } from "@/lib/api-client";
import type { PricingCategory } from "@/types/api";

/* ─── Platform: GET /api/v1/website/plans ───
   Route handler at app/api/public/pricing/categories/route.ts is now OBSOLETE.
   The Platform serves this data directly via the Website Plans module.
*/

export function getPricingCategories(): Promise<PricingCategory[]> {
  return api.get<PricingCategory[]>("/plans", {
    revalidate: 300,
    tags: ["pricing"],
  });
}
