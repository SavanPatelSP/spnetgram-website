"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbSegment {
  label: string;
  href: string;
}

const routeLabels: Record<string, string> = {
  ai: "AI",
  beta: "Beta",
  careers: "Careers",
  changelog: "Changelog",
  "coins-gems": "Coins & Gems",
  community: "Community",
  company: "Company",
  contact: "Contact",
  cookies: "Cookies",
  development: "Development",
  disclaimer: "Disclaimer",
  docs: "Documentation",
  "download-help": "Download Help",
  downloads: "Downloads",
  faq: "FAQ",
  "feature-requests": "Feature Requests",
  newsroom: "Newsroom",
  platform: "Platform",
  premium: "Premium",
  compare: "Compare",
  "premium-help": "Premium Help",
  privacy: "Privacy",
  product: "Product",
  "report-bug": "Report a Bug",
  roadmap: "Roadmap",
  status: "Status",
  support: "Support",
  team: "Team",
  terms: "Terms",
  waitlist: "Waitlist",
};

function getBreadcrumbSegments(pathname: string): BreadcrumbSegment[] {
  if (pathname === "/") return [];

  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs: BreadcrumbSegment[] = [];
  let cumulativePath = "";

  for (const segment of segments) {
    cumulativePath += `/${segment}`;
    const label =
      routeLabels[segment] ||
      segment.charAt(0).toUpperCase() + segment.slice(1);
    breadcrumbs.push({
      label,
      href: cumulativePath,
    });
  }

  return breadcrumbs;
}

interface BreadcrumbsProps {
  className?: string;
  items?: BreadcrumbSegment[];
}

export function Breadcrumbs({ className, items }: BreadcrumbsProps) {
  const pathname = usePathname();
  const segments = items || getBreadcrumbSegments(pathname);

  if (segments.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("border-t border-border/50", className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center gap-1.5 text-xs text-muted-foreground/50">
          <li>
            <Link
              href="/"
              className="inline-flex items-center gap-1 hover:text-foreground/70 transition-colors duration-150"
            >
              <Home className="h-3 w-3" />
              <span className="sr-only sm:not-sr-only">Home</span>
            </Link>
          </li>
          {segments.map((segment, index) => {
            const isLast = index === segments.length - 1;
            return (
              <li key={segment.href} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3 text-muted-foreground/30" />
                {isLast ? (
                  <span className="text-foreground/70 font-medium">
                    {segment.label}
                  </span>
                ) : (
                  <Link
                    href={segment.href}
                    className="hover:text-foreground/70 transition-colors duration-150"
                  >
                    {segment.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
