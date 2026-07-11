"use client";

import * as React from "react";
import {
  X,
  Cookie,
  Shield,
  BarChart3,
  Megaphone,
  Settings2,
  Check,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_KEY = "spnetgram-cookie-consent";
const COOKIE_VERSION = "1.0";

const defaultPreferences: CookiePreferences = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
};

const categories = [
  {
    id: "necessary" as const,
    label: "Essential Cookies",
    description:
      "Required for website functionality and security.",
    icon: Shield,
    required: true,
  },
  {
    id: "analytics" as const,
    label: "Analytics",
    description:
      "Helps us understand website usage and improve performance.",
    icon: BarChart3,
    required: false,
  },
  {
    id: "functional" as const,
    label: "Preferences",
    description:
      "Remembers your settings and personal preferences.",
    icon: Settings2,
    required: false,
  },
  {
    id: "marketing" as const,
    label: "Marketing",
    description:
      "Used only if future marketing services are introduced.",
    icon: Megaphone,
    required: false,
  },
];

interface StoredConsent {
  version: string;
  preferences: CookiePreferences;
  timestamp: number;
}

function loadPreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (stored) {
      const data: StoredConsent = JSON.parse(stored);
      if (data.version !== COOKIE_VERSION) return null;
      return data.preferences;
    }
  } catch {}
  return null;
}

function savePreferences(prefs: CookiePreferences) {
  const data: StoredConsent = {
    version: COOKIE_VERSION,
    preferences: prefs,
    timestamp: Date.now(),
  };
  localStorage.setItem(COOKIE_KEY, JSON.stringify(data));
}

