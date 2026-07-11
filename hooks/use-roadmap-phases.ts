import { useQuery } from "@tanstack/react-query";
import { getRoadmapPhases } from "@/data/roadmap-phases";
import type { RoadmapPhase } from "@/types";

export function useRoadmapPhases() {
  return useQuery<RoadmapPhase[]>({
    queryKey: ["roadmap-phases"],
    queryFn: getRoadmapPhases,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 2,
  });
}
