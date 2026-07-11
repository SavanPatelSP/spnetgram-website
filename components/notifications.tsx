"use client";

import * as React from "react";
import {
  X,
  CheckCircle,
  AlertCircle,
  AlertTriangle,
  Info,
  Loader2,
  Undo2,
} from "lucide-react";
import { cn } from "@/lib/utils";

type NotificationType = "success" | "error" | "warning" | "info" | "loading";

interface NotificationAction {
  label: string;
  onClick: () => void;
}

interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message?: string;
  duration?: number;
  undo?: () => void;
  action?: NotificationAction;
}

interface NotificationContextValue {
  notify: (notification: Omit<Notification, "id">) => string;
  dismiss: (id: string) => void;
  clear: () => void;
}

const NotificationContext = React.createContext<NotificationContextValue | null>(null);

const typeConfig: Record<NotificationType, { icon: typeof CheckCircle; bg: string; border: string; iconBg: string; iconColor: string }> = {
  success: {
    icon: CheckCircle,
    bg: "bg-gradient-to-br from-emerald-500/10 to-emerald-600/5",
    border: "border-emerald-500/20",
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-400",
  },
  error: {
    icon: AlertCircle,
    bg: "bg-gradient-to-br from-red-500/10 to-red-600/5",
    border: "border-red-500/20",
    iconBg: "bg-red-500/15",
    iconColor: "text-red-400",
  },
  warning: {
    icon: AlertTriangle,
    bg: "bg-gradient-to-br from-amber-500/10 to-amber-600/5",
    border: "border-amber-500/20",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-400",
  },
  info: {
    icon: Info,
    bg: "bg-gradient-to-br from-blue-500/10 to-blue-600/5",
    border: "border-blue-500/20",
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
  },
  loading: {
    icon: Loader2,
    bg: "bg-gradient-to-br from-purple-500/10 to-purple-600/5",
    border: "border-purple-500/20",
    iconBg: "bg-purple-500/15",
    iconColor: "text-purple-400",
  },
};

function NotificationToast({
  notification,
  onDismiss,
}: {
  notification: Notification;
  onDismiss: (id: string) => void;
}) {
  const config = typeConfig[notification.type];
  const Icon = notification.type === "loading" ? Loader2 : config.icon;

  React.useEffect(() => {
    if (notification.duration === 0) return;
    if (notification.type === "loading") return;
    const timer = setTimeout(() => onDismiss(notification.id), notification.duration ?? 5000);
    return () => clearTimeout(timer);
  }, [notification, onDismiss]);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border backdrop-blur-xl shadow-xl shadow-black/20 animate-slide-up",
        config.border,
        config.bg,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
      <div className="relative p-4">
        <div className="flex items-start gap-3">
          <div className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-lg", config.iconBg)}>
            <Icon className={cn("h-5 w-5", config.iconColor, notification.type === "loading" && "animate-spin")} />
          </div>
          <div className="flex-1 min-w-0 pt-0.5">
            <p className="text-sm font-medium text-white/90">{notification.title}</p>
            {notification.message && (
              <p className="text-xs text-white/50 mt-0.5 leading-relaxed">{notification.message}</p>
            )}
            <div className="flex items-center gap-2 mt-2.5">
              {notification.undo && (
                <button
                  onClick={() => {
                    notification.undo!();
                    onDismiss(notification.id);
                  }}
                  className="inline-flex items-center gap-1 rounded-lg bg-white/[0.06] px-2.5 py-1 text-[10px] font-medium text-white/60 hover:text-white/80 hover:bg-white/[0.1] transition-all"
                >
                  <Undo2 className="h-3 w-3" />
                  Undo
                </button>
              )}
              {notification.action && (
                <button
                  onClick={() => {
                    notification.action!.onClick();
                    onDismiss(notification.id);
                  }}
                  className="inline-flex items-center gap-1 rounded-lg bg-white/[0.06] px-2.5 py-1 text-[10px] font-medium text-white/60 hover:text-white/80 hover:bg-white/[0.1] transition-all"
                >
                  {notification.action.label}
                </button>
              )}
            </div>
          </div>
          <button
            onClick={() => onDismiss(notification.id)}
            className="shrink-0 flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.03] text-white/30 hover:text-white/60 hover:bg-white/[0.06] transition-all"
            aria-label="Dismiss"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
      {notification.duration !== 0 && notification.type !== "loading" && (
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.03]">
          <div
            className="h-full bg-white/10 rounded-full animate-shrink"
            style={{ animationDuration: `${notification.duration ?? 5000}ms` }}
          />
        </div>
      )}
    </div>
  );
}

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = React.useState<Notification[]>([]);
  const idCounter = React.useRef(0);

  const notify = React.useCallback((n: Omit<Notification, "id">) => {
    const id = `notif-${++idCounter.current}`;
    setNotifications((prev) => [...prev, { ...n, id }]);
    return id;
  }, []);

  const dismiss = React.useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const clear = React.useCallback(() => {
    setNotifications([]);
  }, []);

  const value = React.useMemo(() => ({ notify, dismiss, clear }), [notify, dismiss, clear]);

  return (
    <NotificationContext.Provider value={value}>
      {children}
      {/* Toast stack */}
      <div
        className="fixed bottom-0 right-0 z-[200] p-4 sm:p-6 w-full sm:max-w-sm flex flex-col gap-3 pointer-events-none"
        style={{ bottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        {notifications.map((n, i) => (
          <div
            key={n.id}
            className="pointer-events-auto"
            style={{ zIndex: notifications.length - i }}
          >
            <NotificationToast notification={n} onDismiss={dismiss} />
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
}

function useNotification() {
  const ctx = React.useContext(NotificationContext);
  if (!ctx) throw new Error("useNotification must be used within NotificationProvider");
  return ctx;
}
