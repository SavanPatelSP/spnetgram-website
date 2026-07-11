import { useQuery } from "@tanstack/react-query";
import { getDownloadInfo } from "@/data/downloads";
import type { DownloadInfo } from "@/types/api";

export function useDownloadInfo() {
  return useQuery<DownloadInfo[]>({
    queryKey: ["downloads"],
    queryFn: getDownloadInfo,
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    retry: 2,
  });
}
