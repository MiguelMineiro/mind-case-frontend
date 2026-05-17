import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Spinner } from '../components/Spinner';
import { articleService } from '../services/articleService';

const TAGS = [
  'IA',
  'Desenvolvimento web',
  'DevOps',
  'Mobile',
  'Backend',
  'Frontend',
  'Banco de dados',
];

export function ArticleForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [bannerUrl, setBannerUrl] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;
    async function load() {
      try {
        const article = await articleService.getById(id!);
        setTitle(article.title);
        setTag(article.tag);
        setBannerUrl(article.bannerUrl || '');
        setContent(article.content);
      } catch {
        setError('Erro ao carregar artigo');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!title || !tag || !content) {
      setError('Preencha todos os campos obrigatórios');
      return;
    }

    setSaving(true);
    try {
      const data = { title, tag, content, bannerUrl: bannerUrl || undefined };
      if (isEditing && id) {
        await articleService.update(id, data);
      } else {
        await articleService.create(data);
      }
      navigate('/dashboard');
    } catch {
      setError('Erro ao salvar artigo');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <Spinner />;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">
          {isEditing ? 'Editar Artigo' : 'Novo Artigo'}
        </h1>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-6">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-text-secondary mb-1">
              Título *
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 bg-bg-card border border-border-default rounded-lg text-white placeholder-text-secondary text-sm focus:outline-none focus:border-accent transition-colors"
              placeholder="Título do artigo"
              required
            />
          </div>

          <div>
            <label htmlFor="tag" className="block text-sm font-medium text-text-secondary mb-1">
              Categoria *
            </label>
            <select
              id="tag"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="w-full px-4 py-3 bg-bg-card border border-border-default rounded-lg text-white text-sm focus:outline-none focus:border-accent transition-colors"
              required
            >
              <option value="">Selecione uma categoria</option>
              {TAGS.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="bannerUrl" className="block text-sm font-medium text-text-secondary mb-1">
              URL da Imagem de Capa
            </label>
            <input
              id="bannerUrl"
              type="url"
              value={bannerUrl}
              onChange={(e) => setBannerUrl(e.target.value)}
              className="w-full px-4 py-3 bg-bg-card border border-border-default rounded-lg text-white placeholder-text-secondary text-sm focus:outline-none focus:border-accent transition-colors"
              placeholder="https://exemplo.com/imagem.jpg"
            />
            {bannerUrl && (
              <div className="mt-2 aspect-video rounded-lg overflow-hidden max-w-xs">
                <img
                  src={bannerUrl}
                  alt="Preview"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            )}
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-text-secondary mb-1">
              Conteúdo *
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={16}
              className="w-full px-4 py-3 bg-bg-card border border-border-default rounded-lg text-white placeholder-text-secondary text-sm focus:outline-none focus:border-accent transition-colors resize-y font-mono"
              placeholder="Escreva o conteúdo do artigo aqui..."
              required
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={saving}
              className="px-8 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-cyan-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? 'Salvando...' : isEditing ? 'Atualizar Artigo' : 'Publicar Artigo'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="px-8 py-3 border border-border-default text-text-secondary font-semibold rounded-lg hover:text-white hover:border-accent transition-colors"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
