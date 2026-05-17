import { useState, useEffect } from 'react';
import { articleService } from '../services/articleService';
import type { Article } from '../types';

export function useArticles(page = 1, limit = 12, tag?: string, search?: string) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await articleService.getAll(page, limit, tag, search);
        if (!cancelled) {
          setArticles(data.data);
          setTotal(data.total);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Erro ao carregar artigos');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, [page, limit, tag, search]);

  return { articles, total, loading, error };
}
