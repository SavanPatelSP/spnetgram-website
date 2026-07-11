import { Bot, Sparkles, MessageSquare, Languages, Headphones, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";

const aiFeatures = [
  {
    icon: MessageSquare,
    title: "Smart Replies",
    description: "AI understands context and suggests responses that sound like you. The more you use it, the better it gets.",
  },
  {
    icon: Languages,
    title: "Real-Time Translation",
    description: "Break language barriers with instant translation of messages, channels, and group conversations.",
  },
  {
    icon: Headphones,
    title: "Voice Assistant",
    description: "Hands-free communication. Dictate messages, control settings, and get answers using your voice.",
  },
  {
    icon: Zap,
    title: "Content Generation",
    description: "Generate summaries, create content drafts, and get writing assistance across all your conversations.",
  },
];

export function AISection() {
  return (
    <section id="ai" className="relative border-t border-white/[0.04] py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/[0.02] via-transparent to-blue-500/[0.02]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-500/[0.03] to-blue-500/[0.03] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <Badge variant="ai" className="mb-5">
              <Bot className="h-3 w-3 mr-1" />
              SP NET AI
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Intelligence that
              <br />
              <span className="gradient-text-ai">understands you</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/60 leading-relaxed max-w-2xl mx-auto">
              SP NET AI is more than a chatbot — it&apos;s an intelligent assistant that learns your communication style
              and helps you connect better.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* AI visualization */}
          <ScrollReveal delay={100}>
            <div className="relative rounded-2xl border border-purple-500/15 bg-gradient-to-br from-purple-500/[0.04] to-blue-500/[0.02] p-8 sm:p-10 overflow-hidden min-h-[400px] flex items-center">
              {/* Animated gradient orbs */}
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-purple-500/10 blur-3xl animate-breathe" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-blue-500/10 blur-3xl animate-breathe" style={{ animationDelay: "-2s" }} />

              <div className="relative space-y-6 w-full">
                {/* AI conversation bubbles */}
                <div className="flex items-start gap-3 animate-fade-in">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg shadow-purple-500/20">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-[#1c1c30] px-4 py-3 text-sm text-muted-foreground/80 leading-relaxed">
                    I noticed you&apos;ve been discussing project plans. Would you like me to create a summary?
                  </div>
                </div>
                <div className="flex items-start justify-end gap-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-blue-500/20 px-4 py-3 text-sm text-foreground/80 leading-relaxed">
                    Yes please! That would save me hours.
                  </div>
                </div>
                <div className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg shadow-purple-500/20">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/10 px-4 py-3">
                    <p className="text-sm text-foreground/80 font-medium mb-1">Summary generated</p>
                    <p className="text-xs text-muted-foreground/60 leading-relaxed">
                      Project scope has expanded 40% this quarter. Key milestones: beta launch (Q3), AI integration (Q4).
                      Recommended action: schedule team sync to align on priorities.
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[9px] font-semibold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full">AI-powered</span>
                      <span className="text-[9px] text-muted-foreground/30">2s response</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* AI features grid */}
          <ScrollReveal delay={200}>
            <div className="grid gap-4">
              {aiFeatures.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="group flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 transition-all duration-300 card-depth"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/15 to-blue-500/10 text-purple-400 group-hover:scale-105 transition-transform duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-base font-semibold tracking-tight mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground/60 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={300}>
          <div className="mt-12 text-center">
            <Link href="/docs">
              <Button variant="outline" size="lg" className="gap-2">
                Explore AI Features
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
