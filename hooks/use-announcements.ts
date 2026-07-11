import { useQuery } from "@tanstack/react-query";
import { getActiveAnnouncements } from "@/data/announcements";
import type { Announcement } from "@/types/api";

export function useActiveAnnouncements() {
  return useQuery<Announcement[]>({
    queryKey: ["announcements", "active"],
    queryFn: getActiveAnnouncements,
    staleTime: 2 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
    retry: 2,
    refetchOnWindowFocus: true,
  });
}
