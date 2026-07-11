import { useQuery } from "@tanstack/react-query";
import { getPricingCategories } from "@/data/pricing";
import type { PricingCategory } from "@/types/api";

export function usePricingCategories() {
  return useQuery<PricingCategory[]>({
    queryKey: ["pricing", "categories"],
    queryFn: getPricingCategories,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 3,
  });
}
