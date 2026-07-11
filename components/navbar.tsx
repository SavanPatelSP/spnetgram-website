"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig, navGroups } from "@/config/site";
import { DesktopNav } from "@/components/desktop-nav";
import { MobileNav } from "@/components/mobile-nav";

function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2.5 shrink-0">
      <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-105">
        <Image
          src="/group59.png"
          alt="SP NET GRAM"
          fill
          className="object-contain"
          sizes="36px"
          priority
        />
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
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setIsOpen(false);
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
      {/* Scroll progress indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 will-change-[width]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          <Logo />

          {/* Desktop nav */}
          <DesktopNav groups={navGroups} />

          {/* Desktop right-side */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Link
              href="/contact"
              className="rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/waitlist"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/35 hover:scale-[1.02] active:scale-[0.98] shine"
            >
              <Sparkles className="h-4 w-4" />
              Download
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-xl p-2.5 text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      <MobileNav
        groups={navGroups}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </header>
  );
}
