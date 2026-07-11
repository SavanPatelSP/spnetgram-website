"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/loaders/skeleton";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  CheckCircle,
  Loader2,
  Circle,
  Database,
  RefreshCw,
  Sparkles,
  Zap,
  Shield,
  Bot,
  Gem,
  Coins,
  Globe,
  Code2,
  BarChart3,
  Rocket,
  ArrowRight,
  Users,
  Building2,
  MessageSquare,
  Lightbulb,
  Clock,
  Map,
  Eye,
  Heart,
  Smartphone,
  Lock,
  Megaphone,
  Settings,
  Target,
  Layers,
  Wrench,
  Puzzle,
  TrendingUp,
  FileText,
  Headphones,
  Send,
  Vote,
  Layout,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useRoadmapPhases } from "@/hooks/use-roadmap-phases";
import { useRoadmapItems } from "@/hooks/use-roadmap";
import type { LucideIcon } from "lucide-react";

interface PhaseCategory {
  icon: LucideIcon;
  label: string;
  color: string;
  items: string[];
}

interface PhaseDetail {
  phase: string;
  title: string;
  status: "completed" | "in-progress" | "planned";
  overview: string;
  objectives: string[];
  categories: PhaseCategory[];
  impact: string;
  milestone: string;
}

const phaseConfig = {
  completed: {
    badge: "success" as const,
    indicator: "bg-emerald-500",
    label: "Completed",
    iconBg: "bg-emerald-500/20 text-emerald-400",
    icon: CheckCircle,
  },
  "in-progress": {
    badge: "warning" as const,
    indicator: "bg-amber-500",
    label: "In Progress",
    iconBg: "bg-amber-500/20 text-amber-400",
    icon: Loader2,
  },
  planned: {
    badge: "outline" as const,
    indicator: "bg-muted-foreground/50",
    label: "Planned",
    iconBg: "bg-accent text-muted-foreground",
    icon: Circle,
  },
};

