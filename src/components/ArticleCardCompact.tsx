import { Link } from 'react-router-dom';
import type { Article } from '../types';

interface ArticleCardCompactProps {
  article: Article;
  featured?: boolean;
}

export function ArticleCardCompact({ article, featured = false }: ArticleCardCompactProps) {
  const formattedDate = new Date(article.createdAt).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'short',
  });

  return (
    <Link
      to={`/artigos/${article.id}`}
      className={`block bg-bg-card rounded-lg p-5 group transition-all duration-300 hover:bg-bg-card-hover ${
        featured ? 'border border-accent' : 'border border-border-default'
      }`}
    >
      <span className="text-[11px] font-semibold uppercase tracking-wider text-accent mb-3 block">
        {article.tag}
      </span>
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
        <span>📅 {formattedDate}</span>
      </div>
    </Link>
  );
}
