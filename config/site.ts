import type { NavLink } from "@/types";

export const siteConfig = {
  name: "SP NET GRAM",
  shortName: "SP NET GRAM",
  tagline: "Build. Connect. Empower.",
  description:
    "SP NET GRAM is an independent communication platform developed by SP NET INC, delivering an enhanced messaging experience with modern design, AI-powered tools, premium memberships, advanced customization, productivity features, and an expanding ecosystem built for individuals, communities, creators, teams, and businesses.",
  url: "https://spnetgram.com",
  ogImage: "/images/og.jpg",
  metadataBase: new URL("https://spnetgram.com"),
  links: {
    twitter: "https://x.com/spnetgram",
    github: "https://github.com/spnetgram",
  },
};

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
    subtitle: "Experience a responsive, optimized client built for speed, efficiency, and everyday productivity.",
  },
  {
    title: "Privacy First",
    subtitle: "Designed with user privacy in mind while providing a secure and trusted messaging experience.",
  },
  {
    title: "AI Powered",
    subtitle: "Boost productivity with intelligent tools, smart assistance, and AI-enhanced workflows integrated throughout the app.",
  },
  {
    title: "Premium Experience",
    subtitle: "Unlock advanced memberships, exclusive capabilities, and enhanced features designed for power users.",
  },
  {
    title: "Personalization",
    subtitle: "Customize your experience with themes, layouts, interface options, and productivity-focused enhancements.",
  },
  {
    title: "Communities",
    subtitle: "Stay connected through groups, channels, and collaborative spaces built around the Telegram ecosystem.",
  },
  {
    title: "Cross Platform",
    subtitle: "Enjoy a consistent experience across supported devices with seamless synchronization.",
  },
  {
    title: "Continuous Innovation",
    subtitle: "Receive regular improvements, performance optimizations, bug fixes, and exciting new capabilities.",
  },
];

export const footerEmails = [
  { title: "Support", email: "support.spnetgram@sp-net.in" },
  { title: "General", email: "contact.spnetgram@sp-net.in" },
  { title: "Business", email: "business.spnetgram@sp-net.in" },
  { title: "Security", email: "security.spnetgram@sp-net.in" },
];
