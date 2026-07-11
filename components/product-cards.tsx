import Link from "next/link";
import { MessageCircle, ShieldCheck, Bot, Cloud, Code2, ArrowRight, Gauge } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";

interface TechTag {
  label: string;
}

interface ProductData {
  id: string;
  icon: typeof MessageCircle;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  techStack: TechTag[];
  gradient: string;
  accent: string;
  accentBg: string;
  badge: string;
  badgeClass: string;
  status: string;
  statusColor: string;
  progress: number;
  progressLabel: string;
  href: string;
}

const products: ProductData[] = [
  {
    id: "gram",
    icon: MessageCircle,
    title: "SP NET GRAM",
    subtitle: "Messaging reimagined for the modern world",
    description: "A next-generation messaging platform focused on privacy, productivity, premium experiences, and powerful communication tools.",
    features: [
      "End-to-end encrypted messaging",
      "Premium communication tools",
      "Deep customization & personalization",
      "Productivity-focused design",
      "Cross-platform support",
      "Developer API & integrations",
    ],
    techStack: [
      { label: "TypeScript" },
      { label: "Next.js" },
      { label: "WebSocket" },
      { label: "PostgreSQL" },
      { label: "Redis" },
    ],
    gradient: "from-blue-500/10 via-indigo-500/[0.04] to-transparent",
    accent: "text-blue-400",
    accentBg: "bg-blue-500/10",
    badge: "Flagship",
    badgeClass: "bg-blue-500/10 text-blue-400 ring-blue-500/20",
    status: "Active Development",
    statusColor: "bg-emerald-500",
    progress: 65,
    progressLabel: "Core Architecture Complete",
    href: "#features",
  },
  {
    id: "admin",
    icon: ShieldCheck,
    title: "SP NET GRAM ADMIN OS",
    subtitle: "Enterprise administration, redesigned",
    description: "A complete enterprise administration platform featuring licensing, premium management, coins & gems economy, organizations, and team management.",
    features: [
      "Comprehensive organization management",
      "Role-based permissions & audit logs",
      "Coins & gems economy system",
      "Real-time analytics dashboard",
      "Moderation & trust & safety tools",
      "Multi-tenant administration",
    ],
    techStack: [
      { label: "TypeScript" },
      { label: "React" },
      { label: "Node.js" },
      { label: "PostgreSQL" },
      { label: "Redis" },
      { label: "Docker" },
    ],
    gradient: "from-emerald-500/10 via-teal-500/[0.04] to-transparent",
    accent: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    badge: "Enterprise",
    badgeClass: "bg-emerald-500/10 text-emerald-400 ring-emerald-500/20",
    status: "Building...",
    statusColor: "bg-amber-500",
    progress: 50,
    progressLabel: "Platform Foundation",
    href: "#enterprise",
  },
  {
    id: "ai",
    icon: Bot,
    title: "SP NET AI",
    subtitle: "Intelligence for the SP NET ecosystem",
    description: "An AI platform being built to power intelligent experiences across the SP NET ecosystem — from smart messaging to automated administration.",
    features: [
      "Intelligent messaging assistance",
      "Automated administration workflows",
      "Ecosystem-wide AI integration",
      "Privacy-first AI architecture",
      "Context-aware responses",
      "Multi-language support",
    ],
    techStack: [
      { label: "Python" },
      { label: "TypeScript" },
      { label: "AI/ML" },
      { label: "LLMs" },
      { label: "Vector DBs" },
    ],
    gradient: "from-purple-500/10 via-pink-500/[0.04] to-transparent",
    accent: "text-purple-400",
    accentBg: "bg-purple-500/10",
    badge: "Research",
    badgeClass: "bg-purple-500/10 text-purple-400 ring-purple-500/20",
    status: "In Development",
    statusColor: "bg-blue-500",
    progress: 25,
    progressLabel: "Research & Prototyping",
    href: "#ai",
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "SP NET CLOUD",
    subtitle: "Secure storage for the ecosystem",
    description: "Secure cloud storage infrastructure for media, documents, and backups with end-to-end encryption and cross-device synchronization.",
    features: [
      "End-to-end encrypted storage",
      "Cross-device sync",
      "File sharing & collaboration",
      "Auto-backup capabilities",
      "Version history",
      "Granular access controls",
    ],
    techStack: [
      { label: "TypeScript" },
      { label: "Go" },
      { label: "PostgreSQL" },
      { label: "S3" },
      { label: "Redis" },
    ],
    gradient: "from-cyan-500/10 via-blue-500/[0.04] to-transparent",
    accent: "text-cyan-400",
    accentBg: "bg-cyan-500/10",
    badge: "Planned",
    badgeClass: "bg-cyan-500/10 text-cyan-400 ring-cyan-500/20",
    status: "On the horizon",
    statusColor: "bg-muted-foreground/30",
    progress: 5,
    progressLabel: "Architecture Design",
    href: "#features",
  },
  {
    id: "api",
    icon: Code2,
    title: "SP NET API",
    subtitle: "Build on the SP NET platform",
    description: "Developer platform for building bots, integrations, and custom solutions on top of SP NET GRAM and the broader ecosystem.",
    features: [
      "REST & WebSocket APIs",
      "Bot framework",
      "Webhook system",
      "SDKs for major languages",
      "Comprehensive documentation",
      "Rate limiting & auth",
    ],
    techStack: [
      { label: "TypeScript" },
      { label: "Node.js" },
      { label: "GraphQL" },
      { label: "REST" },
      { label: "WebSocket" },
    ],
    gradient: "from-amber-500/10 via-orange-500/[0.04] to-transparent",
    accent: "text-amber-400",
    accentBg: "bg-amber-500/10",
    badge: "Developer",
    badgeClass: "bg-amber-500/10 text-amber-400 ring-amber-500/20",
    status: "Planning",
    statusColor: "bg-muted-foreground/30",
    progress: 10,
    progressLabel: "API Specification",
    href: "/docs",
  },
];

