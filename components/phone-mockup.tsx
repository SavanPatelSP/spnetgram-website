import { Sparkles, Coins, Gem, CheckCheck, ChevronLeft, Wifi, Signal, Battery, Mic, Smile } from "lucide-react";

function ChatBubble({ sent, children, time }: { sent: boolean; children: string; time: string }) {
  return (
    <div
      className={`flex ${sent ? "justify-end" : "justify-start"} ${sent ? "animate-message-in" : "animate-message-in"}`}
      style={{ animationDelay: sent ? "0.2s" : "0.1s", animationFillMode: "backwards" }}
    >
      <div className="group relative max-w-[80%]">
        {!sent && (
          <div className="absolute -left-[20px] bottom-0 h-[20px] w-[20px] rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 ring-2 ring-[#0f0f1a]">
            <span className="flex h-full items-center justify-center text-[7px] font-bold text-white">S</span>
          </div>
        )}
        <div
          className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
            sent
              ? "bg-blue-500 text-white rounded-br-sm"
              : "bg-[#1c1c30] text-foreground rounded-bl-sm"
          }`}
        >
          <p className="leading-relaxed">{children}</p>
          <div className={`-mb-0.5 mt-0.5 flex items-center gap-1 ${sent ? "justify-end" : "justify-start"}`}>
            <span className="text-[9px] opacity-60">{time}</span>
            {sent && <CheckCheck className="h-2.5 w-2.5 opacity-60" />}
          </div>
        </div>
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-start gap-2.5 pl-[16px] animate-message-in" style={{ animationDelay: "0.6s", animationFillMode: "backwards" }}>
      <div className="flex items-center gap-1 rounded-2xl bg-[#1c1c30] px-4 py-3.5 shadow-sm">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="inline-block h-2 w-2 animate-typing-dot rounded-full bg-muted-foreground/30"
            style={{ animationDelay: `${i * 300}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[11px] font-semibold text-white/70">
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <Signal className="h-3 w-3" />
        <Wifi className="h-3 w-3" />
        <Battery className="h-3 w-3" />
      </div>
    </div>
  );
}

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[320px]">
      {/* Phone shadow/glow */}
      <div className="absolute -inset-2 rounded-[3rem] bg-gradient-to-b from-blue-500/20 via-purple-500/10 to-transparent opacity-60 blur-2xl" />

      {/* Phone body */}
      <div className="relative rounded-[2.75rem] border-[2px] border-zinc-700/60 bg-zinc-900 p-[6px] shadow-2xl shadow-black/50">
        {/* Notch area */}
        <div className="absolute left-1/2 top-0 z-20 h-6 w-[130px] -translate-x-1/2 rounded-b-2xl bg-zinc-900">
          <div className="mx-auto h-3.5 w-[100px] rounded-b-xl bg-zinc-800" />
        </div>
        <div className="absolute left-1/2 top-[11px] z-30 h-[6px] w-[6px] -translate-x-[40px] rounded-full bg-zinc-800" />
        <div className="absolute right-[24px] top-[13px] z-30 h-[4px] w-[52px] rounded-full bg-zinc-800" />

        {/* Screen */}
        <div className="device-reflection overflow-hidden rounded-[1.9rem] bg-[#0f0f1a]">
          {/* Header area */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-3 pb-3">
            <StatusBar />
            <div className="flex items-center gap-3 mt-1">
              <ChevronLeft className="h-5 w-5 text-white/70" />
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 ring-2 ring-white/20">
                  <span className="text-sm font-bold text-white">S</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[15px] font-semibold text-white tracking-tight">SP NET GRAM</span>
                    <div className="flex items-center gap-0.5 rounded-full bg-gradient-to-r from-amber-400/25 to-amber-500/15 px-1.5 py-0.5">
                      <Sparkles className="h-2.5 w-2.5 text-amber-400" />
                      <span className="text-[7px] font-bold text-amber-400 tracking-widest">AI</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-[10px] text-white/60">online · AI ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chat area */}
          <div className="space-y-3 p-3 min-h-[360px] bg-[#0f0f1a]">
            {/* Date divider */}
            <div className="relative flex items-center justify-center py-2">
              <span className="relative z-10 bg-[#0f0f1a] px-3 text-[9px] text-muted-foreground/30">Today</span>
              <div className="absolute inset-x-0 top-1/2 h-px bg-border/5" />
            </div>

            <ChatBubble sent={false} time="10:23 AM">
              Hey! SP NET GRAM is live. The AI features are incredible.
            </ChatBubble>

            <ChatBubble sent={true} time="10:24 AM">
              Just tried it. The smart replies are scarily accurate. And the speed?
            </ChatBubble>

            <ChatBubble sent={false} time="10:25 AM">
              Right? Messages send instantly. Plus the privacy controls are next level.
            </ChatBubble>

            {/* Stats row */}
            <div className="flex items-center gap-2 pl-[16px] pt-1 animate-message-in" style={{ animationDelay: "0.5s", animationFillMode: "backwards" }}>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500/15 to-amber-400/5 px-3 py-1 ring-1 ring-amber-500/15">
                <Coins className="h-3 w-3 text-amber-400" />
                <span className="text-[9px] font-semibold text-amber-400">2,450</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-500/15 to-blue-400/5 px-3 py-1 ring-1 ring-blue-500/15">
                <Gem className="h-3 w-3 text-blue-400" />
                <span className="text-[9px] font-semibold text-blue-400">150</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-500/15 to-purple-400/5 px-3 py-1 ring-1 ring-purple-500/15">
                <Sparkles className="h-2.5 w-2.5 text-purple-400" />
                <span className="text-[9px] font-semibold text-purple-400">AI</span>
              </div>
            </div>

            <ChatBubble sent={true} time="10:26 AM">
              Pro plan is worth it. Custom themes + AI assistant + priority support.
            </ChatBubble>

            <TypingIndicator />
          </div>

          {/* Input bar */}
          <div className="border-t border-white/[0.04] bg-[#0f0f1a] px-3 py-2.5">
            <div className="flex items-center gap-2 rounded-2xl bg-[#1c1c30] px-4 py-2.5 ring-1 ring-white/[0.03]">
              <Smile className="h-4 w-4 text-muted-foreground/30" />
              <span className="text-xs text-muted-foreground/30 flex-1">Message</span>
              <Mic className="h-4 w-4 text-muted-foreground/30" />
              <div className="flex items-center gap-1 rounded-lg bg-gradient-to-r from-blue-500/20 to-indigo-500/10 px-2 py-0.5">
                <Sparkles className="h-3 w-3 text-blue-400" />
                <span className="text-[7px] font-bold text-blue-400 tracking-widest">AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
