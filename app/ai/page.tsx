import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  Bot,
  Sparkles,
  MessageSquare,
  Languages,
  Headphones,
  Zap,
  ArrowRight,
  Shield,
  Brain,
  Lightbulb,
  Globe,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Features",
  description:
    "SP NET GRAM AI-powered features for smarter communication. Smart replies, content generation, translation, and intelligent productivity tools.",
};

const capabilities = [
  {
    icon: MessageSquare,
    title: "Smart Replies",
    description:
      "AI-generated response suggestions that understand context and tone. Get relevant, thoughtful replies in one tap — perfect for quick responses when you are busy.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Sparkles,
    title: "Content Generation",
    description:
      "Draft messages, summarize threads, and create content with AI assistance. From professional emails to casual replies, AI helps you communicate more effectively.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Languages,
    title: "Translation",
    description:
      "Real-time message translation across languages. Break down language barriers and communicate seamlessly with people around the world without leaving the chat.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Headphones,
    title: "Voice Processing",
    description:
      "AI-powered voice message transcription and summarization. Read long voice messages as text, or get quick summaries of lengthy audio conversations.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "Smart Workflows",
    description:
      "Automate repetitive tasks with intelligent workflow suggestions. AI learns your patterns and recommends shortcuts to save time in your daily communication.",
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Quick Actions",
    description:
      "Context-aware actions powered by AI. Schedule messages, set reminders, and trigger workflows based on message content — all without leaving your conversation.",
    gradient: "from-yellow-500 to-amber-600",
  },
];

const futureVision = [
  {
    title: "Smart Compose",
    description:
      "AI that drafts entire messages based on conversation context. Simply start typing and AI completes your thoughts with relevant, personalized suggestions.",
  },
  {
    title: "Contextual Suggestions",
    description:
      "Intelligent recommendations based on who you are talking to, what you are discussing, and your communication history. AI understands your relationships and adapts.",
  },
  {
    title: "Automated Workflows",
    description:
      "Create complex automation chains that handle routine communication tasks. From follow-up reminders to meeting scheduling, AI manages the repetitive work.",
  },
  {
    title: "AI Assistants",
    description:
      "Dedicated AI assistants for specific tasks — scheduling, research, data analysis, and more. Each assistant specializes in a domain and provides expert-level help.",
  },
];

export default function AIPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/[0.08] px-3 py-1 text-xs font-medium backdrop-blur-sm">
              <Bot className="h-3 w-3 text-purple-300" />
              <span className="text-purple-300 font-medium">AI-Powered</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Intelligent features for
              <br />
              <span className="text-muted-foreground/70">smarter communication</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/70 leading-relaxed max-w-2xl mx-auto">
              SP NET GRAM integrates AI-powered tools that enhance your messaging
              experience. From smart replies to content generation, AI works
              behind the scenes to help you communicate faster and more effectively.
            </p>
          </div>
        </div>
      </section>

      <Breadcrumbs />

      {/* ── Current AI Capabilities ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Current AI Capabilities
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Powerful AI features built into SP NET GRAM that enhance your
              everyday communication.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <ScrollReveal key={cap.title} delay={i * 80}>
                  <Card className="p-8 border-border/50 hover:border-border hover:shadow-sm transition-all duration-300 h-full">
                    <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${cap.gradient} shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight mb-3">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cap.description}
                    </p>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Productivity Features ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <Zap className="mx-auto h-12 w-12 text-amber-500/70 mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Boost Your Productivity
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                AI in SP NET GRAM is designed to save you time. Smart replies
                handle quick responses, content generation drafts messages for
                you, and automated workflows eliminate repetitive tasks. The more
                you use SP NET GRAM, the smarter it becomes — learning your
                communication patterns and adapting to your style.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Privacy Approach ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <Shield className="mx-auto h-12 w-12 text-emerald-500/70 mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Privacy-First AI
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Your privacy is non-negotiable. SP NET GRAM&apos;s AI features are
                designed with a privacy-first approach. We do not store your
                message content, and AI processing is handled with strict data
                protection standards. Your conversations remain yours — AI helps
                you communicate without compromising privacy.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Future AI Vision ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16">
              Future AI Vision
            </h2>
          </ScrollReveal>
          <div className="mx-auto max-w-3xl space-y-8">
            {futureVision.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/50 border border-border/50">
                      <Lightbulb className="h-4 w-4" />
                    </div>
                    {i < futureVision.length - 1 && (
                      <div className="w-px flex-1 bg-border/50 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="text-xs font-medium text-muted-foreground/70 bg-accent/50 px-2.5 py-1 rounded-full">
                      Coming Soon
                    </span>
                    <h3 className="text-lg font-bold tracking-tight mt-3 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-border/50 py-24" id="faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>
          <div className="mx-auto max-w-3xl space-y-6">
            {[
              {
                q: "What AI features does SP NET GRAM offer?",
                a: "SP NET GRAM currently offers smart replies, content generation, real-time translation, voice processing, smart workflows, and quick actions. More AI features are actively in development.",
              },
              {
                q: "How does SP NET GRAM handle AI privacy?",
                a: "We follow a privacy-first approach. AI processing is handled with strict data protection standards, and we do not store your message content. Your conversations remain private.",
              },
              {
                q: "Does AI read my messages?",
                a: "AI processes messages locally or through encrypted channels to provide features like smart replies and translation. Message content is not stored or used for training purposes.",
              },
              {
                q: "Will more AI features be added?",
                a: "Yes. Our AI roadmap includes smart compose, contextual suggestions, automated workflows, and dedicated AI assistants. These are actively being developed for future releases.",
              },
              {
                q: "Are AI features free?",
                a: "Core AI features are available to all SP NET GRAM users. Advanced AI capabilities may be part of premium membership tiers as the platform evolves.",
              },
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <Card className="p-6 border-border/50">
                  <h3 className="font-semibold tracking-tight mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Try AI-powered SP NET GRAM"
        description="Experience intelligent communication features that help you work smarter, not harder."
        primaryLabel="Join Beta"
        primaryHref="/beta"
        secondaryLabel="View Platform"
        secondaryHref="/platform"
      />
    </>
  );
}
