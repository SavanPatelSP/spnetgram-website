import type { Metadata } from "next";
import { NewsroomPageContent } from "./page-content";

export const metadata: Metadata = {
  title: "Newsroom",
  description:
    "Press releases, media coverage, and official announcements from SP NET GRAM.",
};

export default function NewsroomPage() {
  return <NewsroomPageContent />;
}
