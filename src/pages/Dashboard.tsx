import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Spinner } from '../components/Spinner';
import { articleService } from '../services/articleService';
import { useAuth } from '../contexts/AuthContext';
import type { Article } from '../types';

export function Dashboard() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    async function load() {
      try {
        const data = await articleService.getMyArticles();
        setArticles(Array.isArray(data) ? data : []);
      } catch {
        setArticles([]);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir este artigo?')) return;
    try {
      await articleService.delete(id);
      setArticles((prev) => prev.filter((a) => a.id !== id));
    } catch {
      alert('Erro ao excluir artigo');
    }
  };

  if (loading) return <Spinner />;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">Meus Artigos</h1>
            <p className="text-text-secondary text-sm">
              Bem-vindo, {user?.name}
            </p>
          </div>
          <Link
            to="/artigos/novo"
            className="px-6 py-3 bg-accent text-black font-semibold rounded-lg text-sm hover:bg-cyan-400 transition-colors"
          >
            + Novo Artigo
          </Link>
        </div>

        {articles.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-text-secondary mb-4">Você ainda não escreveu nenhum artigo</p>
            <Link
              to="/artigos/novo"
              className="px-6 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-cyan-400 transition-colors"
            >
              Criar Primeiro Artigo
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-bg-card border border-border-default rounded-lg p-5 flex items-center justify-between gap-4"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                      {article.tag}
                    </span>
                    <span className="text-[11px] text-text-secondary">
                      📅 {new Date(article.createdAt).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold truncate">{article.title}</h3>
                  <p className="text-text-secondary text-sm truncate mt-1">{article.excerpt}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => navigate(`/artigos/${article.id}`)}
                    className="px-4 py-2 text-sm text-text-secondary border border-border-default rounded-lg hover:text-white hover:border-accent transition-colors"
                  >
                    Ver
                  </button>
                  <button
                    onClick={() => navigate(`/artigos/${article.id}/editar`)}
                    className="px-4 py-2 text-sm bg-accent text-black font-semibold rounded-lg hover:bg-cyan-400 transition-colors"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(article.id)}
                    className="px-4 py-2 text-sm border border-red-500/50 text-red-400 rounded-lg hover:bg-red-500/10 transition-colors"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
