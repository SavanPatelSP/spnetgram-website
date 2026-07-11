import { useQuery } from "@tanstack/react-query";
import { getTeamMembers } from "@/data/team";
import type { TeamMember } from "@/types/api";

export function useTeamMembers() {
  return useQuery<TeamMember[]>({
    queryKey: ["team"],
    queryFn: getTeamMembers,
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    retry: 2,
  });
}
