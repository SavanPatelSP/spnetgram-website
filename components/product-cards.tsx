import Link from "next/link";
import { MessageCircle, ShieldCheck, Bot, Cloud, Code2, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";

interface ProductData {
  id: string;
  icon: typeof MessageCircle;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  accent: string;
  badge: string;
  badgeClass: string;
  href: string;
}

const products: ProductData[] = [
  {
    id: "gram",
    icon: MessageCircle,
    title: "SP NET GRAM",
    description: "Next-generation messaging client with AI, privacy, and premium features. The flagship communication platform.",
    features: ["AI-powered messaging", "End-to-end encryption", "Voice & video", "Channels & groups", "Premium features"],
    gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
    accent: "text-blue-400",
    badge: "Flagship",
    badgeClass: "bg-blue-500/10 text-blue-400 ring-blue-500/20",
    href: "#features",
  },
  {
    id: "admin",
    icon: ShieldCheck,
    title: "SP NET ADMIN",
    description: "Enterprise-grade administrative platform for managing communities, organizations, and teams at scale.",
    features: ["Moderation tools", "Analytics dashboard", "Role management", "Audit logs", "Automation"],
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    accent: "text-emerald-400",
    badge: "Enterprise",
    badgeClass: "bg-emerald-500/10 text-emerald-400 ring-emerald-500/20",
    href: "#enterprise",
  },
  {
    id: "ai",
    icon: Bot,
    title: "SP NET AI",
    description: "Intelligent assistant that understands context, generates responses, translates, and helps you communicate better.",
    features: ["Smart replies", "Real-time translation", "Content generation", "Voice assistant", "Context awareness"],
    gradient: "from-purple-500/10 via-pink-500/5 to-transparent",
    accent: "text-purple-400",
    badge: "New",
    badgeClass: "bg-purple-500/10 text-purple-400 ring-purple-500/20",
    href: "#ai",
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "SP NET CLOUD",
    description: "Secure cloud storage for your media, documents, and backups. Access anywhere with end-to-end encryption.",
    features: ["End-to-end encrypted", "Unlimited storage", "File sharing", "Auto-backup", "Cross-device sync"],
    gradient: "from-cyan-500/10 via-blue-500/5 to-transparent",
    accent: "text-cyan-400",
    badge: "Coming Soon",
    badgeClass: "bg-cyan-500/10 text-cyan-400 ring-cyan-500/20",
    href: "#features",
  },
  {
    id: "api",
    icon: Code2,
    title: "SP NET API",
    description: "Build on top of SP NET GRAM. Create bots, integrations, and custom solutions with our developer platform.",
    features: ["REST & WebSocket APIs", "Bot framework", "Webhooks", "SDKs", "Developer docs"],
    gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    accent: "text-amber-400",
    badge: "Developer",
    badgeClass: "bg-amber-500/10 text-amber-400 ring-amber-500/20",
    href: "/docs",
  },
];

export function ProductCards() {
  return (
    <section id="products" className="border-t border-border/30 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <Badge variant="default" className="mb-5">
              Product Ecosystem
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              One platform.
              <br />
              <span className="text-muted-foreground/50">Endless possibilities.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/60 leading-relaxed max-w-2xl mx-auto">
              Five interconnected products that work together to deliver the most advanced communication experience on the planet.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <ScrollReveal key={product.id} delay={i * 80}>
                <Link href={product.href} className="group block h-full">
                  <div
                    className={`relative flex h-full flex-col rounded-2xl border border-border/30 bg-gradient-to-br ${product.gradient} p-7 sm:p-8 transition-all duration-500 card-depth`}
                  >
                    {/* Glow */}
                    <div
                      className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${product.gradient} blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500`}
                    />

                    <div className="relative">
                      {/* Icon */}
                      <div
                        className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-border/30 bg-background/50 backdrop-blur-sm ${product.accent} group-hover:scale-105 transition-transform duration-300`}
                      >
                        <Icon className="h-7 w-7" />
                      </div>

                      {/* Title & badge */}
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold tracking-tight">{product.title}</h3>
                        <span className={`text-[9px] font-semibold rounded-full px-2 py-0.5 ring-1 ${product.badgeClass}`}>
                          {product.badge}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground/60 leading-relaxed mb-6">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="flex-1">
                        <ul className="space-y-2.5">
                          {product.features.map((f) => (
                            <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground/50">
                              <span className={`h-1 w-1 rounded-full ${product.accent} opacity-60`} />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Arrow */}
                      <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-muted-foreground/40 group-hover:text-foreground/80 transition-colors duration-300">
                        <span>Learn more</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
