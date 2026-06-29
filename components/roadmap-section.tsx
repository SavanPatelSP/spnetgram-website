import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Check, Clock, ArrowRight } from "lucide-react";

const roadmapItems = [
  {
    phase: "Phase 1",
    title: "Foundation",
    items: ["Core messaging platform", "End-to-end encryption", "Multi-device sync", "User authentication"],
    status: "completed" as const,
  },
  {
    phase: "Phase 2",
    title: "Premium Features",
    items: ["AI assistant integration", "Custom themes & badges", "Cloud storage", "Voice & video calls"],
    status: "completed" as const,
  },
  {
    phase: "Phase 3",
    title: "Community Tools",
    items: ["Communities & channels", "Moderation suite", "Analytics dashboard", "Monetization tools"],
    status: "in-progress" as const,
  },
  {
    phase: "Phase 4",
    title: "Enterprise Launch",
    items: ["Organization management", "SSO & compliance", "API platform", "Global infrastructure"],
    status: "planned" as const,
  },
  {
    phase: "Phase 5",
    title: "Ecosystem",
    items: ["SP NET ADMIN", "SP NET CLOUD", "Developer SDKs", "Third-party integrations"],
    status: "planned" as const,
  },
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="border-t border-border/30 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <Badge variant="outline" className="mb-5">
              <Clock className="h-3 w-3 mr-1" />
              Roadmap
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              What&apos;s coming
              <br />
              <span className="text-muted-foreground/40">next.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/60 leading-relaxed max-w-2xl mx-auto">
              We&apos;re building the future of communication. Here&apos;s what&apos;s on the horizon.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-border/30 hidden sm:block" />

          <div className="space-y-8">
            {roadmapItems.map((item, i) => (
              <ScrollReveal key={item.phase} delay={i * 80}>
                <div className="relative flex flex-col sm:flex-row gap-6 sm:gap-10">
                  {/* Status indicator */}
                  <div className="flex sm:flex-col items-center gap-3 sm:items-center shrink-0">
                    <div
                      className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border-2 transition-all duration-300 ${
                        item.status === "completed"
                          ? "border-emerald-500/50 bg-emerald-500/10"
                          : item.status === "in-progress"
                          ? "border-blue-500/50 bg-blue-500/10"
                          : "border-border/30 bg-card/30"
                      }`}
                    >
                      {item.status === "completed" ? (
                        <Check className="h-5 w-5 text-emerald-400" />
                      ) : item.status === "in-progress" ? (
                        <Sparkles className="h-5 w-5 text-blue-400" />
                      ) : (
                        <Clock className="h-5 w-5 text-muted-foreground/30" />
                      )}
                    </div>
                    <span
                      className={`text-[9px] font-semibold uppercase tracking-widest whitespace-nowrap ${
                        item.status === "completed"
                          ? "text-emerald-400"
                          : item.status === "in-progress"
                          ? "text-blue-400"
                          : "text-muted-foreground/30"
                      }`}
                    >
                      {item.status === "completed" ? "Done" : item.status === "in-progress" ? "In Progress" : "Planned"}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-2xl border border-border/20 bg-card/30 p-6 sm:p-7 transition-all duration-300 card-depth">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-semibold text-muted-foreground/40 uppercase tracking-widest">{item.phase}</span>
                    </div>
                    <h4 className="text-lg font-bold tracking-tight mb-3">{item.title}</h4>
                    <ul className="space-y-1.5">
                      {item.items.map((it) => (
                        <li key={it} className="flex items-center gap-2.5 text-sm text-muted-foreground/60">
                          <span className={`h-1 w-1 rounded-full ${
                            item.status === "completed" ? "bg-emerald-400" : item.status === "in-progress" ? "bg-blue-400" : "bg-muted-foreground/20"
                          }`} />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
