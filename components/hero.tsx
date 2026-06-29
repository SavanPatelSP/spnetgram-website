import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Zap, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PhoneMockup } from "@/components/phone-mockup";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.03] via-transparent to-background" />
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-b from-blue-500/[0.05] to-transparent blur-3xl" />
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/[0.03] blur-3xl" />
      <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-amber-500/[0.02] blur-3xl" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl animate-aurora" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-amber-500/5 to-blue-500/10 blur-3xl animate-aurora" style={{ animationDelay: "-10s" }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-32">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left content */}
          <div className="relative">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.06] px-4 py-1.5 text-sm backdrop-blur-sm animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>
              <span className="bg-gradient-to-r from-blue-200 to-blue-300 bg-clip-text text-transparent font-semibold tracking-wide text-xs">
                Next-Generation Communication Platform
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-[-0.04em] leading-[0.95] animate-fade-in-up">
              <span className="text-foreground">Build.</span>
              <br />
              <span className="text-foreground/90">Connect.</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Empower.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground/80 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Speed, privacy, AI, and premium features — all in one platform.
              Built for communities, creators, and businesses who demand more
              from their communication.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Link href="/waitlist">
                <Button variant="primary" size="xl" className="w-full sm:w-auto shine">
                  <Sparkles className="h-5 w-5" />
                  Download SP NET GRAM
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Button>
              </Link>
              <Link href="#products">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  Explore Products
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              {[
                { icon: Shield, label: "End-to-End Encrypted", color: "text-emerald-400", bg: "bg-emerald-500/10" },
                { icon: Zap, label: "Lightning Fast", color: "text-blue-400", bg: "bg-blue-500/10" },
                { icon: Sparkles, label: "AI-Powered", color: "text-purple-400", bg: "bg-purple-500/10" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-2.5 text-sm">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${item.bg}`}>
                      <Icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <span className="text-muted-foreground/70 font-medium">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Phone mockup */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {/* Floating elements */}
            <div className="absolute -top-6 -right-4 h-16 w-16 animate-float">
              <div className="flex h-full w-full items-center justify-center rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/15 to-blue-600/5 backdrop-blur-xl shadow-lg shadow-blue-500/10">
                <MessageCircle className="h-7 w-7 text-blue-400" />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-6 h-14 w-14 animate-float-delayed">
              <div className="flex h-full w-full items-center justify-center rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/15 to-purple-600/5 backdrop-blur-xl shadow-lg shadow-purple-500/10">
                <Sparkles className="h-6 w-6 text-purple-400" />
              </div>
            </div>
            <div className="absolute top-[20%] -right-8 h-12 w-12 animate-float-slow">
              <div className="flex h-full w-full items-center justify-center rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/15 to-amber-600/5 backdrop-blur-xl shadow-lg shadow-amber-500/10">
                <Zap className="h-5 w-5 text-amber-400" />
              </div>
            </div>

            {/* Phone */}
            <PhoneMockup />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1s" }}>
        <span className="text-[10px] font-medium text-muted-foreground/30 tracking-widest uppercase">
          Scroll
        </span>
        <div className="animate-bounce text-muted-foreground/20">
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
    </section>
  );
}
