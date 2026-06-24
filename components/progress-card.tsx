import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ProgressCardProps {
  label: string;
  value: number;
  description: string;
  status?: "success" | "warning" | "neutral";
  className?: string;
}

export function ProgressCard({
  label,
  value,
  description,
  status = "neutral",
  className,
}: ProgressCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border/50 bg-card p-6 transition-all duration-200 hover:border-border hover:shadow-sm",
        className,
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold tracking-tight">{label}</h3>
        <Badge
          variant={
            status === "success"
              ? "success"
              : status === "warning"
                ? "warning"
                : "outline"
          }
        >
          {value}%
        </Badge>
      </div>
      <div className="mb-3 h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-700 ease-out",
            status === "success"
              ? "bg-emerald-500"
              : status === "warning"
                ? "bg-amber-500"
                : "bg-primary/50",
          )}
          style={{ width: `${value}%` }}
        />
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
