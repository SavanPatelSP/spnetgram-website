import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  Download,
  Smartphone,
  Monitor,
  Globe,
  Check,
  Shield,
  ArrowRight,
  FileText,
  Clock,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Downloads",
  description:
    "Download SP NET GRAM for Android. Stable and beta releases, installation guides, system requirements, and version history.",
};

const platforms = [
  {
    icon: Smartphone,
    title: "Android",
    status: "Available",
    statusVariant: "success" as const,
    description: "Full-featured SP NET GRAM client for Android devices.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Monitor,
    title: "Windows",
    status: "Coming Soon",
    statusVariant: "outline" as const,
    description: "Desktop client for Windows with full feature parity.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Monitor,
    title: "macOS",
    status: "Coming Soon",
    statusVariant: "outline" as const,
    description: "Native macOS application optimized for Apple silicon.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Linux",
    status: "Coming Soon",
    statusVariant: "outline" as const,
    description: "Cross-platform Linux client with broad distribution support.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Globe,
    title: "Web",
    status: "Coming Soon",
    statusVariant: "outline" as const,
    description: "Browser-based access for instant use without installation.",
    gradient: "from-sky-500 to-cyan-500",
  },
];

const systemReqs = [
  {
    platform: "Android",
    specs: [
      "Android 7.0 or later",
      "2 GB RAM minimum",
      "100 MB available storage",
      "Internet connection required",
    ],
  },
  {
    platform: "Windows",
    specs: [
      "Windows 10 or later",
      "4 GB RAM minimum",
      "200 MB available storage",
      "DirectX 11 compatible GPU",
    ],
  },
  {
    platform: "macOS",
    specs: [
      "macOS 12 or later",
      "4 GB RAM minimum",
      "200 MB available storage",
      "Apple Silicon or Intel",
    ],
  },
];

const installSteps = [
  {
    step: 1,
    title: "Download APK",
    description:
      "Tap the download button above to get the latest SP NET GRAM APK file for Android.",
  },
  {
    step: 2,
    title: "Enable Unknown Sources",
    description:
      "Go to Settings > Security and enable installation from unknown sources for your browser or file manager.",
  },
  {
    step: 3,
    title: "Install the App",
    description:
      "Open the downloaded APK file and follow the on-screen prompts to complete installation.",
  },
  {
    step: 4,
    title: "Login with Telegram",
    description:
      "Open SP NET GRAM and log in using your existing Telegram account credentials.",
  },
];

const versionHistory = [
  {
    version: "v0.2.0",
    date: "July 2026",
    description:
      "Enhanced messaging, premium themes, AI-powered tools, and Coins & Gems system.",
  },
  {
    version: "v0.1.0",
    date: "June 2026",
    description:
      "Initial release with core Telegram client features and SP NET GRAM branding.",
  },
  {
    version: "v0.0.1",
    date: "May 2026",
    description:
      "Internal alpha release for testing and early feedback from the development team.",
  },
];

const faqs = [
  {
    q: "How do I download SP NET GRAM?",
    a: "Tap the Download APK button on this page. The APK file will begin downloading to your Android device. Once downloaded, open the file to start installation.",
  },
  {
    q: "Is SP NET GRAM available on the Play Store?",
    a: "Currently, SP NET GRAM is distributed as a direct APK download. We are not yet listed on the Google Play Store. Always download from our official website to ensure safety.",
  },
  {
    q: "How do I update to a new version?",
    a: "Download the latest APK from this page and install it over your existing installation. Your data and settings will be preserved.",
  },
  {
    q: "Is it safe to install SP NET GRAM?",
    a: "Yes. SP NET GRAM is built on Telegram's secure infrastructure. All APK files are scanned and distributed through our official website. We never modify Telegram's core encryption or data handling.",
  },
  {
    q: "What should I do if installation fails?",
    a: "Ensure you have enabled installation from unknown sources, have sufficient storage, and are running Android 7.0 or later. If issues persist, contact our support team.",
  },
];