const phases: PhaseDetail[] = [
  {
    phase: "Foundation",
    title: "Foundation",
    status: "completed",
    milestone: "Released",
    overview:
      "Establish the organizational framework, governance model, and core application architecture that underpins the entire SP NET GRAM ecosystem. This phase delivered the foundational infrastructure everything else is built upon — from project standards to the Telegram integration layer to the visual identity that defines the brand.",
    objectives: [
      "Define governance model, contribution standards, and development workflow",
      "Build the core application framework on Telegram's Bot API and ecosystem",
      "Establish brand identity, design system, and UI component library",
      "Set up CI/CD pipelines, code quality standards, and deployment infrastructure",
    ],
    categories: [
      {
        icon: Code2,
        label: "Developer Improvements",
        color: "text-blue-400",
        items: [
          "Project charter, governance model, and contribution guidelines",
          "CI/CD pipeline setup with automated testing and deployment",
          "Code standards, linting rules, and review processes",
          "Core application architecture and module system",
          "Telegram API integration layer with session management",
        ],
      },
      {
        icon: Sparkles,
        label: "User Experience",
        color: "text-purple-400",
        items: [
          "Brand identity, visual language, and design tokens",
          "UI component library with consistent styling patterns",
          "Responsive layout system supporting all screen sizes",
          "App icon, splash screens, and branding assets",
        ],
      },
      {
        icon: Shield,
        label: "Security",
        color: "text-emerald-400",
        items: [
          "Authentication flow architecture and token management",
          "Secure session handling and device binding",
          "Foundation for end-to-end data protection patterns",
        ],
      },
    ],
    impact:
      "Delivered a production-ready foundation that supports all subsequent development. The governance model ensures consistent quality, the design system guarantees visual cohesion, and the Telegram integration layer provides the technical base for every feature in the ecosystem.",
  },
  {
    phase: "User Experience",
    title: "User Experience",
    status: "completed",
    milestone: "Released",
    overview:
      "Craft a modern, fluid, and visually refined interface that sets SP NET GRAM apart. This phase focused on building the UI foundation with responsive layouts, smooth animations, accessibility standards, and a design language that feels premium across every device and screen size.",
    objectives: [
      "Build a responsive UI system that adapts seamlessly from mobile to desktop",
      "Implement smooth animations and micro-interactions throughout the interface",
      "Establish accessibility standards ensuring the platform is usable by everyone",
      "Create a cohesive visual language with consistent typography, spacing, and color",
    ],
    categories: [
      {
        icon: Sparkles,
        label: "User Experience",
        color: "text-purple-400",
        items: [
          "Modern UI framework with responsive grid and layout system",
          "Smooth page transitions and scroll-triggered animations",
          "Dark mode with carefully tuned contrast and color harmony",
          "Typography scale with optimized readability across all sizes",
          "Touch-friendly interactions for mobile and tablet devices",
        ],
      },
      {
        icon: Zap,
        label: "Performance",
        color: "text-yellow-400",
        items: [
          "Optimized rendering pipeline for 60fps animations",
          "Lazy loading for images, components, and route segments",
          "Minimal bundle size with tree-shaking and code splitting",
          "First contentful paint under 1.5 seconds on 3G networks",
        ],
      },
      {
        icon: Shield,
        label: "Accessibility",
        color: "text-emerald-400",
        items: [
          "WCAG 2.1 AA compliance across all interactive elements",
          "Keyboard navigation support for all features",
          "Screen reader optimization with ARIA labels and landmarks",
          "Reduced motion support for users with vestibular disorders",
        ],
      },
    ],
    impact:
      "Established SP NET GRAM as a visually premium product. The design system and animation framework create a polished experience that users associate with quality, while accessibility standards ensure the platform serves everyone.",
  },
  {
    phase: "Core Systems",
    title: "Core Systems",
    status: "in-progress",
    milestone: "In Development",
    overview:
      "Build the digital economy and user infrastructure that powers the SP NET GRAM ecosystem. This phase delivers the user management system, the dual-currency economy (Coins and Gems), and the core transaction infrastructure that enables all premium features and marketplace interactions.",
    objectives: [
      "Deliver comprehensive user registration, profiles, and account management",
      "Build the SP NET GRAM Coins digital currency and transaction engine",
      "Implement the Gems premium currency for exclusive features and marketplace",
      "Create earning mechanisms, reward systems, and feature-gating infrastructure",
    ],
    categories: [
      {
        icon: Users,
        label: "User Experience",
        color: "text-purple-400",
        items: [
          "User registration with Telegram account linking and verification",
          "Rich user profiles with avatars, bios, and status indicators",
          "Account settings dashboard with privacy and notification controls",
          "Multi-device session management and device authorization",
          "User search, discovery, and connection features",
        ],
      },
      {
        icon: Coins,
        label: "Coins & Gems",
        color: "text-amber-400",
        items: [
          "SP NET GRAM Coins wallet with real-time balance and transaction history",
          "Coin earning mechanisms through engagement, referrals, and milestones",
          "Gems premium wallet with purchase flow and conversion paths",
          "Dual-currency transaction engine with atomic operations",
          "Feature unlocking and access gating based on currency balances",
        ],
      },
      {
        icon: Zap,
        label: "Performance",
        color: "text-yellow-400",
        items: [
          "Optimized database queries for user and transaction lookups",
          "Cached balance calculations for real-time wallet updates",
          "Background transaction processing with retry and rollback support",
        ],
      },
      {
        icon: Shield,
        label: "Security",
        color: "text-emerald-400",
        items: [
          "Secure transaction signing and double-spend prevention",
          "Rate limiting and fraud detection for earning mechanisms",
          "Encrypted wallet data storage and secure key management",
          "Audit logging for all financial transactions",
        ],
      },
    ],
    impact:
      "Creates the economic backbone of SP NET GRAM. The dual-currency system enables premium monetization while rewarding engaged users. The user system provides the identity layer for all social, organizational, and enterprise features that follow.",
  },
  {
    phase: "Premium Experience",
    title: "Premium Experience",
    status: "in-progress",
    milestone: "In Development",
    overview:
      "Launch a tiered premium membership program that delivers escalating value to subscribers while creating sustainable recurring revenue. This phase builds the subscription management infrastructure, premium feature access control, customization options, and the request handling system that ensures premium users receive priority support.",
    objectives: [
      "Define membership tiers with clear value propositions and pricing",
      "Build subscription management with billing, upgrades, and renewal flows",
      "Implement premium feature access control across the entire platform",
      "Deliver exclusive customization options and premium-only experiences",
    ],
    categories: [
      {
        icon: Gem,
        label: "Premium",
        color: "text-amber-400",
        items: [
          "Multi-tier membership structure with Bronze, Silver, Gold, and Platinum levels",
          "Subscription management with monthly and annual billing cycles",
          "Premium feature gating with granular access control per tier",
          "Member benefits dashboard showing active perks and usage stats",
          "Upgrade and downgrade flows with prorated billing adjustments",
        ],
      },
      {
        icon: MessageSquare,
        label: "User Experience",
        color: "text-purple-400",
        items: [
          "Premium membership showcase with tier comparison and benefits overview",
          "Member portal with centralized access to all premium features",
          "Visual indicators distinguishing premium users across the platform",
          "Seamless upgrade prompts when users encounter premium features",
          "Exclusive themes, fonts, and customization for premium members",
        ],
      },
      {
        icon: BarChart3,
        label: "Infrastructure",
        color: "text-blue-400",
        items: [
          "Priority request queuing with SLA tracking and response metrics",
          "Request submission system with categorization and routing",
          "Real-time status updates and notification for open requests",
          "Integration with the support and moderation systems",
        ],
      },
    ],
    impact:
      "Establishes the revenue engine for SP NET GRAM. Premium memberships provide predictable recurring income that funds continued development. The tiered structure ensures accessibility while rewarding the most engaged users with exclusive features and priority support.",
  },
  {
    phase: "AI Integration",
    title: "AI Integration",
    status: "planned",
    milestone: "Planned",
    overview:
      "Integrate artificial intelligence across the SP NET GRAM platform to create smarter, more contextual, and more productive communication experiences. From intelligent replies to content generation and workflow automation, AI becomes a core differentiator that transforms how users interact with the platform.",
    objectives: [
      "Build the AI processing infrastructure with privacy-first architecture",
      "Deploy smart reply and content generation features for everyday communication",
      "Implement translation, voice processing, and summarization capabilities",
      "Create context-aware AI workflows that learn from user patterns",
    ],
    categories: [
      {
        icon: Bot,
        label: "AI",
        color: "text-cyan-400",
        items: [
          "Smart reply engine with context-aware response suggestions",
          "Content generation for messages, summaries, and creative writing",
          "Real-time translation across multiple languages",
          "Voice message transcription and summarization",
          "Smart compose with predictive text and tone adjustment",
        ],
      },
      {
        icon: Zap,
        label: "Performance",
        color: "text-yellow-400",
        items: [
          "Low-latency AI inference with edge processing",
          "Efficient model serving with batched request handling",
          "Progressive loading for AI-generated content",
          "Caching layer for frequently requested AI operations",
        ],
      },
      {
        icon: Shield,
        label: "Security",
        color: "text-emerald-400",
        items: [
          "Privacy-first AI processing with no message content storage",
          "Encrypted AI model inference pipelines",
          "User consent management for AI feature opt-in",
          "Data anonymization for model improvement datasets",
        ],
      },
    ],
    impact:
      "Positions SP NET GRAM as an AI-enhanced communication platform. AI features increase user productivity, improve communication quality, and create a competitive moat that distinguishes SP NET GRAM from standard messaging clients.",
  },
  {
    phase: "Coins & Gems Economy",
    title: "Coins & Gems Economy",
    status: "in-progress",
    milestone: "In Development",
    overview:
      "Expand the digital economy into a full-featured ecosystem with rewards, achievements, marketplace preparation, and engagement incentives. This phase transforms the basic currency system into a thriving economy that drives user engagement, retention, and platform value.",
    objectives: [
      "Build comprehensive reward and achievement systems for user engagement",
      "Create marketplace infrastructure for coin and gem transactions",
      "Implement referral programs and social earning mechanisms",
      "Design economy health monitoring and balancing tools",
    ],
    categories: [
      {
        icon: Coins,
        label: "Coins & Gems",
        color: "text-amber-400",
        items: [
          "Achievement system with badges, streaks, and milestone rewards",
          "Daily login rewards and engagement-based earning opportunities",
          "Referral program with multi-tier bonus structures",
          "Leaderboards and competition-based reward distributions",
          "Coin-to-Gem conversion and exchange mechanisms",
        ],
      },
      {
        icon: TrendingUp,
        label: "Economy",
        color: "text-blue-400",
        items: [
          "Marketplace infrastructure for digital goods and services",
          "Creator economy tools for content monetization",
          "Economy health dashboard with supply, demand, and velocity metrics",
          "Anti-inflation mechanisms and currency sinks for economic balance",
          "Purchase flow optimization with multiple payment methods",
        ],
      },
      {
        icon: Shield,
        label: "Security",
        color: "text-emerald-400",
        items: [
          "Fraud detection system for suspicious earning patterns",
          "Transaction limits and velocity checks for abuse prevention",
          "Account verification requirements for high-value transactions",
          "Dispute resolution system for marketplace transactions",
        ],
      },
    ],
    impact:
      "Transforms the currency system from a feature into an economy. Rewards drive daily engagement, marketplace creates network effects, and the creator economy incentivizes content production — all contributing to platform stickiness and growth.",
  },
  {
    phase: "Security & Privacy",
    title: "Security & Privacy",
    status: "planned",
    milestone: "Planned",
    overview:
      "Implement comprehensive security and privacy infrastructure that protects users, their data, and their transactions. This phase builds the trust foundation that enables enterprise adoption, regulatory compliance, and user confidence in the platform's ability to safeguard their information.",
    objectives: [
      "Deploy enhanced authentication with multi-factor and biometric support",
      "Build comprehensive account protection and recovery mechanisms",
      "Implement privacy controls giving users full transparency over their data",
      "Create device management and session security infrastructure",
    ],
    categories: [
      {
        icon: Lock,
        label: "Security",
        color: "text-emerald-400",
        items: [
          "Two-factor authentication with TOTP and hardware key support",
          "Biometric authentication for mobile device access",
          "Enhanced password policies and breach detection",
          "Session management with remote logout and device revocation",
          "Login attempt monitoring with suspicious activity alerts",
        ],
      },
      {
        icon: Shield,
        label: "Privacy",
        color: "text-blue-400",
        items: [
          "Privacy dashboard with data access and sharing transparency",
          "Granular privacy controls for profile visibility and data sharing",
          "Data export and account deletion capabilities",
          "Cookie and tracking preference management",
          "Privacy policy compliance with regional regulations",
        ],
      },
      {
        icon: Settings,
        label: "Device Management",
        color: "text-purple-400",
        items: [
          "Multi-device management with trusted device authorization",
          "Active session monitoring with location and device details",
          "Automatic session expiration for inactive devices",
          "Device-specific security policies and restrictions",
          "Emergency device lockout and account recovery flows",
        ],
      },
    ],
    impact:
      "Establishes the security foundation required for enterprise adoption and regulatory compliance. Users gain confidence knowing their accounts, data, and transactions are protected by industry-standard security practices.",
  },
  {
    phase: "Communities",
    title: "Communities",
    status: "planned",
    milestone: "Planned",
    overview:
      "Build the community infrastructure that enables groups, channels, and social features within SP NET GRAM. This phase enhances Telegram's existing community capabilities with advanced moderation tools, community analytics, engagement features, and governance systems that help communities thrive.",
    objectives: [
      "Enhance group and channel management with advanced administrative tools",
      "Build community moderation systems with automated and manual workflows",
      "Implement community analytics and engagement measurement tools",
      "Create community governance features including roles, permissions, and events",
    ],
    categories: [
      {
        icon: Users,
        label: "Community Tools",
        color: "text-purple-400",
        items: [
          "Enhanced group management with role hierarchies and permissions",
          "Channel analytics dashboard with engagement and growth metrics",
          "Community event scheduling with RSVP and reminder systems",
          "Pinned content management and announcement broadcasting",
          "Community onboarding flows with welcome messages and guides",
        ],
      },
      {
        icon: Shield,
        label: "Moderation",
        color: "text-emerald-400",
        items: [
          "Automated content moderation with configurable rules and filters",
          "Moderation action logging with appeal and review workflows",
          "Spam detection and anti-abuse systems for community protection",
          "Moderator tools dashboard with queue management and bulk actions",
          "Community health scoring with toxicity and engagement indicators",
        ],
      },
      {
        icon: BarChart3,
        label: "Analytics",
        color: "text-blue-400",
        items: [
          "Real-time community activity dashboards and heatmaps",
          "Member growth tracking with retention and churn analysis",
          "Content performance metrics with engagement scoring",
          "Moderation effectiveness reporting and trend analysis",
          "Cross-community benchmarking and comparison tools",
        ],
      },
    ],
    impact:
      "Transforms SP NET GRAM from a messaging tool into a community platform. Enhanced moderation, analytics, and governance tools enable communities of all sizes to operate safely and effectively, driving engagement and retention.",
  },
  {
    phase: "Developer Platform",
    title: "Developer Platform",
    status: "planned",
    milestone: "Planned",
    overview:
      "Open SP NET GRAM to third-party developers with public APIs, SDKs, comprehensive documentation, and integration tools. This phase creates the developer ecosystem that extends the platform's capabilities beyond what SP NET INC could build alone, fostering innovation and network effects.",
    objectives: [
      "Launch public REST and WebSocket APIs with authentication and rate limiting",
      "Build SDK libraries for popular programming languages and frameworks",
      "Create comprehensive developer documentation with interactive examples",
      "Establish the developer portal with app registration, management, and analytics",
    ],
    categories: [
      {
        icon: Code2,
        label: "Developer Tools",
        color: "text-blue-400",
        items: [
          "REST API with OpenAPI specification and interactive playground",
          "WebSocket API for real-time event streaming and notifications",
          "Webhook system with event filtering and delivery guarantees",
          "SDK libraries for TypeScript, Python, Go, and Swift",
          "CLI tools for project scaffolding and deployment automation",
        ],
      },
      {
        icon: FileText,
        label: "Documentation",
        color: "text-purple-400",
        items: [
          "Developer documentation with guided tutorials and code samples",
          "API reference with request/response examples for every endpoint",
          "Integration guides for common use cases and platforms",
          "Changelog and versioning documentation for API evolution",
          "Community forums and developer support channels",
        ],
      },
      {
        icon: Layout,
        label: "Developer Portal",
        color: "text-amber-400",
        items: [
          "Developer dashboard with app registration and API key management",
          "Usage analytics with request volume, error rates, and latency metrics",
          "Sandbox environment for testing integrations before production",
          "App marketplace for distributing integrations to SP NET GRAM users",
        ],
      },
    ],
    impact:
      "Unlocks the platform effect. Third-party developers build integrations, bots, and extensions that expand SP NET GRAM's capabilities exponentially. The developer ecosystem creates switching costs, network effects, and innovation velocity that a single team could never match.",
  },
  {
    phase: "Cross Platform",
    title: "Cross Platform",
    status: "planned",
    milestone: "Planned",
    overview:
      "Extend SP NET GRAM beyond Telegram's native clients to desktop, web, and tablet applications with native-quality experiences. This phase ensures users can access the full SP NET GRAM experience on any device, with platform-specific optimizations for each environment.",
    objectives: [
      "Build a native desktop application for macOS, Windows, and Linux",
      "Develop a progressive web application with offline capabilities",
      "Create tablet-optimized interfaces for iPad and Android tablets",
      "Establish platform-specific feature sets and optimizations",
    ],
    categories: [
      {
        icon: Smartphone,
        label: "Desktop",
        color: "text-blue-400",
        items: [
          "Native desktop application with system tray and notification integration",
          "Keyboard shortcuts and power-user features for productivity",
          "File management with drag-and-drop and bulk operations",
          "Multi-window support with split-view and picture-in-picture",
          "Platform-specific theming matching OS appearance",
        ],
      },
      {
        icon: Globe,
        label: "Web",
        color: "text-purple-400",
        items: [
          "Progressive web application with offline message access",
          "Browser notification integration with action buttons",
          "Responsive design optimized for laptop and desktop browsers",
          "Progressive enhancement for varying network conditions",
          "Install prompt for home screen and taskbar shortcuts",
        ],
      },
      {
        icon: Layers,
        label: "Tablet",
        color: "text-emerald-400",
        items: [
          "Split-view and multi-tasking support for iPad and Android tablets",
          "Touch-optimized interface with gesture navigation",
          "Stylus support for drawing and handwriting features",
          "Adaptive layout that responds to screen size and orientation",
        ],
      },
    ],
    impact:
      "Ensures SP NET GRAM is available wherever users are. Cross-platform availability increases daily active usage, reduces dependency on any single platform, and provides the foundation for features that require desktop-class computing resources.",
  },
  {
    phase: "Business & Enterprise",
    title: "Business & Enterprise",
    status: "planned",
    milestone: "Planned",
    overview:
      "Build the organizational and enterprise infrastructure that enables teams, businesses, and large organizations to use SP NET GRAM for professional communication and collaboration. This phase delivers the management, administration, and productivity tools required for enterprise adoption.",
    objectives: [
      "Build organizational management with teams, roles, and permission hierarchies",
      "Implement enterprise authentication with SSO, SAML, and directory integration",
      "Create administration dashboards for organizational oversight and analytics",
      "Develop productivity tools for team collaboration and workflow management",
    ],
    categories: [
      {
        icon: Building2,
        label: "Organizations",
        color: "text-blue-400",
        items: [
          "Organization creation with team hierarchy and department structure",
          "Role-based access control with custom permission definitions",
          "Organization-wide settings with policy enforcement and compliance",
          "Member lifecycle management with invitation, onboarding, and offboarding",
          "Cross-team collaboration with shared channels and projects",
        ],
      },
      {
        icon: Lock,
        label: "Enterprise Security",
        color: "text-emerald-400",
        items: [
          "Single sign-on (SSO) with SAML 2.0 and OpenID Connect",
          "Directory service integration with LDAP and Active Directory",
          "Data loss prevention policies and content classification",
          "Compliance reporting for SOC 2, GDPR, and industry standards",
          "Audit trail with detailed access and action logging",
        ],
      },
      {
        icon: BarChart3,
        label: "Administration",
        color: "text-purple-400",
        items: [
          "Admin control panel with real-time system health monitoring",
          "Organization analytics dashboard with usage and engagement metrics",
          "Billing management with invoice generation and payment tracking",
          "Support ticketing with priority queuing and SLA enforcement",
          "Automated reporting with scheduled delivery and export options",
        ],
      },
    ],
    impact:
      "Opens the enterprise market, the largest revenue opportunity for SP NET GRAM. Enterprise features command premium pricing, create long-term contracts, and establish SP NET GRAM as a professional communication platform trusted by organizations of all sizes.",
  },
  {
    phase: "Global Expansion",
    title: "Global Expansion",
    status: "planned",
    milestone: "Planned",
    overview:
      "Bring SP NET GRAM to public availability worldwide with multi-language support, regional optimization, accessibility improvements, and international growth infrastructure. This phase represents the culmination of the product vision — a complete, globally accessible platform serving users in every market.",
    objectives: [
      "Launch SP NET GRAM as a publicly available product worldwide",
      "Deliver multi-language localization for key global markets",
      "Implement accessibility improvements for users with disabilities worldwide",
      "Build regional optimization for performance in diverse network conditions",
    ],
    categories: [
      {
        icon: Globe,
        label: "Localization",
        color: "text-blue-400",
        items: [
          "Multi-language interface with professional translation for 20+ languages",
          "Right-to-left (RTL) layout support for Arabic, Hebrew, and related scripts",
          "Locale-aware formatting for dates, numbers, currencies, and addresses",
          "Cultural adaptation of icons, colors, and interface conventions",
          "Community translation platform for crowd-sourced language support",
        ],
      },
      {
        icon: Heart,
        label: "Accessibility",
        color: "text-purple-400",
        items: [
          "Enhanced screen reader support with comprehensive ARIA implementation",
          "High contrast mode and customizable color schemes for visual impairments",
          "Voice control and switch navigation for motor accessibility",
          "Cognitive accessibility features including simplified interfaces",
          "Compliance with international accessibility standards (WCAG 2.1 AAA)",
        ],
      },
      {
        icon: Zap,
        label: "Regional Optimization",
        color: "text-amber-400",
        items: [
          "CDN deployment in Africa, Asia, South America, and Oceania",
          "Low-bandwidth mode for areas with limited connectivity",
          "Offline-first architecture for intermittent network conditions",
          "Regional data compliance with local data residency requirements",
          "Performance optimization for low-end devices common in emerging markets",
        ],
      },
    ],
    impact:
      "Makes SP NET GRAM truly global. Localization removes language barriers, accessibility ensures inclusivity, and regional optimization guarantees a quality experience regardless of location or device — unlocking billions of potential users worldwide.",
  },
  {
    phase: "Future Vision",
    title: "Future Vision",
    status: "planned",
    milestone: "Planned",
    overview:
      "Explore and invest in the next generation of technologies and capabilities that will define the future of SP NET GRAM. This ongoing phase encompasses experimental features, AI evolution, next-generation collaboration tools, and long-term ecosystem expansion that pushes the boundaries of what a communication platform can be.",
    objectives: [
      "Research and prototype experimental technologies for platform integration",
      "Evolve AI capabilities toward autonomous assistants and predictive features",
      "Build next-generation collaboration tools beyond traditional messaging",
      "Expand the ecosystem with new products, services, and platform capabilities",
    ],
    categories: [
      {
        icon: Bot,
        label: "AI Evolution",
        color: "text-cyan-400",
        items: [
          "Autonomous AI assistants with domain-specific expertise and memory",
          "Predictive communication features that anticipate user needs",
          "AI-powered knowledge management and information retrieval",
          "Natural language interface for platform navigation and task execution",
          "Collaborative AI that facilitates group decision-making and brainstorming",
        ],
      },
      {
        icon: Sparkles,
        label: "Experimental Technologies",
        color: "text-purple-400",
        items: [
          "Augmented reality communication features and spatial messaging",
          "Decentralized identity and self-sovereign data management",
          "Real-time collaboration tools beyond text and voice",
          "Blockchain-based verification and digital asset management",
          "Ambient computing integration for seamless cross-device experiences",
        ],
      },
      {
        icon: Rocket,
        label: "Ecosystem Expansion",
        color: "text-amber-400",
        items: [
          "Adjacent product lines built on SP NET GRAM's platform infrastructure",
          "Strategic partnerships with hardware manufacturers and service providers",
          "Research partnerships with universities and technology institutions",
          "Open-source contributions and community-driven innovation programs",
          "Long-term sustainability through diversified revenue and ecosystem growth",
        ],
      },
    ],
    impact:
      "Ensures SP NET GRAM remains at the cutting edge of technology and communication. By continuously investing in future capabilities, the platform evolves beyond its current form, creating new categories of value and securing long-term relevance in a rapidly changing technological landscape.",
  },
];

