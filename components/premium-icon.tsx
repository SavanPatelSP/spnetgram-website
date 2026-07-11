"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface PremiumIconProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-12 w-12",
};

const iconSizeClasses = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-5 w-5",
};

export function PremiumIcon({
  children,
  className,
  size = "md",
}: PremiumIconProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-full shrink-0",
        "bg-[#0B0B0F] border border-white/[0.06]",
        "shadow-[0_2px_8px_rgba(0,0,0,0.3)]",
        "transition-all duration-250 ease-out",
        "group-hover:bg-[#111115] group-hover:border-white/[0.12]",
        "group-hover:shadow-[0_4px_16px_rgba(255,255,255,0.04)]",
        "group-hover:scale-105 group-hover:-translate-y-0.5",
        sizeClasses[size],
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-250",
          "bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none",
        )}
      />
      <div className={cn("relative text-white", iconSizeClasses[size])}>
        {children}
      </div>
    </div>
  );
}
