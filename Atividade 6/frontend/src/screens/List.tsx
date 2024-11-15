import axios from "axios";
import { Nav } from "../components/Nav"
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import Anime from "../components/Anime";

const api = import.meta.env.VITE_REACT_APP_API_URL

const showErrorToast = (message: string) => {
    toast.error(message, {
        style: { backgroundColor: '#f44336', color: 'white' },
    })
}

export default function List() {
    const [animes, setAnimes] = useState([])

    const handleCatchAnimes = async () => {
        try {
            const response = await axios.get(`${api}/animes/`)
            const data = await response.data
            setAnimes(data)
        } catch (error) {
            showErrorToast("Ocorreu um erro ao encontrar os animes")
            console.error(error)
        }
    }

    useEffect(() => {
        handleCatchAnimes()
    }, [])
    return (
        <div className="flex flex-col items-center justify-center bg-[#131016] text-white size-full">
            <Toaster />
            <Nav />
            <main className="flex flex-col gap-6 h-3/4 overflow-y-scroll no-scrollbar">
                {animes.length
                    ? animes.map((anime, index) =>
                        <Anime key={index} anime={anime} />
                    )
                    : <p className="text-[#f44336]">Não há animes detectados</p>
                }
            </main>
        </div>
    )
}
