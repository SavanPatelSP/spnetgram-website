import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "SP NET GRAM has completely transformed how our team communicates. The AI features alone save us hours every week.",
    author: "Alex Chen",
    role: "CTO, Quantum Ventures",
    initials: "AC",
  },
  {
    quote: "The privacy controls are unlike anything I've seen. Finally, a platform that takes security seriously without sacrificing user experience.",
    author: "Sarah Mitchell",
    role: "Security Engineer, SecureNet",
    initials: "SM",
  },
  {
    quote: "We migrated our entire community of 50,000+ members. The moderation tools and community features are exceptional.",
    author: "Marcus Johnson",
    role: "Community Director, NovaTech",
    initials: "MJ",
  },
  {
    quote: "As a creator, the monetization options are exactly what I needed. Exclusive content, paid channels — it's all beautifully integrated.",
    author: "Emily Park",
    role: "Content Creator",
    initials: "EP",
  },
];

export function TestimonialsSection() {
  return (
    <section className="border-t border-border/30 py-28 sm:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <Badge variant="outline" className="mb-5">
              <Quote className="h-3 w-3 mr-1" />
              Testimonials
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Trusted by
              <br />
              <span className="text-muted-foreground/40">forward-thinkers.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.author} delay={i * 80}>
              <div className="group relative rounded-2xl border border-border/20 bg-card/30 p-7 sm:p-8 transition-all duration-300 card-depth">
                <Quote className="absolute top-5 right-6 h-8 w-8 text-muted-foreground/5" />
                <p className="text-base sm:text-lg text-muted-foreground/70 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.author}</div>
                    <div className="text-xs text-muted-foreground/50">{t.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
