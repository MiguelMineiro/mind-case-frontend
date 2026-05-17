import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-border-default mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono font-bold text-xl text-white tracking-tight">
                &lt;M/&gt;
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              Seu portal de tecnologia com artigos, tutoriais e novidades do mundo tech.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-text-secondary text-sm hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/artigos" className="text-text-secondary text-sm hover:text-white transition-colors">
                  Artigos
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-text-secondary text-sm hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Redes Sociais</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-text-secondary text-sm hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary text-sm hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary text-sm hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-default mt-8 pt-8 text-center">
          <p className="text-text-secondary text-xs">
            © 2026 TechBlog. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
