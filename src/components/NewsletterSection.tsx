export function NewsletterSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-4xl mb-4">✉️</div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Newsletter Semanal
        </h2>
        <p className="text-text-secondary text-sm leading-relaxed max-w-md mx-auto mb-8">
          Receba os melhores artigos de tecnologia diretamente no seu email. Sem spam, apenas conteúdo de qualidade.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-4"
        >
          <input
            type="email"
            placeholder="exemplo@email.com"
            className="flex-1 px-4 py-3 bg-bg-card border border-border-default rounded-lg text-white placeholder-text-secondary text-sm focus:outline-none focus:border-accent transition-colors"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-accent text-black font-semibold rounded-lg text-sm hover:bg-cyan-400 transition-colors whitespace-nowrap"
          >
            Inscrever-se
          </button>
        </form>
        <p className="text-text-secondary text-xs">
          Mais de 10.000 desenvolvedores já recebem nossa newsletter
        </p>
      </div>
    </section>
  );
}
