import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { NewsroomArticle } from "@/types";

interface NewsroomGridProps {
  articles: NewsroomArticle[];
}

export function NewsroomGrid({ articles }: NewsroomGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <Link key={article.slug} href={`/newsroom#${article.slug}`}>
          <Card className="group h-full border-border/50 p-6 transition-all duration-200 hover:border-border hover:shadow-sm">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <Badge variant="outline">{article.category}</Badge>
              </div>
              <h3 className="font-semibold tracking-tight group-hover:text-foreground transition-colors duration-200">
                {article.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(article.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground/50 transition-all duration-200 group-hover:text-foreground group-hover:translate-x-0.5" />
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
