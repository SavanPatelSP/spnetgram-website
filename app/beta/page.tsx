import type { Metadata } from "next";
import { BetaPageContent } from "./page-content";

export const metadata: Metadata = {
  title: "Beta Program",
  description:
    "Join the SP NET GRAM beta program and get early access to new features.",
};

export default function BetaPage() {
  return <BetaPageContent />;
}
