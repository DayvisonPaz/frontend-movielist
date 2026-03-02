import Header from "./header"
import Spinner from "./spinner"
import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function List() {

  const navigate = useNavigate()
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)

  const token = localStorage.getItem("token")
  const id = localStorage.getItem("id")

  /* ========================= */
  /* BUSCAR LISTA DO BACKEND  */
  /* ========================= */
  async function loadList() {

    if (!token || !id) {
      navigate("/login")
      return
    }

    try {

      const response = await axios.post(
        "https://backend-movielist.onrender.com/list",
        { id },
        {
          headers: {
            Authorization: `Basic ${token}`
          }
        }
      )

      setList(response.data)
      setLoading(false)

    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  useEffect(() => {
    loadList()
  }, [])

  /* ========================= */
  /* ADICIONAR / REMOVER ITEM */
  /* ========================= */
  async function toggleItem(item) {

    try {

      await axios.post(
        "https://backend-movielist.onrender.com/addlist",
        {
          list: item,
          id: id
        },
        {
          headers: {
            Authorization: `Basic ${token}`
          }
        }
      )

      // Recarrega lista após alterar
      loadList()

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="bg-slate-900 min-h-screen text-white">

      <Header />

      {loading && <Spinner />}

      {!loading && list.length === 0 && (
        <div className="text-center mt-10">
          Sua lista está vazia
        </div>
      )}

      {!loading && list.length > 0 && (
        <div className="flex flex-col items-center mt-6 gap-6">

          {list.map(item => (

            <div
              key={item.id}
              className="flex bg-white text-black w-11/12 md:w-2/3 rounded-lg overflow-hidden shadow-lg"
            >

              <img
                className="w-40"
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt=""
              />

              <div className="flex flex-col justify-between p-4 flex-1">

                <div>
                  <h2 className="font-bold">
                    {item.original_title || item.name}
                  </h2>

                  <p className="text-sm mt-2">
                    {item.overview?.substring(0, 150)}...
                  </p>
                </div>

                <div className="flex justify-between items-center mt-4">

                  <span>
                    {item.release_date?.substring(0, 4) ||
                      item.first_air_date?.substring(0, 4)}
                  </span>

                  <span>{item.vote_average}</span>

                  <button
                    onClick={() => toggleItem(item)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Remover
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  )
}
