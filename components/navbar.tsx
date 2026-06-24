"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/config/site";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white transition-transform hover:scale-105">
              <span className="text-sm font-bold text-black">S</span>
            </div>
            <span className="text-base font-semibold tracking-tight">
              SP NET GRAM
            </span>
          </Link>

          <nav className="hidden lg:flex lg:items-center lg:gap-0.5">
            {navLinks.slice(0, 8).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-colors rounded-md",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-px h-px bg-foreground/30" />
                  )}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-accent text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
