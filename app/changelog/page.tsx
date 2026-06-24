import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { getChangelog } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Package, GitCommit, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Release Center",
  description:
    "SP NET GRAM release history and development updates. Track every version and feature release.",
};

export default function ChangelogPage() {
  const entries = getChangelog();

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

            {/* Future releases */}
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
