import { Nav } from "../components/Nav";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 items-center justify-center bg-[#135712] text-white size-full">
      <Nav />
      <h1 className="font-bold text-6xl text-center">Series+</h1>
      <p className="text-center">Este é a sua listagem de séries, aqui você poderá salvar as suas séries preferidas!</p>
      
      <div className="flex gap-6">
        <a
          href="https://github.com/victorsxavierf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/victor-xavier-80b7a72b0/"
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
