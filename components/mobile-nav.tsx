"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavGroup } from "@/types";

interface MobileNavProps {
  groups: NavGroup[];
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ groups, isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const [expandedGroup, setExpandedGroup] = React.useState<string | null>(null);
  const navRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setExpandedGroup(null);
  }, [pathname, isOpen]);

  React.useEffect(() => {
    if (!isOpen) return;

    const navEl = navRef.current;
    if (!navEl) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key !== "Tab") return;

      const focusable = navEl.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Focus first element on open
    requestAnimationFrame(() => {
      const firstFocusable = navEl.querySelector<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      firstFocusable?.focus();
    });

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const toggleGroup = React.useCallback((groupId: string) => {
    setExpandedGroup((current) => (current === groupId ? null : groupId));
  }, []);

  if (!isOpen) return null;

  return (
    <div className="border-t border-border/40 bg-background/95 backdrop-blur-2xl lg:hidden">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
        <nav ref={navRef} className="flex flex-col" role="menu" aria-label="Mobile navigation">
          {groups.map((group) => {
            const isExpanded = expandedGroup === group.id;
            const hasActiveItem = group.items.some(
              (item) => pathname === item.href,
            );

            return (
              <div key={group.id}>
                <button
                  onClick={() => toggleGroup(group.id)}
                  aria-expanded={isExpanded}
                  className={cn(
                    "w-full flex items-center justify-between rounded-lg px-3 py-2.5 text-left transition-all duration-150",
                    hasActiveItem
                      ? "bg-accent/10 text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/5",
                  )}
                >
                  <span className="text-sm font-medium">{group.label}</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      isExpanded && "rotate-180",
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-out",
                    isExpanded
                      ? "max-h-[600px] opacity-100"
                      : "max-h-0 opacity-0",
                  )}
                >
                  <div className="pl-2 py-1 space-y-0.5">
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      const isItemActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={onClose}
                          role="menuitem"
                          className={cn(
                            "flex items-center gap-2.5 rounded-lg px-3 py-2 transition-all duration-150",
                            isItemActive
                              ? "bg-accent/10 text-foreground"
                              : "text-muted-foreground hover:text-foreground hover:bg-accent/5",
                          )}
                        >
                          <div
                            className={cn(
                              "flex h-7 w-7 shrink-0 items-center justify-center rounded-md transition-colors duration-150",
                              isItemActive
                                ? "bg-blue-500/15 text-blue-400"
                                : "bg-white/[0.04] text-muted-foreground/60",
                            )}
                          >
                            <Icon className="h-3.5 w-3.5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium">{item.label}</p>
                            <p className="text-[11px] text-muted-foreground/50 mt-0.5 truncate">
                              {item.description}
                            </p>
                          </div>
                          {isItemActive && (
                            <div className="shrink-0 h-1.5 w-1.5 rounded-full bg-blue-400" />
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}

          <hr className="my-2 border-border/50" />

          <Link
            href="/contact"
            onClick={onClose}
            className={cn(
              "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors text-center",
              pathname === "/contact"
                ? "bg-accent/10 text-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/5",
            )}
          >
            Contact
          </Link>
          <Link
            href="/community"
            onClick={onClose}
            className={cn(
              "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors text-center",
              pathname === "/community"
                ? "bg-accent/10 text-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/5",
            )}
          >
            Community
          </Link>

          <Link
            href="/waitlist"
            onClick={onClose}
            className="group mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 active:scale-[0.98] shine"
          >
            <Sparkles className="h-4 w-4" />
            Download SP NET GRAM
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </nav>
      </div>
    </div>
  );
}
