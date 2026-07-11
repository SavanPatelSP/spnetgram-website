import { teamProfiles } from "@/config/team";
import type { TeamMember } from "@/types/api";

export function getTeamMembers(): Promise<TeamMember[]> {
  const members: TeamMember[] = teamProfiles.map((profile) => ({
    id: profile.id,
    name: profile.name,
    role: profile.role,
    bio: profile.bio,
    avatarUrl: null,
    socialLinks: JSON.stringify(
      profile.socialLinks.map((l) => ({ platform: l.platform, url: l.url }))
    ),
    displayOrder: 1,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }));

  return Promise.resolve(members);
}
