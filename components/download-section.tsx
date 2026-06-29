import Link from "next/link";
import { Smartphone, Monitor, Globe, Terminal, Apple, Chrome, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";

const platforms = [
  { icon: Smartphone, name: "iOS", description: "iPhone & iPad", status: "Coming Soon", href: "/waitlist" },
  { icon: Smartphone, name: "Android", description: "All Android devices", status: "Coming Soon", href: "/waitlist" },
  { icon: Monitor, name: "macOS", description: "Apple Silicon & Intel", status: "Coming Soon", href: "/waitlist" },
  { icon: Monitor, name: "Windows", description: "Windows 10 & 11", status: "Coming Soon", href: "/waitlist" },
  { icon: Globe, name: "Linux", description: "All major distros", status: "Coming Soon", href: "/waitlist" },
  { icon: Globe, name: "Web", description: "All modern browsers", status: "Coming Soon", href: "/waitlist" },
  { icon: Terminal, name: "Nightly", description: "Latest builds", status: "Pre-release", href: "/beta" },
  { icon: Apple, name: "Beta", description: "Early access", status: "Open", href: "/beta" },
];

export function DownloadSection() {
  return (
    <section id="download" className="border-t border-border/30 py-28 sm:py-36">
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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map((platform, i) => {
            const Icon = platform.icon;
            return (
              <ScrollReveal key={platform.name} delay={i * 60}>
                <Link
                  href={platform.href}
                  className="group block rounded-2xl border border-border/20 bg-card/30 p-6 transition-all duration-300 card-depth"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-indigo-500/10 text-blue-400 group-hover:scale-105 transition-transform duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="text-[9px]">
                      {platform.status}
                    </Badge>
                  </div>
                  <h4 className="text-base font-bold tracking-tight mb-0.5">{platform.name}</h4>
                  <p className="text-xs text-muted-foreground/50">{platform.description}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-medium text-muted-foreground/40 group-hover:text-foreground/70 transition-colors">
                    <span>Get notified</span>
                    <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

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
              Early access includes all platforms. Be the first to experience SP NET GRAM.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
