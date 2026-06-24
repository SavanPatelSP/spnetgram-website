import type { NavLink } from "@/types";

export const siteConfig = {
  name: "SP NET GRAM",
  tagline: "Built on Telegram. Enhanced by SP NET GRAM.",
  description:
    "SP NET GRAM is an independent third-party Telegram client offering enhanced experiences, premium services, organizations, and ecosystem features built on Telegram's infrastructure.",
  url: "https://spnetgram.com",
  ogImage: "/images/og.jpg",
  metadataBase: new URL("https://spnetgram.com"),
  links: {
    twitter: "https://x.com/spnetgram",
    github: "https://github.com/spnetgram",
  },
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "/platform" },
  { label: "Waitlist", href: "/waitlist" },
  { label: "Beta", href: "/beta" },
  { label: "Development", href: "/development" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Newsroom", href: "/newsroom" },
  { label: "Blog", href: "/blog" },
  { label: "Docs", href: "/docs" },
  { label: "Changelog", href: "/changelog" },
  { label: "Careers", href: "/careers" },
  { label: "Support", href: "/support" },
  { label: "Company", href: "/company" },
  { label: "Status", href: "/status" },
];

export const footerSections = [
  {
    title: "Platform",
    links: [
      { label: "SP NET GRAM", href: "/" },
      { label: "Coins", href: "/platform" },
      { label: "Gems", href: "/platform" },
      { label: "Premium", href: "/platform" },
      { label: "Organizations", href: "/platform" },
    ],
  },
  {
    title: "Technology",
    links: [
      { label: "Development", href: "/development" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Status", href: "/status" },
      { label: "Infrastructure", href: "/status" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Waitlist", href: "/waitlist" },
      { label: "Newsroom", href: "/newsroom" },
      { label: "Blog", href: "/blog" },
      { label: "Documentation", href: "/docs" },
      { label: "Support", href: "/support" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/support" },
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
  {
    title: "Ecosystem",
    links: [
      { label: "Website", href: "/" },
      { label: "App", href: "/platform" },
      { label: "Admin Panel", href: "/platform" },
      { label: "Future Services", href: "/roadmap" },
    ],
  },
];
