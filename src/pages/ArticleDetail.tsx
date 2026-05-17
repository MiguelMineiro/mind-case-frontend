import { Link, useParams } from "react-router-dom";

export default function ArticleDetail() {
  const { slug } = useParams();

  return (
    <div className="mx-auto max-w-3xl px-6">
      <Link to="/artigos" className="text-sm font-medium text-[#00C1D5] hover:underline">
        ← Voltar
      </Link>

      <header className="mt-8">
        <p className="text-xs font-medium tracking-wide text-white/50">Desenvolvimento web • 4 out 2025</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight">
          {slug ? slug.split("-").join(" ") : "Artigo"}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-white/60">
          Página de detalhe em modo placeholder para manter foco no layout fiel da home. Quando você quiser, evoluímos
          para markdown, comentários e integrações.
        </p>
      </header>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-white/70">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam in augue ligula. Donec sed eros vel lacus
          condimentum sollicitudin. Nulla facilisi.
        </p>
        <p className="mt-4">
          Aliquam erat volutpat. Quisque quis gravida mauris. Integer vel justo quis purus posuere dignissim.
        </p>
      </div>
    </div>
  );
}
