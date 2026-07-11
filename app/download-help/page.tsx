import type { Metadata } from "next";
import {
  Download,
  ShieldCheck,
  AlertCircle,
  Wifi,
  RefreshCw,
  Monitor,
  Smartphone,
  Globe,
  CheckCircle2,
  ArrowRight,
  FileCheck,
  Lock,
  Search,
  Zap,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Download Help",
  description:
    "Get help with downloading and installing SP NET GRAM. Troubleshoot installation issues, verify APK integrity, and check device compatibility.",
};

const installationSteps = [
  {
    step: 1,
    title: "Download the App",
    description:
      "Visit the official SP NET GRAM downloads page and select the appropriate version for your device. Ensure you are downloading from a trusted source.",
  },
  {
    step: 2,
    title: "Enable Unknown Sources",
    description:
      "On Android, go to Settings, then Security, and enable Unknown Sources to allow installation from outside the Play Store. Skip this step on iOS.",
  },
  {
    step: 3,
    title: "Install the App",
    description:
      "Open the downloaded file and follow the on-screen prompts to complete the installation. Grant necessary permissions when prompted.",
  },
  {
    step: 4,
    title: "Set Up Your Account",
    description:
      "Open SP NET GRAM, sign in or create your account, and start using the app. Sync your contacts to find friends who already use SP NET GRAM.",
  },
];

const commonIssues = [
  {
    icon: AlertCircle,
    title: "Installation Blocked",
    description:
      "Your device may block installation from unknown sources. Go to Settings and Security to enable Unknown Sources, or disable Play Protect temporarily during installation.",
    solution: "Enable Unknown Sources in device settings",
  },
  {
    icon: AlertCircle,
    title: "App Not Opening",
    description:
      "If the app crashes on launch, ensure your device meets the minimum requirements. Try clearing the app cache, restarting your device, and reinstalling.",
    solution: "Clear cache and restart your device",
  },
  {
    icon: Wifi,
    title: "Sync Issues",
    description:
      "If messages or contacts are not syncing, check your internet connection. Ensure the app has background data permissions enabled in your device settings.",
    solution: "Check internet and background data permissions",
  },
  {
    icon: RefreshCw,
    title: "Update Problems",
    description:
      "If an update fails to install, delete the current app cache, ensure sufficient storage space, and download the latest version from the official page.",
    solution: "Free up storage and re-download the update",
  },
];

const compatibility = [
  {
    icon: Smartphone,
    title: "Android",
    requirements: [
      "Android 8.0 (Oreo) or later",
      "2 GB RAM minimum",
      "200 MB free storage",
      "Active internet connection",
    ],
  },
  {
    icon: Monitor,
    title: "Desktop",
    requirements: [
      "Windows 10/11 or macOS 12+",
      "4 GB RAM minimum",
      "500 MB free storage",
      "Active internet connection",
    ],
  },
  {
    icon: Globe,
    title: "Web",
    requirements: [
      "Chrome 90+, Firefox 88+, Safari 14+",
      "Modern browser with JavaScript enabled",
      "Stable internet connection",
      "No installation required",
    ],
  },
];

const faqs = [
  {
    q: "Where can I download SP NET GRAM?",
    a: "Download SP NET GRAM from our official downloads page. We provide versions for Android, Desktop, and Web. Always download from official sources to ensure authenticity and security.",
  },
  {
    q: "Is it safe to install the APK directly?",
    a: "Yes, when downloaded from our official website. Our APK files are digitally signed and verified. You can verify the checksum on our downloads page to confirm the file has not been tampered with.",
  },
  {
    q: "The download is not starting",
    a: "Check your internet connection and ensure you have sufficient storage space. Try a different browser or disable any download managers that may be interfering. If the issue persists, try an alternative download mirror.",
  },
  {
    q: "Can I use SP NET GRAM on multiple devices?",
    a: "Yes. SP NET GRAM supports multiple devices simultaneously. Install the app on each device and sign in with the same account. Your messages and data will sync across all your devices automatically.",
  },
];

export default function DownloadHelpPage() {
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
              Download Help
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Need help downloading or installing SP NET GRAM? Find
              installation guides, troubleshoot common issues, and verify your
              download.
            </p>
          </div>
        </div>
      </section>

      {/* ── Installation Guide ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16">
              Installation Guide
            </h2>
          </ScrollReveal>
          <div className="mx-auto max-w-3xl space-y-8">
            {installationSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg">
                      <span className="text-sm font-bold text-white">{step.step}</span>
                    </div>
                    {i < installationSteps.length - 1 && (
                      <div className="w-px flex-1 bg-border/50 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-lg font-bold tracking-tight mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Common Issues ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Common Issues
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Solutions for the most common download and installation problems.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {commonIssues.map((issue, i) => {
              const Icon = issue.icon;
              return (
                <ScrollReveal key={issue.title} delay={i * 80}>
                  <Card className="p-6 border-border/50 hover:border-border hover:shadow-sm transition-all duration-300 h-full flex flex-col">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/50">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight mb-3">
                      {issue.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {issue.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-medium text-emerald-400/80">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      {issue.solution}
                    </div>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Compatibility ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4">
              Compatibility
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Check the system requirements for your device before downloading.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {compatibility.map((platform, i) => {
              const Icon = platform.icon;
              return (
                <ScrollReveal key={platform.title} delay={i * 80}>
                  <Card className="p-8 border-border/50 hover:border-border hover:shadow-sm transition-all duration-300 h-full">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/50">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight mb-4">
                      {platform.title}
                    </h3>
                    <ul className="space-y-3">
                      {platform.requirements.map((req, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-emerald-500/60" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── APK Verification ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <ShieldCheck className="mx-auto h-12 w-12 text-emerald-500/70 mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                APK Verification
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Every SP NET GRAM APK is digitally signed to guarantee
                authenticity and integrity. After downloading, you can verify the
                SHA-256 checksum listed on our official downloads page against
                the file on your device. This ensures the APK has not been
                modified or tampered with. We recommend only installing SP NET
                GRAM from verified sources to protect your device and data from
                unauthorized modifications.
              </p>
            </div>
          </ScrollReveal>
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
        title="Download SP NET GRAM"
        description="Get the latest version of SP NET GRAM for your device and start using enhanced Telegram features."
        primaryLabel="Download Now"
        primaryHref="/downloads"
        secondaryLabel="View Platform"
        secondaryHref="/platform"
      />
    </>
  );
}
