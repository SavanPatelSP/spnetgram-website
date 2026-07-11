import { useQuery } from "@tanstack/react-query";
import { getSiteConfiguration } from "@/data/site-config";
import type { SiteConfig } from "@/types/api";

export function useSiteConfiguration() {
  return useQuery<SiteConfig | null>({
    queryKey: ["site-config"],
    queryFn: getSiteConfiguration,
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    retry: 2,
  });
}