const productVisionItems = [
  {
    icon: Sparkles,
    title: "Innovation",
    description:
      "Continuously pushing the boundaries of what a messaging platform can do. We invest in emerging technologies and creative solutions that give users capabilities they never expected from a communication tool.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Every feature is built for speed. From sub-second message delivery to instant page loads, performance is not a feature — it is a fundamental requirement that shapes every technical decision.",
  },
  {
    icon: Bot,
    title: "Artificial Intelligence",
    description:
      "AI woven throughout the platform, from smart replies to content generation to intelligent automation. AI enhances human communication rather than replacing it, making every interaction more productive.",
  },
  {
    icon: Gem,
    title: "Premium Quality",
    description:
      "A premium experience available to everyone, with advanced capabilities for those who want more. We believe in earning revenue through value, not through restrictions on essential features.",
  },
  {
    icon: Shield,
    title: "Security & Trust",
    description:
      "User trust is earned through consistent protection of privacy, data, and transactions. Security is built into the architecture from day one, not bolted on as an afterthought.",
  },
  {
    icon: Globe,
    title: "Cross-Platform",
    description:
      "Available everywhere users are — mobile, desktop, web, and beyond. The experience adapts to each platform while maintaining consistency in features, data, and quality.",
  },
  {
    icon: Puzzle,
    title: "Developer Ecosystem",
    description:
      "An open platform where developers can build, extend, and integrate. Third-party innovation multiplies the platform's value and creates an ecosystem that grows beyond what any single team could build.",
  },
];

