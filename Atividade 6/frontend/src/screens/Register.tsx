import { Toaster } from "react-hot-toast"
import { Nav } from "../components/Nav"
import { Form } from "../components/Form"

function Register() {
  const inputsData = [{ id:"name", placeholder:"nome"}, {id:"genre", placeholder:"Gênero"}, {id:"studio", placeholder:"Estúdio"}]

  return (
    <div className="flex gap-6 flex-col justify-center items-center bg-[#131016] text-white size-full">
      <Toaster />
      <Nav />
      <h1 className="font-bold text-6xl">Animes</h1>
      <Form inputsData={inputsData}/>
    </div>
  )
}

export default Register
