import type { Metadata } from "next";
import { Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "SP NET GRAM Terms of Service — the terms governing your use of the SP NET GRAM platform.",
};

export default function TermsPage() {
  return (
    <>
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 text-xs font-medium tracking-wide uppercase">
              <Scale className="h-3.5 w-3.5 text-foreground" />
              <span className="text-muted-foreground">Legal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Terms of Service
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Last updated: June 2026
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using SP NET GRAM, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">2. Description of Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                SP NET GRAM is an independent third-party Telegram client that provides enhanced features, premium services, organization tools, and ecosystem capabilities built on Telegram's infrastructure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">3. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-muted-foreground leading-relaxed">
                <li>Provide accurate information when creating an account</li>
                <li>Maintain the security of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use the service for any unlawful purpose</li>
                <li>Not attempt to disrupt or compromise the platform</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                SP NET GRAM and its original content, features, and functionality are owned by SP NET INC. and are protected by applicable intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">5. Third-Party Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                SP NET GRAM is not affiliated with, endorsed by, sponsored by, or operated by Telegram. Telegram is a trademark of Telegram Group Inc. All Telegram-related trademarks are the property of their respective owners.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                SP NET GRAM is provided "as is" without any warranty. We shall not be liable for any damages arising from your use of the platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">7. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of material changes via email or platform notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">8. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us at support@spnetgram.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
