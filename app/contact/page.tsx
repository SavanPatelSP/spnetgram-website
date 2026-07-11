import type { Metadata } from "next";
import {
  Mail,
  MessageSquare,
  Building2,
  HeadphonesIcon,
  Shield,
  HelpCircle,
  Globe,
  Handshake,
  Megaphone,
  Clock,
  ArrowRight,
  Users,
  Zap,
  Calendar,
  Target,
  Rocket,
  Eye,
  Briefcase,
  Download,
  Smartphone,
  Layers,
  Activity,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PremiumIcon } from "@/components/premium-icon";
import { ContactEmailCards } from "@/components/contact-email-cards";
import { SupportContactSection } from "@/components/support-contact-section";
import { ConnectWithUsSection } from "@/components/connect-with-us-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SP NET INC. Reach us for support, business inquiries, partnerships, media, security reports, or general questions about SP NET GRAM.",
  openGraph: {
    title: "Contact — SP NET GRAM",
    description:
      "Contact SP NET INC for support, business inquiries, partnerships, media, and general questions about SP NET GRAM.",
    url: `${siteConfig.url}/contact`,
    type: "website",
  },
};

const contactChannels = [
  {
    icon: HelpCircle,
    title: "General Enquiries",
    description:
      "Questions about SP NET GRAM, our platform, services, or anything else. We are happy to help with any general inquiries.",
    email: "contact.spnetgram@sp-net.in",
    responseTime: "24–48 hours",
  },
  {
    icon: HeadphonesIcon,
    title: "Technical Support",
    description:
      "Need help with installation, setup, troubleshooting, or technical issues? Our support team is ready to assist.",
    email: "support.spnetgram@sp-net.in",
    responseTime: "24–48 hours",
  },
  {
    icon: Building2,
    title: "Business & Partnerships",
    description:
      "Interested in business collaborations, strategic partnerships, licensing, or enterprise solutions? Let us discuss opportunities.",
    email: "business.spnetgram@sp-net.in",
    responseTime: "48–72 hours",
  },
  {
    icon: Megaphone,
    title: "Media & Press",
    description:
      "Press inquiries, media kits, interviews, and coverage requests. We are available for media engagements.",
    email: "media.spnetgram@sp-net.in",
    responseTime: "48–72 hours",
  },
  {
    icon: Shield,
    title: "Security Reports",
    description:
      "Discovered a vulnerability or security issue? Report it responsibly through our security channel.",
    email: "security.spnetgram@sp-net.in",
    responseTime: "Within 24 hours",
  },
];

const responseTimes = [
  {
    channel: "Security Reports",
    time: "Within 24 hours",
    icon: Shield,
    note: "Critical vulnerabilities receive expedited response",
  },
  {
    channel: "Technical Support",
    time: "24–48 hours",
    icon: HeadphonesIcon,
    note: "Premium subscribers receive priority support",
  },
  {
    channel: "General Enquiries",
    time: "24–48 hours",
    icon: HelpCircle,
    note: "Standard response for all general questions",
  },
  {
    channel: "Business & Media",
    time: "48–72 hours",
    icon: Building2,
    note: "Detailed responses for partnership inquiries",
  },
];

