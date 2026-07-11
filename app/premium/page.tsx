import type { Metadata } from "next";
import { PremiumPageContent } from "./page-content";

export const metadata: Metadata = {
  title: "Premium",
  description:
    "Unlock premium messaging features with SP NET GRAM Premium.",
};

export default function PremiumPage() {
  return <PremiumPageContent />;
}
