import type { Metadata } from "next";
import { CareerSection } from "@/components/career-section";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join SP NET GRAM and help build the future of Telegram-enhanced communication. Explore career opportunities and learn about our culture.",
};

export default function CareersPage() {
  return (
    <>
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Careers
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Help us build the future of enhanced communication on Telegram.
              At SP NET GRAM, we are creating something special.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CareerSection />
        </div>
      </section>

      <CTASection
        title="Stay connected"
        description="Follow us for updates on future career opportunities."
        primaryLabel="Join Beta"
        primaryHref="/beta"
      />
    </>
  );
}
