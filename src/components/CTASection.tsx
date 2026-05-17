import { Link } from 'react-router-dom';

export function CTASection() {
  return (
    <section className="py-16 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Compartilhe Seu Conhecimento
        </h2>
        <p className="text-text-secondary text-sm leading-relaxed max-w-md mx-auto mb-8">
          Junte-se à nossa comunidade de escritores e compartilhe suas experiências e conhecimentos em tecnologia.
        </p>
        <Link
          to="/cadastro"
          className="inline-block px-8 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-cyan-400 transition-colors"
        >
          Criar Conta Gratuita
        </Link>
      </div>
    </section>
  );
}
