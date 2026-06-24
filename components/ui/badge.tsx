import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "destructive" | "outline";
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
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-wide uppercase transition-colors",
        {
          "bg-primary text-primary-foreground": variant === "default",
          "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/20": variant === "success",
          "bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/20": variant === "warning",
          "bg-red-500/15 text-red-400 ring-1 ring-red-500/20": variant === "destructive",
          "border border-border text-muted-foreground": variant === "outline",
        },
        className,
      )}
    >
      {children}
    </span>
  );
}
