import { useQuery } from "@tanstack/react-query";
import { getStatusMetrics } from "@/data/status-metrics";
import type { StatusMetric } from "@/types";

export function useStatusMetrics() {
  return useQuery<StatusMetric[]>({
    queryKey: ["status-metrics"],
    queryFn: getStatusMetrics,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 2,
  });
}
