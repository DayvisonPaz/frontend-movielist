import Header from "./header"
import React, { useState, useEffect, useContext } from "react"
import { api } from "./api/axios"
import { AuthContext } from "./context/AuthContext"
import Spinner from "./spinner"
import { useNavigate } from "react-router-dom"

export default function Search() {
  const [data, setData] = useState<any[]>([])
  const [genre, setGenre] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const { user, addList } = useContext(AuthContext)

  // 🔹 Buscar por gênero
  useEffect(() => {
    if (genre !== "") {
      fetchByGenre(genre)
    }
  }, [genre])

  async function fetchByGenre(genreId: string) {
    setLoading(true)
    try {
      const response = await api.post("/search", { genre: genreId })
      setData(response.data[0] || [])
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  // 🔹 Buscar por texto
  async function searchData(word: string) {
    setLoading(true)
    try {
      const response = await api.post("/search", { data: word })
      setData(response.data[0] || [])
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  // 🔹 Adicionar item na lista
  async function addItem(item: any) {
    if (!user) {
      navigate("/login")
      return
    }

    try {
      await addList(item)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="bg-slate-800 w-screen min-h-screen overflow-y-scroll">
      <Header />

      {loading && <Spinner />}

      <div className="w-full p-4">
        <select
          onChange={(e) => setGenre(e.target.value)}
          className="w-full p-2 rounded-lg bg-gray-700 text-white"
        >
          <option value="">Genre</option>
          <option value="28">Action</option>
          <option value="12">Adventure</option>
          <option value="16">Animation</option>
          <option value="35">Comedy</option>
          <option value="80">Crime</option>
          <option value="99">Documentary</option>
          <option value="18">Drama</option>
          <option value="10751">Family</option>
          <option value="14">Fantasy</option>
          <option value="36">History</option>
          <option value="27">Horror</option>
          <option value="10402">Music</option>
          <option value="9648">Mystery</option>
          <option value="10749">Romance</option>
          <option value="878">Science Fiction</option>
          <option value="10752">War</option>
          <option value="37">Western</option>
        </select>
      </div>

      {data.length > 0 && (
        <div className="flex flex-col items-center">
          {data.map((e) => (
            <div
              key={e.id}
              className="flex p-4 mt-6 rounded-md shadow-xl w-11/12 md:w-2/3 bg-white"
            >
              <img
                className="h-40 rounded-md"
                src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}
                alt=""
              />

              <div className="flex flex-col justify-between p-4 w-full">
                <div>
                  <p className="font-bold text-lg">
                    {e.original_title || e.name}
                  </p>

                  <p className="text-sm mt-2">
                    {e.overview?.substring(0, 200)}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <span>
                    {e.release_date || e.first_air_date}
                  </span>

                  <span>{e.vote_average}</span>

                  <img
                    className="h-8 cursor-pointer hover:scale-110 transition"
                    src="https://cdn-icons-png.flaticon.com/512/3128/3128313.png"
                    alt="like"
                    onClick={() => addItem(e)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
