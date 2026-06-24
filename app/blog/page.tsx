import type { Metadata } from "next";
import { BlogGrid } from "@/components/blog-grid";
import { CTASection } from "@/components/cta-section";
import { getBlogPosts } from "@/lib/content";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest articles from SP NET GRAM covering product updates, development insights, and the enhanced Telegram experience.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  const categories = [...new Set(posts.map((p) => p.category))];
  const featured = posts[0];

  return (
    <>
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 text-xs font-medium tracking-wide uppercase">
              <BookOpen className="h-3.5 w-3.5 text-foreground" />
              <span className="text-muted-foreground">{posts.length} articles</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Blog
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Insights, updates, and stories from the SP NET GRAM team. Learn
              about our technology, our team, and our vision for enhanced
              Telegram experiences.
            </p>
          </div>
        </div>
      </section>

      {featured && (
        <section className="border-t border-border/50 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-accent/30 to-background p-8 sm:p-12">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/70">Featured Post</span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-3">
                  {featured.title}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-3 mt-6 text-sm text-muted-foreground/70">
                  <span>{featured.category}</span>
                  <span className="text-muted-foreground/30">&middot;</span>
                  <span>{featured.readTime}</span>
                  <span className="text-muted-foreground/30">&middot;</span>
                  <span>{featured.author}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-border/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center rounded-full border border-border/50 bg-accent/20 px-3 py-1 text-xs font-medium tracking-wide"
              >
                {cat}
              </span>
            ))}
          </div>
          <BlogGrid posts={posts} />
        </div>
      </section>

      <CTASection
        title="Stay in the loop"
        description="Subscribe to our newsletter for the latest updates and insights."
        primaryLabel="Join Beta"
        primaryHref="/beta"
      />
    </>
  );
}
