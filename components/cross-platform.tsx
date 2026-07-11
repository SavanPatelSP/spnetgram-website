import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Monitor, Tablet, Globe } from "lucide-react";

const platforms = [
  { icon: Smartphone, name: "iOS", description: "iPhone & iPad", status: "Coming soon" },
  { icon: Smartphone, name: "Android", description: "Phones & tablets", status: "Coming soon" },
  { icon: Monitor, name: "Desktop", description: "Windows & macOS", status: "Coming soon" },
  { icon: Globe, name: "Web", description: "Browser-based", status: "Coming soon" },
];

export function CrossPlatformSection() {
  return (
    <section className="border-t border-white/[0.04] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <Badge variant="outline" className="mb-5">
              <Globe className="h-3 w-3 mr-1" />
              Cross Platform
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Everywhere you are.
              <br />
              <span className="text-muted-foreground/40">Seamlessly.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/60 leading-relaxed max-w-2xl mx-auto">
              Your conversations, files, and preferences sync in real-time across all your devices. Start on one, continue on another.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map((platform, i) => {
            const Icon = platform.icon;
            return (
              <ScrollReveal key={platform.name} delay={i * 80}>
                <div className="group flex flex-col items-center rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 text-center transition-all duration-300 card-depth">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/15 to-indigo-500/10 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg font-bold tracking-tight mb-1">{platform.name}</h4>
                  <p className="text-sm text-muted-foreground/50 mb-4">{platform.description}</p>
                  <Badge variant="outline" className="text-[10px]">{platform.status}</Badge>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
