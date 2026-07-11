import { useQuery } from "@tanstack/react-query";
import { getArticles } from "@/data/news";
import type { Article } from "@/types/api";

export function useArticles() {
  return useQuery<Article[]>({
    queryKey: ["news", "articles"],
    queryFn: getArticles,
    staleTime: 5 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
    retry: 3,
  });
}
