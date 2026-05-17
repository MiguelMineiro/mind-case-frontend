import { Link } from 'react-router-dom';
import { ArticleCard } from './ArticleCard';
import type { Article } from '../types';

interface FeaturedArticlesProps {
  articles: Article[];
}

export function FeaturedArticles({ articles }: FeaturedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Artigos em Destaque
            </h2>
            <p className="text-text-secondary text-sm mt-1">
              Os melhores conteúdos selecionados para você
            </p>
          </div>
          <Link
            to="/artigos"
            className="text-accent text-sm font-medium hover:underline hidden sm:block"
          >
            Ver todos →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              featured={article.id === articles[1]?.id || article.id === articles[3]?.id}
            />
          ))}
        </div>

        {articles.length > 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {articles.slice(3, 4).map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                featured
              />
            ))}
          </div>
        )}

        <Link
          to="/artigos"
          className="text-accent text-sm font-medium hover:underline mt-6 block sm:hidden text-center"
        >
          Ver todos →
        </Link>
      </div>
    </section>
  );
}
