"use client";

import * as React from "react";
import { Copy, Mail, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/toast";
import { PremiumIcon } from "@/components/premium-icon";

interface EmailCardProps {
  icon: React.ElementType;
  title: string;
  email: string;
  purpose: string;
}

export function EmailCard({ icon: Icon, title, email, purpose }: EmailCardProps) {
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
    <Card
      className={cn(
        "group relative p-6 border-border/50",
        "hover:border-border hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1",
        "transition-all duration-300 ease-out",
      )}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <PremiumIcon className="mb-4">
          <Icon className="h-full w-full" />
        </PremiumIcon>
        <h3 className="text-base font-semibold tracking-tight">{title}</h3>
        <p className="mt-1 text-xs text-muted-foreground/60 uppercase tracking-wider font-medium">
          {purpose}
        </p>
        <a
          href={`mailto:${email}`}
          className="mt-3 inline-block text-sm text-muted-foreground underline underline-offset-4 decoration-border/50 hover:text-foreground hover:decoration-foreground/50 transition-colors break-all"
        >
          {email}
        </a>
        <div className="mt-5 flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="gap-1.5"
            aria-label={`Copy ${email}`}
          >
            {copied ? (
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
            {copied ? "Copied" : "Copy"}
          </Button>
          <a href={`mailto:${email}`}>
            <Button variant="ghost" size="sm" className="gap-1.5" aria-label={`Email ${email}`}>
              <Mail className="h-3.5 w-3.5" />
              Email Now
            </Button>
          </a>
        </div>
      </div>
    </Card>
  );
}
