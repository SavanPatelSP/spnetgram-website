import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "destructive" | "outline" | "premium" | "ai";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold tracking-wider uppercase transition-all duration-300",
        {
          "bg-primary/10 text-primary ring-1 ring-primary/20": variant === "default",
          "bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20": variant === "success",
          "bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/20": variant === "warning",
          "bg-red-500/10 text-red-400 ring-1 ring-red-500/20": variant === "destructive",
          "border border-border/50 text-muted-foreground": variant === "outline",
          "bg-gradient-to-r from-amber-400/15 to-amber-500/10 text-amber-400 ring-1 ring-amber-500/25":
            variant === "premium",
          "bg-gradient-to-r from-purple-500/15 to-blue-500/10 text-purple-400 ring-1 ring-purple-500/25":
            variant === "ai",
        },
        className,
      )}
    >
      {children}
    </span>
  );
}
