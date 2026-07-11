import { api } from "@/lib/api-client";
import type { FAQItem } from "@/types/api";

/* ─── Platform: GET /api/v1/website/faq ───
   Route handler at app/api/public/faq/route.ts is now OBSOLETE.
   The Platform serves this data via the Website FAQ module.
*/

export function getFAQs(): Promise<FAQItem[]> {
  return api.get<FAQItem[]>("/faq", {
    revalidate: 600,
    tags: ["faqs"],
  });
}
