import type { NavLink, NavGroup } from "@/types";
import {
  MessageCircle,
  Crown,
  Sparkles,
  Coins,
  Download,
  FlaskConical,
  Building2,
  Users,
  Briefcase,
  Newspaper,
  Code2,
  Map,
  LifeBuoy,
  BookOpen,
  HelpCircle,
  Bug,
  Lightbulb,
  BarChart3,
  Shield,
  FileText,
  Cookie,
} from "lucide-react";

export const siteConfig = {
  name: "SP NET GRAM",
  shortName: "SP NET GRAM",
  tagline: "Build. Connect. Empower.",
  description:
    "SP NET GRAM is an independent communication platform developed by SP NET INC, delivering an enhanced messaging experience with modern design, AI-powered tools, premium memberships, advanced customization, productivity features, and an expanding ecosystem built for individuals, communities, creators, teams, and businesses.",
  url: "https://spnetgram.sp-net.in",
  ogImage: "/images/og.jpg",
  metadataBase: new URL("https://spnetgram.sp-net.in"),
  links: {
    twitter: "https://x.com/spnetgram",
    github: "https://github.com/spnetgram",
  },
};

export const navGroups: NavGroup[] = [
  {
    id: "product",
    label: "Product",
    items: [
      {
        label: "SP NET GRAM",
        href: "/product",
        description: "Independent third-party Telegram client",
        icon: MessageCircle,
      },
      {
        label: "Premium",
        href: "/premium",
        description: "Unlock advanced features and capabilities",
        icon: Crown,
      },
      {
        label: "AI",
        href: "/ai",
        description: "Intelligent tools and smart assistance",
        icon: Sparkles,
      },
      {
        label: "Coins & Gems",
        href: "/coins-gems",
        description: "Virtual currency and in-app economy",
        icon: Coins,
      },
      {
        label: "Downloads",
        href: "/downloads",
        description: "Get the app for your device",
        icon: Download,
      },
      {
        label: "Beta",
        href: "/beta",
        description: "Try upcoming features early",
        icon: FlaskConical,
      },
    ],
  },
  {
    id: "company",
    label: "Company",
    items: [
      {
        label: "About SP NET INC",
        href: "/company",
        description: "Our mission, vision, and story",
        icon: Building2,
      },
      {
        label: "Meet the Team",
        href: "/team",
        description: "The people behind SP NET GRAM",
        icon: Users,
      },
      {
        label: "Careers",
        href: "/careers",
        description: "Join our growing team",
        icon: Briefcase,
      },
      {
        label: "Newsroom",
        href: "/newsroom",
        description: "Latest updates and announcements",
        icon: Newspaper,
      },
      {
        label: "Development",
        href: "/development",
        description: "How we build and ship",
        icon: Code2,
      },
      {
        label: "Roadmap",
        href: "/roadmap",
        description: "What's coming next",
        icon: Map,
      },
    ],
  },
  {
    id: "support",
    label: "Support",
    items: [
      {
        label: "Support Center",
        href: "/support",
        description: "Get help with your account",
        icon: LifeBuoy,
      },
      {
        label: "Documentation",
        href: "/docs",
        description: "Guides, tutorials, and references",
        icon: BookOpen,
      },
      {
        label: "FAQ",
        href: "/faq",
        description: "Frequently asked questions",
        icon: HelpCircle,
      },
      {
        label: "Report a Bug",
        href: "/report-bug",
        description: "Let us know about issues",
        icon: Bug,
      },
      {
        label: "Feature Requests",
        href: "/feature-requests",
        description: "Suggest new features",
        icon: Lightbulb,
      },
      {
        label: "Status",
        href: "/status",
        description: "System status and uptime",
        icon: BarChart3,
      },
    ],
  },
  {
    id: "legal",
    label: "Legal",
    items: [
      {
        label: "Privacy",
        href: "/privacy",
        description: "How we handle your data",
        icon: Shield,
      },
      {
        label: "Terms",
        href: "/terms",
        description: "Terms of service",
        icon: FileText,
      },
      {
        label: "Cookies",
        href: "/cookies",
        description: "Cookie policy and controls",
        icon: Cookie,
      },
    ],
  },
];

/** @deprecated Use navGroups instead. Kept for footer/backward compat. */
export const navLinks: NavLink[] = [
  { label: "Products", href: "#products" },
  { label: "Technology", href: "#technology" },
  { label: "AI", href: "#ai" },
  { label: "Community", href: "/community" },
  { label: "Enterprise", href: "#enterprise" },
  { label: "Developers", href: "/docs" },
  { label: "Company", href: "/company" },
  { label: "Newsroom", href: "/newsroom" },
  { label: "Support", href: "/support" },
  { label: "Contact", href: "/contact" },
];

export const footerSections = [
  {
    title: "Products",
    links: [
      { label: "SP NET GRAM", href: "/product" },
      { label: "Premium", href: "/premium" },
      { label: "AI", href: "/ai" },
      { label: "Coins & Gems", href: "/coins-gems" },
      { label: "Downloads", href: "/downloads" },
      { label: "Beta", href: "/beta" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Support Center", href: "/support" },
      { label: "FAQ", href: "/faq" },
      { label: "Report a Bug", href: "/report-bug" },
      { label: "Feature Requests", href: "/feature-requests" },
      { label: "Premium Help", href: "/premium-help" },
      { label: "Download Help", href: "/download-help" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Development", href: "/development" },
      { label: "Newsroom", href: "/newsroom" },
      { label: "Status", href: "/status" },
      { label: "Meet the Team", href: "/team" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Changelog", href: "/changelog" },
      { label: "Platform", href: "/platform" },
      { label: "Community", href: "/community" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

export const footerSupportEmail = "support.spnetgram@sp-net.in";

export const footerFeatures = [
  {
    title: "Lightning Fast",
    subtitle:
      "Experience a responsive, optimized client built for speed, efficiency, and everyday productivity.",
  },
  {
    title: "Privacy First",
    subtitle:
      "Designed with user privacy in mind while providing a secure and trusted messaging experience.",
  },
  {
    title: "AI Powered",
    subtitle:
      "Boost productivity with intelligent tools, smart assistance, and AI-enhanced workflows integrated throughout the app.",
  },
  {
    title: "Premium Experience",
    subtitle:
      "Unlock advanced memberships, exclusive capabilities, and enhanced features designed for power users.",
  },
  {
    title: "Personalization",
    subtitle:
      "Customize your experience with themes, layouts, interface options, and productivity-focused enhancements.",
  },
  {
    title: "Communities",
    subtitle:
      "Stay connected through groups, channels, and collaborative spaces built around the Telegram ecosystem.",
  },
  {
    title: "Cross Platform",
    subtitle:
      "Enjoy a consistent experience across supported devices with seamless synchronization.",
  },
  {
    title: "Continuous Innovation",
    subtitle:
      "Receive regular improvements, performance optimizations, bug fixes, and exciting new capabilities.",
  },
];

export const footerEmails = [
  { title: "Support", email: "support.spnetgram@sp-net.in" },
  { title: "General", email: "contact.spnetgram@sp-net.in" },
  { title: "Business", email: "business.spnetgram@sp-net.in" },
  { title: "Security", email: "security.spnetgram@sp-net.in" },
];