export function ProductCards() {
  return (
    <section id="products" className="border-t border-white/[0.04] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center mb-14">
            <Badge variant="default" className="mb-5">
              Product Ecosystem
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              What we&apos;re building
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/60 leading-relaxed max-w-2xl mx-auto">
              Every product is built with intention. Each one solves a real problem at scale.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <ScrollReveal key={product.id} delay={i * 80}>
                <Link href={product.href} className="group block h-full">
                  <div
                    className={`relative flex h-full flex-col rounded-2xl border border-white/[0.06] bg-gradient-to-br ${product.gradient} p-6 transition-all duration-500 hover:border-white/[0.12] card-depth`}
                  >
                    {/* Glow */}
                    <div
                      className={`absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${product.gradient} blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700`}
                    />

                    <div className="relative flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.06] bg-black/20 backdrop-blur-sm ${product.accent} group-hover:scale-110 transition-all duration-300`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className={`inline-flex items-center gap-1.5 rounded-full ${product.badgeClass} px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${product.statusColor}`} />
                          {product.badge}
                        </span>
                      </div>

                      {/* Title & subtitle */}
                      <h3 className="text-lg font-bold tracking-tight mb-0.5">{product.title}</h3>
                      <p className="text-xs text-muted-foreground/50 mb-3 leading-relaxed">{product.subtitle}</p>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground/60 leading-relaxed mb-4">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="flex-1 mb-4">
                        <ul className="space-y-1.5">
                          {product.features.map((f) => (
                            <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground/50">
                              <span className={`h-1 w-1 rounded-full ${product.accent} opacity-60 shrink-0`} />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech stack + Progress inline */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="flex flex-wrap gap-1.5">
                          {product.techStack.slice(0, 3).map((t) => (
                            <span
                              key={t.label}
                              className={`rounded-md ${product.accentBg}/20 px-2 py-0.5 text-[9px] font-medium ${product.accent}/60`}
                            >
                              {t.label}
                            </span>
                          ))}
                          {product.techStack.length > 3 && (
                            <span className="rounded-md bg-white/[0.03] px-2 py-0.5 text-[9px] font-medium text-muted-foreground/40">
                              +{product.techStack.length - 3}
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] font-semibold text-muted-foreground/40 whitespace-nowrap">{product.progress}%</span>
                      </div>

                      {/* Progress bar */}
                      <div className="mb-4">
                        <div className="h-1 rounded-full bg-white/[0.04] overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-1000"
                            style={{ width: `${product.progress}%` }}
                          />
                        </div>
                      </div>

                      {/* Status + CTA */}
                      <div className="flex items-center justify-between pt-3 border-t border-white/[0.04]">
                        <div className="flex items-center gap-1.5">
                          <span className={`h-1.5 w-1.5 rounded-full ${product.statusColor}`} />
                          <span className="text-[10px] font-medium text-muted-foreground/40">{product.status}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground/30 group-hover:text-foreground/60 transition-colors duration-300">
                          <span>Details</span>
                          <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </div>
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
