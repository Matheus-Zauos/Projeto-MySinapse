import Link from "next/link";

export default function Home() {
  return (
    
        <div>
    <nav>
        <ul className="flex items-center justify-end gap-4 m-2">
            <li>O que é</li>
            <li>Métodos</li>
            <li>Sobre mim</li>
            <li>Contatos</li>
            <Link className="mr-4" href={"/example"}>About</Link>
            </ul>
    </nav>
    <div className="px-10 py-20">
        <h1 className="text-[40px]">Aprenda com método.</h1>
        <h2 className="text-[40px]">Evolua com ciência!</h2>
        <p className="w-100 ">MySynapse utiliza técnicas baseadas em evidência científica 
        para transformar sua forma de estudar.</p>
    </div>
    
         <button className="font-serif text-white hover:scale-110 transition delay-150 duration-300 bg-blue-800 hover:bg-sky-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700
         rounded-[10] w-45 h-10 ml-10">
           Começar agora 
        </button>
        <button className="font-serif text-white bg-blue-900/90 hover:bg-sky-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700
         rounded-[10] w-45 h-10 ml-5">Conhecer os métodos</button>
    </div>
    
    

  

  );
}