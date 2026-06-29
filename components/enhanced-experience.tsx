import { Sparkles, Palette, Sliders, BadgeCheck, Crown, Star, ArrowRight, Coins, Gem } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const enhancements = [
  {
    icon: Palette,
    title: "Custom Appearance",
    description: "Custom themes, chat backgrounds, bubble styles, and accent colors — make Telegram truly yours.",
    gradient: "from-indigo-500/10 to-purple-500/5",
    border: "border-indigo-500/20",
    accent: "text-indigo-400",
    preview: (
      <div className="flex gap-1.5">
        {["#3390ec", "#a855f7", "#10b981", "#f59e0b", "#ef4444"].map((c) => (
          <div key={c} className="h-5 w-5 rounded-full ring-2 ring-background" style={{ backgroundColor: c }} />
        ))}
      </div>
    ),
  },
  {
    icon: Sliders,
    title: "Advanced Controls",
    description: "Fine-tune notifications, privacy, appearance, and behavior beyond what Telegram offers.",
    gradient: "from-blue-500/10 to-cyan-500/5",
    border: "border-blue-500/20",
    accent: "text-blue-400",
    preview: (
      <div className="space-y-1 w-full">
        <div className="h-1.5 w-full rounded-full bg-foreground/5 overflow-hidden">
          <div className="h-full w-3/4 rounded-full bg-blue-400/30" />
        </div>
        <div className="flex justify-between text-[8px] text-muted-foreground/40">
          <span>Basic</span>
          <span>Advanced</span>
        </div>
      </div>
    ),
  },
  {
    icon: BadgeCheck,
    title: "Premium Badges",
    description: "Exclusive badges for supporters, early adopters, and community leaders — show your status.",
    gradient: "from-amber-500/10 to-orange-500/5",
    border: "border-amber-500/20",
    accent: "text-amber-400",
    preview: (
      <div className="flex gap-1">
        {["P", "EA", "TC"].map((b) => (
          <div key={b} className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-400/15 text-[7px] font-bold text-amber-400 ring-1 ring-amber-500/30">
            {b}
          </div>
        ))}
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-[7px] font-bold text-white">
          +
        </div>
      </div>
    ),
  },
  {
    icon: Crown,
    title: "Enhanced Profiles",
    description: "Custom banners, extended bio, achievement displays, and premium indicators for your profile.",
    gradient: "from-purple-500/10 to-pink-500/5",
    border: "border-purple-500/20",
    accent: "text-purple-400",
    preview: (
      <div className="flex items-center gap-2 w-full">
        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500" />
        <div className="flex-1">
          <div className="h-2 w-16 rounded-full bg-foreground/10" />
          <div className="h-1.5 w-24 rounded-full bg-foreground/5 mt-1" />
        </div>
        <Sparkles className="h-3 w-3 text-amber-400" />
      </div>
    ),
  },
  {
    icon: Star,
    title: "Rewards System",
    description: "Earn coins through engagement, unlock gems for premium features, and level up as you participate.",
    gradient: "from-orange-500/10 to-red-500/5",
    border: "border-orange-500/20",
    accent: "text-orange-400",
    preview: (
      <div className="flex items-center gap-2 w-full">
        <Coins className="h-3.5 w-3.5 text-amber-400" />
        <div className="flex-1 h-1.5 rounded-full bg-amber-400/10 overflow-hidden">
          <div className="h-full w-[60%] rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
        </div>
        <Gem className="h-3.5 w-3.5 text-blue-400" />
      </div>
    ),
  },
  {
    icon: Sparkles,
    title: "Exclusive Features",
    description: "Early access to new capabilities, beta programs, priority features, and community voting.",
    gradient: "from-emerald-500/10 to-teal-500/5",
    border: "border-emerald-500/20",
    accent: "text-emerald-400",
    preview: (
      <div className="flex items-center gap-1 w-full">
        <div className="flex-1 h-1 rounded-full bg-emerald-400/10 overflow-hidden">
          <div className="h-full w-[25%] rounded-full bg-emerald-400/60" />
        </div>
        <span className="text-[8px] text-emerald-400/60 font-medium">Early Access</span>
      </div>
    ),
  },
];

export function EnhancedExperience() {
  return (
    <section className="border-t border-border/50 bg-accent/[0.02] py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/[0.08] px-3 py-1 text-xs font-medium backdrop-blur-sm">
            <Sparkles className="h-3 w-3 text-indigo-400" />
            <span className="text-indigo-300 font-medium">Enhanced Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
            More from the Telegram
            <br />
            <span className="text-muted-foreground/70">you already know</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground/70 leading-relaxed max-w-2xl mx-auto">
            Premium features and customization on top of Telegram.
            Everything you love stays — we just give you more ways to make it yours.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {enhancements.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group card-depth relative overflow-hidden rounded-2xl border ${item.border} bg-gradient-to-br ${item.gradient} p-6 sm:p-7`}
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-white/[0.03] to-transparent" />
                <div className="relative">
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl border ${item.border} bg-background/50 ${item.accent}`}>
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground/70 leading-relaxed mb-4">{item.description}</p>
                  <div className="flex items-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    {item.preview}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
