import { Link } from "react-router-dom";
import { Github, Instagram, Twitter } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 py-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <img src="/assets/Logo.png" alt="Logo" className="h-6 w-auto" />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              Seu portal de tecnologia com artigos, tutoriais e novidades do mundo tech.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-8">
            <p className="text-xs font-semibold tracking-widest text-white/60">NAVEGAÇÃO</p>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <Link to="/" className="text-white/60 transition hover:text-white">
                Home
              </Link>
              <Link to="/artigos" className="text-white/60 transition hover:text-white">
                Artigos
              </Link>
              <Link to="/entrar" className="text-white/60 transition hover:text-white">
                Dashboard
              </Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs font-semibold tracking-widest text-white/60">REDES SOCIAIS</p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-black/20 text-white/70 transition hover:bg-white/10 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-black/20 text-white/70 transition hover:bg-white/10 hover:text-white"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-black/20 text-white/70 transition hover:bg-white/10 hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 py-6 text-center text-xs text-white/40">
          © 2025 TechBlog. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
