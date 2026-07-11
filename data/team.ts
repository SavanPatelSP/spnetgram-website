import type { TeamMember } from "@/types/api";

const members: TeamMember[] = [
  {
    id: "team-1",
    name: "Savan Patel",
    role: "Founder & Lead Developer",
    bio: "Savan Patel founded SP NET INC with a vision to build technology that empowers people. He leads product strategy, architecture, and engineering for the SP NET GRAM ecosystem.",
    avatarUrl: null,
    socialLinks: JSON.stringify([
      { platform: "linkedin", url: "https://linkedin.com/in/savanpatel" },
      { platform: "github", url: "https://github.com/savanpatel" },
      { platform: "email", url: "mailto:savan@spnetgram.com" },
    ]),
    displayOrder: 1,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export function getTeamMembers(): Promise<TeamMember[]> {
  return Promise.resolve(members);
}
