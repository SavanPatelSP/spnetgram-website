import type { Metadata } from "next";
import { DevelopmentPageContent } from "./page-content";

export const metadata: Metadata = {
  title: "Development",
  description:
    "Track the ongoing development and upcoming features of SP NET GRAM.",
};

export default function DevelopmentPage() {
  return <DevelopmentPageContent />;
}
