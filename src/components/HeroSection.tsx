import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center px-4 pt-20 pb-16 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
        <span className="text-white">Explore o Futuro da</span>
        <br />
        <span className="text-accent">Tecnologia</span>
      </h1>
      <p className="text-text-secondary text-sm md:text-base max-w-[480px] mx-auto mb-10 leading-relaxed">
        Artigos sobre IA, desenvolvimento, DevOps e as últimas tendências tecnológicas
      </p>
      <div className="flex flex-col items-center gap-4 w-full max-w-[320px]">
        <Link
          to="/artigos"
          className="w-full py-3 px-8 bg-accent text-black font-semibold rounded-lg text-center hover:bg-cyan-400 transition-colors"
        >
          Explorar Artigos
        </Link>
        <Link
          to="/cadastro"
          className="w-full py-3 px-8 border border-white text-white font-semibold rounded-lg text-center hover:bg-white/10 transition-colors"
        >
          Começar a Escrever
        </Link>
      </div>
    </section>
  );
}
