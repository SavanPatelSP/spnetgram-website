import type { Metadata } from "next";
import { Shield, ChevronRight, Mail, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "SP NET GRAM Privacy Policy — learn how SP NET INC collects, uses, stores, and protects your information when you use the SP NET GRAM platform.",
  openGraph: {
    title: "Privacy Policy — SP NET GRAM",
    description:
      "Comprehensive privacy policy explaining how SP NET GRAM handles your data, protects your privacy, and manages information across our platform.",
    url: "https://spnetgram.sp-net.in/privacy",
    type: "website",
  },
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: [
      `SP NET GRAM, operated by SP NET INC ("we," "our," or "us"), is an independent third-party Telegram client designed to enhance the messaging experience through additional features, AI-powered tools, premium memberships, and an expanding ecosystem of productivity services.`,
      `This Privacy Policy outlines how we collect, use, store, protect, and share information when you interact with SP NET GRAM across all supported platforms. Our commitment is to operate with transparency, respect user privacy, and comply with applicable data protection regulations.`,
      `SP NET GRAM is not affiliated with, endorsed by, sponsored by, or officially associated with Telegram or Telegram Group Inc. Your use of Telegram's underlying services remains subject to Telegram's own privacy practices and terms. We encourage you to review Telegram's Privacy Policy for complete understanding of how Telegram handles your data.`,
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: [
      `To provide and improve SP NET GRAM, we may collect the following categories of information:`,
    ],
    subsections: [
      {
        title: "Account Information",
        description:
          "When you create an account or register for SP NET GRAM services, we collect your name, email address, Telegram username, and any profile information you choose to provide. This information is necessary to establish and manage your account.",
      },
      {
        title: "Usage Data",
        description:
          "We collect information about how you interact with SP NET GRAM, including features accessed, screens viewed, actions performed, session duration, and engagement patterns. This data helps us understand user behavior and improve the platform.",
      },
      {
        title: "Device Information",
        description:
          "We may collect basic device information such as device model, operating system version, browser type, screen resolution, and network connection type. This information is used to optimize performance and ensure compatibility across platforms.",
      },
      {
        title: "Premium Subscription Data",
        description:
          "If you subscribe to SP NET GRAM Premium, we collect billing-related information necessary to process and manage your subscription. Payment processing is handled by secure third-party payment processors, and we do not store full payment card details on our servers.",
      },
      {
        title: "AI Interaction Data",
        description:
          "When you use SP NET GRAM's AI-powered features, we may process interaction data to deliver and improve intelligent assistance. AI interactions are handled with appropriate safeguards to protect your privacy.",
      },
      {
        title: "Communications",
        description:
          "When you contact our support team, provide feedback, or communicate with us through any channel, we collect the content of those communications along with associated metadata such as timestamps and contact information.",
      },
    ],
  },
  {
    id: "how-information-is-used",
    title: "How Information Is Used",
    content: [
      `We use the information we collect for the following purposes:`,
    ],
    list: [
      "Providing, maintaining, and improving SP NET GRAM's core services and features",
      "Processing and managing Premium subscriptions and related transactions",
      "Delivering AI-powered tools, smart assistance, and personalized recommendations",
      "Analyzing usage patterns to optimize performance, fix bugs, and develop new features",
      "Communicating with you about service updates, security alerts, and support matters",
      "Ensuring platform security, detecting fraud, and preventing unauthorized access",
      "Complying with legal obligations and enforcing our terms of service",
      "Personalizing your experience with themes, layouts, and interface preferences",
    ],
  },
  {
    id: "data-storage",
    title: "Data Storage",
    content: [
      `Your data is stored on secure servers managed by reputable cloud infrastructure providers. We implement industry-standard storage practices to ensure data integrity and availability.`,
      `Data associated with your Telegram account, including messages, media, and contacts, is managed by Telegram's infrastructure. SP NET GRAM does not independently store or replicate Telegram message content on its own servers. Our data storage primarily covers account information, usage analytics, preferences, and Premium subscription details.`,
      `We retain your information for as long as your account is active or as needed to provide services. If you delete your account, we will remove or anonymize your personal data within a reasonable timeframe, except where retention is required by law or legitimate business purposes.`,
    ],
  },
  {
    id: "data-protection",
    title: "Data Protection",
    content: [
      `We implement comprehensive technical and organizational measures to safeguard your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:`,
    ],
    list: [
      "End-to-end encryption for sensitive data in transit and at rest",
      "Regular security assessments and vulnerability testing",
      "Access controls and authentication mechanisms for internal systems",
      "Employee training on data protection and privacy practices",
      "Incident response procedures for prompt handling of security events",
      "Regular backups and disaster recovery planning",
    ],
    additionalContent: [
      `While we strive to use commercially acceptable means to protect your personal information, no method of electronic transmission or storage is completely secure. We cannot guarantee absolute security but are committed to promptly addressing any security incidents that may occur.`,
    ],
  },
  {
    id: "third-party-services",
    title: "Third-Party Services",
    content: [
      `SP NET GRAM integrates with and relies upon certain third-party services to deliver functionality. These services operate under their own privacy policies:`,
    ],
    subsections: [
      {
        title: "Telegram Infrastructure",
        description:
          "SP NET GRAM is built on Telegram's messaging infrastructure. Your use of Telegram's services is governed by Telegram's Privacy Policy and Terms of Service. We do not control Telegram's data collection or processing practices.",
      },
      {
        title: "Payment Processors",
        description:
          "Premium subscription payments are processed through secure third-party payment processors. These processors handle payment information in compliance with PCI DSS standards. We do not store full payment card details.",
      },
      {
        title: "Analytics Services",
        description:
          "We may use analytics services to understand how users interact with SP NET GRAM. These services provide anonymized and aggregated data that helps us improve the platform without identifying individual users.",
      },
      {
        title: "Hosting and Infrastructure",
        description:
          "Our website and backend services are hosted on cloud infrastructure providers that maintain strict security and compliance standards.",
      },
    ],
    additionalContent: [
      `We carefully evaluate the privacy practices of third-party services we integrate with and require them to maintain appropriate data protection standards.`,
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    content: [
      `SP NET GRAM uses cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us understand how you use our site and improve functionality.`,
      `For complete details about the cookies we use, their purposes, and how to manage them, please refer to our dedicated Cookie Policy available at /cookies.`,
    ],
  },
  {
    id: "user-rights",
    title: "Your Rights",
    content: [
      `Depending on your jurisdiction, you may have the following rights regarding your personal data:`,
    ],
    list: [
      "Access: Request a copy of the personal data we hold about you",
      "Correction: Request correction of inaccurate or incomplete data",
      "Deletion: Request deletion of your personal data, subject to legal exceptions",
      "Portability: Request transfer of your data to another service in a structured format",
      "Objection: Object to processing of your personal data for specific purposes",
      "Restriction: Request restriction of processing under certain circumstances",
      "Withdrawal of Consent: Withdraw previously given consent at any time",
    ],
    additionalContent: [
      `To exercise any of these rights, please contact our privacy team at privacy.spnetgram@sp-net.in. We will respond to your request within a reasonable timeframe and in accordance with applicable law.`,
      `We may need to verify your identity before processing certain requests to protect your account and personal information.`,
    ],
  },
  {
    id: "international-users",
    title: "International Users",
    content: [
      `SP NET GRAM is operated from our base of operations and may process data in various jurisdictions. If you are accessing SP NET GRAM from outside our primary operating region, please be aware that your information may be transferred to, stored, and processed in countries that may have different data protection laws than your jurisdiction.`,
      `By using SP NET GRAM, you consent to such transfers. We take appropriate steps to ensure that your data receives an adequate level of protection regardless of where it is processed, including implementing standard contractual clauses and other appropriate safeguards where required.`,
    ],
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    content: [
      `SP NET GRAM is not intended for use by children under the age of 13 (or the applicable age of digital consent in your jurisdiction). We do not knowingly collect personal information from children.`,
      `If we become aware that we have inadvertently collected personal information from a child under the applicable age, we will take steps to delete such information promptly. If you believe that a child has provided us with personal information, please contact us immediately so we can address the situation.`,
    ],
  },
  {
    id: "policy-updates",
    title: "Policy Updates",
    content: [
      `We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or for other operational reasons. When we make material changes, we will notify you through the SP NET GRAM platform, via email, or by posting a prominent notice on our website.`,
      `We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information. Your continued use of SP NET GRAM after any modifications to this Privacy Policy constitutes your acceptance of those changes.`,
      `The "Last Updated" date at the top of this page indicates when this policy was most recently revised.`,
    ],
  },
];

const faqItems = [
  {
    q: "Does SP NET GRAM read my Telegram messages?",
    a: "No. SP NET GRAM does not have access to, read, or store your Telegram message content. Your messages remain protected by Telegram's end-to-end encryption. SP NET GRAM enhances the client experience without intercepting message data.",
  },
  {
    q: "Is my data shared with Telegram?",
    a: "SP NET GRAM operates independently from Telegram. We do not share your SP NET GRAM account data with Telegram. Your Telegram account data is handled exclusively by Telegram's own systems and privacy policies.",
  },
  {
    q: "How do I delete my SP NET GRAM account and data?",
    a: "You can request account deletion by contacting privacy.spnetgram@sp-net.in. Upon verification, we will delete your personal data within 30 days, except where retention is required by law. Note that deleting your SP NET GRAM account does not delete your Telegram account.",
  },
  {
    q: "Does SP NET GRAM sell my data?",
    a: "No. SP NET GRAM does not sell, rent, or trade your personal information to third parties for marketing purposes. We may share data only as described in this Privacy Policy, such as with service providers who assist us in operating the platform.",
  },
  {
    q: "How is Premium subscription data protected?",
    a: "Payment processing is handled by PCI DSS-compliant payment processors. We do not store full payment card details on our servers. Premium subscription data, including billing information and subscription status, is encrypted and stored securely.",
  },
  {
    q: "What happens to my data if I stop using SP NET GRAM?",
    a: "If you stop using SP NET GRAM, your account data will be retained according to our data retention policy. You may request deletion of your data at any time by contacting privacy.spnetgram@sp-net.in. Inactive accounts may be automatically cleaned up after an extended period.",
  },
];

const tableOfContents = [
  { label: "Overview", href: "#overview" },
  { label: "Information We Collect", href: "#information-we-collect" },
  { label: "How Information Is Used", href: "#how-information-is-used" },
  { label: "Data Storage", href: "#data-storage" },
  { label: "Data Protection", href: "#data-protection" },
  { label: "Third-Party Services", href: "#third-party-services" },
  { label: "Cookies", href: "#cookies" },
  { label: "Your Rights", href: "#user-rights" },
  { label: "International Users", href: "#international-users" },
  { label: "Children's Privacy", href: "#childrens-privacy" },
  { label: "Policy Updates", href: "#policy-updates" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

export default function PrivacyPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-[#3390ec]/[0.04] blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 text-xs font-medium tracking-wide uppercase">
              <Shield className="h-3.5 w-3.5 text-foreground" />
              <span className="text-muted-foreground">Legal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Privacy Policy
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Your privacy matters to us. This policy explains how SP NET GRAM
              collects, uses, stores, and protects your information across all
              platforms and services.
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
            <Link href="/privacy" className="text-foreground/70">
              Privacy Policy
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

            {/* Sections */}
            <div className="space-y-16">
              {sections.map((section, i) => (
                <ScrollReveal key={section.id} delay={i * 50}>
                  <div id={section.id} className="scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
                      {section.title}
                    </h2>
                    {section.content.map((paragraph, pi) => (
                      <p
                        key={pi}
                        className="text-muted-foreground leading-relaxed mb-4"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {section.list && (
                      <ul className="space-y-3 mt-4 mb-4">
                        {section.list.map((item, li) => (
                          <li
                            key={li}
                            className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.subsections && (
                      <div className="mt-6 space-y-4">
                        {section.subsections.map((sub) => (
                          <Card
                            key={sub.title}
                            className="p-5 border-border/50 hover:border-border transition-all duration-200"
                          >
                            <h3 className="font-semibold tracking-tight mb-2">
                              {sub.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {sub.description}
                            </p>
                          </Card>
                        ))}
                      </div>
                    )}
                    {section.additionalContent &&
                      section.additionalContent.map((paragraph, ai) => (
                        <p
                          key={ai}
                          className="text-muted-foreground leading-relaxed mt-4"
                        >
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Contact */}
            <ScrollReveal>
              <div id="contact" className="scroll-mt-24 mt-16">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
                  Contact
                </h2>
                <Card className="p-6 border-border/50 bg-accent/[0.03]">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you have any questions, concerns, or requests regarding
                    this Privacy Policy or our data practices, please contact
                    us:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground/50" />
                      <span className="text-muted-foreground">Privacy Inquiries:</span>
                      <a
                        href="mailto:privacy.spnetgram@sp-net.in"
                        className="text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors"
                      >
                        privacy.spnetgram@sp-net.in
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground/50" />
                      <span className="text-muted-foreground">General Support:</span>
                      <a
                        href="mailto:support.spnetgram@sp-net.in"
                        className="text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors"
                      >
                        support.spnetgram@sp-net.in
                      </a>
                    </div>
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
                  <Link href="/cookies">
                    <Card className="p-5 border-border/50 hover:border-border hover:-translate-y-0.5 transition-all duration-300">
                      <h3 className="font-semibold tracking-tight mb-1">
                        Cookie Policy
                      </h3>
                      <p className="text-sm text-muted-foreground/60">
                        Learn about cookies and tracking technologies we use.
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
                  Have a question about your privacy?
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
