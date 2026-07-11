import { api } from "@/lib/api-client";
import type { WaitlistSubmission } from "@/types/api";

/* ─── ⚠ KEPT AS LOCAL — No Platform equivalent yet.
   The waitlist endpoint is not yet part of the Platform.
   This module still uses the local Next.js API route.
   Future: migrate to Platform Identity module when available.
*/

export function submitWaitlistEntry(data: WaitlistSubmission): Promise<{
  id: string;
  fullName: string;
  email: string;
  position: number;
  ownReferralCode: string;
}> {
  return api.post("/waitlist", data, { retry: { maxRetries: 0, baseDelayMs: 0 } });
}
