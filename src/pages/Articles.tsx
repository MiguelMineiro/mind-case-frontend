import { Link } from "react-router-dom";

export default function Articles() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">Artigos</h1>
        <p className="mt-2 text-sm text-white/60">Listagem em construção. A home já reflete o layout do Figma.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Link
            to={`/artigos/exemplo-${i + 1}`}
            key={i}
            className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-[#00C1D5]/40 hover:bg-white/[0.07]"
          >
            <p className="text-xs font-medium tracking-wide text-white/50">Desenvolvimento web</p>
            <p className="mt-2 text-lg font-semibold leading-snug text-white group-hover:text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/55">
              Conteúdo de exemplo para compor a UI. Integração real de dados pode entrar em uma próxima etapa.
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
