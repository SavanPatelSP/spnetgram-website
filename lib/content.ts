/* ═══════════════════════════════════════════════════════════════
   ⚠ DEPRECATED — PHASE H
   This file is deprecated. All data is now served by SP NET Platform.
   Every dynamic section consumes Platform endpoints via lib/api/*.ts.
   The route handlers in app/api/public/* that import from this file
   are OBSOLETE — they are bypassed by the Next.js rewrite in next.config.ts
   which proxies all /api/public/* requests directly to the Platform.
   Keep this file for reference only. Remove in Phase I.
   ═══════════════════════════════════════════════════════════════ */

import type {
  NewsroomArticle,
  RoadmapItem,
  RoadmapPhase,
  DevelopmentPhase,
  ChangelogEntry,
  FAQItem,
  StatusMetric,
  PlatformFeature,
} from "@/types";
import type {
  PricingCategory,
  PricingPlan,
  TeamMember,
  DownloadInfo,
  Announcement,
  SiteConfig,
  Article,
  FAQItem as ApiFAQItem,
  RoadmapItem as ApiRoadmapItem,
} from "@/types/api";

export function getNewsroomArticles(): NewsroomArticle[] {
  return [
    {
      title: "SP NET GRAM Beta Program Now Open for Registration",
      slug: "beta-program-open",
      excerpt:
        "We are inviting early adopters to join the SP NET GRAM beta. Sign up today to get early access to enhanced Telegram experiences.",
      date: "2026-06-20",
      category: "Announcements",
      author: "Savan Patel",
    },
    {
      title: "Development Milestone: Premium Membership Architecture Complete",
      slug: "premium-membership-architecture",
      excerpt:
        "The architecture for SP NET GRAM Premium memberships, including tiered subscriptions and exclusive features, has been finalized.",
      date: "2026-06-18",
      category: "Development Updates",
      author: "Savan Patel",
    },
    {
      title: "Release v0.2.0: Enhanced Organization Tools and Coins System",
      slug: "release-v0-2-0",
      excerpt:
        "The latest release brings organization management tools and the initial Coins system implementation.",
      date: "2026-06-12",
      category: "Release Notes",
      author: "Savan Patel",
    },
    {
      title: "Development Log: Building SP NET GRAM Gems System",
      slug: "dev-log-gem-system",
      excerpt:
        "A technical deep dive into how we are implementing the Gems currency system for premium transactions and rewards.",
      date: "2026-06-08",
      category: "Development Updates",
      author: "Savan Patel",
    },
    {
      title: "SP NET GRAM Infrastructure Update: Scaling for Beta",
      slug: "infrastructure-scaling-beta",
      excerpt:
        "Our infrastructure team has completed the scaling architecture needed to support the upcoming public beta launch.",
      date: "2026-06-01",
      category: "Development Updates",
      author: "Savan Patel",
    },
    {
      title: "Release v0.1.0: Initial SP NET GRAM Foundation",
      slug: "release-v0-1-0",
      excerpt:
        "The first SP NET GRAM release establishes the foundation for enhanced Telegram experiences, user systems, and premium services.",
      date: "2026-05-15",
      category: "Release Notes",
      author: "Savan Patel",
    },
  ];
}