export function CookieConsent() {
  const [visible, setVisible] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(false);
  const [preferences, setPreferences] =
    React.useState<CookiePreferences>(defaultPreferences);
  const [isAnimatingOut, setIsAnimatingOut] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  const panelRef = React.useRef<HTMLDivElement>(null);
  const firstButtonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    setMounted(true);
    const existing = loadPreferences();
    if (!existing) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  React.useEffect(() => {
    if (showPanel && panelRef.current) {
      panelRef.current.focus();
    }
  }, [showPanel]);

  React.useEffect(() => {
    if (!visible || !showPanel) return;

    const panelEl = panelRef.current;
    if (!panelEl) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowPanel(false);
        return;
      }

      if (e.key !== "Tab") return;

      const focusable = panelEl.querySelectorAll<HTMLElement>(
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
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [visible, showPanel]);

  const dismiss = React.useCallback(() => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setVisible(false);
      setIsAnimatingOut(false);
      setShowPanel(false);
    }, 350);
  }, []);

  const handleAcceptAll = React.useCallback(() => {
    const all: CookiePreferences = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    savePreferences(all);
    dismiss();
  }, [dismiss]);

  const handleRejectOptional = React.useCallback(() => {
    savePreferences(defaultPreferences);
    dismiss();
  }, [dismiss]);

  const handleSavePreferences = React.useCallback(() => {
    savePreferences(preferences);
    dismiss();
  }, [preferences, dismiss]);

  const togglePreference = React.useCallback((id: keyof CookiePreferences) => {
    if (id === "necessary") return;
    setPreferences((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  if (!mounted || !visible) return null;

  return (
    <>
      {/* ── Floating Consent Card ── */}
      <div
        role="dialog"
        aria-label="Cookie consent"
        className={cn(
          "fixed z-[100] transition-all duration-350 ease-out",
          "bottom-4 left-4 right-4 sm:left-auto sm:right-5 sm:bottom-5 sm:max-w-[420px]",
          isAnimatingOut
            ? "opacity-0 translate-y-4 scale-[0.97]"
            : "opacity-100 translate-y-0 scale-100",
        )}
      >
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-zinc-900/95 via-zinc-900/90 to-zinc-950/95 backdrop-blur-2xl shadow-2xl shadow-black/40">
          {/* Glass highlight */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-purple-500/5 blur-3xl" />

          <div className="relative p-5 sm:p-6">
            {/* Header */}
            <div className="flex items-start gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-purple-500/10 border border-white/[0.06]">
                <Cookie className="h-5 w-5 text-blue-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-[15px] font-semibold tracking-tight text-white/90">
                    Cookie Preferences
                  </h3>
                  <button
                    onClick={dismiss}
                    className="shrink-0 flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] text-white/30 hover:text-white/60 hover:bg-white/[0.06] active:scale-95 transition-all duration-150"
                    aria-label="Dismiss cookie consent"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
                <p className="mt-1.5 text-[13px] text-white/45 leading-relaxed">
                  We use cookies and similar technologies to improve your
                  experience, remember your preferences, analyze website
                  performance, and enhance security. You remain in control of
                  your privacy choices.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-5 flex flex-col gap-2">
              <div className="flex gap-2">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleAcceptAll}
                  className="flex-1 shine text-xs h-9 px-4 active:scale-[0.97] transition-transform duration-150"
                >
                  <Check className="h-3.5 w-3.5" />
                  Accept All
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRejectOptional}
                  className="flex-1 text-xs h-9 px-4 border-white/[0.08] text-white/60 hover:text-white/80 hover:bg-white/[0.04] active:scale-[0.97] transition-all duration-150"
                >
                  Reject Non-Essential
                </Button>
              </div>
              <button
                onClick={() => setShowPanel(true)}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium text-white/35 hover:text-white/65 active:scale-[0.97] transition-all duration-150"
              >
                <Settings2 className="h-3.5 w-3.5" />
                Customize
                <ChevronRight className="h-3 w-3" />
              </button>
            </div>

            {/* Quick Links */}
            <div className="mt-3 flex items-center justify-center gap-3 text-[10px] text-white/20">
              <a
                href="/privacy"
                className="hover:text-white/40 transition-colors duration-150"
              >
                Privacy Policy
              </a>
              <span>&middot;</span>
              <a
                href="/cookies"
                className="hover:text-white/40 transition-colors duration-150"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Customize Panel ── */}
      {showPanel && (
        <div className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center p-0 sm:p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
            onClick={() => setShowPanel(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <div
            ref={panelRef}
            role="dialog"
            aria-label="Customize cookie preferences"
            tabIndex={-1}
            className={cn(
              "relative z-10 w-full sm:max-w-md animate-scale-fade",
              "sm:rounded-2xl rounded-t-2xl rounded-b-none",
              "max-h-[85vh] overflow-y-auto",
            )}
          >
            <div className="relative overflow-hidden sm:rounded-2xl rounded-t-2xl rounded-b-none border border-white/[0.08] bg-gradient-to-br from-zinc-900/95 via-zinc-900/90 to-zinc-950/95 backdrop-blur-2xl shadow-2xl shadow-black/40">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

              <div className="relative p-5 sm:p-6">
                {/* Panel Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-purple-500/10 border border-white/[0.06]">
                      <Cookie className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold tracking-tight text-white/90">
                        Privacy Settings
                      </h3>
                      <p className="text-xs text-white/40">
                        Manage your cookie preferences
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowPanel(false)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] text-white/30 hover:text-white/60 hover:bg-white/[0.06] active:scale-95 transition-all duration-150"
                    aria-label="Close preferences panel"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Category Toggles */}
                <div className="space-y-2 mb-5" role="group" aria-label="Cookie categories">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    const isChecked = preferences[cat.id];
                    return (
                      <button
                        key={cat.id}
                        onClick={() => togglePreference(cat.id)}
                        disabled={cat.required}
                        aria-pressed={isChecked}
                        aria-label={`${cat.label}${cat.required ? " (always enabled)" : ""}`}
                        className={cn(
                          "w-full flex items-start gap-3 rounded-xl p-3.5 text-left transition-all duration-200",
                          isChecked
                            ? "bg-blue-500/[0.06] border border-blue-500/15"
                            : "bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04]",
                          cat.required
                            ? "cursor-default"
                            : "cursor-pointer active:scale-[0.98]",
                        )}
                      >
                        <div
                          className={cn(
                            "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-200",
                            isChecked
                              ? "bg-blue-500/15 text-blue-400"
                              : "bg-white/[0.04] text-white/30",
                          )}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-medium text-white/80">
                              {cat.label}
                            </span>
                            {cat.required ? (
                              <span className="text-[9px] font-medium text-white/30 uppercase tracking-wider bg-white/[0.04] px-1.5 py-0.5 rounded">
                                Always On
                              </span>
                            ) : (
                              <div
                                className={cn(
                                  "shrink-0 h-5 w-5 rounded-md border-2 flex items-center justify-center transition-all duration-200",
                                  isChecked
                                    ? "bg-blue-500 border-blue-500"
                                    : "border-white/20 bg-transparent",
                                )}
                              >
                                {isChecked && (
                                  <Check className="h-3 w-3 text-white" />
                                )}
                              </div>
                            )}
                          </div>
                          <p className="text-xs text-white/40 mt-0.5 leading-relaxed">
                            {cat.description}
                          </p>
                        </div>
                        {cat.required && (
                          <div className="shrink-0 mt-1 h-5 w-5 rounded-md border-2 flex items-center justify-center bg-blue-500 border-blue-500">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleSavePreferences}
                    className="flex-1 shine text-xs h-10 active:scale-[0.97] transition-transform duration-150"
                  >
                    Save Preferences
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleAcceptAll}
                    className="flex-1 text-xs h-10 border-white/[0.08] text-white/60 hover:text-white/80 hover:bg-white/[0.04] active:scale-[0.97] transition-all duration-150"
                  >
                    Accept All
                  </Button>
                </div>

                {/* Links */}
                <div className="mt-4 flex items-center justify-center gap-4 text-[10px] text-white/20">
                  <a
                    href="/privacy"
                    className="hover:text-white/40 transition-colors duration-150"
                  >
                    Privacy Policy
                  </a>
                  <span>&middot;</span>
                  <a
                    href="/cookies"
                    className="hover:text-white/40 transition-colors duration-150"
                  >
                    Cookie Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
