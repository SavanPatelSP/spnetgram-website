import { ProgressCard } from "@/components/progress-card";
import type { StatusMetric } from "@/types";
import { cn } from "@/lib/utils";

interface StatusDashboardProps {
  metrics: StatusMetric[];
}

export function StatusDashboard({ metrics }: StatusDashboardProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric) => (
        <ProgressCard
          key={metric.label}
          label={metric.label}
          value={metric.value}
          description={metric.description}
          status={metric.status}
        />
      ))}
    </div>
  );
}