export function getRoadmapItems(): RoadmapItem[] {
  return [
    {
      title: "Project Governance",
      description: "Establish project governance and organizational framework.",
      status: "completed",
      quarter: "Phase 0",
      category: "Foundation",
    },
    {
      title: "Core Application Framework",
      description: "Foundational architecture on Telegram's ecosystem.",
      status: "completed",
      quarter: "Phase 1",
      category: "Foundation",
    },
    {
      title: "Brand Identity & Design",
      description: "Brand identity, design language, and UI system.",
      status: "completed",
      quarter: "Phase 2",
      category: "Foundation",
    },
    {
      title: "User System",
      description: "Authentication, profiles, settings, and account management.",
      status: "completed",
      quarter: "Phase 3",
      category: "Core Systems",
    },
    {
      title: "Coin System",
      description: "Digital currency for transactions and ecosystem value.",
      status: "in-progress",
      quarter: "Phase 4",
      category: "Core Systems",
    },
    {
      title: "Gems System",
      description: "Premium currency for exclusive features and transactions.",
      status: "in-progress",
      quarter: "Phase 5",
      category: "Core Systems",
    },
    {
      title: "Premium Membership",
      description: "Tiered memberships with escalating benefits and features.",
      status: "in-progress",
      quarter: "Phase 6",
      category: "Membership",
    },
    {
      title: "Premium Requests",
      description: "Request infrastructure for premium features.",
      status: "planned",
      quarter: "Phase 7",
      category: "Membership",
    },
    {
      title: "Administrative Systems",
      description: "Admin panel, moderation, analytics, licensing.",
      status: "planned",
      quarter: "Phase 8",
      category: "Infrastructure",
    },
    {
      title: "Organizations",
      description: "Enterprise orgs, teams, roles, and billing.",
      status: "planned",
      quarter: "Phase 9",
      category: "Infrastructure",
    },
    {
      title: "Support & Moderation",
      description: "Ticketing, moderation tools, and community support.",
      status: "planned",
      quarter: "Phase 10",
      category: "Infrastructure",
    },
    {
      title: "Beta Infrastructure",
      description: "Public beta infrastructure and services.",
      status: "planned",
      quarter: "Phase 11",
      category: "Platform Expansion",
    },
    {
      title: "Ecosystem Growth",
      description: "Website, admin platform, and integrations.",
      status: "planned",
      quarter: "Phase 12",
      category: "Platform Expansion",
    },
    {
      title: "Public Beta Launch",
      description: "Open SP NET GRAM to the public.",
      status: "planned",
      quarter: "Phase 13",
      category: "Global Expansion",
    },
    {
      title: "Enterprise & Global",
      description: "Enterprise solutions and global expansion.",
      status: "planned",
      quarter: "Phase 14+",
      category: "Global Expansion",
    },
  ];
}

export function getRoadmapPhases(): RoadmapPhase[] {
  return [
    {
      phase: "Foundation",
      title: "Foundation",
      status: "completed",
      items: [
        "Phase 0 — Project Governance: Governance model, guidelines, and standards.",
        "Phase 1 — Core Framework: Application architecture and Telegram integration.",
        "Phase 2 — Brand Identity: Design system, UI library, and brand assets.",
      ],
    },
    {
      phase: "Core Systems",
      title: "Core Systems",
      status: "in-progress",
      items: [
        "Phase 3 — User System: Authentication, profiles, and settings.",
        "Phase 4 — Coin System: Digital currency and transaction engine.",
        "Phase 5 — Gems System: Premium currency for exclusive features.",
      ],
    },
    {
      phase: "Membership",
      title: "Membership Systems",
      status: "in-progress",
      items: [
        "Phase 6 — Premium Membership: Tiered subscriptions and benefits.",
        "Phase 7 — Premium Requests: Request infrastructure and support.",
      ],
    },
    {
      phase: "Infrastructure",
      title: "Administrative Infrastructure",
      status: "planned",
      items: [
        "Admin Systems: Control panel, moderation, and analytics.",
        "Organizations: Enterprise orgs, teams, and role management.",
        "Support: Ticketing system and community moderation tools.",
      ],
    },
    {
      phase: "Platform Expansion",
      title: "Platform Expansion",
      status: "planned",
      items: [
        "Beta Infrastructure: Public beta services and scaling.",
        "Ecosystem Growth: Website, admin platform, and integrations.",
      ],
    },
    {
      phase: "Global Expansion",
      title: "Global Expansion",
      status: "planned",
      items: [
        "Public Beta: Open platform to the public.",
        "Enterprise Solutions: SSO, compliance, and support.",
        "Future Products: Additional ecosystem services.",
      ],
    },
  ];
}

