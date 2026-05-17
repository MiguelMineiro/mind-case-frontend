import { useEffect, useState, useCallback } from 'react';
import { ArticleCard } from '../components/ArticleCard';
import { ArticleCardSkeleton } from '../components/Skeleton';
import { articleService } from '../services/articleService';
import type { Article } from '../types';

const TAGS = ['Todas', 'IA', 'Desenvolvimento web', 'DevOps', 'Mobile', 'Backend'];

export function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState('Todas');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 12;

  const loadArticles = useCallback(async () => {
    setLoading(true);
    try {
      const tag = activeTag === 'Todas' ? undefined : activeTag;
      const data = await articleService.getAll(page, limit, tag, search || undefined);
      setArticles(data.data);
      setTotal(data.total);
    } catch {
      setArticles([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  }, [page, activeTag, search]);

  useEffect(() => {
    loadArticles();
  }, [loadArticles]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    loadArticles();
  };

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Artigos</h1>
          <p className="text-text-secondary text-sm">
            Explore todos os artigos da comunidade
          </p>
        </div>

        <form onSubmit={handleSearch} className="flex gap-3 mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar artigos..."
            className="flex-1 px-4 py-3 bg-bg-card border border-border-default rounded-lg text-white placeholder-text-secondary text-sm focus:outline-none focus:border-accent transition-colors"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-accent text-black font-semibold rounded-lg text-sm hover:bg-cyan-400 transition-colors"
          >
            Buscar
          </button>
        </form>

        <div className="flex flex-wrap gap-2 mb-8">
          {TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => { setActiveTag(tag); setPage(1); }}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors ${
                activeTag === tag
                  ? 'bg-accent text-black'
                  : 'bg-bg-card text-text-secondary border border-border-default hover:border-accent'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <ArticleCardSkeleton key={i} />
            ))}
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-text-secondary">Nenhum artigo encontrado</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-12">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-4 py-2 bg-bg-card border border-border-default rounded-lg text-sm text-text-secondary hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Anterior
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      p === page
                        ? 'bg-accent text-black'
                        : 'bg-bg-card border border-border-default text-text-secondary hover:text-white'
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="px-4 py-2 bg-bg-card border border-border-default rounded-lg text-sm text-text-secondary hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Próximo
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
