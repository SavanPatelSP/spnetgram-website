import { useQuery } from "@tanstack/react-query";
import { getChangelog } from "@/data/changelog";
import type { ChangelogEntry } from "@/types";

export function useChangelog() {
  return useQuery<ChangelogEntry[]>({
    queryKey: ["changelog"],
    queryFn: getChangelog,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 2,
  });
}
