"use client";

import * as React from "react";
import { X } from "lucide-react";

interface ComingSoonModalProps {
  open: boolean;
  onClose: () => void;
  platform: string;
  icon: React.ReactNode;
}

export function ComingSoonModal({ open, onClose, platform, icon }: ComingSoonModalProps) {
  const closeRef = React.useRef<HTMLButtonElement>(null);
  const previousFocusRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (open) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      requestAnimationFrame(() => closeRef.current?.focus());
    } else {
      previousFocusRef.current?.focus();
    }
  }, [open]);

  React.useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }

      if (e.key === "Tab") {
        const focusable = closeRef.current;
        if (focusable) {
          e.preventDefault();
          focusable.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${platform} coming soon`}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-sm animate-scale-fade">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-zinc-900/95 via-zinc-900/90 to-zinc-950/95 backdrop-blur-2xl shadow-2xl shadow-black/40">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
          <div className="relative p-6 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03]">
              {icon}
            </div>
            <h3 className="text-base font-semibold tracking-tight text-white/90 mb-1">
              {platform}
            </h3>
            <p className="text-sm font-medium text-white/50 mb-5">
              Links will be made public soon!
            </p>
            <button
              ref={closeRef}
              onClick={onClose}
              className="inline-flex h-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] px-5 text-xs font-medium text-white/50 hover:text-white/80 hover:bg-white/[0.08] hover:border-white/[0.15] transition-all"
              aria-label="Close"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
