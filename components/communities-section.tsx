import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Users, Hash, Globe, Heart, MessageCircle, Megaphone } from "lucide-react";

const communityFeatures = [
  {
    icon: Users,
    title: "Communities",
    description: "Create and manage communities of any size with powerful organization tools.",
  },
  {
    icon: Hash,
    title: "Channels",
    description: "Broadcast to unlimited audiences with rich media, polls, and analytics.",
  },
  {
    icon: MessageCircle,
    title: "Groups",
    description: "Smart groups with member management, permissions, and moderation tools.",
  },
  {
    icon: Megaphone,
    title: "Stories",
    description: "Share ephemeral content that disappears — with optional archive.",
  },
  {
    icon: Globe,
    title: "Discovery",
    description: "Find communities and channels aligned with your interests.",
  },
  {
    icon: Heart,
    title: "Engagement",
    description: "Reactions, polls, quizzes, and interactive features that bring people together.",
  },
];

export function CommunitiesSection() {
  return (
    <section id="community" className="border-t border-border/30 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <Badge variant="default" className="mb-5">
              <Users className="h-3 w-3 mr-1" />
              Community Platform
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Bring your community
              <br />
              <span className="text-muted-foreground/40">to life.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/60 leading-relaxed max-w-2xl mx-auto">
              Build thriving communities with tools designed for growth, engagement, and moderation at any scale.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {communityFeatures.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={i * 60}>
                <div className="group flex items-start gap-4 rounded-2xl border border-border/20 bg-card/30 p-6 transition-all duration-300 card-depth">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-indigo-500/10 text-blue-400 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base font-semibold tracking-tight mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground/60 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
