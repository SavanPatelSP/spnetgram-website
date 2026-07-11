import { useQuery } from "@tanstack/react-query";
import { getRoadmapItems } from "@/data/roadmap";
import type { RoadmapItem } from "@/types/api";

export function useRoadmapItems() {
  return useQuery<RoadmapItem[]>({
    queryKey: ["roadmap"],
    queryFn: getRoadmapItems,
    staleTime: 5 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
    retry: 2,
  });
}
