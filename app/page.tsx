import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";

import { Hero } from "@/components/hero";
import { TrustedBy } from "@/components/trusted-by";
import { ProductCards } from "@/components/product-cards";

const ScreenshotShowcase = dynamic(
  () => import("@/components/screenshot-showcase").then((m) => m.ScreenshotShowcase),
);
const AISection = dynamic(
  () => import("@/components/ai-section").then((m) => m.AISection),
);
const FeatureBlocks = dynamic(
  () => import("@/components/feature-blocks").then((m) => m.FeatureBlocks),
);
const CommunitiesSection = dynamic(
  () => import("@/components/communities-section").then((m) => m.CommunitiesSection),
);
const BusinessCreatorSection = dynamic(
  () => import("@/components/business-creator").then((m) => m.BusinessCreatorSection),
);
const CrossPlatformSection = dynamic(
  () => import("@/components/cross-platform").then((m) => m.CrossPlatformSection),
);
const TechnologySection = dynamic(
  () => import("@/components/technology-section").then((m) => m.TechnologySection),
);
const PremiumSection = dynamic(
  () => import("@/components/premium-section").then((m) => m.PremiumSection),
);
const TestimonialsSection = dynamic(
  () => import("@/components/testimonials").then((m) => m.TestimonialsSection),
);
const StatisticsSection = dynamic(
  () => import("@/components/statistics-section").then((m) => m.StatisticsSection),
);
const RoadmapSection = dynamic(
  () => import("@/components/roadmap-section").then((m) => m.RoadmapSection),
);
const FAQSection = dynamic(
  () => import("@/components/faq-section").then((m) => m.FAQSection),
);
const DownloadSection = dynamic(
  () => import("@/components/download-section").then((m) => m.DownloadSection),
);

export const metadata: Metadata = {
  title: "SP NET GRAM — The Future of Messaging",
  description:
    "Experience the next generation of messaging with SP NET GRAM. AI-powered, privacy-first, and beautifully designed.",
};

function SectionFallback() {
  return <div className="h-24" />;
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ProductCards />
      <Suspense fallback={<SectionFallback />}>
        <ScreenshotShowcase />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <AISection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FeatureBlocks />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CommunitiesSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <BusinessCreatorSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CrossPlatformSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <TechnologySection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <PremiumSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <StatisticsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <RoadmapSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <DownloadSection />
      </Suspense>
    </>
  );
}
