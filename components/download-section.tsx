"use client";

import * as React from "react";
import Link from "next/link";
import { Smartphone, Monitor, Globe, Terminal, Apple, ArrowRight, Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";
import { useDownloadInfo } from "@/hooks/use-downloads";
import { DataLoader } from "@/components/ui/loaders/data-loader";

const fallbackIcon: Record<string, typeof Smartphone> = {
  ios: Smartphone,
  android: Smartphone,
  macOS: Monitor,
  windows: Monitor,
  linux: Globe,
  web: Globe,
  nightly: Terminal,
  beta: Apple,
};

function resolvePlatformIcon(name: string): typeof Smartphone {
  return fallbackIcon[name.toLowerCase()] ?? Globe;
}

export function DownloadSection() {
  const query = useDownloadInfo();

  return (
    <section id="download" className="border-t border-white/[0.04] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <Badge variant="premium" className="mb-5">
              <Sparkles className="h-3 w-3 mr-1" />
              Download
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Available everywhere.
              <br />
              <span className="text-muted-foreground/40">Download now.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/60 leading-relaxed max-w-2xl mx-auto">
              SP NET GRAM is available on every major platform. Start on one device, pick up on another.
            </p>
          </div>
        </ScrollReveal>

        <DataLoader
          query={query}
          empty={
            <div className="text-center py-12">
              <p className="text-sm text-muted-foreground/40">Download information coming soon.</p>
            </div>
          }
        >
          {(downloadInfo) => {
            const platformLabels: Record<string, string> = {
              stable: "Stable",
              beta: "Beta",
              nightly: "Nightly",
              apk: "APK",
            };

            const allPlatforms = downloadInfo.map((d) => ({
              name: d.platform,
              url: d.url,
              label: platformLabels[d.platform] ?? d.platform,
              description: d.releaseNotes ?? `v${d.version}`,
              status: d.active ? "active" : "coming-soon",
            }));

            const seen = new Set<string>();
            const uniquePlatforms = allPlatforms.filter((p) => {
              if (seen.has(p.name)) return false;
              seen.add(p.name);
              return true;
            });

            return (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {uniquePlatforms.map((platform, i) => {
                  const Icon = resolvePlatformIcon(platform.name);
                  return (
                    <ScrollReveal key={platform.name} delay={i * 60}>
                      <Link
                        href={platform.url || "/waitlist"}
                        className="group block rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 transition-all duration-300 card-depth"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-indigo-500/10 text-blue-400 group-hover:scale-105 transition-transform duration-300">
                            <Icon className="h-6 w-6" />
                          </div>
                          <Badge variant="outline" className="text-[9px]">
                            {platform.status === "coming-soon" ? "Coming Soon" : platform.status}
                          </Badge>
                        </div>
                        <h4 className="text-base font-bold tracking-tight mb-0.5">{platform.label}</h4>
                        <p className="text-xs text-muted-foreground/50">{platform.description}</p>
                        <div className="mt-4 flex items-center gap-1 text-xs font-medium text-muted-foreground/40 group-hover:text-foreground/70 transition-colors">
                          {platform.url ? (
                            <>
                              <span>Download</span>
                              <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                            </>
                          ) : (
                            <span>Get notified</span>
                          )}
                        </div>
                      </Link>
                    </ScrollReveal>
                  );
                })}
              </div>
            );
          }}
        </DataLoader>

        <ScrollReveal delay={200}>
          <div className="mt-14 text-center">
            <Link href="/waitlist">
              <Button variant="primary" size="xl" className="shine">
                <Sparkles className="h-5 w-5" />
                Join the Waitlist
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <p className="mt-4 text-xs text-muted-foreground/30">
              Download data managed in SP NET CONTROL CENTER. Versions, changelogs, and release notes are updated automatically.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