export function getDevelopmentPhases(): DevelopmentPhase[] {
  return [
    {
      phase: "Phase 0",
      title: "Project Governance",
      status: "completed",
      description: "Establish project governance, framework, and standards.",
      items: [
        "Project charter and governance model",
        "Development workflow and CI/CD",
        "Code standards and contribution guidelines",
        "Community and communication channels",
      ],
    },
    {
      phase: "Phase 1",
      title: "Foundation",
      status: "completed",
      description: "Build the core application framework on Telegram.",
      items: [
        "Core application architecture",
        "Telegram API integration layer",
        "Authentication and session management",
        "Basic messaging interface",
      ],
    },
    {
      phase: "Phase 2",
      title: "Branding",
      status: "completed",
      description: "Develop brand identity and design system.",
      items: [
        "Brand identity and visual language",
        "UI component library and design system",
        "Website and marketing materials",
        "App icon and branding assets",
      ],
    },
    {
      phase: "Phase 3",
      title: "User System",
      status: "completed",
      description: "Comprehensive user management system.",
      items: [
        "User registration and profiles",
        "Account settings and preferences",
        "Multi-device session management",
        "User search and discovery",
      ],
    },
    {
      phase: "Phase 4",
      title: "Coin System",
      status: "in-progress",
      description: "Build SP NET GRAM Coins digital currency.",
      items: [
        "Coin wallet and transaction engine",
        "Earning mechanisms and rewards",
        "Coin-based feature unlocking",
        "Transaction history and analytics",
      ],
    },
    {
      phase: "Phase 5",
      title: "Gems System",
      status: "in-progress",
      description: "Implement Gems premium currency system.",
      items: [
        "Gem wallet and purchase flow",
        "Premium feature gating with Gems",
        "Gift and transfer system",
        "Gem analytics dashboard",
      ],
    },
    {
      phase: "Phase 6",
      title: "Premium Membership",
      status: "in-progress",
      description: "Tiered premium membership system.",
      items: [
        "Membership tier definition and pricing",
        "Subscription management and billing",
        "Premium feature access control",
        "Member portal and benefits hub",
      ],
    },
    {
      phase: "Phase 7",
      title: "Premium Requests",
      status: "planned",
      description: "Premium request and support infrastructure.",
      items: [
        "Request submission system",
        "Priority queuing and routing",
        "Request tracking and status updates",
        "Integration with support systems",
      ],
    },
    {
      phase: "Phase 8+",
      title: "Platform Expansion",
      status: "planned",
      description: "Administrative, organizational, and infrastructure systems.",
      items: [
        "Administrative control panel",
        "Organization management",
        "Support and moderation tools",
        "Infrastructure scaling and optimization",
      ],
    },
  ];
}

export function getChangelog(): ChangelogEntry[] {
  return [
    {
      version: "v0.2.0",
      date: "2026-06-12",
      type: "release",
      title: "Organization Tools and Coins System",
      description:
        "Initial release of organization management tools and Coin system foundation.",
      changes: [
        "Organization creation and management interface",
        "Role-based access controls for organizations",
        "SP NET GRAM Coins wallet implementation",
        "Coin earning through platform engagement",
        "Enhanced group management features",
        "Performance improvements across the platform",
      ],
    },
    {
      version: "v0.1.1",
      date: "2026-05-28",
      type: "update",
      title: "Bug Fixes and Performance Improvements",
      description:
        "Stability improvements and bug fixes based on internal testing feedback.",
      changes: [
        "Fixed session management edge cases",
        "Improved message sync reliability",
        "Reduced memory usage in chat lists",
        "Enhanced error handling for API requests",
        "Updated UI components for consistency",
      ],
    },
    {
      version: "v0.1.0",
      date: "2026-05-15",
      type: "release",
      title: "Initial SP NET GRAM Foundation",
      description:
        "First release establishing the foundation for enhanced Telegram experiences.",
      changes: [
        "Core application framework on Telegram infrastructure",
        "User authentication and profile management",
        "Basic messaging and group functionality",
        "Brand design system implemented",
        "Cross-platform session synchronization",
        "Initial security and encryption layers",
      ],
    },
  ];
}

