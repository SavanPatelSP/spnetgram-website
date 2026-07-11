"use client";

import * as React from "react";
import { X, Cookie, Shield, BarChart3, Megaphone, Settings2, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_KEY = "spnetgram-cookie-consent";

const defaultPreferences: CookiePreferences = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
};

const categories = [
  {
    id: "necessary" as const,
    label: "Necessary",
    description: "Essential for the website to function properly. These cannot be disabled.",
    icon: Shield,
    required: true,
  },
  {
    id: "functional" as const,
    label: "Functional",
    description: "Enable enhanced functionality and personalization.",
    icon: Settings2,
    required: false,
  },
  {
    id: "analytics" as const,
    label: "Analytics",
    description: "Help us understand how visitors interact with the website.",
    icon: BarChart3,
    required: false,
  },
  {
    id: "marketing" as const,
    label: "Marketing",
    description: "Used to deliver relevant advertisements and track campaign performance.",
    icon: Megaphone,
    required: false,
  },
];

function loadPreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return null;
}

function savePreferences(prefs: CookiePreferences) {
  localStorage.setItem(COOKIE_KEY, JSON.stringify(prefs));
}

export function CookieConsent() {
  const [visible, setVisible] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [preferences, setPreferences] = React.useState<CookiePreferences>(defaultPreferences);
  const [isAnimatingOut, setIsAnimatingOut] = React.useState(false);

  React.useEffect(() => {
    const existing = loadPreferences();
    if (!existing) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = React.useCallback(() => {
    const all: CookiePreferences = { necessary: true, functional: true, analytics: true, marketing: true };
    savePreferences(all);
    setIsAnimatingOut(true);
    setTimeout(() => { setVisible(false); setIsAnimatingOut(false); }, 400);
  }, []);

  const handleRejectOptional = React.useCallback(() => {
    savePreferences(defaultPreferences);
    setIsAnimatingOut(true);
    setTimeout(() => { setVisible(false); setIsAnimatingOut(false); }, 400);
  }, []);

  const handleSavePreferences = React.useCallback(() => {
    savePreferences(preferences);
    setShowModal(false);
    setIsAnimatingOut(true);
    setTimeout(() => { setVisible(false); setIsAnimatingOut(false); }, 400);
  }, [preferences]);

  const togglePreference = React.useCallback((id: keyof CookiePreferences) => {
    if (id === "necessary") return;
    setPreferences((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Banner */}
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 z-[100] transition-all duration-400 ease-out",
          isAnimatingOut ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0",
        )}
      >
        <div className="mx-4 mb-4 sm:mx-6 sm:mb-6 lg:mx-auto lg:max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-zinc-900/95 via-zinc-900/90 to-zinc-950/95 backdrop-blur-2xl shadow-2xl shadow-black/40">
            {/* Glass highlight */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-blue-500/5 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-purple-500/5 blur-3xl" />

            <div className="relative p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-purple-500/10 border border-white/[0.06]">
                  <Cookie className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base font-semibold tracking-tight text-white/90">Cookie Preferences</h3>
                      <p className="mt-1 text-sm text-white/50 leading-relaxed max-w-2xl">
                        We use cookies to enhance your experience, analyze traffic, and deliver personalized content.
                        You can choose which categories to allow.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setIsAnimatingOut(true);
                        setTimeout(() => { setVisible(false); setIsAnimatingOut(false); }, 400);
                      }}
                      className="shrink-0 flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] text-white/30 hover:text-white/60 hover:bg-white/[0.06] transition-all"
                      aria-label="Dismiss"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-2.5">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleAcceptAll}
                      className="shine text-xs h-9 px-4"
                    >
                      <Check className="h-3.5 w-3.5" />
                      Accept All
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleRejectOptional}
                      className="text-xs h-9 px-4 border-white/[0.08] text-white/60 hover:text-white/80"
                    >
                      Reject Optional
                    </Button>
                    <button
                      onClick={() => setShowModal(true)}
                      className="inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-medium text-white/40 hover:text-white/70 transition-colors"
                    >
                      <Settings2 className="h-3.5 w-3.5" />
                      Manage Preferences
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preferences Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />
          <div className="relative z-10 w-full max-w-md animate-scale-fade">
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-zinc-900/95 via-zinc-900/90 to-zinc-950/95 backdrop-blur-2xl shadow-2xl shadow-black/40">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

              <div className="relative p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-purple-500/10 border border-white/[0.06]">
                      <Cookie className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold tracking-tight text-white/90">Privacy Settings</h3>
                      <p className="text-xs text-white/40">Manage your cookie preferences</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowModal(false)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] text-white/30 hover:text-white/60 hover:bg-white/[0.06] transition-all"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="space-y-2 mb-6">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    const isChecked = preferences[cat.id];
                    return (
                      <button
                        key={cat.id}
                        onClick={() => togglePreference(cat.id)}
                        disabled={cat.required}
                        className={cn(
                          "w-full flex items-start gap-3 rounded-xl p-3.5 text-left transition-all duration-200",
                          isChecked
                            ? "bg-blue-500/[0.06] border border-blue-500/15"
                            : "bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04]",
                        )}
                      >
                        <div
                          className={cn(
                            "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors",
                            isChecked ? "bg-blue-500/15 text-blue-400" : "bg-white/[0.04] text-white/30",
                          )}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-medium text-white/80">{cat.label}</span>
                            {cat.required && (
                              <span className="text-[9px] font-medium text-white/30 uppercase tracking-wider bg-white/[0.04] px-1.5 py-0.5 rounded">Required</span>
                            )}
                          </div>
                          <p className="text-xs text-white/40 mt-0.5 leading-relaxed">{cat.description}</p>
                        </div>
                        <div
                          className={cn(
                            "shrink-0 mt-1 h-5 w-5 rounded-md border-2 flex items-center justify-center transition-all duration-200",
                            isChecked
                              ? "bg-blue-500 border-blue-500"
                              : "border-white/20 bg-transparent",
                          )}
                        >
                          {isChecked && <Check className="h-3 w-3 text-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleSavePreferences}
                    className="flex-1 shine text-xs h-10"
                  >
                    Save Preferences
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleAcceptAll}
                    className="flex-1 text-xs h-10 border-white/[0.08] text-white/60 hover:text-white/80"
                  >
                    Accept All
                  </Button>
                </div>

                <div className="mt-4 flex items-center justify-center gap-4 text-[10px] text-white/20">
                  <a href="/privacy" className="hover:text-white/40 transition-colors">Privacy Policy</a>
                  <span>&middot;</span>
                  <a href="/cookies" className="hover:text-white/40 transition-colors">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
