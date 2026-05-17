import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Spinner } from '../components/Spinner';
import { useAuth } from '../contexts/AuthContext';
import { articleService } from '../services/articleService';
import type { Article } from '../types';

export function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;
    async function load() {
      try {
        const data = await articleService.getById(id!);
        setArticle(data);
      } catch {
        setError('Artigo não encontrado');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  const handleDelete = async () => {
    if (!article || !confirm('Tem certeza que deseja excluir este artigo?')) return;
    try {
      await articleService.delete(article.id);
      navigate('/dashboard');
    } catch {
      alert('Erro ao excluir artigo');
    }
  };

  if (loading) return <Spinner />;

  if (error || !article) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-center">
          <p className="text-text-secondary text-lg mb-4">{error || 'Artigo não encontrado'}</p>
          <button
            onClick={() => navigate('/artigos')}
            className="px-6 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-cyan-400 transition-colors"
          >
            Voltar para Artigos
          </button>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(article.createdAt).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const isAuthor = user?.id === article.author.id;

  return (
    <article className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {article.bannerUrl && (
          <div className="aspect-video rounded-lg overflow-hidden mb-8">
            <img
              src={article.bannerUrl}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            {article.tag}
          </span>
          <span className="text-xs text-text-secondary">•</span>
          <span className="text-xs text-text-secondary">{formattedDate}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
          {article.title}
        </h1>

        <div className="flex items-center justify-between mb-8 pb-8 border-b border-border-default">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <span className="text-accent font-bold text-sm">
                {article.author.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="text-white text-sm font-medium">{article.author.name}</p>
              <p className="text-text-secondary text-xs">
                🕐 {article.readTime}min de leitura
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-text-secondary text-sm">
            <span>👁 {article.views} visualizações</span>
            <span>💬 {article.comments} comentários</span>
          </div>
        </div>

        <div className="prose prose-invert max-w-none text-text-secondary text-sm leading-relaxed whitespace-pre-wrap">
          {article.content}
        </div>

        {isAuthor && (
          <div className="flex gap-3 mt-12 pt-8 border-t border-border-default">
            <button
              onClick={() => navigate(`/artigos/${article.id}/editar`)}
              className="px-6 py-3 bg-accent text-black font-semibold rounded-lg text-sm hover:bg-cyan-400 transition-colors"
            >
              Editar Artigo
            </button>
            <button
              onClick={handleDelete}
              className="px-6 py-3 border border-red-500/50 text-red-400 font-semibold rounded-lg text-sm hover:bg-red-500/10 transition-colors"
            >
              Excluir
            </button>
          </div>
        )}
      </div>
    </article>
  );
}
