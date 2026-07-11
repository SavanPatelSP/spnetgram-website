import type { Metadata } from "next";

import { Hero } from "@/components/hero";
import { TrustedBy } from "@/components/trusted-by";
import { ProductCards } from "@/components/product-cards";
import { AISection } from "@/components/ai-section";
import { FeatureBlocks } from "@/components/feature-blocks";
import { CommunitiesSection } from "@/components/communities-section";
import { BusinessCreatorSection } from "@/components/business-creator";
import { CrossPlatformSection } from "@/components/cross-platform";
import { TechnologySection } from "@/components/technology-section";
import { PremiumSection } from "@/components/premium-section";
import { TestimonialsSection } from "@/components/testimonials";
import { StatisticsSection } from "@/components/statistics-section";
import { RoadmapSection } from "@/components/roadmap-section";
import { FAQSection } from "@/components/faq-section";
import { DownloadSection } from "@/components/download-section";
import { ScreenshotShowcase } from "@/components/screenshot-showcase";
export const metadata: Metadata = {
  title: "SP NET GRAM — The Future of Messaging",
  description:
    "Experience the next generation of messaging with SP NET GRAM. AI-powered, privacy-first, and beautifully designed.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ProductCards />
      <ScreenshotShowcase />
      <AISection />
      <FeatureBlocks />
      <CommunitiesSection />
      <BusinessCreatorSection />
      <CrossPlatformSection />
      <TechnologySection />
      <PremiumSection />
      <TestimonialsSection />
      <StatisticsSection />
      <RoadmapSection />
      <FAQSection />
      <DownloadSection />
    </>
  );
}
