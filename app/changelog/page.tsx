import type { Metadata } from "next";
import { ChangelogPageContent } from "./page-content";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "Release notes and version history for SP NET GRAM.",
};

export default function ChangelogPage() {
  return <ChangelogPageContent />;
}
