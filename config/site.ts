import type { NavLink } from "@/types";

export const siteConfig = {
  name: "SP NET GRAM",
  shortName: "SPNETGRAM",
  tagline: "Build. Connect. Empower.",
  description:
    "SP NET GRAM is a next-generation communication platform focused on speed, privacy, AI, productivity, and premium experience for communities, creators, and businesses.",
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
  { label: "Community", href: "#community" },
  { label: "Enterprise", href: "#enterprise" },
  { label: "Developers", href: "/docs" },
  { label: "Company", href: "/company" },
  { label: "Newsroom", href: "/newsroom" },
];

export const footerSections = [
  {
    title: "Products",
    links: [
      { label: "SP NET GRAM", href: "#products" },
      { label: "SP NET ADMIN", href: "#products" },
      { label: "SP NET AI", href: "#ai" },
      { label: "SP NET CLOUD", href: "#products" },
      { label: "SP NET API", href: "/docs" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Messaging", href: "#features" },
      { label: "Voice & Video", href: "#features" },
      { label: "Channels & Groups", href: "#community" },
      { label: "Stories", href: "#features" },
      { label: "Cloud Storage", href: "#features" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "/docs" },
      { label: "Bots Platform", href: "/docs" },
      { label: "SDKs & Tools", href: "/docs" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Blog", href: "/blog" },
      { label: "Newsroom", href: "/newsroom" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/support" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/support" },
      { label: "FAQ", href: "/support" },
      { label: "Status", href: "/status" },
      { label: "Beta", href: "/beta" },
      { label: "Roadmap", href: "/roadmap" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
];
