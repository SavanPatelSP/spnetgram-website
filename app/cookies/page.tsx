import type { Metadata } from "next";
import { Cookie, ChevronRight, Mail, ArrowRight, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "SP NET GRAM Cookie Policy — learn how SP NET GRAM uses cookies, the types of cookies we deploy, and how to manage your cookie preferences.",
  openGraph: {
    title: "Cookie Policy — SP NET GRAM",
    description:
      "Detailed information about cookies and tracking technologies used by SP NET GRAM and how to manage your preferences.",
    url: "https://spnetgram.sp-net.in/cookies",
    type: "website",
  },
};

const cookieTypes = [
  {
    id: "essential",
    title: "Essential Cookies",
    badge: "Required",
    badgeVariant: "default" as const,
    description:
      "Essential cookies are strictly necessary for the basic operation of SP NET GRAM's website. These cookies enable core functionality such as security, session management, and access to protected areas of the site. Without these cookies, the website cannot function properly.",
    details: [
      "Session cookies that maintain your browsing session",
      "Security cookies that protect against cross-site request forgery",
      "Authentication cookies that verify your identity when logged in",
      "Load balancing cookies that distribute traffic across servers",
    ],
  },
  {
    id: "analytics",
    title: "Analytics Cookies",
    badge: "Optional",
    badgeVariant: "outline" as const,
    description:
      "Analytics cookies help us understand how visitors interact with SP NET GRAM's website by collecting and reporting information anonymously. These cookies allow us to measure and improve the performance of our site by understanding which pages are visited most frequently and how users navigate through the site.",
    details: [
      "Page view tracking to understand content popularity",
      "Navigation flow analysis to improve site structure",
      "Performance monitoring to identify and resolve issues",
      "Anonymized geographic and device data for optimization",
    ],
  },
  {
    id: "preference",
    title: "Preference Cookies",
    badge: "Optional",
    badgeVariant: "outline" as const,
    description:
      "Preference cookies enable the website to remember choices you make and provide enhanced, personalized features. These cookies may be set by us or by third-party providers whose services we have added to our pages. They improve your experience by remembering your settings and preferences.",
    details: [
      "Language and locale preferences",
      "Display settings such as theme and layout preferences",
      "Remember your cookie consent choices",
      "Region-specific content customization",
    ],
  },
  {
    id: "functional",
    title: "Functional Cookies",
    badge: "Optional",
    badgeVariant: "outline" as const,
    description:
      "Functional cookies allow enhanced functionality and personalization, such as live chat support, embedded content, and interactive features. They may be set by us or by third-party providers whose services we have added to our pages. If you do not allow these cookies, some or all of these services may not function properly.",
    details: [
      "Live chat and support widget functionality",
      "Embedded video and media player preferences",
      "Social media sharing capabilities",
      "Feedback and survey interaction state",
    ],
  },
];

const browserInstructions = [
  {
    browser: "Google Chrome",
    steps: [
      "Click the three-dot menu in the top-right corner",
      "Select Settings > Privacy and security",
      "Click Cookies and other site data",
      "Choose your preferred cookie blocking level",
    ],
  },
  {
    browser: "Mozilla Firefox",
    steps: [
      "Click the hamburger menu in the top-right corner",
      "Select Settings > Privacy & Security",
      "Under Enhanced Tracking Protection, choose your level",
      "Or click Manage Data to control cookies individually",
    ],
  },
  {
    browser: "Apple Safari",
    steps: [
      "Open Safari menu and select Preferences",
      "Click the Privacy tab",
      "Enable Prevent cross-site tracking",
      "Manage website data for granular control",
    ],
  },
  {
    browser: "Microsoft Edge",
    steps: [
      "Click the three-dot menu in the top-right corner",
      "Select Settings > Cookies and site permissions",
      "Click Manage and delete cookies and site data",
      "Configure your cookie blocking preferences",
    ],
  },
];

