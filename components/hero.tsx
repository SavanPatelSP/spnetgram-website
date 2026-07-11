import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Zap, Palette, Crown, Smartphone, Gauge, ChevronDown, Bot, Gem, Globe, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PhoneMockup } from "@/components/phone-mockup";

const features = [
  {
    icon: Zap,
    label: "Lightning Fast",
    description: "Powered by Telegram's high-performance messaging infrastructure.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Shield,
    label: "Built on Telegram",
    description: "A powerful third-party client built on Telegram's secure cloud platform.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Sparkles,
    label: "AI-Powered",
    description: "Integrated AI tools to enhance productivity and communication.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: Palette,
    label: "Advanced Customisation",
    description: "More personalization options than the standard Telegram client.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    icon: Crown,
    label: "Premium Experience",
    description: "Unlock exclusive enhancements, customization, and premium features.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: Smartphone,
    label: "Cross-Platform Sync",
    description: "Continue your conversations seamlessly across supported devices.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Gauge,
    label: "Productivity Tools",
    description: "Designed for power users, creators, professionals, and communities.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
];

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
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
                <Button variant="primary" size="xl" className="w-full sm:w-auto shine group">
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

            {/* Feature highlights */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.label} className="flex items-start gap-3">
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${feature.bg}`}>
                      <Icon className={`h-5 w-5 ${feature.color}`} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-sm font-medium text-foreground/80">{feature.label}</span>
                      <p className="text-xs text-muted-foreground/50 leading-relaxed mt-0.5">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Phone mockup */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {/* Floating feature badges — wide orbit around screenshot */}
            <div className="absolute -top-[46px] left-1/2 ml-[-18px] md:-top-[84px] md:ml-[-22px] lg:-top-[134px] lg:ml-[-32px] xl:-top-[180px] xl:ml-[-40px] z-10 flex animate-float-drift-1">
              <div className="group flex h-9 w-9 items-center justify-center rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/15 to-blue-600/5 backdrop-blur-xl shadow-xl shadow-blue-500/15 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/30 hover:from-blue-500/25 hover:to-blue-600/10 md:h-11 md:w-11 lg:h-16 lg:w-16 xl:h-20 xl:w-20">
                <Zap className="h-4 w-4 text-blue-400 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8" />
              </div>
            </div>
            <div className="absolute top-[15%] left-1/2 ml-[-186px] md:ml-[-244px] lg:ml-[-294px] xl:ml-[-340px] z-10 flex animate-float-drift-2">
              <div className="group flex h-9 w-9 items-center justify-center rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/15 to-emerald-600/5 backdrop-blur-xl shadow-xl shadow-emerald-500/15 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/30 hover:from-emerald-500/25 hover:to-emerald-600/10 md:h-11 md:w-11 lg:h-16 lg:w-16 xl:h-20 xl:w-20">
                <Shield className="h-4 w-4 text-emerald-400 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8" />
              </div>
            </div>
            <div className="absolute top-[10%] left-1/2 ml-[150px] md:ml-[200px] lg:ml-[230px] xl:ml-[260px] z-10 flex animate-float-drift-3">
              <div className="group flex h-9 w-9 items-center justify-center rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/15 to-purple-600/5 backdrop-blur-xl shadow-xl shadow-purple-500/15 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30 hover:from-purple-500/25 hover:to-purple-600/10 md:h-11 md:w-11 lg:h-16 lg:w-16 xl:h-20 xl:w-20">
                <Bot className="h-4 w-4 text-purple-400 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8" />
              </div>
            </div>
            <div className="absolute top-[45%] left-1/2 ml-[-186px] md:ml-[-244px] lg:ml-[-294px] xl:ml-[-340px] z-10 flex animate-float-drift-1" style={{ animationDelay: "0.8s" }}>
              <div className="group flex h-9 w-9 items-center justify-center rounded-2xl border border-pink-500/20 bg-gradient-to-br from-pink-500/15 to-pink-600/5 backdrop-blur-xl shadow-xl shadow-pink-500/15 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/30 hover:from-pink-500/25 hover:to-pink-600/10 md:h-11 md:w-11 lg:h-16 lg:w-16 xl:h-20 xl:w-20">
                <Palette className="h-4 w-4 text-pink-400 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8" />
              </div>
            </div>
            <div className="absolute top-[50%] left-1/2 ml-[150px] md:ml-[200px] lg:ml-[230px] xl:ml-[260px] z-10 flex animate-float-drift-2" style={{ animationDelay: "1.2s" }}>
              <div className="group flex h-9 w-9 items-center justify-center rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/15 to-amber-600/5 backdrop-blur-xl shadow-xl shadow-amber-500/15 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-amber-500/30 hover:from-amber-500/25 hover:to-amber-600/10 md:h-11 md:w-11 lg:h-16 lg:w-16 xl:h-20 xl:w-20">
                <Gem className="h-4 w-4 text-amber-400 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8" />
              </div>
            </div>
            <div className="absolute top-[75%] left-1/2 ml-[-186px] md:ml-[-244px] lg:ml-[-294px] xl:ml-[-340px] z-10 flex animate-float-drift-3" style={{ animationDelay: "1.6s" }}>
              <div className="group flex h-9 w-9 items-center justify-center rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/15 to-cyan-600/5 backdrop-blur-xl shadow-xl shadow-cyan-500/15 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/30 hover:from-cyan-500/25 hover:to-cyan-600/10 md:h-11 md:w-11 lg:h-16 lg:w-16 xl:h-20 xl:w-20">
                <Globe className="h-4 w-4 text-cyan-400 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8" />
              </div>
            </div>
            <div className="absolute top-[80%] left-1/2 ml-[150px] md:ml-[200px] lg:ml-[230px] xl:ml-[260px] z-10 flex animate-float-drift-1" style={{ animationDelay: "2s" }}>
              <div className="group flex h-9 w-9 items-center justify-center rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/15 to-indigo-600/5 backdrop-blur-xl shadow-xl shadow-indigo-500/15 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-indigo-500/30 hover:from-indigo-500/25 hover:to-indigo-600/10 md:h-11 md:w-11 lg:h-16 lg:w-16 xl:h-20 xl:w-20">
                <Rocket className="h-4 w-4 text-indigo-400 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8" />
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
