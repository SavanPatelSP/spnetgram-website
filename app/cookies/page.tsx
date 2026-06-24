import type { Metadata } from "next";
import { Cookie } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "SP NET GRAM Cookie Policy — how we use cookies and similar tracking technologies.",
};

export default function CookiesPage() {
  return (
    <>
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 text-xs font-medium tracking-wide uppercase">
              <Cookie className="h-3.5 w-3.5 text-foreground" />
              <span className="text-muted-foreground">Legal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Cookie Policy
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
              <h2 className="text-2xl font-bold tracking-tight mb-4">1. What Are Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files stored on your device when you visit a website. They help websites function properly and provide information to site owners.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">2. How We Use Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                SP NET GRAM uses minimal cookies strictly for essential functionality:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-muted-foreground leading-relaxed">
                <li><strong className="text-foreground">Essential Cookies:</strong> Required for basic site functionality and security.</li>
                <li><strong className="text-foreground">Preference Cookies:</strong> Remember your preferences and settings.</li>
                <li><strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors interact with our website (anonymized).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">3. Managing Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                You can control and manage cookies through your browser settings. Disabling certain cookies may affect the functionality of our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">4. Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not use third-party advertising cookies. Any third-party services we use (such as hosting) may use their own essential cookies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">5. Updates</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">6. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about our Cookie Policy, please contact us at support@spnetgram.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
