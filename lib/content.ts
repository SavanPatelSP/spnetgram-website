import type {
  BlogPost,
  NewsroomArticle,
  RoadmapItem,
  RoadmapPhase,
  DevelopmentPhase,
  ChangelogEntry,
  FAQItem,
  StatusMetric,
  PlatformFeature,
} from "@/types";

export function getBlogPosts(): BlogPost[] {
  return [
    {
      title: "Introducing SP NET GRAM: A New Way to Experience Telegram",
      slug: "introducing-spnetgram",
      excerpt:
        "SP NET GRAM reimagines the Telegram experience with enhanced features, premium services, and powerful organization tools for communities and enterprises.",
      author: "Savan Patel",
      date: "2026-06-15",
      category: "Announcements",
      readTime: "5 min read",
    },
    {
      title: "Understanding SP NET GRAM Coins & Gems",
      slug: "coins-and-gems",
      excerpt:
        "A deep dive into SP NET GRAM digital economy — how Coins and Gems power premium features, memberships, and ecosystem services.",
      author: "Savan Patel",
      date: "2026-06-10",
      category: "Product Updates",
      readTime: "7 min read",
    },
    {
      title: "Building the SP NET GRAM Administrative Platform",
      slug: "admin-platform",
      excerpt:
        "How we are building a comprehensive administrative infrastructure for organizations, moderation, and support systems.",
      author: "Savan Patel",
      date: "2026-06-05",
      category: "Development Updates",
      readTime: "8 min read",
    },
    {
      title: "The Future of Telegram Clients: SP NET GRAM Vision",
      slug: "future-of-telegram-clients",
      excerpt:
        "From enhanced messaging to premium memberships and ecosystem expansion, here is what we are building on top of Telegram.",
      author: "Savan Patel",
      date: "2026-05-28",
      category: "Announcements",
      readTime: "6 min read",
    },
  ];
}

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
        "You can reach us through our support channels via email at support@spnetgram.com. Premium subscribers will have access to priority support with faster response times.",
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
