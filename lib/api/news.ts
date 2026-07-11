import { api } from "@/lib/api-client";
import type { Article } from "@/types/api";

/* ─── Platform: GET /api/v1/website/news ───
   Route handler at app/api/public/newsroom/route.ts is now OBSOLETE.
   The Platform serves this data directly via the Website News module.
*/

export function getArticles(): Promise<Article[]> {
  return api.get<Article[]>("/news", {
    revalidate: 300,
    tags: ["news"],
  });
}
