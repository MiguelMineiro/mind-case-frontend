import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary border-b border-border-default">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-mono font-bold text-2xl text-white tracking-tight">
              &lt;M/&gt;
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-text-secondary hover:text-white transition-colors text-sm font-medium">
              Home
            </Link>
            <Link to="/artigos" className="text-text-secondary hover:text-white transition-colors text-sm font-medium">
              Artigos
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 text-text-secondary hover:text-white transition-colors" title="Alternar tema">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>

            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <Link
                  to="/dashboard"
                  className="text-sm text-text-secondary hover:text-white transition-colors"
                >
                  {user?.name}
                </Link>
                <button
                  onClick={logout}
                  className="px-4 py-2 text-sm font-medium text-white border border-border-default rounded-lg hover:bg-bg-card transition-colors"
                >
                  Sair
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-white border border-border-default rounded-lg hover:bg-bg-card transition-colors"
                >
                  Entrar
                </Link>
                <Link
                  to="/cadastro"
                  className="px-4 py-2 text-sm font-medium text-black bg-accent rounded-lg hover:bg-cyan-400 transition-colors"
                >
                  Cadastrar →
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
