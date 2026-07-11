import type { Metadata } from "next";
import { StatusPageContent } from "./page-content";

export const metadata: Metadata = {
  title: "System Status",
  description:
    "Real-time status and performance metrics for SP NET GRAM services.",
};

export default function StatusPage() {
  return <StatusPageContent />;
}
