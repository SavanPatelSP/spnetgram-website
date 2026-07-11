"use client";

import * as React from "react";
import { Copy, Mail, Building2, Handshake, Megaphone, Globe, Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/toast";
import { PremiumIcon } from "@/components/premium-icon";
import Link from "next/link";

export function GeneralContactCard() {
  const { toast } = useToast();
  const [copied, setCopied] = React.useState(false);

  const handleCopy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText("business.spnetgram@sp-net.in");
      setCopied(true);
      toast("Business email copied.");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast("Failed to copy email.");
    }
  }, [toast]);

  return (
    <section className="border-t border-border/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Card className="p-8 border-border/50 hover:border-border hover:shadow-lg hover:shadow-black/5 transition-all duration-300">
            <div className="flex flex-col sm:flex-row gap-6">
              <PremiumIcon>
                <Building2 className="h-full w-full" />
              </PremiumIcon>
              <div className="flex-1">
                <h3 className="text-lg font-semibold tracking-tight">General Inquiries</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Business partnerships, media, press, collaboration, and company information.
                </p>
                <div className="mt-4 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Handshake className="h-3.5 w-3.5 shrink-0" />
                    Business partnerships
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Megaphone className="h-3.5 w-3.5 shrink-0" />
                    Media & press
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Globe className="h-3.5 w-3.5 shrink-0" />
                    Collaboration
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 className="h-3.5 w-3.5 shrink-0" />
                    Company information
                  </div>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row items-start gap-3">
                  <Link href="/contact">
                    <Button variant="primary" size="sm" className="gap-2">
                      Visit Contact Page
                    </Button>
                  </Link>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopy}
                      className="gap-1.5"
                      aria-label="Copy business email"
                    >
                      {copied ? (
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                      {copied ? "Copied" : "Copy Email"}
                    </Button>
                    <a href="mailto:business.spnetgram@sp-net.in">
                      <Button variant="ghost" size="sm" className="gap-1.5" aria-label="Send email">
                        <Mail className="h-3.5 w-3.5" />
                        Business Email
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
