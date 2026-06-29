"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/config/site";

function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2.5 shrink-0">
      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 shadow-lg shadow-blue-500/20 transition-all duration-300 group-hover:shadow-blue-500/30 group-hover:scale-105">
        <span className="text-sm font-bold text-white tracking-tight">S</span>
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-bold tracking-tight leading-tight">
          {siteConfig.shortName}
        </span>
        <span className="text-[8px] font-medium text-muted-foreground/50 tracking-widest uppercase leading-tight">
          By SP NET INC
        </span>
      </div>
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/40 bg-background/70 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/50"
          : "bg-gradient-to-b from-background/50 to-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          <Logo />

          <nav className="hidden lg:flex lg:items-center lg:gap-1">
            {navLinks.map((link) => {
              const isHash = link.href.startsWith("#");
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-3.5 py-2 text-sm font-medium transition-all duration-200 rounded-lg",
                    isActive
                      ? "text-foreground bg-accent/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/5",
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-px h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Link
              href="/waitlist"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/35 hover:scale-[1.02] active:scale-[0.98] shine"
            >
              <Sparkles className="h-4 w-4" />
              Download
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/support"
              className="rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Support
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-xl p-2.5 text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur-2xl lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-accent/10 text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/5",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <hr className="my-3 border-border/50" />
              <Link
                href="/waitlist"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all shine"
              >
                <Sparkles className="h-4 w-4" />
                Download SP NET GRAM
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/support"
                className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground text-center"
              >
                Support
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
