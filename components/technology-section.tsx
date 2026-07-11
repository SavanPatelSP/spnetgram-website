import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Cpu, Network, Shield, Binary, Radio, Gauge } from "lucide-react";

const techFeatures = [
  {
    icon: Cpu,
    title: "MTProto 2.0",
    description: "Built on Telegram's proven MTProto 2.0 protocol with enhanced security layers.",
  },
  {
    icon: Network,
    title: "Distributed Infrastructure",
    description: "Global network of data centers ensuring low latency and high availability.",
  },
  {
    icon: Shield,
    title: "Quantum-Ready Encryption",
    description: "Forward-looking encryption that anticipates tomorrow's threats.",
  },
  {
    icon: Binary,
    title: "Neural AI Engine",
    description: "On-device AI processing for smart features without compromising privacy.",
  },
  {
    icon: Radio,
    title: "Real-Time Sync",
    description: "Multi-device synchronization with conflict resolution and instant delivery.",
  },
  {
    icon: Gauge,
    title: "Optimized Protocol",
    description: "Minimal data usage with intelligent caching and compression algorithms.",
  },
];

export function TechnologySection() {
  return (
    <section id="technology" className="relative border-t border-white/[0.04] py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.01] via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <Badge variant="default" className="mb-5">
              <Cpu className="h-3 w-3 mr-1" />
              Technology
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Engineering
              <br />
              <span className="text-muted-foreground/40">for the future.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/60 leading-relaxed max-w-2xl mx-auto">
              Every layer of SP NET GRAM is built with cutting-edge technology to deliver
              unmatched speed, security, and reliability.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techFeatures.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={i * 60}>
                <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 transition-all duration-300 card-depth">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-cyan-500/10 text-blue-400 mb-4 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-base font-semibold tracking-tight mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground/60 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
