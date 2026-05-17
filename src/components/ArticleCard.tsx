import { Link } from 'react-router-dom';
import type { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const formattedDate = new Date(article.createdAt).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <Link
      to={`/artigos/${article.id}`}
      className={`block bg-bg-card rounded-lg overflow-hidden group transition-all duration-300 hover:bg-bg-card-hover ${
        featured ? 'border border-accent' : 'border border-border-default'
      }`}
    >
      {article.bannerUrl && (
        <div className="aspect-video overflow-hidden">
          <img
            src={article.bannerUrl}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      {!article.bannerUrl && (
        <div className="aspect-video bg-gradient-to-br from-pink-400 via-purple-400 to-orange-300 flex items-center justify-center">
          <span className="text-4xl font-bold text-white/30">&lt;/&gt;</span>
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
            {article.tag}
          </span>
          <span className="text-[11px] text-text-secondary">
            📅 {formattedDate}
          </span>
        </div>
        <h3
          className={`font-bold text-base leading-snug mb-2 line-clamp-2 ${
            featured ? 'text-accent' : 'text-white'
          } group-hover:text-accent transition-colors`}
        >
          {article.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed line-clamp-3 mb-4">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-text-secondary">
          <span className="font-medium">{article.author.name}</span>
          <div className="flex items-center gap-3">
            <span>🕐 {article.readTime}min</span>
            <span>👁 {article.views}</span>
            <span>💬 {article.comments}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
