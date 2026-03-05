import LoginCard from "@/app/components/Logincard"
import NeuralBackground from "../components/NeuralBackground"
import Image from "next/image"

export default function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#020617] text-white relative overflow-hidden">

      {/* background iluminação */}
      <div className="absolute w-[800px] h-[800px] bg-blue-600/20 blur-[200px] rounded-full right-[-200px] top-[50px]" />
      <div className="absolute w-[600px] h-[600px] bg-purple-600/20 blur-[200px] rounded-full left-[-200px] bottom-[-100px]" />

      <div className="flex w-full max-w-6xl items-center justify-between px-10">

        <div className="hidden md:flex flex-col gap-2 max-w-md">
          
          <Image 
                alt="MySinapse logo"
                src="/logo.svg"
                width={250}
                height={250}
                className="ml-5 justify-center"

          />

          <p className="text-gray-300 text-lg">
            Aprenda com Método. Evolua com Ciência.
          </p>
        </div>
        
        {/**chama background animado */}
       <NeuralBackground/>

        {/* chama o login card */}
        <LoginCard />

      </div>

    </main>
  )
}