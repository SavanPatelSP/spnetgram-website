import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Building2, BarChart3, ShieldCheck, Users, Palette, DollarSign, Star, Camera } from "lucide-react";

const businessFeatures = [
  { icon: Building2, title: "Organization Hub", description: "Centralized management for teams, departments, and projects." },
  { icon: BarChart3, title: "Analytics", description: "Deep insights into engagement, growth, and team productivity." },
  { icon: ShieldCheck, title: "Compliance", description: "Audit logs, data retention, and regulatory compliance tools." },
  { icon: Users, title: "Team Management", description: "Roles, permissions, and hierarchy controls for any org size." },
];

const creatorFeatures = [
  { icon: Palette, title: "Custom Branding", description: "Personalized themes, badges, and profile experiences." },
  { icon: DollarSign, title: "Monetization", description: "Subscriptions, tips, and premium content for your audience." },
  { icon: Star, title: "Exclusive Content", description: "Paid channels, gated communities, and premium posts." },
  { icon: Camera, title: "Media Tools", description: "Built-in editing, filters, and publishing schedule." },
];

export function BusinessCreatorSection() {
  return (
    <>
      {/* Business */}
      <section id="enterprise" className="border-t border-white/[0.04] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <Badge variant="default" className="mb-5">
                <Building2 className="h-3 w-3 mr-1" />
                For Business
              </Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                Built for
                <br />
                <span className="text-muted-foreground/40">organizations.</span>
              </h2>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground/60 leading-relaxed max-w-2xl mx-auto">
                From startups to enterprises, SP NET GRAM provides the tools your organization needs
                to communicate securely and efficiently.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {businessFeatures.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 80}>
                  <div className="group flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 transition-all duration-300 card-depth">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/15 to-teal-500/10 text-emerald-400 group-hover:scale-105 transition-transform duration-300">
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

      {/* Creator */}
      <section className="border-t border-white/[0.04] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <Badge variant="premium" className="mb-5">
                <Star className="h-3 w-3 mr-1" />
                For Creators
              </Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                Your audience.
                <br />
                <span className="text-muted-foreground/40">Your rules.</span>
              </h2>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground/60 leading-relaxed max-w-2xl mx-auto">
                Monetize your influence, build exclusive communities, and connect with your audience
                on your terms.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {creatorFeatures.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 80}>
                  <div className="group flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 transition-all duration-300 card-depth">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/15 to-orange-500/10 text-amber-400 group-hover:scale-105 transition-transform duration-300">
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
    </>
  );
}
