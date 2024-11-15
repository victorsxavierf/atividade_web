import { Nav } from "../components/Nav";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 items-center justify-center bg-[#131016] text-white size-full">
      <Nav />
      <h1 className="font-bold text-6xl text-center">Animes - Home</h1>
      <p className="text-center">Isso é um repositório de animes, que permite o cadastro, listagem e pesquisa de animes adicionados pelo próprio usuário!</p>
      
      <div className="flex gap-6">
        <a
          href="https://github.com/ArthurNobrega1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/arthur-nobrega-leite/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
