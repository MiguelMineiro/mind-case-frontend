import { Link, NavLink } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
  const { isDark, toggleTheme } = useTheme();

  const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
    cn(
      "text-sm font-medium tracking-wide text-white/70 transition-colors hover:text-white",
      isActive && "text-white"
    );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/20 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src="/assets/Logo.png" alt="Logo" className="h-6 w-auto" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/" className={navLinkClassName}>
            Home
          </NavLink>
          <NavLink to="/artigos" className={navLinkClassName}>
            Artigos
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>

          <Link
            to="/entrar"
            className="hidden text-sm font-medium text-white/70 transition-colors hover:text-white sm:inline-flex"
          >
            Entrar
          </Link>

          <Link
            to="/cadastrar"
            className="inline-flex h-9 items-center justify-center rounded-md bg-[#00C1D5] px-4 text-sm font-semibold text-black transition hover:bg-[#21D4E7]"
          >
            Cadastrar
          </Link>
        </div>
      </div>
    </header>
  );
}
