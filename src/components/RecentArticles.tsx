import { ArticleCardCompact } from './ArticleCardCompact';
import type { Article } from '../types';

interface RecentArticlesProps {
  articles: Article[];
}

export function RecentArticles({ articles }: RecentArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Artigos Recentes
          </h2>
          <p className="text-text-secondary text-sm mt-1">
            Conteúdo recente da comunidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(0, 3).map((article) => (
            <ArticleCardCompact
              key={article.id}
              article={article}
              featured={article.id === articles[1]?.id || article.id === articles[3]?.id}
            />
          ))}
        </div>

        {articles.length > 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {articles.slice(3, 4).map((article) => (
              <ArticleCardCompact
                key={article.id}
                article={article}
                featured
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