const faqItems = [
  {
    q: "What is the fastest way to get support?",
    a: "For technical issues, email support.spnetgram@sp-net.in with details about your issue, device model, and OS version. Premium subscribers receive priority support with faster response times.",
  },
  {
    q: "Do you have live chat support?",
    a: "Currently, we offer email-based support. We are working on expanding our support channels to include live chat in the future. For urgent issues, email is the fastest way to reach our team.",
  },
  {
    q: "How do I report a security vulnerability?",
    a: "Email security.spnetgram@sp-net.in with details about the vulnerability. Please include steps to reproduce, affected versions, and potential impact. We respond to security reports within 24 hours.",
  },
  {
    q: "Can I visit your office?",
    a: "SP NET GRAM is primarily an online operation. For meetings or events, please contact us in advance to arrange an appointment. Most communications are handled efficiently through email.",
  },
  {
    q: "How do I submit a feature request?",
    a: "You can submit feature requests through our dedicated Feature Requests page or email us at support.spnetgram@sp-net.in. We review all suggestions and consider them for our product roadmap.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-[#3390ec]/[0.04] blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 text-xs font-medium tracking-wide uppercase">
              <MessageSquare className="h-3.5 w-3.5 text-foreground" />
              <span className="text-muted-foreground">Get in Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Contact Us
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Whether you need technical support, have a business inquiry, or
              want to share feedback — our team is ready to help. Choose the
              right channel for your inquiry.
            </p>
          </div>
        </div>
      </section>

      <Breadcrumbs />

      {/* ── Introduction ── */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <Card className="p-8 border-border/50 bg-accent/[0.03]">
                <div className="flex items-start gap-4">
                  <PremiumIcon size="md">
                    <Zap className="h-full w-full" />
                  </PremiumIcon>
                  <div>
                    <h2 className="text-lg font-semibold tracking-tight mb-2">
                      We are here to help
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      SP NET GRAM is developed by SP NET INC, an independent
                      software company. Our team is available to assist with
                      technical support, business inquiries, partnerships, and
                      general questions. We aim to respond to all inquiries
                      promptly and professionally.
                    </p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Contact Channels ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Contact Channels
            </h2>
            <p className="mt-4 text-muted-foreground">
              Choose the right channel for your specific inquiry.
            </p>
          </div>
          <div className="mx-auto max-w-5xl grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <ScrollReveal key={channel.title}>
                  <Card className="group h-full p-6 border-border/50 hover:border-border hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 ease-out">
                    <PremiumIcon className="mb-4">
                      <Icon className="h-full w-full" />
                    </PremiumIcon>
                    <h3 className="font-semibold tracking-tight mb-2">
                      {channel.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {channel.description}
                    </p>
                    <a
                      href={`mailto:${channel.email}`}
                      className="text-sm text-muted-foreground underline underline-offset-4 decoration-border/50 hover:text-foreground hover:decoration-foreground/50 transition-colors break-all"
                    >
                      {channel.email}
                    </a>
                    <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground/50">
                      <Clock className="h-3 w-3" />
                      {channel.responseTime}
                    </div>
                    <div className="mt-5 flex items-center gap-2">
                      <a href={`mailto:${channel.email}`}>
                        <span className="inline-flex items-center gap-1.5 rounded-lg border border-border/50 bg-accent/30 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-border transition-all">
                          <Mail className="h-3 w-3" />
                          Send Email
                        </span>
                      </a>
                    </div>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Email Directory (existing component) ── */}
      <ContactEmailCards />

      {/* ── Response Times ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Response Times
            </h2>
            <p className="mt-4 text-muted-foreground">
              We aim to respond to all inquiries promptly. Response times may
              vary based on the nature and complexity of your request.
            </p>
          </div>
          <div className="mx-auto max-w-3xl grid gap-4">
            {responseTimes.map((item) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.channel}>
                  <Card className="p-5 border-border/50 hover:border-border transition-all duration-200">
                    <div className="flex items-center gap-4">
                      <PremiumIcon>
                        <Icon className="h-full w-full" />
                      </PremiumIcon>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold tracking-tight text-sm">
                            {item.channel}
                          </h3>
                          <Badge variant="outline" className="shrink-0">
                            {item.time}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground/60 mt-1">
                          {item.note}
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

      {/* ── Support Contact (existing component) ── */}
      <SupportContactSection />

      {/* ── Company Information ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Company Information
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              SP NET INC is an independent technology company focused on
              designing and delivering innovative software, intelligent digital
              platforms, and next-generation technology solutions. Through
              continuous innovation, engineering excellence, and a commitment to
              quality, SP NET INC develops products and services that empower
              individuals, communities, creators, and businesses while expanding
              a unified ecosystem of modern digital experiences.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <Card className="p-8 border-border/50 hover:border-border transition-all duration-200">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <PremiumIcon>
                      <Building2 className="h-full w-full" />
                    </PremiumIcon>
                    <div>
                      <p className="font-semibold tracking-tight">Company</p>
                      <p className="text-sm text-muted-foreground">SP NET INC</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <PremiumIcon>
                      <Calendar className="h-full w-full" />
                    </PremiumIcon>
                    <div>
                      <p className="font-semibold tracking-tight">Founded</p>
                      <p className="text-sm text-muted-foreground">2022</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <PremiumIcon>
                      <Users className="h-full w-full" />
                    </PremiumIcon>
                    <div>
                      <p className="font-semibold tracking-tight">Founder</p>
                      <p className="text-sm text-muted-foreground">
                        Savan Patel
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <PremiumIcon>
                      <Briefcase className="h-full w-full" />
                    </PremiumIcon>
                    <div>
                      <p className="font-semibold tracking-tight">Industry</p>
                      <p className="text-sm text-muted-foreground">
                        Technology &amp; Software Development
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <PremiumIcon>
                      <Target className="h-full w-full" />
                    </PremiumIcon>
                    <div>
                      <p className="font-semibold tracking-tight">
                        Core Focus
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Software Products, Artificial Intelligence, Digital
                        Platforms, and Cloud Technologies
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <PremiumIcon>
                      <Rocket className="h-full w-full" />
                    </PremiumIcon>
                    <div>
                      <p className="font-semibold tracking-tight">Mission</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        To build reliable, secure, and innovative technology
                        that simplifies everyday digital experiences and
                        empowers people worldwide.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <PremiumIcon>
                      <Eye className="h-full w-full" />
                    </PremiumIcon>
                    <div>
                      <p className="font-semibold tracking-tight">Vision</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        To become a globally recognized technology company known
                        for building innovative software, intelligent platforms,
                        and trusted digital ecosystems.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <PremiumIcon>
                      <Zap className="h-full w-full" />
                    </PremiumIcon>
                    <div>
                      <p className="font-semibold tracking-tight">
                        Operating Model
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Digital-First &bull; Remote-First
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <PremiumIcon>
                      <Globe className="h-full w-full" />
                    </PremiumIcon>
                    <div>
                      <p className="font-semibold tracking-tight">
                        Official Website
                      </p>
                      <a
                        href="https://sp-net.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
                      >
                        sp-net.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <PremiumIcon>
                      <Mail className="h-full w-full" />
                    </PremiumIcon>
                    <div>
                      <p className="font-semibold tracking-tight">Contact</p>
                      <a
                        href="https://sp-net.in/contact"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
                      >
                        sp-net.in/contact
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Product Information ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Product Information
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              SP NET GRAM is the flagship communication platform developed by
              SP NET INC. Built as an independent third-party Telegram client,
              it delivers an enhanced messaging experience through modern
              design, intelligent features, premium memberships, advanced
              customization, and an expanding ecosystem focused on
              productivity, performance, and innovation.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <Card className="p-8 border-border/50 hover:border-border transition-all duration-200">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <PremiumIcon>
                      <Layers className="h-full w-full" />
                    </PremiumIcon>
                    <div>
                      <p className="font-semibold tracking-tight">Product</p>
                      <p className="text-sm text-muted-foreground">
                        SP NET GRAM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <PremiumIcon>
                      <Building2 className="h-full w-full" />
                    </PremiumIcon>
                    <div>
                      <p className="font-semibold tracking-tight">Developer</p>
                      <p className="text-sm text-muted-foreground">
                        SP NET INC
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <PremiumIcon>
                      <Target className="h-full w-full" />
                    </PremiumIcon>
                    <div>
                      <p className="font-semibold tracking-tight">Category</p>
                      <p className="text-sm text-muted-foreground">
                        Communication Platform
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <PremiumIcon>
                      <Smartphone className="h-full w-full" />
                    </PremiumIcon>
                    <div>
                      <p className="font-semibold tracking-tight">Platform</p>
                      <p className="text-sm text-muted-foreground">
                        Independent Third-Party Telegram Client
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <PremiumIcon>
                      <Activity className="h-full w-full" />
                    </PremiumIcon>
                    <div>
                      <p className="font-semibold tracking-tight">
                        Current Release
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Stable &amp; Beta Channels Available
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <PremiumIcon>
                      <Globe className="h-full w-full" />
                    </PremiumIcon>
                    <div>
                      <p className="font-semibold tracking-tight">
                        Availability
                      </p>
                      <p className="text-sm text-muted-foreground">Global</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <PremiumIcon>
                      <Zap className="h-full w-full" />
                    </PremiumIcon>
                    <div>
                      <p className="font-semibold tracking-tight">
                        Primary Focus
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Messaging, Productivity, AI, Premium Features, and
                        Digital Ecosystem
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <PremiumIcon>
                      <Rocket className="h-full w-full" />
                    </PremiumIcon>
                    <div>
                      <p className="font-semibold tracking-tight">Technology</p>
                      <p className="text-sm text-muted-foreground">
                        Modern Android Technologies, Cloud Services, and Secure
                        Infrastructure
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <PremiumIcon>
                      <Globe className="h-full w-full" />
                    </PremiumIcon>
                    <div>
                      <p className="font-semibold tracking-tight">
                        Official Website
                      </p>
                      <a
                        href={siteConfig.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
                      >
                        spnetgram.sp-net.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <PremiumIcon>
                      <Download className="h-full w-full" />
                    </PremiumIcon>
                    <div>
                      <p className="font-semibold tracking-tight">Downloads</p>
                      <a
                        href={`${siteConfig.url}/downloads`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
                      >
                        spnetgram.sp-net.in/downloads
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <PremiumIcon>
                      <Users className="h-full w-full" />
                    </PremiumIcon>
                    <div>
                      <p className="font-semibold tracking-tight">Community</p>
                      <a
                        href="https://t.me/SPNETGRAM"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
                      >
                        t.me/SPNETGRAM
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <PremiumIcon>
                      <HeadphonesIcon className="h-full w-full" />
                    </PremiumIcon>
                    <div>
                      <p className="font-semibold tracking-tight">Support</p>
                      <a
                        href="mailto:support.spnetgram@sp-net.in"
                        className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
                      >
                        support.spnetgram@sp-net.in
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Connect With Us ── */}
      <ConnectWithUsSection />

      {/* ── FAQ ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-muted-foreground">
              Quick answers to common questions about contacting us.
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqItems.map((item) => (
              <ScrollReveal key={item.q}>
                <Card className="p-6 border-border/50 hover:border-border transition-all duration-200">
                  <h3 className="font-semibold tracking-tight mb-3">
                    {item.q}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.a}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Resources ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Badge variant="outline" className="mb-6">
              Related Resources
            </Badge>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/support">
                <Card className="p-5 border-border/50 hover:border-border hover:-translate-y-0.5 transition-all duration-300">
                  <h3 className="font-semibold tracking-tight mb-1">
                    Support Center
                  </h3>
                  <p className="text-sm text-muted-foreground/60">
                    Browse FAQs, troubleshooting, and support resources.
                  </p>
                </Card>
              </Link>
              <Link href="/report-bug">
                <Card className="p-5 border-border/50 hover:border-border hover:-translate-y-0.5 transition-all duration-300">
                  <h3 className="font-semibold tracking-tight mb-1">
                    Report a Bug
                  </h3>
                  <p className="text-sm text-muted-foreground/60">
                    Found something wrong? Report it to us directly.
                  </p>
                </Card>
              </Link>
              <Link href="/feature-requests">
                <Card className="p-5 border-border/50 hover:border-border hover:-translate-y-0.5 transition-all duration-300">
                  <h3 className="font-semibold tracking-tight mb-1">
                    Feature Requests
                  </h3>
                  <p className="text-sm text-muted-foreground/60">
                    Have an idea? Share your suggestions with us.
                  </p>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
