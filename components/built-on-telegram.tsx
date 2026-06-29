import { Check, Smartphone, MessageCircle, Users, RefreshCw, ArrowRight, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

export function BuiltOnTelegram() {
  return (
    <section className="border-t border-border/50 py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.08] px-3 py-1 text-xs font-medium backdrop-blur-sm">
              <Check className="h-3 w-3 text-[#3390ec]" />
              <span className="text-blue-300 font-medium">Built On Telegram</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1]">
              Your Telegram account.
              <br />
              <span className="text-muted-foreground/70">Supercharged.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/70 leading-relaxed">
              Works with your existing Telegram account. All chats, groups, channels, and
              contacts sync automatically. Nothing changes about how Telegram works —
              we just make it better.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {[
                { icon: MessageCircle, label: "All chats & history", desc: "Preserved" },
                { icon: Users, label: "Groups & channels", desc: "Full support" },
                { icon: RefreshCw, label: "Cross-device sync", desc: "Real-time" },
                { icon: Smartphone, label: "iOS, Android, Desktop", desc: "Multi-platform" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="card-depth flex items-start gap-3 rounded-xl border border-border/20 bg-card/30 p-3.5">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#3390ec]/10">
                      <Icon className="h-4 w-4 text-[#3390ec]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{item.label}</div>
                      <div className="text-xs text-muted-foreground/60">{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-border/30 bg-gradient-to-br from-blue-500/[0.06] to-indigo-500/[0.04] p-6 sm:p-8 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3390ec] shadow-lg shadow-[#3390ec]/20">
                    <MessageCircle className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-[10px] font-semibold text-muted-foreground">Telegram</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <ArrowRight className="h-5 w-5 text-amber-400 animate-pulse" />
                  <span className="text-[8px] text-amber-400 font-medium">SYNC</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-500 shadow-lg shadow-indigo-500/20">
                    <span className="text-lg font-bold text-white">S</span>
                  </div>
                  <span className="text-[10px] font-semibold text-muted-foreground">SPNETGRAM</span>
                </div>
              </div>

              <div className="space-y-2.5">
                {[
                  { label: "Telegram Account", value: "Connected", status: "success" },
                  { label: "Chat History", value: "Synced", status: "success" },
                  { label: "Contacts & Groups", value: "Imported", status: "success" },
                  { label: "Premium Features", value: "Unlocked", status: "premium" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-xl border border-border/15 bg-card/40 px-4 py-3 card-depth">
                    <div className="flex items-center gap-2.5">
                      <div className={cn(
                        "h-2 w-2 rounded-full",
                        item.status === "success" ? "bg-emerald-500" : "bg-amber-400"
                      )} />
                      <span className="text-sm text-muted-foreground/80">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={cn(
                        "text-xs font-semibold",
                        item.status === "success" ? "text-emerald-400" : "text-amber-400"
                      )}>
                        {item.value}
                      </span>
                      <Check className={cn(
                        "h-3 w-3",
                        item.status === "success" ? "text-emerald-400" : "text-amber-400"
                      )} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-center gap-3 rounded-xl border border-emerald-500/15 bg-emerald-500/[0.04] px-4 py-2.5">
                <Shield className="h-4 w-4 text-emerald-400" />
                <span className="text-[11px] text-emerald-400/80">Your data stays on Telegram&apos;s infrastructure. We enhance the client experience.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


