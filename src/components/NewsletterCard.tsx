import { Mail } from "lucide-react";

export default function NewsletterCard() {
  return (
    <section className="border-y border-white/5 bg-white/5">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-white/70">
            <Mail className="h-5 w-5" />
          </div>
          <h3 className="mt-5 text-xl font-semibold tracking-tight">Newsletter Semanal</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/55">
            Receba os melhores artigos de tecnologia diretamente no seu email. Sem spam, apenas conteúdo de qualidade.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <input
              type="email"
              placeholder="exemplo@email.com"
              className="h-11 w-full rounded-md border border-white/10 bg-black/30 px-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#00C1D5]/60 sm:max-w-sm"
            />
            <button
              type="button"
              className="inline-flex h-11 items-center justify-center rounded-md bg-[#00C1D5] px-5 text-sm font-semibold text-black transition hover:bg-[#21D4E7]"
            >
              Inscrever
            </button>
          </div>

          <p className="mt-4 text-xs text-white/45">Mais de 10.000 desenvolvedores já recebem nossa newsletter</p>
        </div>
      </div>
    </section>
  );
}
