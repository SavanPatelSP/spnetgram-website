"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/loaders/skeleton";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { cn } from "@/lib/utils";
import { Package, GitCommit, Sparkles, Database, RefreshCw } from "lucide-react";
import { useChangelog } from "@/hooks/use-changelog";

export function ChangelogPageContent() {
  const query = useChangelog();

  if (query.isLoading) {
    return (
      <div className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <Skeleton className="h-5 w-32 mx-auto" />
            <Skeleton className="h-14 w-96 mx-auto" />
            <Skeleton className="h-5 w-80 mx-auto" />
          </div>
          <div className="space-y-12 max-w-3xl mx-auto">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex gap-6">
                <Skeleton className="h-8 w-8 rounded-full shrink-0" />
                <div className="flex-1 space-y-3">
                  <Skeleton className="h-7 w-48" />
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-5 w-64" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-32 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (query.isError) {
    return (
      <div className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center py-20">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-border/20 bg-card/30">
              <Database className="h-6 w-6 text-muted-foreground/30" />
            </div>
            <h3 className="text-lg font-semibold tracking-tight mb-2">Release history temporarily unavailable</h3>
            <p className="text-sm text-muted-foreground/50 max-w-md mb-6 leading-relaxed">
              We&apos;re having trouble loading the release history. Please try again shortly.
            </p>
            <button
              onClick={() => query.refetch()}
              className="inline-flex items-center gap-2 rounded-xl border border-border/20 bg-card/30 px-5 py-2.5 text-sm font-medium text-muted-foreground/70 hover:text-foreground hover:bg-card/50 transition-all"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Try again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const entries = query.data ?? [];

  return (
    <>
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 text-xs font-medium tracking-wide uppercase">
              <Package className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-muted-foreground">{entries.length} releases</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Release Center
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Release history and development updates for SP NET GRAM. Track
              every version, feature, and improvement.
            </p>
          </div>
        </div>
      </section>

      <Breadcrumbs />

      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="relative">
              <div className="absolute left-9 top-0 bottom-0 w-px bg-gradient-to-b from-border via-border to-transparent" />
              <div className="space-y-16">
                {entries.map((entry) => (
                  <div key={entry.version} className="relative">
                    <div className="flex items-start gap-6">
                      <div
                        className={cn(
                          "relative z-10 mt-1 flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-200",
                          entry.type === "release"
                            ? "border-emerald-500/50 bg-emerald-500/20"
                            : "border-amber-500/50 bg-amber-500/20",
                        )}
                      >
                        {entry.type === "release" ? (
                          <Sparkles className={cn("h-3.5 w-3.5", entry.type === "release" ? "text-emerald-400" : "text-amber-400")} />
                        ) : (
                          <GitCommit className="h-3.5 w-3.5 text-amber-400" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-xl sm:text-2xl font-bold font-mono tracking-tight">
                            {entry.version}
                          </h3>
                          <Badge
                            variant={
                              entry.type === "release"
                                ? "success"
                                : "warning"
                            }
                          >
                            {entry.type === "release"
                              ? "Release"
                              : "Update"}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground/70 mb-4">
                          {new Date(entry.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                        <p className="font-semibold tracking-tight">{entry.title}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-1 mb-6">
                          {entry.description}
                        </p>
                        <Card className="p-6 border-border/50 hover:border-border transition-all duration-200">
                          <ul className="space-y-3">
                            {entry.changes.map((change) => (
                              <li
                                key={change}
                                className="flex items-start gap-3 text-sm"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
                                <span className="text-muted-foreground">{change}</span>
                              </li>
                            ))}
                          </ul>
                        </Card>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 relative">
              <div className="absolute left-9 top-0 bottom-0 w-px bg-gradient-to-b from-border to-transparent" />
              <div className="flex items-start gap-6">
                <div className="relative z-10 mt-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-muted-foreground/30 bg-background">
                  <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                </div>
                <div className="flex-1">
                  <p className="text-lg font-semibold tracking-tight text-muted-foreground/50">
                    Future Releases
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {[
                      { version: "v0.3", title: "User System Enhancement", status: "In Development" },
                      { version: "v0.4", title: "Coin System Launch", status: "In Development" },
                      { version: "v0.5", title: "Gems System Launch", status: "Planned" },
                      { version: "v0.6", title: "Premium Membership", status: "Planned" },
                    ].map((release) => (
                      <Card key={release.version} className="p-4 border-border/30 opacity-60">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-mono font-bold text-muted-foreground">{release.version}</span>
                          <Badge variant="outline" className="text-[10px]">{release.status}</Badge>
                        </div>
                        <p className="text-sm font-medium tracking-tight">{release.title}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Stay updated"
        description="Follow development progress and upcoming releases."
        primaryLabel="View Development"
        primaryHref="/development"
        secondaryLabel="View Roadmap"
        secondaryHref="/roadmap"
      />
    </>
  );
}
