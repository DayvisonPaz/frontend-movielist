import Header from './header'
import React, { useState, useEffect, useContext, useRef } from 'react'
import axios from 'axios'
import genres from './moviesGenres'
import Spinner from './spinner'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'

/* ========================= */
/* ===== RESPONSIVE CAROUSEL */
/* ========================= */

function Carousel({ items, setDetails }) {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [transitionEnabled, setTransitionEnabled] = useState(true)
  const [itemsPerView, setItemsPerView] = useState(4)
  const containerRef = useRef(null)

  if (!items || items.length === 0) return null

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth
      if (width < 640) setItemsPerView(1)
      else if (width < 1024) setItemsPerView(2)
      else setItemsPerView(4)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const extendedItems = [
    items[items.length - 1],
    ...items,
    items[0],
  ]

  function next() {
    setCurrentIndex(prev => prev + 1)
  }

  function prev() {
    setCurrentIndex(prev => prev - 1)
  }

  useEffect(() => {
    if (currentIndex === extendedItems.length - 1) {
      setTimeout(() => {
        setTransitionEnabled(false)
        setCurrentIndex(1)
      }, 500)
    }

    if (currentIndex === 0) {
      setTimeout(() => {
        setTransitionEnabled(false)
        setCurrentIndex(extendedItems.length - 2)
      }, 500)
    }
  }, [currentIndex, extendedItems.length])

  useEffect(() => {
    if (!transitionEnabled) {
      requestAnimationFrame(() => {
        setTransitionEnabled(true)
      })
    }
  }, [transitionEnabled])

  const itemWidth = 100 / itemsPerView

  return (
    <div className="relative w-full overflow-hidden py-4">

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 
                   bg-black/50 hover:bg-black/70 
                   text-white rounded-full 
                   w-8 h-8 sm:w-10 sm:h-10 
                   flex items-center justify-center"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 
                   bg-black/50 hover:bg-black/70 
                   text-white rounded-full 
                   w-8 h-8 sm:w-10 sm:h-10 
                   flex items-center justify-center"
      >
        ›
      </button>

      <div
        ref={containerRef}
        className="flex"
        style={{
          transform: `translateX(-${currentIndex * itemWidth}%)`,
          transition: transitionEnabled ? 'transform 0.5s ease' : 'none',
        }}
      >
        {extendedItems.map((movie, index) => (
          <div
            key={index}
            style={{ flex: `0 0 ${itemWidth}%` }}
            className="p-2"
          >
            <img
              onClick={() => setDetails([movie])}
              className="w-full rounded-lg shadow-lg cursor-pointer 
                         hover:scale-105 duration-300"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ========================= */
/* ===== MOVIES MAIN ======= */
/* ========================= */

export default function Movies() {

  const [details, setDetails] = useState([])
  const [data, setData] = useState([])
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)

  /* LOAD MOVIES */
  useEffect(() => {

    async function run() {
      try {
        const response = await axios.get(
          'https://backend-movielist.onrender.com/movies',
           
        )

        setData([
          response.data[0].results,
          response.data[1].results,
          response.data[2].results,
          response.data[3].results,
        ])

      } catch (err) {
        console.log(err)
      }
    }

    run()

  }, [])

  function genero(x) {
    const result = genres.find(e => e.id === x)
    return result?.name
  }

  /* ADD ITEM */
async function addItem(item) {

  const token = localStorage.getItem("token")
  const id = localStorage.getItem("id")

  if (!token || !id) {
    navigate("/login")
    return
  }

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

    alert("Adicionado ou removido da lista!")

  } catch (err) {
    console.log(err)
  }
}


  return (
    <div className="w-full bg-slate-900 text-white min-h-screen">

      {data.length === 0 && <Spinner />}

      {/* MODAL */}
      {details[0] && (
        <div
          onClick={() => setDetails([])}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
        >
          <div className="bg-white text-black w-full max-w-3xl rounded-lg overflow-hidden flex flex-col sm:flex-row">

            <img
              className="w-full sm:w-1/3 object-cover"
              src={`https://image.tmdb.org/t/p/w500/${details[0].poster_path}`}
              alt=""
            />

            <div className="p-4 flex flex-col justify-between">

              <div>
                <h2 className="text-lg font-bold">
                  {details[0].original_title}
                </h2>

                <p className="text-sm mt-2">
                  {details[0].overview.substring(0, 200)}...
                </p>
              </div>

              <div className="flex justify-between items-center mt-4 text-sm">

                <span>
                  {details[0].release_date?.substring(0, 4)}
                </span>

                <span>{details[0].vote_average}</span>

                <span>{genero(details[0].genre_ids[0])}</span>

                <button
                  onClick={() => addItem(details[0])}
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                >
                  + Lista
                </button>

              </div>
            </div>
          </div>
        </div>
      )}

      <Header />

      {data.length > 0 && (
        <>
          <h1 className="text-center text-xl mt-6">
            Filmes mais populares
          </h1>
          <Carousel items={data[0]} setDetails={setDetails} />

          <h1 className="text-center text-xl mt-10">
            Filmes de ação
          </h1>
          <Carousel items={data[1]} setDetails={setDetails} />

          <h1 className="text-center text-xl mt-10">
            Filmes de aventura
          </h1>
          <Carousel items={data[2]} setDetails={setDetails} />

          <h1 className="text-center text-xl mt-10">
            Filmes de animação
          </h1>
          <Carousel items={data[3]} setDetails={setDetails} />
        </>
      )}

    </div>
  )
}
