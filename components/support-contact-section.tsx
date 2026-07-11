"use client";

import * as React from "react";
import { Copy, Mail, Clock, CheckCircle2, Zap, Bug, Lightbulb, Settings, Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/toast";
import { PremiumIcon } from "@/components/premium-icon";

const supportScope = [
  { icon: Settings, label: "Technical Support" },
  { icon: Zap, label: "Installation Issues" },
  { icon: Crown, label: "Premium Membership" },
  { icon: Bug, label: "Bug Reports" },
  { icon: Lightbulb, label: "Feature Requests" },
];

const SUPPORT_EMAIL = "support.spnetgram@sp-net.in";

export function SupportContactSection() {
  const { toast } = useToast();
  const [copied, setCopied] = React.useState(false);

  const handleCopy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(SUPPORT_EMAIL);
      setCopied(true);
      toast("Support email copied.");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast("Failed to copy email.");
    }
  }, [toast]);

  return (
    <section id="contact-support" className="border-t border-border/50 bg-accent/[0.03] py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
            Contact Support
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Our support team is ready to help you with any technical issues.
          </p>

          <Card className="p-8 border-border/50 hover:border-border hover:shadow-lg hover:shadow-black/5 transition-all duration-300">
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <PremiumIcon size="md">
                    <Mail className="h-full w-full" />
                  </PremiumIcon>
                  <div>
                    <p className="font-semibold tracking-tight">Support Email</p>
                    <a
                      href={`mailto:${SUPPORT_EMAIL}`}
                      className="text-sm text-muted-foreground underline underline-offset-4 decoration-border/50 hover:text-foreground hover:decoration-foreground/50 transition-colors"
                    >
                      {SUPPORT_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <PremiumIcon size="md">
                    <Clock className="h-full w-full" />
                  </PremiumIcon>
                  <div>
                    <p className="font-semibold tracking-tight">Response Time</p>
                    <p className="text-sm text-muted-foreground">
                      Typically within 24–48 hours. Premium subscribers receive priority support.
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold tracking-tight mb-3">Support Scope</p>
                  <div className="flex flex-wrap gap-2">
                    {supportScope.map((item) => {
                      const Icon = item.icon;
                      return (
                        <span
                          key={item.label}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-border/50 bg-accent/30 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                        >
                          <Icon className="h-3 w-3" />
                          {item.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a href={`mailto:${SUPPORT_EMAIL}`}>
                <Button variant="primary" size="lg" className="shine gap-2">
                  <Mail className="h-4 w-4" />
                  Email Support
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                onClick={handleCopy}
                className="gap-2"
                aria-label="Copy support email address"
              >
                {copied ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                {copied ? "Copied" : "Copy Email"}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