const principles = [
  {
    icon: Users,
    title: "Community Feedback",
    description:
      "Our community drives our roadmap. We prioritize features that users actually need, shaped by real feedback, beta testing insights, and genuine conversations about what matters.",
  },
  {
    icon: Target,
    title: "Quality Over Speed",
    description:
      "We ship when it is ready, not when a calendar says so. Every feature goes through rigorous testing, and we would rather delay a release than ship something that breaks trust.",
  },
  {
    icon: Shield,
    title: "Security First",
    description:
      "Every feature is evaluated against security implications before development begins. We build with threat modeling, encryption, and access controls as foundational requirements.",
  },
  {
    icon: Zap,
    title: "Performance Obsession",
    description:
      "Slow is broken. We measure, optimize, and profile continuously. Performance budgets guide development, and regressions are treated as bugs that must be fixed before release.",
  },
  {
    icon: CheckCircle,
    title: "Reliability",
    description:
      "Users depend on SP NET GRAM for important communication. We build redundancy, implement graceful degradation, and maintain rigorous uptime standards to earn that dependency.",
  },
  {
    icon: Heart,
    title: "User Experience",
    description:
      "Every interaction is an opportunity to delight or frustrate. We obsess over details — animation timing, spacing, error messages — because small things compound into great experiences.",
  },
];

