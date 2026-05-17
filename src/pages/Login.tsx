import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="mx-auto flex max-w-6xl justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6">
        <h1 className="text-2xl font-semibold tracking-tight">Entrar</h1>
        <p className="mt-2 text-sm text-white/60">Acesse sua conta para continuar.</p>

        <form className="mt-6 space-y-4">
          <label className="block">
            <span className="text-xs font-medium tracking-wide text-white/60">Email</span>
            <input
              type="email"
              placeholder="voce@exemplo.com"
              className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#00C1D5]/60"
            />
          </label>

          <label className="block">
            <span className="text-xs font-medium tracking-wide text-white/60">Senha</span>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#00C1D5]/60"
            />
          </label>

          <button
            type="button"
            className="mt-2 inline-flex h-10 w-full items-center justify-center rounded-md bg-[#00C1D5] text-sm font-semibold text-black transition hover:bg-[#21D4E7]"
          >
            Entrar
          </button>
        </form>

        <p className="mt-6 text-sm text-white/60">
          Não tem conta?{" "}
          <Link to="/cadastrar" className="font-medium text-[#00C1D5] hover:underline">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}
