import { Link } from "react-router-dom";
import ArticleCard from "@/components/ArticleCard";
import NewsletterCard from "@/components/NewsletterCard";
import SectionHeading from "@/components/SectionHeading";
import type { Article } from "@/types/article";

const featured: Article[] = [
  {
    id: "f-1",
    category: "Desenvolvimento web",
    publishedAt: "4 out 2025",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam in augue ligula. Donec sed eros vel lacus condimentum sollicitudin...",
    authorName: "John Doe",
    readMinutes: 6,
    views: 122,
    likes: 1,
    thumbnailVariant: "rose",
  },
  {
    id: "f-2",
    category: "Desenvolvimento web",
    publishedAt: "4 out 2025",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam in augue ligula. Donec sed eros vel lacus condimentum sollicitudin...",
    authorName: "John Doe",
    readMinutes: 6,
    views: 122,
    likes: 1,
    thumbnailVariant: "violet",
  },
  {
    id: "f-3",
    category: "Desenvolvimento web",
    publishedAt: "4 out 2025",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam in augue ligula. Donec sed eros vel lacus condimentum sollicitudin...",
    authorName: "John Doe",
    readMinutes: 6,
    views: 122,
    likes: 1,
    thumbnailVariant: "sky",
  },
  {
    id: "f-4",
    category: "Desenvolvimento web",
    publishedAt: "4 out 2025",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam in augue ligula. Donec sed eros vel lacus condimentum sollicitudin...",
    authorName: "John Doe",
    readMinutes: 6,
    views: 122,
    likes: 1,
    thumbnailVariant: "mint",
  },
];

const recent: Article[] = [
  {
    id: "r-1",
    category: "Desenvolvimento web",
    publishedAt: "4 out 2025",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam in augue ligula. Donec sed eros vel lacus condimentum sollicitudin...",
    authorName: "John Doe",
    readMinutes: 6,
    views: 122,
    likes: 1,
  },
  {
    id: "r-2",
    category: "Desenvolvimento web",
    publishedAt: "4 out 2025",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam in augue ligula. Donec sed eros vel lacus condimentum sollicitudin...",
    authorName: "John Doe",
    readMinutes: 6,
    views: 122,
    likes: 1,
  },
  {
    id: "r-3",
    category: "Desenvolvimento web",
    publishedAt: "4 out 2025",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam in augue ligula. Donec sed eros vel lacus condimentum sollicitudin...",
    authorName: "John Doe",
    readMinutes: 6,
    views: 122,
    likes: 1,
  },
  {
    id: "r-4",
    category: "Desenvolvimento web",
    publishedAt: "4 out 2025",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam in augue ligula. Donec sed eros vel lacus condimentum sollicitudin...",
    authorName: "John Doe",
    readMinutes: 6,
    views: 122,
    likes: 1,
  },
];

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl py-20 text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Explore o Futuro da <span className="text-[#00C1D5]">Tecnologia</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-white/55">
            Artigos sobre IA, desenvolvimento,
            <br />
            DevOps e as últimas tendências tecnológicas
          </p>

          <div className="mt-10 flex flex-col items-center gap-3">
            <Link
              to="/artigos"
              className="inline-flex h-11 w-80 max-w-full items-center justify-center rounded-md bg-[#00C1D5] text-sm font-semibold text-black transition hover:bg-[#21D4E7]"
            >
              Explorar Artigos
            </Link>
            <Link
              to="/cadastrar"
              className="inline-flex h-11 w-80 max-w-full items-center justify-center rounded-md border border-white/10 bg-black/20 text-sm font-semibold text-white/70 transition hover:border-white/20 hover:bg-black/30 hover:text-white"
            >
              Começar a Escrever
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <SectionHeading
          title="Artigos em Destaque"
          subtitle="Os melhores conteúdos selecionados para você"
          actionLabel="Ver todos"
          actionTo="/artigos"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map(article => (
            <ArticleCard key={article.id} article={article} variant="featured" to={`/artigos/${article.id}`} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <SectionHeading title="Artigos Recentes" subtitle="Conteúdo recente da comunidade" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recent.map(article => (
            <ArticleCard key={article.id} article={article} variant="compact" to={`/artigos/${article.id}`} />
          ))}
        </div>
      </section>

      <NewsletterCard />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-xl font-semibold tracking-tight">Compartilhe Seu Conhecimento</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/55">
            Junte-se à nossa comunidade de escritores e compartilhe suas experiências e conhecimentos em tecnologia
          </p>
          <div className="mt-7">
            <Link
              to="/cadastrar"
              className="inline-flex h-11 items-center justify-center rounded-md bg-[#00C1D5] px-6 text-sm font-semibold text-black transition hover:bg-[#21D4E7]"
            >
              Criar Conta Gratuita
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