const releaseLifecycle = [
  {
    step: "Planning",
    description:
      "Gather requirements from community feedback, technical analysis, and product strategy. Define scope, success criteria, and dependencies. Create detailed technical specifications and design mockups.",
    icon: Lightbulb,
    color: "text-blue-400",
  },
  {
    step: "Development",
    description:
      "Implement features following code standards, writing tests alongside production code. Conduct regular code reviews, maintain CI/CD pipeline health, and iterate based on internal feedback.",
    icon: Code2,
    color: "text-purple-400",
  },
  {
    step: "Testing",
    description:
      "Comprehensive quality assurance including unit tests, integration tests, end-to-end tests, performance benchmarks, and security audits. Validate across all supported devices and browsers.",
    icon: Shield,
    color: "text-emerald-400",
  },
  {
    step: "Beta",
    description:
      "Limited rollout to beta testers with telemetry, feedback collection, and monitoring. Gradually expand access as stability is confirmed. Address issues reported by the beta community.",
    icon: Users,
    color: "text-amber-400",
  },
  {
    step: "Stable Release",
    description:
      "Full rollout with monitoring, rollback capability, and rapid response protocols. Announce through changelog and community channels. Track post-release metrics for early issue detection.",
    icon: Rocket,
    color: "text-blue-400",
  },
  {
    step: "Maintenance",
    description:
      "Ongoing monitoring, bug fixes, and performance optimization. Gather user feedback for the next iteration. Deprecate features gracefully with advance notice and migration paths.",
    icon: Settings,
    color: "text-purple-400",
  },
];

