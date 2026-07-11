"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavGroup } from "@/types";

interface DesktopNavProps {
  groups: NavGroup[];
}

export function DesktopNav({ groups }: DesktopNavProps) {
  const pathname = usePathname();
  const [openGroup, setOpenGroup] = React.useState<string | null>(null);
  const [isKeyboardNav, setIsKeyboardNav] = React.useState(false);
  const navRef = React.useRef<HTMLDivElement>(null);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout>>(null);

  const clearCloseTimeout = React.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const scheduleClose = React.useCallback(
    (groupId: string) => {
      clearCloseTimeout();
      timeoutRef.current = setTimeout(() => {
        setOpenGroup((current) => (current === groupId ? null : current));
      }, 150);
    },
    [clearCloseTimeout],
  );

  const handleGroupEnter = React.useCallback(
    (groupId: string) => {
      clearCloseTimeout();
      setOpenGroup(groupId);
    },
    [clearCloseTimeout],
  );

  const handleGroupLeave = React.useCallback(
    (groupId: string) => {
      scheduleClose(groupId);
    },
    [scheduleClose],
  );

  const handleToggle = React.useCallback(
    (groupId: string) => {
      setOpenGroup((current) => (current === groupId ? null : groupId));
    },
    [],
  );

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenGroup(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenGroup(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  React.useEffect(() => {
    setOpenGroup(null);
  }, [pathname]);

  React.useEffect(() => {
    return () => clearCloseTimeout();
  }, [clearCloseTimeout]);

  const isGroupActive = (group: NavGroup) =>
    group.items.some((item) => pathname === item.href);

  return (
    <nav
      ref={navRef}
      className="hidden lg:flex lg:items-center lg:gap-0.5"
      role="menubar"
      aria-label="Main navigation"
    >
      {groups.map((group) => {
        const isActive = isGroupActive(group);
        const isOpen = openGroup === group.id;

        return (
          <div
            key={group.id}
            className="relative"
            onMouseEnter={() => handleGroupEnter(group.id)}
            onMouseLeave={() => handleGroupLeave(group.id)}
          >
            <button
              role="menuitem"
              aria-haspopup="true"
              aria-expanded={isOpen}
              onClick={() => handleToggle(group.id)}
              onFocus={() => setIsKeyboardNav(true)}
              onBlur={() => setIsKeyboardNav(false)}
              className={cn(
                "inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                isActive
                  ? "text-foreground bg-accent/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/5",
                isKeyboardNav && "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              )}
            >
              {group.label}
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  isOpen && "rotate-180",
                )}
              />
            </button>

            {/* Dropdown panel */}
            {isOpen && (
              <div
                role="menu"
                className={cn(
                  "absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50",
                  "w-[340px]",
                  "animate-dropdown-enter",
                )}
                onMouseEnter={() => handleGroupEnter(group.id)}
                onMouseLeave={() => handleGroupLeave(group.id)}
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-zinc-900/98 via-zinc-900/95 to-zinc-950/98 backdrop-blur-2xl shadow-2xl shadow-black/50">
                  {/* Glass highlight */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
                  <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-blue-500/5 blur-3xl" />

                  <div className="relative p-2">
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      const isItemActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          role="menuitem"
                          className={cn(
                            "flex items-start gap-3 rounded-xl px-3 py-2.5 transition-all duration-150 group/item",
                            isItemActive
                              ? "bg-blue-500/[0.08]"
                              : "hover:bg-white/[0.04]",
                          )}
                        >
                          <div
                            className={cn(
                              "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-150",
                              isItemActive
                                ? "bg-blue-500/15 text-blue-400"
                                : "bg-white/[0.04] text-white/40 group-hover/item:bg-blue-500/10 group-hover/item:text-blue-400/80",
                            )}
                          >
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p
                              className={cn(
                                "text-sm font-medium transition-colors duration-150",
                                isItemActive
                                  ? "text-white/90"
                                  : "text-white/70 group-hover/item:text-white/90",
                              )}
                            >
                              {item.label}
                            </p>
                            <p className="text-xs text-white/35 mt-0.5 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          {isItemActive && (
                            <div className="shrink-0 mt-2.5 h-1.5 w-1.5 rounded-full bg-blue-400" />
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