const faqItems = [
  {
    q: "Does SP NET GRAM use tracking cookies?",
    a: "SP NET GRAM uses only essential cookies for core website functionality. Analytics and preference cookies are optional and used only to improve your experience. We do not use advertising or marketing cookies.",
  },
  {
    q: "Can I use SP NET GRAM without accepting cookies?",
    a: "Essential cookies are required for the website to function properly and cannot be disabled. Optional cookies (analytics, preferences, functional) can be declined through our cookie consent banner or your browser settings without affecting core functionality.",
  },
  {
    q: "Do cookies affect my Telegram account?",
    a: "No. Cookies set by SP NET GRAM's website are completely separate from your Telegram account. SP NET GRAM cookies only apply to the spnetgram.sp-net.in website and do not interact with Telegram's systems or your Telegram data.",
  },
  {
    q: "How often is this Cookie Policy updated?",
    a: "We review this Cookie Policy periodically and update it when our cookie practices change. The Last Updated date at the top of this page indicates when the policy was most recently revised. Significant changes will be communicated through the website.",
  },
  {
    q: "What third-party services set cookies on your site?",
    a: "We minimize third-party cookies. Any third-party services we use, such as analytics or hosting providers, may set essential cookies necessary for their operation. We carefully evaluate the cookies set by third parties and require them to maintain appropriate privacy standards.",
  },
  {
    q: "How do I delete cookies already set on my device?",
    a: "You can delete cookies through your browser settings. Each browser has a different process, but generally you can find cookie management in the Privacy or Security settings. Note that deleting cookies may log you out of websites and reset your preferences.",
  },
];