const communityWays = [
  {
    icon: Rocket,
    title: "Join the Beta Program",
    description:
      "Get early access to new features before they reach the public. Test new capabilities, provide feedback directly to the development team, and help shape the product before release.",
    href: "/beta",
    linkLabel: "Join Beta",
  },
  {
    icon: MessageSquare,
    title: "Report Bugs",
    description:
      "Found something broken? Our bug reporting system makes it easy to describe issues, attach screenshots, and provide technical details. Every report is reviewed and prioritized by the team.",
    href: "/support",
    linkLabel: "Report Bug",
  },
  {
    icon: Lightbulb,
    title: "Suggest Features",
    description:
      "Have an idea that would make SP NET GRAM better? Submit feature requests through our dedicated system. The most requested features rise to the top of our development priorities.",
    href: "/feature-requests",
    linkLabel: "Suggest Feature",
  },
  {
    icon: Vote,
    title: "Vote on Ideas",
    description:
      "Community voting is coming soon. Prioritize the features you care about most by upvoting ideas from other users. The highest-voted requests receive priority consideration in sprint planning.",
    href: "/feature-requests",
    linkLabel: "View Requests",
  },
];

const developmentStats = [
  { label: "Roadmap Phases", value: "12", icon: Map },
  { label: "Completed Milestones", value: "4", icon: CheckCircle },
  { label: "Planned Features", value: "120+", icon: Target },
  { label: "Active Development Areas", value: "6", icon: Layers },
  { label: "Upcoming Releases", value: "8", icon: Rocket },
];

const relatedPages = [
  {
    icon: FileText,
    title: "Changelog",
    description: "See what has been released recently with detailed version notes and updates.",
    href: "/changelog",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Technical details about the development process, architecture, and engineering decisions.",
    href: "/development",
  },
  {
    icon: Rocket,
    title: "Beta Program",
    description: "Join the beta testing program and get early access to new features and capabilities.",
    href: "/beta",
  },
  {
    icon: Lightbulb,
    title: "Feature Requests",
    description: "Submit and vote on feature ideas. Help us prioritize what to build next.",
    href: "/feature-requests",
  },
  {
    icon: Headphones,
    title: "Support Center",
    description: "Get help with SP NET GRAM, report issues, and access documentation and guides.",
    href: "/support",
  },
];

const faqItems = [
  {
    q: "How often is the roadmap updated?",
    a: "The roadmap is reviewed and updated regularly as development progresses. Major updates occur at the completion of each development milestone. Minor adjustments are made as priorities shift based on technical requirements and community feedback.",
  },
  {
    q: "Can features change or be removed from the roadmap?",
    a: "Yes. The roadmap represents our current development priorities and is subject to refinement. Features may be reprioritized, merged, or replaced based on community feedback, technical feasibility, and evolving product strategy. We communicate significant changes transparently.",
  },
  {
    q: "How can I suggest features or ideas?",
    a: "We actively encourage community input. You can submit feature requests through the dedicated feature request system, join the beta program to provide direct feedback, or participate in community discussions. Every suggestion is reviewed by the development team.",
  },
  {
    q: "What determines development priorities?",
    a: "Priorities are determined by a combination of factors: community demand and feedback, technical dependencies between features, platform stability requirements, revenue impact, and alignment with the long-term product vision. We aim to balance user needs with sustainable development.",
  },
  {
    q: "How do beta features become stable releases?",
    a: "Beta features go through a rigorous process: internal testing, limited beta rollout to selected testers, wider beta availability, performance and stability monitoring, and final release. Each stage has specific quality gates that must be met before proceeding.",
  },
  {
    q: "What is the difference between Coins and Gems?",
    a: "Coins are the standard digital currency earned through engagement, referrals, and platform activities. Gems are the premium currency purchased with real money, used for exclusive features, priority access, and marketplace transactions. Both currencies power different parts of the ecosystem.",
  },
  {
    q: "Will SP NET GRAM always be free?",
    a: "Core messaging and essential features will always be free for all users. Premium memberships, advanced AI features, enterprise capabilities, and marketplace transactions provide revenue to fund continued development while keeping the core experience accessible.",
  },
  {
    q: "How does SP NET GRAM handle enterprise requirements?",
    a: "Enterprise features include SSO/SAML integration, dedicated infrastructure options, custom deployment, SLA guarantees, advanced analytics, and priority support. These are being developed as part of our Business & Enterprise and Global Expansion phases.",
  },
];

const summaryItems = [
  {
    icon: CheckCircle,
    title: "Current Development Focus",
    description:
      "Active development is concentrated on Core Systems, Premium Experience, and Coins & Gems Economy — building the digital economy, user infrastructure, and premium subscription platform that power the entire ecosystem.",
  },
  {
    icon: Eye,
    title: "Long-Term Vision",
    description:
      "SP NET GRAM evolves from an enhanced Telegram client into a comprehensive platform with enterprise solutions, AI capabilities, developer tools, and a global ecosystem of integrations and services.",
  },
  {
    icon: Users,
    title: "Community Feedback",
    description:
      "The roadmap is shaped by community input. Feature requests, beta testing feedback, and user discussions directly influence development priorities and ensure we build what matters most.",
  },
  {
    icon: Rocket,
    title: "Release Philosophy",
    description:
      "We ship incrementally and learn from real-world usage. Each phase builds upon the last, with quality gates ensuring stability. Features progress through internal testing, beta, and general availability.",
  },
  {
    icon: Clock,
    title: "Update Frequency",
    description:
      "The roadmap is reviewed at every major milestone. Significant changes are communicated through the changelog and community channels. We believe in transparency about where we are and where we are going.",
  },
  {
    icon: Map,
    title: "Roadmap Evolution",
    description:
      "This roadmap is a living document that evolves with the product. As we learn from users, scale the platform, and discover new opportunities, our priorities adapt to deliver maximum value.",
  },
];

