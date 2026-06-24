import {
  MessageSquare,
  Building2,
  Sparkles,
  Code,
  CircleDollarSign,
  Gem,
  Shield,
  Globe,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { PlatformFeature } from "@/types";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  MessageSquare,
  Building2,
  Sparkles,
  Code,
  CircleDollarSign,
  Gem,
  Shield,
  Globe,
};

interface FeatureGridProps {
  features: PlatformFeature[];
  columns?: 2 | 3 | 4;
}

export function FeatureGrid({
  features,
  columns = 4,
}: FeatureGridProps) {
  return (
    <div
      className={cn(
        "grid gap-6",
        columns === 2 && "md:grid-cols-2",
        columns === 3 && "md:grid-cols-2 lg:grid-cols-3",
        columns === 4 && "sm:grid-cols-2 lg:grid-cols-4",
      )}
    >
      {features.map((feature) => {
        const Icon = iconMap[feature.icon] || MessageSquare;
        return (
          <Card
            key={feature.title}
            className="group p-6 border-border/50 hover:border-border hover:shadow-sm hover:bg-accent/[0.02] transition-all duration-200"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/50 group-hover:bg-accent transition-colors duration-200">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-semibold tracking-tight">{feature.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
            <div className="mt-4">
              <Badge
                variant={
                  feature.status === "available"
                    ? "success"
                    : feature.status === "beta"
                      ? "warning"
                      : "outline"
                }
              >
                {feature.status === "available"
                  ? "Available"
                  : feature.status === "beta"
                    ? "Beta"
                    : "Coming Soon"}
              </Badge>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
