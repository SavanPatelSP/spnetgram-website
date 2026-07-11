import type { WaitlistSubmission } from "@/types/api";

export function submitWaitlistEntry(data: WaitlistSubmission): Promise<{
  id: string;
  fullName: string;
  email: string;
  position: number;
  ownReferralCode: string;
}> {
  return Promise.resolve({
    id: "local-waitlist-entry",
    fullName: data.fullName,
    email: data.email,
    position: 1,
    ownReferralCode: `REF-${data.fullName.substring(0, 3).toUpperCase()}-${Date.now().toString(36).toUpperCase()}`,
  });
}
