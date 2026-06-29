import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "premium";
  size?: "sm" | "default" | "lg" | "xl";
  children: React.ReactNode;
}

export function Button({
  className,
  variant = "primary",
  size = "default",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
        {
          "rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.97] hover:brightness-110":
            variant === "primary",
          "rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/80 active:scale-[0.97]":
            variant === "secondary",
          "rounded-xl border border-border bg-transparent hover:bg-accent hover:text-accent-foreground active:scale-[0.97]":
            variant === "outline",
          "rounded-xl hover:bg-accent/50 hover:text-accent-foreground": variant === "ghost",
          "text-primary underline-offset-4 hover:underline": variant === "link",
          "rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35 active:scale-[0.97] shine":
            variant === "premium",
        },
        {
          "h-9 px-4 text-xs gap-1.5": size === "sm",
          "h-11 px-6 text-sm gap-2": size === "default",
          "h-13 px-8 text-base gap-2.5": size === "lg",
          "h-14 px-10 text-lg gap-3": size === "xl",
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
