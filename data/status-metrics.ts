import type { StatusMetric } from "@/types";

const metrics: StatusMetric[] = [
  {
    label: "Development Status",
    value: 72,
    description: "Core systems and feature development progressing",
    status: "success",
  },
  {
    label: "Beta Readiness",
    value: 48,
    description: "Infrastructure readiness for public beta",
    status: "warning",
  },
  {
    label: "Infrastructure Readiness",
    value: 65,
    description: "Server deployment and global availability",
    status: "warning",
  },
  {
    label: "Platform Progress",
    value: 58,
    description: "Overall completion across all phases",
    status: "warning",
  },
  {
    label: "Latest Release",
    value: 100,
    description: "v0.2.0 — Organization and Coins system",
    status: "success",
  },
];

export function getStatusMetrics(): Promise<StatusMetric[]> {
  return Promise.resolve(metrics);
}
