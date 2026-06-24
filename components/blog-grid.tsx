import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/types";

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog#${post.slug}`}>
          <Card className="group h-full border-border/50 p-6 transition-all duration-200 hover:border-border hover:shadow-sm">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <Badge variant="outline">{post.category}</Badge>
              </div>
              <h3 className="text-lg font-semibold tracking-tight group-hover:text-foreground transition-colors duration-200">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground/70">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </div>
              </div>
              <div className="mt-4 flex items-center pt-4 border-t border-border/50">
                <span className="text-sm text-muted-foreground/70">
                  {post.author}
                </span>
                <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground/50 transition-all duration-200 group-hover:text-foreground group-hover:translate-x-0.5" />
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
