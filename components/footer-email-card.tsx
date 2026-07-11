"use client";

import * as React from "react";
import { Copy, Mail, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/toast";

interface FooterEmailCardProps {
  title: string;
  email: string;
}

export function FooterEmailCard({ title, email }: FooterEmailCardProps) {
  const { toast } = useToast();
  const [copied, setCopied] = React.useState(false);

  const handleCopy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast("Email copied successfully.");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast("Failed to copy email.");
    }
  }, [email, toast]);

  return (
    <div className="group flex items-center gap-3 rounded-xl border border-white/[0.04] bg-white/[0.02] px-3.5 py-2.5 hover:border-white/[0.08] hover:bg-white/[0.04] transition-all duration-300">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0B0B0F] border border-white/[0.06] shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
        <Mail className="h-3.5 w-3.5 text-white" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground/40">
          {title}
        </p>
        <p className="text-xs text-muted-foreground/60 truncate">
          {email}
        </p>
      </div>
      <div className="flex items-center gap-1 shrink-0">
        <button
          onClick={handleCopy}
          className={cn(
            "inline-flex h-6 w-6 items-center justify-center rounded-md transition-all duration-200",
            copied
              ? "text-emerald-400"
              : "text-muted-foreground/30 hover:text-muted-foreground/60 hover:bg-white/[0.06]",
          )}
          aria-label={`Copy ${email}`}
          title="Copy email"
        >
          {copied ? (
            <CheckCircle2 className="h-3 w-3" />
          ) : (
            <Copy className="h-3 w-3" />
          )}
        </button>
        <a
          href={`mailto:${email}`}
          className="inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground/30 hover:text-muted-foreground/60 hover:bg-white/[0.06] transition-all duration-200"
          aria-label={`Email ${email}`}
          title="Send email"
        >
          <Mail className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}
