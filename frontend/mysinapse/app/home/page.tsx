import Image from "next/image"
import Link from "next/link"


export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">

       {/* background glow */}
      <div className="absolute w-[800px] h-[800px] bg-blue-600/20 blur-[200px] rounded-full right-[-200px] top-[50px]" />
      <div className="absolute w-[600px] h-[600px] bg-purple-600/20 blur-[200px] rounded-full left-[-200px] bottom-[-100px]" />

      {/* imagem Background */}
      <div className="absolute inset-0 -z-10">
         <Image
                        className="w-full h-full object-cover"
                        src="/background.webp"
                        alt="MySynapse logo"
                        fill
                        priority
                        />  
        <div className="absolute inset-0 bg-blue-950/15 backdrop-blur-75"></div>
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto px-6 pt-32">
        
        <div className="grid md:grid-cols-2 items-center gap-10">
          
          {/* Texto */}
          <div className="text-white">
            <h1 className="text-5xl font-serif leading-tight">
              Aprenda com método. <br />
              Evolua com ciência.
            </h1>

            <p className="mt-6 text-lg text-gray-300">
              Técnicas baseadas em ciência
              para transformar a forma de estudar.
            </p>
            

            <div className="mt-8 flex gap-4">
              <Link href={"/login"}>
              <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 transition"  >
                Começar agora
              </button>
              </Link>

              <Link href={"/metodos-estudo"}>
              <button className="border border-blue-400 px-6 py-3 rounded-lg hover:bg-blue-900/40 transition">
                Conhecer o método
              </button>
              </Link>
            </div>
          </div>

         

        </div>
      </div>
      <div className="mt-32 grid md:grid-cols-3 gap-6">
  
  <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 text-white">
    <h3 className="text-xl font-semibold">Repetição espaçada</h3>
    <p className="text-gray-300 mt-2">
      Técnicas para retenção duradoura.
    </p>
  </div>

  <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 text-white">
    <h3 className="text-xl font-semibold">Active recall</h3>
    <p className="text-gray-300 mt-2">
      Fortalecimento das conexões neurais.
    </p>
  </div>

  <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 text-white">
    <h3 className="text-xl font-semibold">Técnica de Feynman</h3>
    <p className="text-gray-300 mt-2">
      Teoria apresentada pelo físico Richard Feynman.
    </p>
  </div>

</div>
    </main>
  )
}