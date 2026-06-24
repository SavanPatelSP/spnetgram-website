import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card transition-all duration-200",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children }: CardProps) {
  return <div className={cn("mb-4", className)}>{children}</div>;
}

export function CardTitle({ className, children }: CardProps) {
  return (
    <h3 className={cn("text-lg font-semibold leading-none tracking-tight", className)}>
      {children}
    </h3>
  );
}

export function CardDescription({ className, children }: CardProps) {
  return (
    <p className={cn("mt-2 text-sm text-muted-foreground leading-relaxed", className)}>
      {children}
    </p>
  );
}

export function CardContent({ className, children }: CardProps) {
  return <div className={cn(className)}>{children}</div>;
}
