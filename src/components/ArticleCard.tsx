import { Link } from "react-router-dom";
import { Clock, Eye, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Article } from "@/types/article";

type Variant = "featured" | "compact";

const thumbnailStyles: Record<NonNullable<Article["thumbnailVariant"]>, string> = {
  rose: "bg-[linear-gradient(135deg,#FFB4C4_0%,#F075A3_38%,#7CC7FF_100%)]",
  sky: "bg-[linear-gradient(135deg,#9BE7FF_0%,#3FB3FF_42%,#8A6CFF_100%)]",
  mint: "bg-[linear-gradient(135deg,#A5FFE3_0%,#2ED2A6_40%,#4C7DFF_100%)]",
  violet: "bg-[linear-gradient(135deg,#FFC6F4_0%,#B889FF_45%,#5BE8FF_100%)]",
};

export default function ArticleCard({
  article,
  variant,
  to,
}: {
  article: Article;
  variant: Variant;
  to: string;
}) {
  const isFeatured = variant === "featured";
  const thumbnailVariant = article.thumbnailVariant ?? "rose";

  return (
    <Link
      to={to}
      className={cn(
        "group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition",
        "hover:border-[#00C1D5]/40 hover:bg-white/[0.07]"
      )}
    >
      {isFeatured ? (
        <div className={cn("relative h-44 w-full", thumbnailStyles[thumbnailVariant])}>
          <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(0,0,0,0.05),rgba(0,0,0,0.45))]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,transparent_55%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.55)_100%)] opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center px-10 text-center">
            <div className="text-5xl font-black leading-none tracking-tight text-black/75">
              Lorem
              <br />
              ipsum
            </div>
          </div>
        </div>
      ) : null}

      <div className="p-5">
        <div className="flex items-center justify-between gap-3 text-xs text-white/50">
          <span className="font-medium tracking-wide">{article.category}</span>
          <span className="whitespace-nowrap">{article.publishedAt}</span>
        </div>

        <h3 className={cn("mt-3 font-semibold leading-snug tracking-tight", isFeatured ? "text-lg" : "text-base")}>
          <span className="text-white group-hover:text-white">{article.title}</span>
        </h3>

        <p
          className={cn(
            "mt-2 text-sm leading-relaxed text-white/55",
            isFeatured ? "overflow-hidden [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]" : "overflow-hidden [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]"
          )}
        >
          {article.excerpt}
        </p>

        <div className="mt-4 flex items-center justify-between text-xs text-white/50">
          <span>{article.authorName}</span>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {article.readMinutes}min
            </span>
            <span className="inline-flex items-center gap-1">
              <Eye className="h-3.5 w-3.5" />
              {article.views}
            </span>
            <span className="inline-flex items-center gap-1">
              <Heart className="h-3.5 w-3.5" />
              {article.likes}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
