import { useMutation } from "@tanstack/react-query";
import { submitWaitlistEntry } from "@/data/waitlist";
import type { WaitlistSubmission } from "@/types/api";

export function useSubmitWaitlist() {
  return useMutation({
    mutationFn: submitWaitlistEntry,
  });
}
