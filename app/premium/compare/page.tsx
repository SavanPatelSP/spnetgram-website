import type { Metadata } from "next";
import { ComparePageContent } from "./page-content";

export const metadata: Metadata = {
  title: "Compare Premium Plans | SP NET GRAM",
  description: "Compare SP NET GRAM Premium plans side-by-side. Explore features, limits, and support tiers to find the perfect plan for you.",
};

export default function ComparePage() {
  return <ComparePageContent />;
}