export function RoadmapPageContent() {
  const phasesQuery = useRoadmapPhases();
  const itemsQuery = useRoadmapItems();

  const isError = phasesQuery.isError || itemsQuery.isError;

  const refetchAll = React.useCallback(() => {
    phasesQuery.refetch();
    itemsQuery.refetch();
  }, [phasesQuery, itemsQuery]);

  if (phasesQuery.isLoading) {
    return (
      <div className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <Skeleton className="h-5 w-48 mx-auto" />
            <Skeleton className="h-14 w-96 mx-auto" />
            <Skeleton className="h-5 w-80 mx-auto" />
          </div>
          <div className="space-y-12">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex gap-6">
                <Skeleton className="h-14 w-14 rounded-2xl shrink-0" />
                <div className="flex-1 space-y-3">
                  <Skeleton className="h-8 w-64" />
                  <Skeleton className="h-4 w-48" />
                  <Skeleton className="h-32 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center py-20">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-border/20 bg-card/30">
              <Database className="h-6 w-6 text-muted-foreground/30" />
            </div>
            <h3 className="text-lg font-semibold tracking-tight mb-2">
              Roadmap temporarily unavailable
            </h3>
            <p className="text-sm text-muted-foreground/50 max-w-md mb-6 leading-relaxed">
              We&apos;re having trouble loading the roadmap. Please try again
              shortly.
            </p>
            <button
              onClick={refetchAll}
              className="inline-flex items-center gap-2 rounded-xl border border-border/20 bg-card/30 px-5 py-2.5 text-sm font-medium text-muted-foreground/70 hover:text-foreground hover:bg-card/50 transition-all"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Try again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const completedCount = phases.filter(
    (p) => p.status === "completed",
  ).length;
  const inProgressCount = phases.filter(
    (p) => p.status === "in-progress",
  ).length;
  const plannedCount = phases.filter((p) => p.status === "planned").length;
  const totalCount = phases.length;

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 text-xs font-medium tracking-wide uppercase">
              <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-muted-foreground">
                {completedCount} of {totalCount} phases completed
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Product Roadmap
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              The SP NET GRAM roadmap represents our long-term vision for
              continuously improving the product through new features, AI
              capabilities, platform enhancements, security improvements, and
              global expansion. Every milestone brings us closer to redefining
              how people communicate.
            </p>
          </div>
        </div>
      </section>

      <Breadcrumbs />

      {/* ── Roadmap Overview ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#3390ec]/20 bg-[#3390ec]/[0.08] px-3 py-1 text-xs font-medium backdrop-blur-sm">
                <Map className="h-3 w-3 text-[#3390ec]" />
                <span className="text-[#3390ec] font-medium">
                  Strategic Vision
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                The path from foundation to global platform
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Our development roadmap is organized into {totalCount} major
                phases spanning from the initial project governance through to
                future vision. Each phase builds upon the last, creating a
                comprehensive platform that serves individual users,
                communities, and enterprises worldwide.
              </p>
            </ScrollReveal>
          </div>
          <div className="mx-auto max-w-3xl mt-12">
            <ScrollReveal delay={100}>
              <Card className="p-6 border-border/50 bg-accent/[0.02]">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-amber-400 mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Roadmap items are subject to refinement based on community
                    feedback, development priorities, and technical requirements.
                    This is a living document that evolves as we learn and grow.
                    Significant changes are communicated through the changelog
                    and community channels.
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Product Vision ── */}
      <section className="border-t border-border/50 bg-accent/[0.02] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Product Vision
              </h2>
              <p className="text-muted-foreground">
                The long-term direction that guides every decision we make.
              </p>
            </div>
          </ScrollReveal>
          <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productVisionItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 60}>
                  <Card className="p-6 border-border/50 hover:border-border hover:shadow-sm transition-all duration-200 h-full">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/50">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Development Principles ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Development Principles
              </h2>
              <p className="text-muted-foreground">
                How we prioritize, build, and ship features.
              </p>
            </div>
          </ScrollReveal>
          <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 60}>
                  <Card className="p-6 border-border/50 hover:border-border hover:shadow-sm transition-all duration-200 h-full">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/50">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="border-t border-border/50 py-24 bg-accent/[0.02]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Development Phases
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Each phase builds upon the last, creating a comprehensive
                platform that serves individual users, communities, and
                enterprises.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            <div className="space-y-20">
              {phases.map((phase, phaseIdx) => {
                const cfg = phaseConfig[phase.status];
                const Icon = cfg.icon;
                const isFirst = phaseIdx === 0;
                const isLast = phaseIdx === phases.length - 1;

                return (
                  <ScrollReveal key={phase.phase} delay={phaseIdx * 40}>
                    <div className="relative group">
                      {/* Top connector segment */}
                      {!isFirst && (
                        <div
                          className="absolute left-[20px] md:left-[28px] w-px bg-gradient-to-b from-border to-border/60 z-[1]"
                          style={{ top: "-80px", height: "80px" }}
                        />
                      )}

                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        {/* Timeline node */}
                        <div className="flex relative z-10 shrink-0">
                          <div
                            className={cn(
                              "flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-xl md:rounded-2xl text-lg font-bold transition-all duration-300 group-hover:scale-105",
                              cfg.iconBg,
                            )}
                          >
                            {phase.status === "in-progress" ? (
                              <Icon className="h-6 w-6 animate-spin" />
                            ) : (
                              <Icon className="h-6 w-6" />
                            )}
                          </div>
                        </div>

                        {/* Phase content */}
                        <div className="flex-1 min-w-0 ml-[52px] md:ml-0">
                          {/* Phase header */}
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                              {phase.title}
                            </h3>
                            <Badge variant={cfg.badge}>{cfg.label}</Badge>
                          </div>

                          <div className="flex items-center gap-2 text-xs text-muted-foreground/60 mb-4">
                            <Clock className="h-3 w-3" />
                            <span>{phase.milestone}</span>
                          </div>

                          {/* Overview */}
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                            {phase.overview}
                          </p>

                          {/* Objectives */}
                          <Card className="p-5 sm:p-6 border-border/50 hover:border-border hover:shadow-sm transition-all duration-200 mb-6">
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground/60 mb-4">
                              Key Objectives
                            </h4>
                            <ul className="space-y-3">
                              {phase.objectives.map((objective, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3 text-sm"
                                >
                                  <span
                                    className={cn(
                                      "mt-1.5 h-2 w-2 shrink-0 rounded-full",
                                      cfg.indicator,
                                    )}
                                  />
                                  <span className="text-muted-foreground leading-relaxed">
                                    {objective}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </Card>

                          {/* Categories */}
                          <div className="space-y-4 mb-6">
                            {phase.categories.map((category) => {
                              const CatIcon = category.icon;
                              return (
                                <Card
                                  key={category.label}
                                  className="p-5 sm:p-6 border-border/50 hover:border-border hover:shadow-sm transition-all duration-200"
                                >
                                  <div className="flex items-center gap-3 mb-4">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/50">
                                      <CatIcon
                                        className={cn(
                                          "h-4 w-4",
                                          category.color,
                                        )}
                                      />
                                    </div>
                                    <h4 className="text-sm font-semibold tracking-tight">
                                      {category.label}
                                    </h4>
                                  </div>
                                  <ul className="space-y-2.5">
                                    {category.items.map((item, i) => (
                                      <li
                                        key={i}
                                        className="flex items-start gap-3 text-sm text-muted-foreground"
                                      >
                                        <span
                                          className={cn(
                                            "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
                                            cfg.indicator,
                                          )}
                                        />
                                        <span className="leading-relaxed">
                                          {item}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                </Card>
                              );
                            })}
                          </div>

                          {/* Expected impact */}
                          <Card className="p-5 sm:p-6 border-border/50 bg-accent/[0.02]">
                            <div className="flex items-start gap-3">
                              <Zap className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" />
                              <div>
                                <h4 className="text-sm font-semibold tracking-tight mb-2">
                                  Expected Impact
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {phase.impact}
                                </p>
                              </div>
                            </div>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Release Lifecycle ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Release Lifecycle
              </h2>
              <p className="text-muted-foreground">
                How a feature goes from idea to production.
              </p>
            </div>
          </ScrollReveal>
          <div className="mx-auto max-w-4xl space-y-8">
            {releaseLifecycle.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.step} delay={i * 80}>
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div
                        className={cn(
                          "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-accent/50",
                        )}
                      >
                        <Icon className={cn("h-5 w-5", step.color)} />
                      </div>
                      {i < releaseLifecycle.length - 1 && (
                        <div className="w-px flex-1 bg-border/50 mt-3" />
                      )}
                    </div>
                    <div className="pb-8">
                      <span className="text-xs font-medium text-muted-foreground/70 bg-accent/50 px-2.5 py-1 rounded-full">
                        Step {i + 1}
                      </span>
                      <h3 className="text-lg font-bold tracking-tight mt-3 mb-2">
                        {step.step}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Community Involvement ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Community Involvement
              </h2>
              <p className="text-muted-foreground">
                Your voice shapes the future of SP NET GRAM.
              </p>
            </div>
          </ScrollReveal>
          <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-2">
            {communityWays.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 80}>
                  <Card className="p-6 border-border/50 hover:border-border hover:shadow-sm transition-all duration-200 h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/50">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold tracking-tight mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          {item.description}
                        </p>
                        <a
                          href={item.href}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                        >
                          {item.linkLabel}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Development Statistics ── */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Development Statistics
              </h2>
              <p className="text-muted-foreground">
                A snapshot of the roadmap at a glance.
              </p>
            </div>
          </ScrollReveal>
          <div className="mx-auto max-w-4xl grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-5">
            {developmentStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <ScrollReveal key={stat.label} delay={i * 60}>
                  <Card className="p-5 border-border/50 hover:border-border hover:shadow-sm transition-all duration-200 text-center">
                    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/50">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold tracking-tight mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Roadmap Summary ── */}
      <section className="border-t border-border/50 bg-accent/[0.02] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Roadmap Summary
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Key principles that guide our development approach and how we
                think about building SP NET GRAM.
              </p>
            </div>
          </ScrollReveal>
          <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {summaryItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 60}>
                  <Card className="p-6 border-border/50 hover:border-border hover:shadow-sm transition-all duration-200 h-full">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/50">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        className="border-t border-border/50 py-24"
        id="faq"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Roadmap FAQ
              </h2>
              <p className="text-muted-foreground">
                Common questions about our development roadmap, priorities, and
                release process.
              </p>
            </div>
          </ScrollReveal>
          <div className="mx-auto max-w-3xl space-y-6">
            {faqItems.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <Card className="p-6 border-border/50 hover:border-border transition-all duration-200">
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

      {/* ── Related Pages ── */}
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Related Pages
              </h2>
              <p className="text-muted-foreground">
                Explore more about SP NET GRAM&apos;s development.
              </p>
            </div>
          </ScrollReveal>
          <div className="mx-auto max-w-4xl grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPages.map((page, i) => {
              const Icon = page.icon;
              return (
                <ScrollReveal key={page.title} delay={i * 60}>
                  <a href={page.href} className="block h-full">
                    <Card className="p-5 border-border/50 hover:border-border hover:shadow-sm transition-all duration-200 h-full">
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/50">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="font-semibold tracking-tight mb-1">
                            {page.title}
                          </h3>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {page.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </a>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-border/50 py-16 sm:py-24 lg:py-32">
        <ScrollReveal>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl border border-border/30 bg-card/30 p-6 sm:p-16 text-center card-depth">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3390ec]/5 via-amber-500/[0.02] to-transparent" />
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#3390ec]/[0.04] blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-amber-500/[0.03] blur-3xl" />
              <div className="relative">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 shadow-lg shadow-amber-500/20">
                  <Rocket className="h-7 w-7 text-black" />
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight leading-[1.1]">
                  Be part of what we are building
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground/70 leading-relaxed">
                  Join the beta program to shape the future of SP NET GRAM.
                  Your feedback directly influences what we build and how we
                  build it.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="/beta"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all shine"
                  >
                    <Rocket className="h-4 w-4" />
                    Join the Beta Program
                  </a>
                  <a
                    href="/feature-requests"
                    className="inline-flex items-center gap-2 rounded-xl border border-border/50 bg-background/50 px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-border transition-all"
                  >
                    Share Feature Ideas
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="/changelog"
                    className="inline-flex items-center gap-2 rounded-xl border border-border/50 bg-background/50 px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-border transition-all"
                  >
                    View Changelog
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
