import "./globals.css";

export default function LoginCard() {
  return (
    <div className="w-[420px] backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">

      <h2 className="text-2xl font-bold text-center mb-2">
        Bem-vindo(a)!
      </h2>

      <p className="text-center text-gray-400 mb-6">
        Acesse sua conta para continuar seus estudos
      </p>

      <form className="flex flex-col gap-4">

        <div>
          <label className="text-sm text-gray-400">E-mail</label>
          <input
            type="email"
            placeholder="seuemail@exemplo.com"
            className="w-full mt-1 px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="text-sm text-gray-400">Senha</label>
          <input
            type="password"
            placeholder="Sua senha"
            className="w-full mt-1 px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-blue-500"
          />
        </div>

        <a className="text-sm text-blue-400 text-right cursor-pointer">
          Esqueci minha senha
        </a>

        <button
          className="mt-2 w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 hover:opacity-90 transition font-semibold"
        >
          Entrar →
        </button>

        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-[1px] bg-white/10" />
          <span className="text-gray-400 text-sm">ou continue com</span>
          <div className="flex-1 h-[1px] bg-white/10" />
        </div>

        <div className="flex gap-3">
          <button className="flex-1 py-2 rounded-lg border border-white/10 hover:bg-white/5">
            Google
          </button>

          <button className="flex-1 py-2 rounded-lg border border-white/10 hover:bg-white/5">
            Microsoft
          </button>
        </div>

        <p className="text-center text-sm text-gray-400 mt-4">
          Ainda não tem conta?{" "}
          <span className="text-blue-400 cursor-pointer">
            Criar conta gratuita
          </span>
        </p>

      </form>

    </div>
  )
}