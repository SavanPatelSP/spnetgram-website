import { CheckCircle, Circle, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { RoadmapItem } from "@/types";

interface RoadmapTimelineProps {
  items: RoadmapItem[];
}

export function RoadmapTimeline({ items }: RoadmapTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-border via-border to-transparent" />
      <div className="space-y-12">
        {(["completed", "in-progress", "planned"] as const).map((status) => {
          const filteredItems = items.filter((item) => item.status === status);
          if (filteredItems.length === 0) return null;

          return (
            <div key={status}>
              <div className="mb-6 flex items-center gap-3">
                {status === "completed" ? (
                  <CheckCircle className="h-6 w-6 text-emerald-500" />
                ) : status === "in-progress" ? (
                  <Loader2 className="h-6 w-6 text-amber-500 animate-spin" />
                ) : (
                  <Circle className="h-6 w-6 text-muted-foreground/50" />
                )}
                <h3 className="text-xl font-semibold tracking-tight capitalize">
                  {status.replace("-", " ")}
                </h3>
                <span className="text-sm text-muted-foreground/60">
                  ({filteredItems.length})
                </span>
              </div>
              <div className="ml-16 space-y-4">
                {filteredItems.map((item, index) => (
                  <div
                    key={index}
                    className="group relative"
                  >
                    <div
                      className={cn(
                        "absolute -left-16 top-2.5 h-3 w-3 rounded-full border-2 transition-all duration-300",
                        status === "completed"
                          ? "border-emerald-500 bg-emerald-500/30 shadow-[0_0_8px_rgba(52,211,153,0.15)]"
                          : status === "in-progress"
                            ? "border-amber-500 bg-amber-500/30 shadow-[0_0_8px_rgba(251,191,36,0.15)]"
                            : "border-muted-foreground/30 bg-background",
                      )}
                    />
                    <div className="rounded-xl border border-border/50 bg-card p-6 transition-all duration-200 hover:border-border hover:shadow-sm">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          <h4 className="font-semibold tracking-tight">{item.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex shrink-0 gap-2">
                          <Badge variant="outline">{item.quarter}</Badge>
                          <Badge variant="default">{item.category}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
