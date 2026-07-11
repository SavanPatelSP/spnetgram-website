"use client";

import * as React from "react";
import { X, Megaphone, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { useActiveAnnouncements } from "@/hooks/use-announcements";
import { cn } from "@/lib/utils";
import type { Announcement, AnnouncementType } from "@/types/api";

const typeConfig: Record<AnnouncementType, { icon: typeof Megaphone; bg: string; border: string; text: string }> = {
  info: { icon: Info, bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400" },
  warning: { icon: AlertTriangle, bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-400" },
  success: { icon: CheckCircle, bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400" },
  critical: { icon: AlertTriangle, bg: "bg-red-500/10", border: "border-red-500/20", text: "text-red-400" },
};

function AnnouncementBar({ announcement, onDismiss }: { announcement: Announcement; onDismiss: (id: string) => void }) {
  const config = typeConfig[announcement.type];
  const Icon = config.icon;

  return (
    <div className={cn("border-b", config.border, config.bg)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2.5">
          <div className="flex items-center gap-2.5 min-w-0">
            <Icon className={cn("h-4 w-4 shrink-0", config.text)} />
            <span className="text-sm text-muted-foreground truncate">
              {announcement.title}
              {announcement.message && (
                <>
                  <span className="mx-1.5 text-muted-foreground/30">&middot;</span>
                  <span className="text-muted-foreground/70">{announcement.message}</span>
                </>
              )}
            </span>
          </div>
          <div className="flex items-center gap-3 shrink-0 ml-4">
            <button
              onClick={() => onDismiss(announcement.id)}
              className="text-muted-foreground/30 hover:text-muted-foreground transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AnnouncementsBanner() {
  const { data: announcements, isLoading } = useActiveAnnouncements();
  const [dismissed, setDismissed] = React.useState<Set<string>>(new Set());

  if (isLoading || !announcements || announcements.length === 0) return null;

  const visible = announcements
    .filter((a) => !dismissed.has(a.id))
    .sort((a, b) => (a.pinned === b.pinned ? 0 : a.pinned ? -1 : 1));

  if (visible.length === 0) return null;

  return (
    <div className="fixed top-16 left-0 right-0 z-40">
      {visible.map((a) => (
        <AnnouncementBar key={a.id} announcement={a} onDismiss={(id) => setDismissed((prev) => new Set(prev).add(id))} />
      ))}
    </div>
  );
}