export function getFAQItems(): FAQItem[] {
  return [
    {
      question: "What is SP NET GRAM?",
      answer:
        "SP NET GRAM is an independent third-party Telegram client that enhances the Telegram experience with premium features, organization tools, a digital economy (Coins and Gems), membership systems, and future ecosystem services. It is built on Telegram's messaging infrastructure.",
      category: "General",
    },
    {
      question: "Is SP NET GRAM affiliated with Telegram?",
      answer:
        "No. SP NET GRAM is an independent third-party project. We are not affiliated with, endorsed by, or operated by Telegram. Telegram trademarks belong to their respective owners.",
      category: "General",
    },
    {
      question: "When will SP NET GRAM be publicly available?",
      answer:
        "SP NET GRAM is currently in active development. Our beta program is open for registration, and we expect the public beta to launch in 2026. Sign up for the beta to get early access.",
      category: "General",
    },
    {
      question: "What are SP NET GRAM Coins and Gems?",
      answer:
        "Coins and Gems are SP NET GRAM digital currencies. Coins are earned through platform engagement and can be used for basic premium features. Gems are a premium currency for exclusive features, premium memberships, and ecosystem transactions.",
      category: "Economy",
    },
    {
      question: "What is SP NET GRAM Premium?",
      answer:
        "SP NET GRAM Premium is a tiered membership system that unlocks enhanced features, exclusive capabilities, priority support, and premium benefits. Multiple tiers are available to suit different needs.",
      category: "Premium",
    },
    {
      question: "Can organizations use SP NET GRAM?",
      answer:
        "Yes. SP NET GRAM offers organization management tools including team creation, role-based permissions, member management, administrative controls, and future enterprise features.",
      category: "Organizations",
    },
    {
      question: "How do I join the beta program?",
      answer:
        "Visit our Beta page to register for early access. Beta testers receive priority access, influence feature development, and get exclusive previews of new capabilities.",
      category: "General",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach us through our support channels via email at support.spnetgram@sp-net.in. Premium subscribers will have access to priority support with faster response times.",
      category: "Support",
    },
  ];
}

export function getStatusMetrics(): StatusMetric[] {
  return [
    {
      label: "Development Status",
      value: 72,
      description: "Core systems and feature development progressing",
      status: "success",
    },
    {
      label: "Beta Readiness",
      value: 48,
      description: "Infrastructure readiness for public beta",
      status: "warning",
    },
    {
      label: "Infrastructure Readiness",
      value: 65,
      description: "Server deployment and global availability",
      status: "warning",
    },
    {
      label: "Platform Progress",
      value: 58,
      description: "Overall completion across all phases",
      status: "warning",
    },
    {
      label: "Latest Release",
      value: 100,
      description: "v0.2.0 — Organization and Coins system",
      status: "success",
    },
  ];
}

export function getPlatformFeatures(): PlatformFeature[] {
  return [
    {
      title: "Enhanced Messaging",
      description:
        "An enhanced Telegram experience with additional features, customization, and quality-of-life improvements.",
      icon: "MessageSquare",
      status: "available",
    },
    {
      title: "Premium Memberships",
      description:
        "Tiered subscriptions with exclusive features, increased limits, and priority support.",
      icon: "Sparkles",
      status: "beta",
    },
    {
      title: "Coins System",
      description:
        "Digital currency earned through engagement for features and ecosystem participation.",
      icon: "CircleDollarSign",
      status: "beta",
    },
    {
      title: "Gems System",
      description:
        "Premium currency for exclusive transactions, features, and ecosystem services.",
      icon: "Gem",
      status: "beta",
    },
    {
      title: "Organizations",
      description:
        "Organization tools with teams, roles, permissions, and administrative controls.",
      icon: "Building2",
      status: "beta",
    },
    {
      title: "Admin Platform",
      description:
        "Administrative infrastructure for moderation, analytics, and management.",
      icon: "Shield",
      status: "coming-soon",
    },
    {
      title: "Ecosystem Expansion",
      description:
        "Future services and products on the SP NET GRAM platform.",
      icon: "Globe",
      status: "coming-soon",
    },
    {
      title: "Developer API",
      description:
        "API for custom integrations, automation, and platform extension.",
      icon: "Code",
      status: "coming-soon",
    },
  ];
}

/* ─── API-compatible adapters ─── */

export function getApiFAQItems(): ApiFAQItem[] {
  return getFAQItems().map((item, index) => ({
    id: `faq-${index + 1}`,
    question: item.question,
    answer: item.answer,
    category: item.category,
    displayOrder: index,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }));
}

export function getApiRoadmapItems(): ApiRoadmapItem[] {
  const statusMap: Record<string, string> = {
    completed: "completed",
    "in-progress": "in_progress",
    planned: "planned",
  };

  return getRoadmapItems().map((item, index) => ({
    id: `roadmap-${index + 1}`,
    title: item.title,
    description: item.description,
    status: statusMap[item.status] ?? "planned",
    progress: item.status === "completed" ? 100 : item.status === "in-progress" ? 50 : 0,
    release: item.quarter,
    displayOrder: index,
    active: true,
    category: item.category,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }));
}

