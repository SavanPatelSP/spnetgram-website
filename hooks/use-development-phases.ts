import { useQuery } from "@tanstack/react-query";
import { getDevelopmentPhases } from "@/data/development-phases";
import type { DevelopmentPhase } from "@/types";

export function useDevelopmentPhases() {
  return useQuery<DevelopmentPhase[]>({
    queryKey: ["development-phases"],
    queryFn: getDevelopmentPhases,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 2,
  });
}
