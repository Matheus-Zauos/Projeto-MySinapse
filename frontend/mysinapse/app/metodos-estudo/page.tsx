import NeuralBackground from "../components/NeuralBackground";
import Link from "next/link";

export default function MethodsPage() {
  return (
    <main className="font-serif min-h-screen bg-[#020617] text-white px-10 py-16 flex justify-center">

      {/** Chama plano de fundo */}
      <NeuralBackground/>

       {/* background iluminação */}
      <div className="absolute w-[800px] h-[800px] bg-blue-600/20 blur-[200px] rounded-full right-[-200px] top-[50px]" />
      <div className="absolute w-[600px] h-[600px] bg-purple-600/20 blur-[200px] rounded-full left-[-200px] bottom-[-100px]" />

      <div className="max-w-5xl w-full">

        <h1 className="text-4xl mb-4">
          Métodos de Aprendizado
        </h1>

        <p className="text-gray-400 mb-12">
          Estes três métodos formam a base de um aprendizado eficiente e duradouro.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Active Recall card */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-lg">

            <h2 className="text-2xl font-semibold mb-4">
              Active Recall
            </h2>

            <p className="text-gray-300">
              Active Recall consiste em recuperar informações da memória
              sem consultar o material. Em vez de apenas reler conteúdos,
              você testa sua capacidade de lembrar do que aprendeu.
            </p>

            <p className="text-gray-400 mt-4">
              Exemplos:
              <br />
              • responder perguntas
              <br />
              • fazer flashcards
              <br />
              • explicar o conteúdo sem olhar
            </p>

          </div>

          {/* Repetição espaçada card */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-lg">

            <h2 className="text-2xl font-semibold mb-4">
              Repetição espaçada
            </h2>

            <p className="text-gray-300">
              É um método que consiste em revisar
              informações em intervalos crescentes de tempo.
              Isso fortalece a memória e evita o esquecimento.
            </p>

            <p className="text-gray-400 mt-4">
              Exemplo de intervalos:
              <br />
              • Dia 1
              <br />
              • Dia 3
              <br />
              • Dia 7
              <br />
              • Dia 30
            </p>

          </div>

          {/* Richard Feynman card */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-lg">

            <h2 className="text-2xl font-semibold mb-4">
              Técnica de Feynman
            </h2>

            <p className="text-gray-300">
              A teoria de Richard Feynman consiste em explicar um conceito
              com palavras simples, como se estivesse ensinando
              alguém que não conhece o assunto. Caso você não consiga é 
              porque precisa conhecer mais sobre o tema.
            </p>

            <p className="text-gray-400 mt-4">
              Passos:
              <br />
              • estudar o conceito
              <br />
              • explicar em linguagem simples
              <br />
              • identificar lacunas
              <br />
              • simplificar novamente
            </p>

          </div>

        </div>

        {/*Botao de login*/}
        <div className="mt-10 font-mono ">
          <Link href={"/login"}>
              <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 transition"  >
                Começar agora
              </button>
              </Link></div>

      </div>

    </main>
  )
}