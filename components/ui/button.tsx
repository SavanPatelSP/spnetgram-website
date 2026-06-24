"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "outline" | "ghost" | "link";
  size?: "sm" | "default" | "lg";
  children: React.ReactNode;
}

export function Button({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md":
            variant === "default",
          "bg-white text-black hover:bg-white/90 shadow-sm hover:shadow-md active:scale-[0.98]":
            variant === "primary",
          "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground active:scale-[0.98]":
            variant === "outline",
          "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
          "text-primary underline-offset-4 hover:underline": variant === "link",
        },
        {
          "h-9 px-3 text-xs": size === "sm",
          "h-10 px-5 py-2": size === "default",
          "h-12 px-8 text-base": size === "lg",
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
