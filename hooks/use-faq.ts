import { useQuery } from "@tanstack/react-query";
import { getFAQs } from "@/data/faq";
import type { FAQItem } from "@/types/api";

export function useFAQs() {
  return useQuery<FAQItem[]>({
    queryKey: ["faqs"],
    queryFn: getFAQs,
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    retry: 2,
  });
}