export function getApiArticles(): Article[] {
  return getNewsroomArticles().map((article, index) => ({
    id: `article-${index + 1}`,
    title: article.title,
    slug: article.slug,
    content: article.excerpt,
    excerpt: article.excerpt,
    category: article.category,
    author: article.author,
    featuredImage: null,
    featured: index === 0,
    publishedAt: new Date(article.date).toISOString(),
    status: "published",
    createdAt: new Date(article.date).toISOString(),
    updatedAt: new Date(article.date).toISOString(),
  }));
}

export function getTeamMembers(): TeamMember[] {
  return [
    {
      id: "team-1",
      name: "Savan Patel",
      role: "Founder & Lead Developer",
      bio: "Savan Patel founded SP NET INC with a vision to build technology that empowers people. He leads product strategy, architecture, and engineering for the SP NET GRAM ecosystem.",
      avatarUrl: null,
      socialLinks: JSON.stringify([
        { platform: "linkedin", url: "https://linkedin.com/in/savanpatel" },
        { platform: "github", url: "https://github.com/savanpatel" },
        { platform: "email", url: "mailto:savan@sp-net.in" },
      ]),
      displayOrder: 1,
      active: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];
}

export function getDownloadInfo(): DownloadInfo[] {
  const version = "0.2.0";
  const publishedAt = "2026-06-12T00:00:00.000Z";
  return [
    {
      id: "download-stable",
      platform: "stable",
      version,
      url: "",
      releaseNotes: `SP NET GRAM v${version} — Organization and Coins system`,
      changelog: null,
      publishedAt,
      active: true,
      createdAt: publishedAt,
      updatedAt: publishedAt,
    },
    {
      id: "download-beta",
      platform: "beta",
      version: `${version}-beta`,
      url: "",
      releaseNotes: "Beta channel with early access features",
      changelog: null,
      publishedAt,
      active: true,
      createdAt: publishedAt,
      updatedAt: publishedAt,
    },
    {
      id: "download-apk",
      platform: "apk",
      version,
      url: "",
      releaseNotes: "Android APK distribution",
      changelog: null,
      publishedAt,
      active: true,
      createdAt: publishedAt,
      updatedAt: publishedAt,
    },
  ];
}

export function getAnnouncements(): Announcement[] {
  return [];
}

export function getSiteConfiguration(): SiteConfig {
  return {
    appName: "SP NET GRAM",
    tagline: "The Future of Messaging",
    description:
      "A next-generation Telegram experience with premium services, digital economy, and organization tools.",
    featureFlags: {
      waitlistEnabled: true,
      premiumEnabled: true,
      newsroomEnabled: true,
      roadmapEnabled: true,
      downloadsEnabled: true,
    },
  };
}

export function getPricingCategories(): PricingCategory[] {
  const now = new Date().toISOString();

  // Mirrored from spnet-admin/lib/premium-config.ts
  const premiumPlans = [
    {
      id: "FREE",
      name: "Free",
      description: "Getting started with basic access",
      monthly: 0,
      badge: "Free",
      recommended: false,
      displayOrder: 0,
      featuresByCategory: {
        Messaging: ["Up to 100 messages/day", "Basic messaging"],
        Storage: ["1 GB file storage", "Standard uploads (5 MB)"],
        Media: ["Basic media processing", "Standard resolution"],
        Administration: ["Basic dashboard", "Single user"],
        Support: ["Community access", "72hr response"],
        Security: ["Standard encryption"],
      },
      highlights: [
        "Basic access included",
        "Community support",
        "Standard encryption",
      ],
    },
    {
      id: "BASIC",
      name: "Basic",
      description: "Essential features for everyday use",
      monthly: 4,
      badge: "Starter",
      recommended: false,
      displayOrder: 1,
      featuresByCategory: {
        Messaging: ["Up to 500 messages/day", "Message history", "Basic messaging"],
        Storage: ["5 GB file storage", "Standard uploads (10 MB)"],
        Media: ["Basic media processing", "Standard resolution"],
        Administration: ["Enhanced dashboard", "Up to 3 users"],
        Support: ["Email support", "48hr response"],
        Security: ["Standard encryption", "Basic access control"],
      },
      highlights: [
        "Increased limits from FREE",
        "Basic access control",
        "Email support",
        "Enhanced dashboard",
        "Up to 3 users",
      ],
    },
    {
      id: "STUDENT",
      name: "Student",
      description: "Discounted premium for students",
      monthly: 6,
      badge: "Student",
      recommended: false,
      displayOrder: 2,
      featuresByCategory: {
        Messaging: ["Up to 2,000 messages/day", "Extended message history", "Priority messaging"],
        Storage: ["25 GB file storage", "Enhanced uploads (25 MB)"],
        Media: ["Standard media processing", "HD resolution"],
        Administration: ["Basic analytics", "Single user management"],
        Support: ["Priority email support", "24hr response", "Chat support"],
        Security: ["Enhanced encryption", "Basic access control"],
        "Licensing Benefits": ["Student-discounted pricing", "Education license"],
      },
      highlights: [
        "Discounted premium access",
        "Premium badge included",
        "Priority support queue",
        "Enhanced upload limits",
        "Extended storage capacity",
        "Student-friendly pricing",
      ],
    },
    {
      id: "PLUS",
      name: "Plus",
      description: "For growing teams and creators",
      monthly: 15,
      badge: "Popular",
      recommended: true,
      displayOrder: 3,
      featuresByCategory: {
        Messaging: ["Up to 1,000 messages/day", "Message history", "Priority messaging"],
        Storage: ["10 GB file storage", "Enhanced uploads (25 MB)"],
        Media: ["Standard media processing", "HD resolution"],
        Administration: ["Basic analytics dashboard", "Team management", "Single user management"],
        Support: ["Email support", "48hr response"],
        Security: ["Standard encryption", "Basic access control"],
      },
      highlights: [
        "Everything in BASIC, plus:",
        "Team management tools",
        "Basic analytics dashboard",
        "Priority messaging queue",
        "HD media processing",
        "Growing team features",
      ],
    },
    {
      id: "PRO",
      name: "Pro",
      description: "Professional toolkit for power users",
      monthly: 29,
      badge: "Professional",
      recommended: false,
      displayOrder: 4,
      featuresByCategory: {
        Messaging: ["Up to 10,000 messages/day", "Extended message history", "Priority messaging"],
        Storage: ["50 GB file storage", "Enhanced uploads (50 MB)", "Faster downloads"],
        Media: ["Advanced media processing", "HD resolution", "Batch media ops"],
        Administration: ["Advanced analytics dashboard", "Team management", "Custom branding"],
        Support: ["Priority email support", "12hr response", "Chat support"],
        Security: ["Enhanced encryption", "Advanced access control", "Audit logs"],
        "Business Tools": ["Basic API access"],
      },
      highlights: [
        "Everything in PLUS, plus:",
        "Advanced analytics & reporting",
        "Custom branding support",
        "Batch media operations",
        "Faster uploads & downloads",
        "Priority chat & email support",
      ],
    },
    {
      id: "BUSINESS",
      name: "Business",
      description: "Enterprise-ready for organizations",
      monthly: 99,
      badge: "Business",
      recommended: false,
      displayOrder: 5,
      featuresByCategory: {
        Messaging: ["Unlimited messages", "Full message history", "Priority messaging", "Bulk messaging"],
        Storage: ["250 GB file storage", "Business uploads (200 MB)", "CDN delivery"],
        Media: ["Premium media processing", "4K resolution", "Bulk media operations"],
        Administration: ["Premium analytics & reports", "Organization management", "Bulk operations", "Custom integrations"],
        Support: ["Dedicated support", "4hr response", "Phone & chat", "SLA: 99.9%"],
        Security: ["Enterprise encryption", "Advanced audit logs", "Compliance reporting", "SSO/SAML"],
        "Business Tools": ["Full API access", "Webhooks", "Custom integrations"],
        "Licensing Benefits": ["Up to 25 devices", "Team licenses", "Multi-org support"],
      },
      highlights: [
        "Everything in PRO, plus:",
        "Organization management",
        "Bulk operations at scale",
        "Dedicated support team",
        "99.9% SLA uptime guarantee",
        "SSO/SAML & compliance",
      ],
    },
    {
      id: "ENTERPRISE",
      name: "Enterprise",
      description: "Maximum power and scale",
      monthly: 299,
      badge: "Enterprise",
      recommended: false,
      displayOrder: 6,
      featuresByCategory: {
        Messaging: ["Unlimited everything", "Real-time messaging", "Priority routing", "Custom integrations"],
        Storage: ["Unlimited storage", "Unlimited uploads", "Global CDN", "Custom retention"],
        Media: ["Enterprise media suite", "8K + HDR", "AI-powered processing", "Custom pipelines"],
        Administration: ["Enterprise analytics suite", "Unlimited team scale", "White-label branding", "Priority feature access", "Custom development"],
        Support: ["24/7 dedicated support", "1hr response", "Dedicated account manager", "SLA: 99.99%"],
        Security: ["Maximum encryption", "Comprehensive audit logs", "Compliance reporting", "Dedicated security", "Custom policies"],
        "Business Tools": ["Full API access", "Advanced webhooks", "Custom integrations", "Dedicated infrastructure"],
        "Licensing Benefits": ["Unlimited devices", "Unlimited team scale", "Global licensing", "Priority allocations"],
      },
      highlights: [
        "Everything in BUSINESS, plus:",
        "Unlimited team & device scale",
        "24/7 dedicated account manager",
        "1-hour response SLA (99.99%)",
        "White-label branding",
        "AI-powered media processing",
      ],
    },
    {
      id: "EXTREME",
      name: "Extreme",
      description: "Ultra-premium for the elite",
      monthly: 499,
      badge: "Ultimate",
      recommended: false,
      displayOrder: 7,
      featuresByCategory: {
        Messaging: ["Unlimited everything", "Real-time priority routing", "Custom integration pipeline", "Private messaging channels"],
        Storage: ["Unlimited storage", "Custom retention policies", "Global edge CDN", "Dedicated storage clusters"],
        Media: ["Enterprise media suite", "8K + HDR + immersive", "AI-powered processing", "Custom development pipeline"],
        Administration: ["Enterprise analytics suite", "Unlimited team scale", "White-label branding", "Priority feature access", "Dedicated development sprints", "Executive business reviews"],
        Support: ["Concierge support", "30min response", "Dedicated account team", "SLA: 99.995%", "Direct engineering access"],
        Security: ["Maximum encryption", "Comprehensive audit logs", "Custom security policies", "Dedicated security team", "Penetration testing included"],
        "Business Tools": ["Full API access", "Custom webhook infrastructure", "Dedicated infrastructure", "Custom integrations SLA"],
        "Licensing Benefits": ["Unlimited devices & teams", "Global licensing", "Priority allocations", "Custom license terms"],
      },
      highlights: [
        "Everything in ENTERPRISE, plus:",
        "Priority infrastructure allocation",
        "Concierge onboarding & migration",
        "Custom feature development SLA",
        "Direct engineering access",
        "Early access to all new features",
      ],
    },
    {
      id: "SP_PLAN",
      name: "SP's Plan",
      description: "Exclusive flagship founder tier",
      monthly: 999,
      badge: "Founder Edition",
      recommended: false,
      displayOrder: 8,
      featuresByCategory: {
        Messaging: ["Unlimited everything", "Real-time priority routing", "Custom integration pipeline", "Private messaging channels"],
        Storage: ["Unlimited storage", "Custom retention policies", "Global edge CDN", "Dedicated storage clusters"],
        Media: ["Enterprise media suite", "8K + HDR + immersive", "AI-powered processing", "Custom development pipeline"],
        Administration: ["Enterprise analytics suite", "Unlimited team scale", "White-label branding", "Priority feature access", "Dedicated development sprints", "Executive business reviews"],
        Support: ["Concierge support", "15min response", "Dedicated account team", "SLA: 99.995%", "Direct engineering access"],
        Security: ["Maximum encryption", "Comprehensive audit logs", "Custom security policies", "Dedicated security team", "Penetration testing included"],
        "Business Tools": ["Full API access", "Custom webhook infrastructure", "Dedicated infrastructure", "Custom integrations SLA"],
        "Licensing Benefits": ["Unlimited devices & teams", "Global licensing", "Priority allocations", "Custom license terms"],
      },
      highlights: [
        "Everything in EXTREME, plus:",
        "Priority infrastructure allocation",
        "Concierge onboarding & migration",
        "Custom feature development SLA",
        "Direct engineering access",
        "Early access to all new features",
      ],
    },
  ];

  const allPremiumFeatures = Array.from(
    new Set(premiumPlans.flatMap((p) => Object.values(p.featuresByCategory).flat())),
  );

  const toPremiumPlan = (plan: (typeof premiumPlans)[number]): PricingPlan => {
    const planFeatures = Object.values(plan.featuresByCategory).flat();
    return {
      id: `plan-premium-${plan.id.toLowerCase()}`,
      categoryId: "premium",
      name: plan.name,
      description: plan.description,
      price: plan.monthly,
      currency: "$",
      billingInterval: "monthly",
      recommended: plan.recommended,
      badge: plan.badge,
      displayOrder: plan.displayOrder,
      active: true,
      features: JSON.stringify(
        allPremiumFeatures.map((label) => ({ label, included: planFeatures.includes(label) })),
      ),
      limitations: JSON.stringify([]),
      highlights: JSON.stringify(plan.highlights),
      featuresByCategory: JSON.stringify(plan.featuresByCategory),
      createdAt: now,
      updatedAt: now,
    };
  };

  // Mirrored from spnet-admin/lib/economy-pricing.ts
  const coinPackages = [
    { label: "Starter", amount: 1000, price: 9.99, description: "Entry-level coin pack for testing and light engagement" },
    { label: "Growth", amount: 5000, price: 44.99, description: "Higher-volume pack suitable for small teams" },
    { label: "Pro", amount: 10000, price: 79.99, description: "Professional-grade pack with meaningful per-coin savings" },
    { label: "Enterprise", amount: 50000, price: 349.99, description: "Maximum-volume pack with the best overall value" },
  ];

  const gemPackages = [
    { label: "Starter", amount: 10, price: 9.99, description: "Entry-level gem pack for quick engagement and small rewards" },
    { label: "Growth", amount: 50, price: 44.99, description: "Mid-volume pack with improved value per gem" },
    { label: "Pro", amount: 100, price: 79.99, description: "Premium reward pack with full purchasing power unlocks" },
    { label: "Enterprise", amount: 500, price: 349.99, description: "Enterprise-scale grant pack with maximum efficiency" },
  ];

  return [
    {
      id: "premium",
      slug: "premium",
      label: "Premium",
      description: "Tiered subscription plans from Free to SP's exclusive Founder Edition.",
      displayOrder: 1,
      active: true,
      createdAt: now,
      updatedAt: now,
      plans: premiumPlans.map(toPremiumPlan),
    },
    {
      id: "gems",
      slug: "gems",
      label: "Gems",
      description: "Premium currency for exclusive transactions, features, and ecosystem services.",
      displayOrder: 2,
      active: true,
      createdAt: now,
      updatedAt: now,
      plans: gemPackages.map((pkg, idx) => ({
        id: `plan-gems-${pkg.label.toLowerCase()}`,
        categoryId: "gems",
        name: `${pkg.amount.toLocaleString()} Gems`,
        description: pkg.description,
        price: pkg.price,
        currency: "$",
        billingInterval: "once",
        recommended: false,
        badge: null,
        displayOrder: idx + 1,
        active: true,
        features: JSON.stringify([
          { label: `${pkg.amount.toLocaleString()} Gems credited instantly`, included: true },
        ]),
        limitations: JSON.stringify([]),
        amount: pkg.amount,
        createdAt: now,
        updatedAt: now,
      })),
    },
    {
      id: "coins",
      slug: "coins",
      label: "Coins",
      description: "Digital currency earned through engagement and used for ecosystem participation.",
      displayOrder: 3,
      active: true,
      createdAt: now,
      updatedAt: now,
      plans: coinPackages.map((pkg, idx) => ({
        id: `plan-coins-${pkg.label.toLowerCase()}`,
        categoryId: "coins",
        name: `${pkg.amount.toLocaleString()} Coins`,
        description: pkg.description,
        price: pkg.price,
        currency: "$",
        billingInterval: "once",
        recommended: false,
        badge: null,
        displayOrder: idx + 1,
        active: true,
        features: JSON.stringify([
          { label: `${pkg.amount.toLocaleString()} Coins credited instantly`, included: true },
        ]),
        limitations: JSON.stringify([]),
        amount: pkg.amount,
        createdAt: now,
        updatedAt: now,
      })),
    },
  ];
}