export default function DownloadsPage() {
  const tagColors: Record<string, string> = {
    success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    outline: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.08] px-3 py-1 text-xs font-medium backdrop-blur-sm">
              <Download className="h-3 w-3 text-blue-300" />
              <span className="text-blue-300 font-medium">Downloads</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Download
              <br />
              <span className="text-muted-foreground/70">SP NET GRAM</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Get the latest version of SP NET GRAM for your device. Stable
              releases, beta builds, installation guides, and system requirements
              all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* ── Stable & Beta Releases ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Available Releases
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Choose between the stable release for everyday use or the beta
              release to preview upcoming features.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Stable Release */}
            <ScrollReveal delay={0}>
              <Card className="group relative overflow-hidden p-8 border-border/50 hover:border-border hover:shadow-sm transition-all duration-300 h-full">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-emerald-500/10 blur-3xl" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg">
                      <Smartphone className="h-6 w-6 text-white" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                      Stable
                    </span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight mb-1">
                    Stable Release
                  </h3>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-semibold text-muted-foreground">
                      v0.2.0
                    </span>
                    <span className="text-xs text-muted-foreground/50">
                      July 2026
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Enhanced messaging",
                      "Premium themes",
                      "AI-powered tools",
                      "Coins & Gems system",
                    ].map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="h-4 w-4 shrink-0 text-emerald-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/waitlist"
                    className="inline-flex items-center gap-2 rounded-lg bg-foreground/90 px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    Download APK
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Card>
            </ScrollReveal>

            {/* Beta Release */}
            <ScrollReveal delay={80}>
              <Card className="group relative overflow-hidden p-8 border-border/50 hover:border-border hover:shadow-sm transition-all duration-300 h-full">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-amber-500/10 blur-3xl" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg">
                      <Smartphone className="h-6 w-6 text-white" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
                      Beta
                    </span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight mb-1">
                    Beta Release
                  </h3>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-semibold text-muted-foreground">
                      v0.3.0-beta
                    </span>
                    <span className="text-xs text-muted-foreground/50">
                      July 2026
                    </span>
                  </div>
                  <div className="flex items-start gap-2 rounded-lg bg-amber-500/[0.06] border border-amber-500/10 p-3 mb-6">
                    <AlertTriangle className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" />
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Beta builds may contain bugs and are not recommended for
                      production use. Test and provide feedback to help us
                      improve.
                    </p>
                  </div>
                  <Link
                    href="/beta"
                    className="inline-flex items-center gap-2 rounded-lg border border-border/50 bg-accent/20 px-5 py-2.5 text-sm font-medium hover:bg-accent/40 transition-colors"
                  >
                    Join Beta Program
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Platform Availability ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Platform Availability
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              SP NET GRAM is available on Android today and expanding to more
              platforms in the near future.
            </p>
          </ScrollReveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {platforms.map((platform, i) => {
              const Icon = platform.icon;
              return (
                <ScrollReveal key={platform.title} delay={i * 60}>
                  <Card className="p-6 border-border/50 hover:border-border hover:shadow-sm transition-all duration-300 h-full text-center">
                    <div
                      className={`mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${platform.gradient} shadow-lg`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-semibold tracking-tight mb-1">
                      {platform.title}
                    </h3>
                    <span
                      className={`inline-block text-[10px] font-semibold rounded-full px-2 py-0.5 border mb-3 ${tagColors[platform.statusVariant]}`}
                    >
                      {platform.status}
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {platform.description}
                    </p>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── System Requirements ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                System Requirements
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                SP NET GRAM is designed to run efficiently on modern devices.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {systemReqs.map((req, i) => (
              <ScrollReveal key={req.platform} delay={i * 80}>
                <Card className="p-6 border-border/50 hover:border-border transition-all duration-200 h-full">
                  <h3 className="font-semibold tracking-tight mb-4">
                    {req.platform}
                  </h3>
                  <ul className="space-y-2">
                    {req.specs.map((spec, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Installation Guide ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Installation Guide
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Follow these steps to install SP NET GRAM on your Android device.
            </p>
          </ScrollReveal>
          <div className="mx-auto max-w-2xl space-y-4">
            {installSteps.map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 80}>
                <Card className="p-6 border-border/50 hover:border-border transition-all duration-200">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg">
                      <span className="text-sm font-bold text-white">
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold tracking-tight mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Version History ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Version History
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              A record of all SP NET GRAM releases and the changes in each
              version.
            </p>
          </ScrollReveal>
          <div className="mx-auto max-w-2xl space-y-4">
            {versionHistory.map((release, i) => (
              <ScrollReveal key={release.version} delay={i * 80}>
                <Card className="p-6 border-border/50 hover:border-border transition-all duration-200">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/50">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-semibold tracking-tight">
                            {release.version}
                          </h3>
                          <span className="text-xs text-muted-foreground/50">
                            {release.date}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {release.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        className="border-t border-border/50 bg-accent/[0.03] py-24"
        id="faq"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>
          <div className="mx-auto max-w-3xl space-y-6">
            {faqs.map((faq, i) => (
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
        title="Need download help?"
        description="If you run into any issues downloading or installing SP NET GRAM, our support team is here to help."
        primaryLabel="Get Support"
        primaryHref="/download-help"
        secondaryLabel="Join Beta"
        secondaryHref="/beta"
      />
    </>
  );
}