const tableOfContents = [
  { label: "What Are Cookies", href: "#what-are-cookies" },
  { label: "Types of Cookies We Use", href: "#types-of-cookies" },
  { label: "Essential Cookies", href: "#essential" },
  { label: "Analytics Cookies", href: "#analytics" },
  { label: "Preference Cookies", href: "#preference" },
  { label: "Functional Cookies", href: "#functional" },
  { label: "Managing Cookies", href: "#managing-cookies" },
  { label: "Browser Controls", href: "#browser-controls" },
  { label: "Policy Updates", href: "#policy-updates" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

export default function CookiesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-[#3390ec]/[0.04] blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 text-xs font-medium tracking-wide uppercase">
              <Cookie className="h-3.5 w-3.5 text-foreground" />
              <span className="text-muted-foreground">Legal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Cookie Policy
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Understand how SP NET GRAM uses cookies and similar technologies
              to provide, protect, and improve our services across all
              platforms.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3 text-sm text-muted-foreground/60">
              <span>Last updated: July 2026</span>
              <span className="text-border">·</span>
              <span>Effective: July 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Breadcrumbs ── */}
      <div className="border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground/50">
            <Link href="/" className="hover:text-foreground/70 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/cookies" className="text-foreground/70">
              Cookie Policy
            </Link>
          </nav>
        </div>
      </div>

      {/* ── Content ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Table of Contents */}
            <ScrollReveal>
              <Card className="p-6 mb-12 border-border/50 bg-accent/[0.03]">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/50 mb-4">
                  Table of Contents
                </h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-2 text-sm text-muted-foreground/60 hover:text-foreground transition-colors py-1"
                    >
                      <ArrowRight className="h-3 w-3 shrink-0" />
                      {item.label}
                    </a>
                  ))}
                </div>
              </Card>
            </ScrollReveal>

            {/* What Are Cookies */}
            <ScrollReveal>
              <div id="what-are-cookies" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
                  What Are Cookies
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cookies are small text files that are stored on your device
                  (computer, tablet, or mobile) when you visit a website. They
                  are widely used to make websites work efficiently, improve
                  user experience, and provide information to website owners
                  about how their site is being used.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cookies can be &quot;persistent&quot; (remaining on your device until
                  deleted) or &quot;session-based&quot; (deleted when you close your
                  browser). They can also be set by the website you are visiting
                  (&quot;first-party cookies&quot;) or by third-party services integrated
                  into the website (&quot;third-party cookies&quot;).
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  SP NET GRAM uses cookies sparingly and transparently. We
                  prioritize your privacy and only deploy cookies that are
                  necessary for core functionality or that help us improve your
                  experience with your consent.
                </p>
              </div>
            </ScrollReveal>

            {/* Types of Cookies */}
            <ScrollReveal>
              <div id="types-of-cookies" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
                  Types of Cookies We Use
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  SP NET GRAM categorizes cookies into four types based on their
                  purpose. Each type serves a specific function and has
                  different implications for your privacy and experience.
                </p>

                <div className="space-y-6">
                  {cookieTypes.map((type) => (
                    <div key={type.id} id={type.id} className="scroll-mt-24">
                    <Card
                      className="p-6 border-border/50 hover:border-border transition-all duration-200"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-lg font-semibold tracking-tight">
                          {type.title}
                        </h3>
                        <Badge variant={type.badgeVariant}>{type.badge}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {type.description}
                      </p>
                      <div className="space-y-2">
                        {type.details.map((detail) => (
                          <div
                            key={detail}
                            className="flex items-start gap-3 text-sm text-muted-foreground/70"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </Card>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Managing Cookies */}
            <ScrollReveal>
              <div id="managing-cookies" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
                  Managing Cookies
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to decide whether to accept or reject
                  cookies. You can exercise your cookie rights by setting your
                  preferences in the cookie consent banner that appears when
                  you first visit our website, or by changing your preferences
                  at any time through our cookie settings.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you choose to reject cookies, you can still use our website,
                  but your access to some functionality and areas may be
                  restricted. Essential cookies cannot be declined as they are
                  necessary for the website to function properly.
                </p>
                <Card className="p-5 border-border/50 bg-accent/[0.03]">
                  <div className="flex items-start gap-3">
                    <Settings className="h-4 w-4 text-muted-foreground/50 mt-0.5 shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      You can also clear cookies already stored on your device
                      at any time through your browser settings. This will,
                      however, log you out of any websites where you are
                      currently signed in and reset any preferences you have
                      set.
                    </p>
                  </div>
                </Card>
              </div>
            </ScrollReveal>

            {/* Browser Controls */}
            <ScrollReveal>
              <div id="browser-controls" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
                  Browser Controls
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Most web browsers allow you to control cookies through their
                  settings. Below are instructions for managing cookies in
                  popular browsers:
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {browserInstructions.map((item) => (
                    <Card
                      key={item.browser}
                      className="p-5 border-border/50 hover:border-border transition-all duration-200"
                    >
                      <h3 className="font-semibold tracking-tight mb-3">
                        {item.browser}
                      </h3>
                      <ol className="space-y-2">
                        {item.steps.map((step, si) => (
                          <li
                            key={si}
                            className="flex items-start gap-2 text-sm text-muted-foreground/70"
                          >
                            <span className="text-xs text-muted-foreground/40 font-mono mt-0.5">
                              {si + 1}.
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </Card>
                  ))}
                </div>

                <p className="text-muted-foreground/60 text-sm mt-6">
                  Note: Browser interfaces may vary by version. Consult your
                  browser&apos;s help documentation for the most current instructions.
                </p>
              </div>
            </ScrollReveal>

            {/* Policy Updates */}
            <ScrollReveal>
              <div id="policy-updates" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
                  Policy Updates
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may update this Cookie Policy from time to time to reflect
                  changes in the cookies we use, our business practices,
                  applicable regulations, or for other operational reasons.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When we make material changes to this policy, we will notify
                  you through the SP NET GRAM website and may request you to
                  review and renew your cookie preferences. The &quot;Last Updated&quot;
                  date at the top of this page indicates when the policy was
                  most recently revised.
                </p>
              </div>
            </ScrollReveal>

            {/* Contact */}
            <ScrollReveal>
              <div id="contact" className="scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
                  Contact
                </h2>
                <Card className="p-6 border-border/50 bg-accent/[0.03]">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you have any questions about our use of cookies or this
                    Cookie Policy, please contact us:
                  </p>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground/50" />
                    <span className="text-muted-foreground">Email:</span>
                    <a
                      href="mailto:support.spnetgram@sp-net.in"
                      className="text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors"
                    >
                      support.spnetgram@sp-net.in
                    </a>
                  </div>
                </Card>
              </div>
            </ScrollReveal>

            {/* FAQ */}
            <ScrollReveal>
              <div id="faq" className="scroll-mt-24 mt-16">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqItems.map((item) => (
                    <Card
                      key={item.q}
                      className="p-6 border-border/50 hover:border-border transition-all duration-200"
                    >
                      <h3 className="font-semibold tracking-tight mb-3">
                        {item.q}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.a}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Related Resources */}
            <ScrollReveal>
              <div className="mt-16">
                <Badge variant="outline" className="mb-6">
                  Related Resources
                </Badge>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Link href="/privacy">
                    <Card className="p-5 border-border/50 hover:border-border hover:-translate-y-0.5 transition-all duration-300">
                      <h3 className="font-semibold tracking-tight mb-1">
                        Privacy Policy
                      </h3>
                      <p className="text-sm text-muted-foreground/60">
                        Learn how we collect, use, and protect your information.
                      </p>
                    </Card>
                  </Link>
                  <Link href="/terms">
                    <Card className="p-5 border-border/50 hover:border-border hover:-translate-y-0.5 transition-all duration-300">
                      <h3 className="font-semibold tracking-tight mb-1">
                        Terms of Service
                      </h3>
                      <p className="text-sm text-muted-foreground/60">
                        Review the terms governing your use of SP NET GRAM.
                      </p>
                    </Card>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal>
              <div className="mt-16 text-center">
                <p className="text-sm text-muted-foreground/50 mb-4">
                  Have a question about cookies?
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors"
                >
                  Contact Us
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
