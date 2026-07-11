import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  MessageSquare,
  MessageCircle,
  Megaphone,
  FlaskConical,
  Heart,
  Users,
  Calendar,
  Trophy,
  Shield,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Join the SP NET GRAM community. Connect with users, contributors, and the development team across Telegram, GitHub, and more.",
};

const channels = [
  {
    icon: MessageSquare,
    title: "Telegram Group",
    description:
      "Join our official Telegram group for real-time discussions, announcements, and direct access to the development team.",
    href: "https://t.me/SPNETGRAM_CHAT",
    label: "Join Group",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: MessageCircle,
    title: "Forum",
    description:
      "Share ideas, request features, and discuss the future of SP NET GRAM with other community members.",
    href: "https://t.me/SPNETGRAM_FORUM",
    label: "Join Forum",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Megaphone,
    title: "Announcements",
    description:
      "Stay updated with the latest product releases, feature launches, and important platform news.",
    href: "/newsroom",
    label: "View Newsroom",
    gradient: "from-amber-500 to-orange-500",
  },
];

const ways = [
  {
    icon: FlaskConical,
    title: "Beta Program",
    description:
      "Be among the first to try new features. Beta testers help shape the product by providing early feedback and reporting issues before public releases.",
    href: "/beta",
    label: "Join Beta",
  },
  {
    icon: Heart,
    title: "Contribute",
    description:
      "Share your expertise. Whether it is bug reports, feature suggestions, documentation improvements, or code contributions — every effort matters.",
    href: "/support#contact-support",
    label: "Get Involved",
  },
  {
    icon: Users,
    title: "Spread the Word",
    description:
      "Help others discover SP NET GRAM. Share your experience, write about the platform, and invite friends and colleagues to try it.",
    href: "/waitlist",
    label: "Share SP NET GRAM",
  },
];

const guidelines = [
  {
    icon: Shield,
    title: "Be Respectful",
    description:
      "Treat everyone with respect. We maintain a welcoming, inclusive environment where diverse perspectives are valued.",
  },
  {
    icon: MessageCircle,
    title: "Stay Constructive",
    description:
      "Focus on solutions and constructive feedback. Whether reporting a bug or requesting a feature, provide context and details.",
  },
  {
    icon: Heart,
    title: "Help Others",
    description:
      "If you see someone struggling, offer guidance. Experienced community members help newcomers get the most out of SP NET GRAM.",
  },
  {
    icon: Shield,
    title: "Protect Privacy",
    description:
      "Respect user privacy and confidentiality. Never share personal information or sensitive data in public channels.",
  },
];

const events = [
  {
    title: "Weekly Development Updates",
    description:
      "Regular development progress shared with the community every week.",
    frequency: "Weekly",
  },
  {
    title: "Monthly Feature Showcases",
    description:
      "Deep dives into recently released features and sneak peeks at what is coming next.",
    frequency: "Monthly",
  },
  {
    title: "Community Feedback Sessions",
    description:
      "Open sessions where the team listens to community input and discusses priorities.",
    frequency: "Quarterly",
  },
  {
    title: "Annual Platform Review",
    description:
      "Comprehensive review of the year's achievements, learnings, and the vision for the year ahead.",
    frequency: "Yearly",
  },
];

export default function CommunityPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1 text-xs font-medium backdrop-blur-sm">
              <Users className="h-3 w-3 text-emerald-300" />
              <span className="text-emerald-300 font-medium">Community</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Built together,
              <br />
              <span className="text-muted-foreground/70">powered by you</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/70 leading-relaxed max-w-2xl mx-auto">
              SP NET GRAM is shaped by its community. Join thousands of users,
              contributors, and enthusiasts who are helping build the future of
              enhanced Telegram experiences.
            </p>
          </div>
        </div>
      </section>

      <Breadcrumbs />

      {/* ── Channels ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Join the Conversation
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Multiple ways to stay connected with the SP NET GRAM community.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {channels.map((channel, i) => {
              const Icon = channel.icon;
              return (
                <ScrollReveal key={channel.title} delay={i * 80}>
                  <Link href={channel.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <Card className="group p-8 border-border/50 hover:border-border hover:shadow-sm transition-all duration-300 h-full">
                      <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${channel.gradient} shadow-lg`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-foreground transition-colors">
                        {channel.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {channel.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                        {channel.label}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </span>
                    </Card>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Ways to Contribute ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Ways to Contribute
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Every contribution matters. Here is how you can help make SP NET
              GRAM better for everyone.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {ways.map((way, i) => {
              const Icon = way.icon;
              return (
                <ScrollReveal key={way.title} delay={i * 80}>
                  <Card className="p-8 border-border/50 hover:border-border hover:shadow-sm transition-all duration-300 h-full text-center">
                    <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/50">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight mb-3">
                      {way.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {way.description}
                    </p>
                    <Link
                      href={way.href}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                    >
                      {way.label}
                    </Link>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Community Guidelines ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Community Guidelines
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Our community thrives on mutual respect and constructive
              collaboration. These guidelines help maintain a positive
              environment for everyone.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2">
            {guidelines.map((guideline, i) => {
              const Icon = guideline.icon;
              return (
                <ScrollReveal key={guideline.title} delay={i * 80}>
                  <Card className="p-6 border-border/50 hover:border-border transition-all duration-200 h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/50">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold tracking-tight mb-1">
                          {guideline.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {guideline.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Events & Activities ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Events &amp; Activities
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Regular events keep the community engaged and informed about the
              latest developments.
            </p>
          </ScrollReveal>
          <div className="mx-auto max-w-3xl space-y-4">
            {events.map((event, i) => (
              <ScrollReveal key={event.title} delay={i * 80}>
                <Card className="p-6 border-border/50 hover:border-border transition-all duration-200">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/50">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold tracking-tight mb-1">
                          {event.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 text-xs font-medium text-muted-foreground/70 bg-accent/50 px-2.5 py-1 rounded-full">
                      {event.frequency}
                    </span>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recognition ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <Trophy className="mx-auto h-12 w-12 text-amber-500/70 mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Community Recognition
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We believe in recognizing the contributions of our community
                members. Active contributors, beta testers, and advocates who
                make SP NET GRAM better are acknowledged through our community
                recognition program. Your efforts do not go unnoticed.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24" id="faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>
          <div className="mx-auto max-w-3xl space-y-6">
            {[
              {
                q: "How do I join the community?",
                a: "The easiest way is to join our official Telegram group. You can also follow us on GitHub and participate in discussions.",
              },
              {
                q: "Can I contribute to SP NET GRAM?",
                a: "Yes. We welcome bug reports, feature suggestions, documentation improvements, and code contributions. Every effort helps improve the platform.",
              },
              {
                q: "Is there a code of conduct?",
                a: "Our community guidelines ensure a respectful, inclusive, and constructive environment. We expect all members to follow these guidelines.",
              },
              {
                q: "How do I report a bug?",
                a: "You can report bugs through our Support page, Telegram group, or GitHub issues. Provide as much detail as possible including device, OS, and steps to reproduce.",
              },
              {
                q: "Are there community events?",
                a: "We host weekly development updates, monthly feature showcases, quarterly feedback sessions, and an annual platform review.",
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
        title="Join the SP NET GRAM community"
        description="Be part of a growing community shaping the future of enhanced Telegram experiences."
        primaryLabel="Join Telegram"
        primaryHref="https://t.me/SPNETGRAM"
        secondaryLabel="View Newsroom"
        secondaryHref="/newsroom"
      />
    </>
  );
}
