import type { Metadata } from "next";
import { Scale, Mail, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Breadcrumbs } from "@/components/breadcrumbs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "SP NET GRAM Terms of Service — the complete terms and conditions governing your use of the SP NET GRAM platform and services by SP NET INC.",
  openGraph: {
    title: "Terms of Service — SP NET GRAM",
    description:
      "Comprehensive terms of service covering your rights, responsibilities, and the conditions governing use of SP NET GRAM.",
    url: `${siteConfig.url}/terms`,
    type: "website",
  },
};

const sections = [
  {
    id: "acceptance-of-terms",
    title: "Acceptance of Terms",
    content: [
      `By accessing, browsing, or using SP NET GRAM ("the Service"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service ("Terms"). These Terms constitute a legally binding agreement between you and SP NET INC ("we," "our," or "us").`,
      `If you do not agree to these Terms in their entirety, you must not access or use SP NET GRAM. Your continued use of the Service following any modifications to these Terms constitutes acceptance of those modifications.`,
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility",
    content: [
      `SP NET GRAM is available to individuals who are at least 13 years of age (or the minimum age required in your jurisdiction). By using the Service, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.`,
      `If you are using SP NET GRAM on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms. In such cases, "you" and "your" refer to both the individual and the organization.`,
      `SP NET GRAM is intended for personal and commercial use in compliance with all applicable local, national, and international laws and regulations.`,
    ],
  },
  {
    id: "description-of-service",
    title: "Description of Service",
    content: [
      `SP NET GRAM is an independent third-party Telegram client developed by SP NET INC. The Service provides enhanced messaging features, AI-powered tools, premium memberships, productivity capabilities, advanced customization options, and an expanding ecosystem built on Telegram's messaging infrastructure.`,
      `SP NET GRAM operates independently and is not affiliated with, endorsed by, sponsored by, or officially associated with Telegram or Telegram Group Inc. The Service enhances the Telegram experience through client-side features and additional services while remaining compatible with the Telegram platform.`,
      `We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, with or without notice, and without liability to you.`,
    ],
  },
  {
    id: "user-accounts",
    title: "User Accounts",
    content: [
      `To access certain features of SP NET GRAM, you may be required to create an account. When creating an account, you agree to:`,
    ],
    list: [
      "Provide accurate, current, and complete information during registration",
      "Maintain and promptly update your account information to keep it accurate and complete",
      "Maintain the security and confidentiality of your login credentials and not share your account with others",
      "Accept full responsibility for all activities that occur under your account",
      "Notify us immediately of any unauthorized use of your account or any other breach of security",
    ],
    additionalContent: [
      `We reserve the right to suspend or terminate accounts that are found to contain inaccurate information, that violate these Terms, or that have been inactive for an extended period. You are responsible for all activity that occurs under your account.`,
    ],
  },
  {
    id: "user-responsibilities",
    title: "User Responsibilities",
    content: [
      `As a user of SP NET GRAM, you agree to:`,
    ],
    list: [
      "Use the Service in compliance with all applicable laws, regulations, and these Terms",
      "Treat other users with respect and refrain from harassment, abuse, or harmful behavior",
      "Maintain the confidentiality of your account credentials and not share access with unauthorized parties",
      "Promptly report any bugs, vulnerabilities, or security issues you discover through appropriate channels",
      "Keep your software updated to the latest version to ensure optimal security and performance",
      "Comply with all community guidelines and acceptable use policies established by SP NET GRAM",
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    content: [
      `SP NET GRAM is designed to provide an enhanced messaging experience. You may use the Service for lawful purposes in accordance with these Terms. Acceptable use includes:`,
    ],
    list: [
      "Sending and receiving messages through Telegram's messaging infrastructure",
      "Using AI-powered features for productivity and assistance",
      "Customizing your interface with themes, layouts, and personalization options",
      "Accessing and using Premium features according to your subscription tier",
      "Participating in communities, groups, and channels within the Telegram ecosystem",
      "Providing feedback and suggestions to help improve the Service",
    ],
  },
  {
    id: "prohibited-activities",
    title: "Prohibited Activities",
    content: [
      `You agree not to engage in any of the following prohibited activities:`,
    ],
    list: [
      "Using the Service for any unlawful purpose or in violation of any applicable laws or regulations",
      "Attempting to gain unauthorized access to any portion of the Service, other accounts, or connected systems",
      "Interfering with, disrupting, or creating an undue burden on the Service or the servers and networks connected to it",
      "Reverse engineering, decompiling, or disassembling any software or technology used in the Service",
      "Using automated systems, bots, or scripts to interact with the Service without explicit authorization",
      "Transmitting spam, chain letters, or other unsolicited communications through the Service",
      "Impersonating any person or entity, or falsely claiming affiliation with any person or entity",
      "Collecting or harvesting personal information of other users without their consent",
      "Uploading or transmitting malicious code, viruses, or any harmful technology",
      "Circumventing or attempting to circumvent any security measures or access controls on the Service",
      "Sublicensing, selling, or commercially exploiting access to the Service without authorization",
      "Using the Service to compete with SP NET GRAM or to build a similar product or service",
    ],
  },
  {
    id: "premium-services",
    title: "Premium Services",
    content: [
      `SP NET GRAM offers Premium memberships that provide access to advanced features, exclusive capabilities, and enhanced services. Premium subscriptions are subject to the following terms:`,
    ],
    list: [
      "Premium features are available only to active subscribers with a valid subscription",
      "Subscription fees are billed in advance on a recurring basis according to your chosen plan",
      "All subscription fees are non-refundable except as required by applicable law",
      "We reserve the right to modify Premium features, pricing, or plans with reasonable advance notice",
      "Cancellation of a Premium subscription takes effect at the end of the current billing period",
      "Access to Premium features is revoked immediately upon subscription expiration or cancellation",
    ],
    additionalContent: [
      `Premium pricing, features, and availability may vary by region and are subject to change. We will provide reasonable notice before any material changes to Premium subscription terms affect existing subscribers.`,
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: [
      `SP NET GRAM and its original content, features, functionality, design, graphics, logos, icons, and all associated intellectual property are owned by SP NET INC and are protected by copyright, trademark, and other intellectual property laws.`,
      `You are granted a limited, non-exclusive, non-transferable, revocable license to use SP NET GRAM for personal or internal business purposes in accordance with these Terms. This license does not include the right to:`,
    ],
    list: [
      "Modify, adapt, or reverse engineer any part of the Service",
      "Use SP NET GRAM's branding, logos, or trademarks without written permission",
      "Copy, reproduce, distribute, or create derivative works based on the Service",
      "Remove, alter, or obscure any copyright, trademark, or other proprietary notices",
    ],
    additionalContent: [
      `Telegram and all related trademarks, product names, logos, and brand assets are the property of their respective owners and are not affiliated with, endorsed by, or sponsored by SP NET INC.`,
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    content: [
      `SP NET GRAM is provided "as is" and "as available" without warranties of any kind, whether express, implied, or statutory. We specifically disclaim all implied warranties of merchantability, fitness for a particular purpose, and non-infringement.`,
      `We do not warrant that:`,
    ],
    list: [
      "The Service will be uninterrupted, timely, secure, or error-free",
      "The results obtained from using the Service will be accurate or reliable",
      "Any defects or errors in the Service will be corrected",
      "The Service is free of viruses or other harmful components",
      "Your use of the Service will meet your specific requirements or expectations",
    ],
    additionalContent: [
      `No advice or information obtained from SP NET GRAM shall create any warranty not expressly stated in these Terms. You use the Service at your own risk and discretion.`,
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: [
      `To the maximum extent permitted by applicable law, SP NET INC and its officers, directors, employees, agents, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from:`,
    ],
    list: [
      "Your access to, use of, or inability to use the Service",
      "Any unauthorized access to or alteration of your data or transmissions",
      "Statements or conduct of any third party on or through the Service",
      "Any content obtained from the Service",
      "Unauthorized access, use, or alteration of your transmissions or content",
    ],
    additionalContent: [
      `In no event shall our total aggregate liability exceed the amount you have paid to SP NET INC in the twelve (12) months preceding the claim, or one hundred dollars ($100 USD), whichever is greater.`,
    ],
  },
  {
    id: "termination",
    title: "Termination",
    content: [
      `We may terminate or suspend your access to SP NET GRAM immediately, without prior notice or liability, for any reason, including but not limited to breach of these Terms.`,
      `Upon termination:`,
    ],
    list: [
      "Your right to access and use the Service ceases immediately",
      "All data associated with your account may be deleted in accordance with our data retention policies",
      "Any pending transactions or subscriptions may be cancelled",
      "Provisions of these Terms that by their nature should survive termination will remain in effect",
    ],
    additionalContent: [
      `You may terminate your account at any time by contacting us at support.spnetgram@sp-net.in. Termination of your account does not relieve you of any obligations incurred prior to termination.`,
    ],
  },
  {
    id: "changes-to-terms",
    title: "Changes to Terms",
    content: [
      `We reserve the right to modify these Terms at any time at our sole discretion. When we make material changes, we will notify you by posting the updated Terms on this page with a new "Last Updated" date, and may provide additional notice through the Service or via email.`,
      `Your continued use of SP NET GRAM after any modifications to these Terms constitutes your acceptance of the modified Terms. If you do not agree to the modified Terms, you must stop using the Service.`,
      `We encourage you to review these Terms periodically to stay informed of any updates.`,
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: [
      `These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which SP NET INC operates, without regard to its conflict of law provisions.`,
      `Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in the applicable jurisdiction. You agree to submit to the personal jurisdiction of such courts for the purpose of litigating any claims arising from or related to these Terms.`,
      `If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. The failure of SP NET INC to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.`,
    ],
  },
];

const faqItems = [
  {
    q: "Can I use SP NET GRAM for commercial purposes?",
    a: "Yes, you may use SP NET GRAM for personal and commercial purposes, provided your use complies with these Terms and all applicable laws. However, you may not resell, sublicense, or commercially exploit access to the Service without authorization.",
  },
  {
    q: "What happens if I violate these Terms?",
    a: "We may issue warnings, restrict access to certain features, suspend your account, or terminate your access entirely depending on the severity and nature of the violation. We will typically notify you of any enforcement action taken against your account.",
  },
  {
    q: "Is SP NET GRAM affiliated with Telegram?",
    a: "No. SP NET GRAM is an independent third-party client developed by SP NET INC. We are not affiliated with, endorsed by, sponsored by, or officially associated with Telegram or Telegram Group Inc. All Telegram-related trademarks are the property of their respective owners.",
  },
  {
    q: "How do I cancel my Premium subscription?",
    a: "You can cancel your Premium subscription through the SP NET GRAM app settings or by contacting support.spnetgram@sp-net.in. Cancellation takes effect at the end of your current billing period, and you will retain Premium access until then.",
  },
  {
    q: "Can these Terms change?",
    a: "Yes, we may update these Terms from time to time. Material changes will be communicated through the Service or via email. Your continued use of SP NET GRAM after changes are posted constitutes acceptance of the updated Terms.",
  },
];

const tableOfContents = [
  { label: "Acceptance of Terms", href: "#acceptance-of-terms" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "Description of Service", href: "#description-of-service" },
  { label: "User Accounts", href: "#user-accounts" },
  { label: "User Responsibilities", href: "#user-responsibilities" },
  { label: "Acceptable Use", href: "#acceptable-use" },
  { label: "Prohibited Activities", href: "#prohibited-activities" },
  { label: "Premium Services", href: "#premium-services" },
  { label: "Intellectual Property", href: "#intellectual-property" },
  { label: "Disclaimers", href: "#disclaimers" },
  { label: "Limitation of Liability", href: "#limitation-of-liability" },
  { label: "Termination", href: "#termination" },
  { label: "Changes to Terms", href: "#changes-to-terms" },
  { label: "Governing Law", href: "#governing-law" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

export default function TermsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-[#3390ec]/[0.04] blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 text-xs font-medium tracking-wide uppercase">
              <Scale className="h-3.5 w-3.5 text-foreground" />
              <span className="text-muted-foreground">Legal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Terms of Service
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Please read these terms carefully before using SP NET GRAM. They
              govern your access to and use of the Service and establish the
              rights and obligations of all parties.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3 text-sm text-muted-foreground/60">
              <span>Last updated: July 2026</span>
              <span className="text-border">·</span>
              <span>Effective: July 2026</span>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs />

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
                    If you have any questions about these Terms of Service,
                    please contact us:
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
                  Have questions about these terms?
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
