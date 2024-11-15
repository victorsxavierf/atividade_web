import { NavButton } from "./NavButton"

export function Nav() {
  const elements = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name:'Register', 
      link: '/register'
    },
    {
      name: 'Lista de Animes',
      link: '/list'
    },
    {
      name: 'Editar Anime',
      link: '/edit'
    }
  ]
  return (
    <nav className="absolute flex justify-around items-center h-[10%] w-full top-0 bg-gradient-to-b from-black to-[#131016]">
      <ul className="flex justify-around gap-12 max-md:gap-6 px-2">
        {elements.map((element, index) => {
          return (
            <li key={index}>
              <NavButton
                key={index}
                name={element.name}
                link={element.link}
              />
            </li>
          )
        })}
      </ul>
    </nav>
  )
}