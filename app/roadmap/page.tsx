import type { Metadata } from "next";
import { RoadmapPageContent } from "./page-content";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "Explore the SP NET GRAM product roadmap and see what's coming next.",
};

export default function RoadmapPage() {
  return <RoadmapPageContent />;
}
