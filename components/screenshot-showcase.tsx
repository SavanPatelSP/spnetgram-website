"use client";

import * as React from "react";
import {
  MessageSquare,
  UserCircle,
  Sparkles,
  Coins,
  Palette,
  ChevronLeft,
  ChevronRight,
  CheckCheck,
  Star,
  Gem,
  Shield,
  Wifi,
  Signal,
  Battery,
  Bot,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/scroll-reveal";

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-2 pb-0.5 text-[9px] font-semibold text-white/70">
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <Signal className="h-2.5 w-2.5" />
        <Wifi className="h-2.5 w-2.5" />
        <Battery className="h-2.5 w-2.5" />
      </div>
    </div>
  );
}

function ChatScreen() {
  return (
    <div className="flex flex-col h-full">
      <div className="bg-gradient-to-r from-[#3390ec] to-[#2a7ed4]">
        <StatusBar />
        <div className="px-3 pb-2.5">
          <div className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4 text-white/70" />
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 text-[8px] font-bold text-white ring-2 ring-white/20">
                G
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-semibold text-white tracking-tight">SP NET GRAM Beta</span>
                  <Sparkles className="h-3 w-3 text-amber-400" />
                </div>
                <span className="text-[8px] text-white/60">2,431 members, 128 online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-2.5 p-3 bg-[#1a1a2e]">
        <div className="flex justify-start">
          <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-[#252538] px-3.5 py-2 text-sm leading-relaxed shadow-sm">
            <p className="leading-relaxed">The new premium badges look amazing!</p>
            <div className="mt-0.5 text-[8px] text-muted-foreground/40">10:32 AM</div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-[#3390ec] px-3.5 py-2 text-sm leading-relaxed text-white shadow-sm">
            <p className="leading-relaxed">Right? I just unlocked the early adopter badge.</p>
            <div className="mt-0.5 flex items-center justify-end gap-1 text-[8px] text-white/50">
              10:33 AM <CheckCheck className="h-2.5 w-2.5" />
            </div>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-[#252538] px-3.5 py-2 text-sm leading-relaxed shadow-sm">
            <p className="leading-relaxed">How do you earn coins? I see everyone has them.</p>
            <div className="mt-0.5 text-[8px] text-muted-foreground/40">10:34 AM</div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-[#3390ec] px-3.5 py-2 text-sm leading-relaxed text-white shadow-sm">
            <p className="leading-relaxed">Just by being active! Chatting, daily streaks, joining groups.</p>
            <div className="mt-0.5 flex items-center justify-end gap-1 text-[8px] text-white/50">
              10:35 AM <CheckCheck className="h-2.5 w-2.5" />
            </div>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-[#252538] px-3.5 py-2 text-sm leading-relaxed shadow-sm">
            <p className="leading-relaxed">Wait — you can earn gems too? Those unlock premium themes right?</p>
            <div className="mt-0.5 text-[8px] text-muted-foreground/40">10:36 AM</div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/[0.04] bg-[#1a1a2e] px-3 py-1.5">
        <div className="flex items-center gap-2 rounded-lg bg-[#252538] px-3 py-1.5">
          <span className="text-[10px] text-muted-foreground/30 flex-1">Message</span>
          <Sparkles className="h-3 w-3 text-amber-400/60" />
        </div>
      </div>
    </div>
  );
}

function ProfileScreen() {
  return (
    <div className="flex flex-col h-full bg-[#1a1a2e]">
      <div className="relative h-28 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <StatusBar />
        <div className="absolute -bottom-10 left-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 ring-4 ring-[#1a1a2e] shadow-xl">
            <span className="text-xl font-bold text-white">SP</span>
          </div>
        </div>
        <div className="absolute top-7 right-3 rounded-full bg-amber-400/15 px-2 py-0.5 backdrop-blur-md ring-1 ring-amber-500/30">
          <div className="flex items-center gap-1">
            <Star className="h-2.5 w-2.5 text-amber-400" />
            <span className="text-[8px] font-bold text-amber-400 tracking-wider">PRO</span>
          </div>
        </div>
      </div>
      <div className="mt-12 px-4">
        <div className="flex items-center gap-2">
          <span className="text-base font-bold tracking-tight">Savan Patel</span>
          <Sparkles className="h-3.5 w-3.5 text-amber-400" />
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="text-[10px] text-emerald-400 font-medium">online</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["Pro", "Early Adopter", "Top Contributor"].map((badge) => (
            <span key={badge} className="rounded-full bg-amber-500/10 px-2 py-0.5 text-[8px] font-semibold text-amber-400 ring-1 ring-amber-500/20">
              {badge}
            </span>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl border border-border/15 bg-card/30 p-3 backdrop-blur-sm">
          {[
            { label: "Coins", value: "2,450", icon: Coins, color: "text-amber-400" },
            { label: "Gems", value: "150", icon: Gem, color: "text-blue-400" },
            { label: "Level", value: "12", icon: Star, color: "text-indigo-400" },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="text-center">
                <Icon className={`mx-auto h-4 w-4 ${s.color}`} />
                <div className="text-sm font-bold mt-0.5 tracking-tight">{s.value}</div>
                <div className="text-[8px] text-muted-foreground/60">{s.label}</div>
              </div>
            );
          })}
        </div>
        <div className="mt-3 space-y-1.5">
          {["Custom bio & status", "Achievement showcase", "Premium banner"].map((item) => (
            <div key={item} className="flex items-center gap-2.5 text-xs text-muted-foreground/60">
              <div className="h-1 w-1 rounded-full bg-foreground/20" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PremiumScreen() {
  return (
    <div className="flex flex-col h-full bg-[#1a1a2e]">
      <div className="bg-gradient-to-r from-amber-500 to-orange-500">
        <StatusBar />
        <div className="px-3 pb-3">
          <div className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4 text-white/70" />
            <span className="text-sm font-semibold text-white tracking-tight">Premium</span>
            <Sparkles className="h-3.5 w-3.5 text-white/70 ml-auto" />
          </div>
        </div>
      </div>
      <div className="flex-1 p-3 space-y-2">
        {[
          { plan: "Pro", price: "$4.99", badge: "Current", popular: false, color: "amber", features: ["Premium badges", "Custom themes", "Extended profiles"] },
          { plan: "Plus", price: "$9.99", badge: "Most Popular", popular: true, color: "indigo", features: ["Everything in Pro", "Unlimited profiles", "Gem rewards"] },
          { plan: "Business", price: "$24.99", badge: "Team", popular: false, color: "emerald", features: ["Everything in Plus", "Team tools", "Analytics"] },
        ].map((plan) => (
          <div
            key={plan.plan}
            className={cn(
              "rounded-xl border p-3 transition-all duration-200",
              plan.popular
                ? "border-amber-500/40 bg-gradient-to-br from-amber-500/[0.08] to-amber-600/[0.03]"
                : "border-border/15 bg-card/30"
            )}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm">{plan.plan}</span>
                {plan.popular && (
                  <span className="text-[7px] font-bold text-amber-400 bg-amber-500/15 px-1.5 py-0.5 rounded-full tracking-wider uppercase">Best</span>
                )}
              </div>
              <div className="flex items-baseline gap-0.5">
                <span className="text-base font-bold tracking-tight">{plan.price}</span>
                <span className="text-[8px] text-muted-foreground/60">/mo</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1">
              {plan.features.map((f) => (
                <span key={f} className="text-[8px] text-muted-foreground/70 bg-foreground/[0.04] px-1.5 py-0.5 rounded">{f}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CoinsScreen() {
  return (
    <div className="flex flex-col h-full bg-[#1a1a2e]">
      <div className="bg-gradient-to-r from-amber-500 to-orange-500">
        <StatusBar />
        <div className="px-3 pb-3">
          <div className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4 text-white/70" />
            <span className="text-sm font-semibold text-white tracking-tight">Coins & Gems</span>
            <Coins className="h-3.5 w-3.5 text-white/70 ml-auto" />
          </div>
        </div>
      </div>
      <div className="flex-1 p-3 space-y-2.5">
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-transparent p-3 text-center">
            <Coins className="mx-auto h-5 w-5 text-amber-400" />
            <div className="text-base font-bold mt-1 tracking-tight">2,450</div>
            <div className="text-[8px] text-muted-foreground/60">Coins</div>
          </div>
          <div className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent p-3 text-center">
            <Gem className="mx-auto h-5 w-5 text-blue-400" />
            <div className="text-base font-bold mt-1 tracking-tight">150</div>
            <div className="text-[8px] text-muted-foreground/60">Gems</div>
          </div>
        </div>
        <div className="rounded-xl border border-border/15 bg-card/30 p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-semibold">Daily Streak</span>
            <span className="text-[8px] text-amber-400 font-medium">Day 3</span>
          </div>
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
              <div key={day} className={cn(
                "flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold",
                day <= 3 ? "bg-amber-500/20 text-amber-400 ring-1 ring-amber-500/30" : "bg-accent/20 text-muted-foreground/40"
              )}>
                {day}
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-1">
          {[
            { label: "Chat activity", reward: "+25 coins" },
            { label: "Daily login", reward: "+50 coins" },
            { label: "Community contribution", reward: "+100 coins" },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between rounded-lg border border-border/10 bg-card/20 px-3 py-1.5">
              <span className="text-[10px] text-muted-foreground/70">{item.label}</span>
              <span className="text-[9px] font-medium text-amber-400">{item.reward}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AppearanceScreen() {
  return (
    <div className="flex flex-col h-full bg-[#1a1a2e]">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500">
        <StatusBar />
        <div className="px-3 pb-3">
          <div className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4 text-white/70" />
            <span className="text-sm font-semibold text-white tracking-tight">Appearance</span>
            <Palette className="h-3.5 w-3.5 text-white/70 ml-auto" />
          </div>
        </div>
      </div>
      <div className="flex-1 p-3 space-y-2.5">
        <div className="rounded-xl border border-border/15 bg-card/30 p-3">
          <h4 className="text-[10px] font-semibold mb-2.5">Theme</h4>
          <div className="flex gap-2">
            {[
              { color: "bg-[#3390ec]", label: "Default", active: true },
              { color: "bg-gradient-to-br from-purple-500 to-pink-500", label: "Midnight", active: false },
              { color: "bg-gradient-to-br from-emerald-500 to-teal-500", label: "Forest", active: false },
              { color: "bg-gradient-to-br from-amber-500 to-red-500", label: "Sunset", active: false },
            ].map((t) => (
              <div key={t.label} className="flex flex-col items-center gap-1">
                <div className={cn("h-8 w-8 rounded-full", t.color, t.active ? "ring-2 ring-white ring-offset-2 ring-offset-[#1a1a2e]" : "ring-1 ring-white/10")} />
                <span className="text-[7px] text-muted-foreground/60">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-border/15 bg-card/30 p-3">
          <h4 className="text-[10px] font-semibold mb-2">Chat Settings</h4>
          <div className="space-y-1.5">
            {["Bubble style", "Background", "Font size", "Accent color"].map((opt) => (
              <div key={opt} className="flex items-center justify-between py-0.5">
                <span className="text-[10px] text-muted-foreground/70">{opt}</span>
                <ChevronRight className="h-2.5 w-2.5 text-muted-foreground/30" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-amber-500/20 bg-amber-500/[0.06] p-2">
          <Sparkles className="h-3 w-3 text-amber-400 shrink-0" />
          <span className="text-[8px] text-amber-400/70">Premium themes with Plus</span>
        </div>
      </div>
    </div>
  );
}

interface ScreenMockup {
  id: string;
  label: string;
  icon: typeof MessageSquare;
  render: () => React.ReactNode;
}

const screens: ScreenMockup[] = [
  { id: "chats", label: "Enhanced Chats", icon: MessageSquare, render: ChatScreen },
  { id: "profile", label: "Modern Profile", icon: UserCircle, render: ProfileScreen },
  { id: "premium", label: "Premium", icon: Sparkles, render: PremiumScreen },
  { id: "coins", label: "Coins & Gems", icon: Coins, render: CoinsScreen },
  { id: "appearance", label: "Appearance", icon: Palette, render: AppearanceScreen },
];

export function ScreenshotShowcase() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeScreen = screens[activeIndex];
  const [prevIndex, setPrevIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const directionRef = React.useRef(1);

  const goTo = (i: number) => {
    if (animating || i === activeIndex) return;
    directionRef.current = i > activeIndex ? 1 : -1;
    setPrevIndex(activeIndex);
    setAnimating(true);
    setActiveIndex(i);
    setTimeout(() => setAnimating(false), 350);
  };

  const next = () => goTo((activeIndex + 1) % screens.length);
  const prev = () => goTo((activeIndex - 1 + screens.length) % screens.length);

  return (
    <section className="border-t border-white/[0.04] bg-accent/[0.02] py-24 sm:py-32">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.08] px-3 py-1 text-xs font-medium backdrop-blur-sm">
              <MessageSquare className="h-3 w-3 text-blue-300" />
              <span className="text-blue-300 font-medium">Preview</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
              See SP NET GRAM in action
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/70 leading-relaxed max-w-2xl mx-auto">
              A premium Telegram client experience. Familiar where it counts, enhanced where it matters.
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="flex items-center justify-center gap-1.5 mb-10 flex-wrap">
              {screens.map((screen, i) => (
                <button
                  key={screen.id}
                  onClick={() => goTo(i)}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium transition-all duration-300",
                    i === activeIndex
                      ? "bg-foreground text-background shadow-md scale-105"
                      : "text-muted-foreground/60 hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  <screen.icon className="h-3 w-3" />
                  <span className="hidden sm:inline">{screen.label}</span>
                </button>
              ))}
            </div>

            <div className="relative px-0 sm:px-16">
              <div className="mx-auto w-[260px] sm:w-[290px] md:w-[330px]">
                <div className="absolute -inset-1 rounded-[2.8rem] bg-gradient-to-b from-zinc-600 via-zinc-700 to-zinc-800 opacity-60 blur-sm" />
                <div className="relative rounded-[2.5rem] border-[2.5px] border-zinc-600 bg-zinc-900 p-[5px] shadow-2xl shadow-black/40">
                  <div className="absolute left-1/2 top-0 z-20 h-6 w-[120px] -translate-x-1/2 rounded-b-2xl bg-zinc-900">
                    <div className="mx-auto h-3 w-[90px] rounded-b-xl bg-zinc-800" />
                  </div>
                  <div className="absolute left-1/2 top-[10px] z-30 h-[6px] w-[6px] -translate-x-[36px] rounded-full bg-zinc-800" />
                  <div className="absolute right-[22px] top-[12px] z-30 h-[4px] w-[48px] rounded-full bg-zinc-800" />
                  <div className="device-reflection overflow-hidden rounded-[1.75rem] bg-[#1a1a2e] min-h-[470px]">
                    <div
                      key={activeIndex}
                      className="animate-scale-fade"
                    >
                      <activeScreen.render />
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-0 sm:-translate-x-5 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-border/40 bg-background/80 text-muted-foreground hover:text-foreground hover:border-border/60 shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-105 active:scale-95"
                aria-label="Previous screen"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-0 sm:translate-x-5 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-border/40 bg-background/80 text-muted-foreground hover:text-foreground hover:border-border/60 shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-105 active:scale-95"
                aria-label="Next screen"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-8 flex justify-center gap-2">
              {screens.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={cn(
                    "rounded-full transition-all duration-500",
                    i === activeIndex
                      ? "w-10 h-2 bg-foreground"
                      : "w-2 h-2 bg-muted-foreground/20 hover:bg-muted-foreground/40"
                  )}
                  aria-label={`Go to screen ${i + 1}`}
                />
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground/40">
                App interface previews. Actual design may vary during development.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
