import type { Metadata } from "next";
import { Sparkles, Shield, CheckCircle, BarChart3, Cpu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ProgressCard } from "@/components/progress-card";
import { CTASection } from "@/components/cta-section";
import { getStatusMetrics, getDevelopmentPhases } from "@/lib/content";

export const metadata: Metadata = {
  title: "Beta",
  description:
    "Join the SP NET GRAM beta program. Get early access to enhanced Telegram experiences, premium features, and help shape the platform.",
};

export default function BetaPage() {
  const metrics = getStatusMetrics();
  const phases = getDevelopmentPhases();

  return (
    <>
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-4 py-1.5 text-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span className="text-muted-foreground">
                Beta registration is open
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Beta Program
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Get early access to SP NET GRAM and experience enhanced Telegram
              features, premium services, and organization tools before anyone
              else.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-12">
            Development Progress
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric) => (
              <ProgressCard
                key={metric.label}
                label={metric.label}
                value={metric.value}
                description={metric.description}
                status={metric.status}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-12">
            Infrastructure Status
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center p-8 border-border/50 hover:border-border transition-all duration-200">
              <Cpu className="mx-auto h-8 w-8 text-emerald-400 mb-4" />
              <h3 className="font-semibold tracking-tight">Server Uptime</h3>
              <p className="text-2xl font-bold text-emerald-400 mt-2">
                99.9%
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Development servers
              </p>
            </Card>
            <Card className="text-center p-8 border-border/50 hover:border-border transition-all duration-200">
              <BarChart3 className="mx-auto h-8 w-8 text-amber-400 mb-4" />
              <h3 className="font-semibold tracking-tight">Database</h3>
              <p className="text-2xl font-bold text-amber-400 mt-2">
                Operational
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                With replication
              </p>
            </Card>
            <Card className="text-center p-8 border-border/50 hover:border-border transition-all duration-200">
              <Shield className="mx-auto h-8 w-8 text-emerald-400 mb-4" />
              <h3 className="font-semibold tracking-tight">Security</h3>
              <p className="text-2xl font-bold text-emerald-400 mt-2">
                Active
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Encryption layers
              </p>
            </Card>
            <Card className="text-center p-8 border-border/50 hover:border-border transition-all duration-200">
              <CheckCircle className="mx-auto h-8 w-8 text-emerald-400 mb-4" />
              <h3 className="font-semibold tracking-tight">CDN</h3>
              <p className="text-2xl font-bold text-emerald-400 mt-2">
                Global
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Multi-region
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-12">
            Development Phases
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {phases.slice(0, 4).map((phase) => (
              <Card key={phase.phase} className="p-6 border-border/50 hover:border-border hover:shadow-sm transition-all duration-200">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                      {phase.phase}
                    </span>
                    <h3 className="font-semibold tracking-tight mt-1">{phase.title}</h3>
                  </div>
                  <Badge
                    variant={
                      phase.status === "completed"
                        ? "success"
                        : phase.status === "in-progress"
                          ? "warning"
                          : "outline"
                    }
                  >
                    {phase.status === "completed"
                      ? "Completed"
                      : phase.status === "in-progress"
                        ? "In Progress"
                        : "Planned"}
                  </Badge>
                </div>
                <ul className="space-y-2">
                  {phase.items.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle
                        className={`h-4 w-4 shrink-0 ${
                          phase.status === "completed"
                            ? "text-emerald-500"
                            : "text-muted-foreground/50"
                        }`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to join the beta?"
        description="Sign up for early access and be part of the SP NET GRAM journey."
        primaryLabel="Join Beta"
        primaryHref="/beta"
        secondaryLabel="View Development"
        secondaryHref="/development"
      />
    </>
  );
}
