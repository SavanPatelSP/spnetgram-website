import type { Metadata } from "next";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "SP NET GRAM Privacy Policy — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 text-xs font-medium tracking-wide uppercase">
              <Shield className="h-3.5 w-3.5 text-foreground" />
              <span className="text-muted-foreground">Legal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Privacy Policy
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Last updated: June 2026
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-sm sm:prose-base max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                SP NET GRAM ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                SP NET GRAM is an independent third-party Telegram client. We are not affiliated with, endorsed by, or operated by Telegram.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-muted-foreground leading-relaxed">
                <li><strong className="text-foreground">Account Information:</strong> When you register, we collect your name, email address, and Telegram username.</li>
                <li><strong className="text-foreground">Usage Data:</strong> Information about how you interact with our platform, including features used and engagement metrics.</li>
                <li><strong className="text-foreground">Device Information:</strong> Basic device information for service optimization.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the collected information for:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-muted-foreground leading-relaxed">
                <li>Providing and maintaining our services</li>
                <li>Notifying you about changes to our services</li>
                <li>Allowing you to participate in interactive features</li>
                <li>Providing customer support</li>
                <li>Gathering analysis to improve our services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">4. Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal data. However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">5. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                SP NET GRAM is built on Telegram infrastructure. Your use of Telegram's services is subject to Telegram's own Privacy Policy and Terms of Service. We do not control Telegram's data practices.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">6. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about this Privacy Policy, please contact us at support@spnetgram.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
