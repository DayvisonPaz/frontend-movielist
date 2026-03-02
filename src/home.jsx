import Header from './header'
import React, { useState, useEffect, useContext, useRef } from 'react'
import axios from 'axios'
import genres from './moviesGenres'
import Spinner from './spinner'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'

/* ========================= */
/* ===== HERO BANNER ======= */
/* ========================= */

function HeroBanner({ featured, setDetails }) {
  const [currentHero, setCurrentHero] = useState(0)
  const heroRef = useRef(null)

  useEffect(() => {
    if (!featured || featured.length === 0) return
    
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % Math.min(5, featured.length))
    }, 8000)

    return () => clearInterval(interval)
  }, [featured])

  if (!featured || featured.length === 0) return null

  const movie = featured[currentHero]

  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 transition-all duration-1000 ease-out"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scale(1.1)',
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center px-3 sm:px-6 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="max-w-xl sm:max-w-2xl space-y-2 sm:space-y-3 md:space-y-4 animate-fade-in">
          {/* Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight break-words">
            {movie.title || movie.name}
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base">
            <span className="flex items-center gap-1 text-yellow-400">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {movie.vote_average?.toFixed(1)}
            </span>
            <span className="text-gray-300">
              {movie.release_date?.substring(0, 4) || movie.first_air_date?.substring(0, 4)}
            </span>
            <span className="px-2 sm:px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20 text-xs">
              {movie.media_type === 'tv' ? 'Série' : 'Filme'}
            </span>
          </div>

          {/* Overview */}
          <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed line-clamp-2 sm:line-clamp-3 hidden sm:block">
            {movie.overview}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4">
            <button
              onClick={() => setDetails([movie])}
              className="px-4 sm:px-8 py-2 sm:py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              <span className="hidden sm:inline">Ver Detalhes</span>
              <span className="sm:hidden">Ver</span>
            </button>
            
            <button
              className="px-4 sm:px-8 py-2 sm:py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="hidden sm:inline">Mais Info</span>
              <span className="sm:hidden">Info</span>
            </button>
          </div>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2">
        {featured.slice(0, 5).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentHero(index)}
            className={`h-0.5 sm:h-1 rounded-full transition-all duration-300 ${
              index === currentHero ? 'w-8 sm:w-12 bg-white' : 'w-4 sm:w-8 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

/* ========================= */
/* ===== CAROUSEL ========== */
/* ========================= */

function Carousel({ items, setDetails, title, subtitle }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(2)
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef(null)

  if (!items || items.length === 0) return null

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth
      if (width < 640) setItemsPerView(2)
      else if (width < 768) setItemsPerView(3)
      else if (width < 1024) setItemsPerView(4)
      else if (width < 1280) setItemsPerView(5)
      else setItemsPerView(6)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, items.length - itemsPerView)

  function next() {
    setCurrentIndex((prev) => Math.min(prev + itemsPerView, maxIndex))
  }

  function prev() {
    setCurrentIndex((prev) => Math.max(prev - itemsPerView, 0))
  }

  const canGoPrev = currentIndex > 0
  const canGoNext = currentIndex < maxIndex

  return (
    <div 
      className="relative group py-6 sm:py-8"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Section Header */}
      <div className="px-3 sm:px-6 md:px-8 lg:px-16 mb-3 sm:mb-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{title}</h2>
        {subtitle && <p className="text-gray-400 mt-1 text-sm sm:text-base">{subtitle}</p>}
      </div>

      {/* Navigation Buttons */}
      {canGoPrev && (
        <button
          onClick={prev}
          className={`absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 
                     bg-black/80 hover:bg-black text-white rounded-full 
                     w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center
                     transition-all duration-300 shadow-xl
                     ${isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {canGoNext && (
        <button
          onClick={next}
          className={`absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 
                     bg-black/80 hover:bg-black text-white rounded-full 
                     w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center
                     transition-all duration-300 shadow-xl
                     ${isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Carousel Container */}
      <div className="overflow-hidden px-3 sm:px-6 md:px-8 lg:px-16">
        <div
          ref={containerRef}
          className="flex transition-transform duration-500 ease-out gap-2 sm:gap-3"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
          }}
        >
          {items.map((movie, index) => (
            <MovieCard
              key={`${movie.id}-${index}`}
              movie={movie}
              setDetails={setDetails}
              itemsPerView={itemsPerView}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ========================= */
/* ===== MOVIE CARD ======== */
/* ========================= */

function MovieCard({ movie, setDetails, itemsPerView }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      style={{ flex: `0 0 calc(${100 / itemsPerView}% - ${(itemsPerView === 2 ? 8 : 12) / itemsPerView}px)` }}
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setDetails([movie])}
    >
      {/* Poster Image */}
      <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[2/3] bg-slate-800">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title || movie.name}
          loading="lazy"
        />
        
        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 space-y-1 sm:space-y-2">
            <h3 className="font-semibold text-white text-xs sm:text-sm line-clamp-2">
              {movie.title || movie.name}
            </h3>
            
            <div className="flex items-center gap-1 sm:gap-2 text-xs">
              <span className="flex items-center gap-1 text-yellow-400">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {movie.vote_average?.toFixed(1)}
              </span>
              <span className="text-gray-300">
                {movie.release_date?.substring(0, 4) || movie.first_air_date?.substring(0, 4)}
              </span>
            </div>
          </div>
        </div>

        {/* Rating Badge */}
        {movie.vote_average >= 8 && (
          <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full shadow-lg">
            TOP
          </div>
        )}
      </div>
    </div>
  )
}

/* ========================= */
/* ===== MODAL ============= */
/* ========================= */

function MovieModal({ movie, onClose, addItem, genero }) {
  if (!movie) return null

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-3 sm:p-4 backdrop-blur-sm animate-fade-in overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-900 text-white w-full max-w-sm sm:max-w-2xl md:max-w-4xl rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl animate-scale-in my-4"
      >
        {/* Backdrop Header */}
        <div className="relative h-40 sm:h-64 md:h-80">
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/50 hover:bg-black text-white rounded-full p-1.5 sm:p-2 transition-all duration-300"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6">
            <h2 className="text-lg sm:text-3xl md:text-4xl font-bold line-clamp-2">
              {movie.original_title || movie.name}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-5 md:space-y-6">
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm">
            <span className="flex items-center gap-1 text-yellow-400">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-semibold">{movie.vote_average?.toFixed(1)}</span>
              <span className="text-gray-400 text-xs">({movie.vote_count} votos)</span>
            </span>
            
            <span className="text-gray-300">
              {movie.release_date?.substring(0, 4) || movie.first_air_date?.substring(0, 4)}
            </span>

            {movie.genre_ids?.[0] && (
              <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm border border-white/20">
                {genero(movie.genre_ids[0])}
              </span>
            )}

            <span className="px-2 sm:px-3 py-1 bg-blue-600 rounded-full text-xs sm:text-sm font-semibold">
              {movie.original_language?.toUpperCase()}
            </span>
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Sinopse</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {movie.overview || 'Sem descrição disponível.'}
            </p>
          </div>

          {/* Popularity & Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            <div className="bg-white/5 p-2 sm:p-3 md:p-4 rounded-lg border border-white/10">
              <p className="text-gray-400 text-xs sm:text-sm">Popularidade</p>
              <p className="text-xl sm:text-2xl font-bold mt-1">{movie.popularity?.toFixed(0)}</p>
            </div>
            
            {movie.vote_count && (
              <div className="bg-white/5 p-2 sm:p-3 md:p-4 rounded-lg border border-white/10">
                <p className="text-gray-400 text-xs sm:text-sm">Votos</p>
                <p className="text-xl sm:text-2xl font-bold mt-1">{movie.vote_count}</p>
              </div>
            )}

            {(movie.release_date || movie.first_air_date) && (
              <div className="bg-white/5 p-2 sm:p-3 md:p-4 rounded-lg border border-white/10">
                <p className="text-gray-400 text-xs sm:text-sm">Lançamento</p>
                <p className="text-sm sm:text-lg font-bold mt-1">
                  {movie.release_date || movie.first_air_date}
                </p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 sm:gap-3 pt-2 sm:pt-4">
            <button
              onClick={() => addItem(movie)}
              className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Adicionar à Lista
            </button>

            <button
              className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 border border-white/20 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Compartilhar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ========================= */
/* ===== HOME MAIN ========= */
/* ========================= */

export default function Home() {
  const [details, setDetails] = useState([])
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)

  /* LOAD DATA */
  useEffect(() => {
    async function run() {
      try {
        setLoading(true)
        const response = await axios.get('https://backend-movielist.onrender.com/')

        // Backend retorna 5 arrays: 
        // [0] Filmes populares página 1
        // [1] Filmes populares página 2
        // [2] Séries populares
        // [3] Filmes top rated
        // [4] Filmes upcoming

        setData(response.data)
      } catch (err) {
        console.error('Erro ao carregar dados:', err)
      } finally {
        setLoading(false)
      }
    }

    run()
  }, [])

  function genero(id) {
    const result = genres.find((e) => e.id === id)
    return result?.name || 'Desconhecido'
  }

  /* ADD ITEM */
  async function addItem(item) {
    if (!user) {
      navigate('/login')
      return
    }

    try {
      await axios.post(
        'https://backend-movielist.onrender.com/addlist',
        {
          list: item,
          id: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )

      alert('Adicionado à sua lista!')
    } catch (err) {
      console.error('Erro ao adicionar item:', err)
      alert('Erro ao adicionar à lista')
    }
  }

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-slate-900 flex items-center justify-center">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="w-full bg-slate-900 text-white min-h-screen">
      {/* Custom Styles */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* Modal */}
      {details[0] && (
        <MovieModal
          movie={details[0]}
          onClose={() => setDetails([])}
          addItem={addItem}
          genero={genero}
        />
      )}

      <Header />

      {data.length > 0 && (
        <>
          {/* Hero Banner - Featured Content */}
          <HeroBanner featured={data[3]?.results || data[0]?.results} setDetails={setDetails} />

          {/* Filmes Mais Populares */}
          <Carousel
            items={data[0]?.results || []}
            setDetails={setDetails}
            title="Em Alta Agora"
            subtitle="Os filmes mais populares do momento"
          />

          {/* Filmes Top Rated */}
          <Carousel
            items={data[3]?.results || []}
            setDetails={setDetails}
            title="Aclamados pela Crítica"
            subtitle="Os filmes mais bem avaliados de todos os tempos"
          />

          {/* Séries Populares */}
          <Carousel
            items={data[2]?.results || []}
            setDetails={setDetails}
            title="Séries Populares"
            subtitle="As séries que todo mundo está assistindo"
          />

          {/* Filmes Upcoming */}
          <Carousel
            items={data[4]?.results || []}
            setDetails={setDetails}
            title="Em Breve nos Cinemas"
            subtitle="Os próximos grandes lançamentos"
          />

          {/* Mais Filmes Populares (página 2) */}
          <Carousel
            items={data[1]?.results || []}
            setDetails={setDetails}
            title="Descubra Mais"
            subtitle="Outros títulos populares para você explorar"
          />

          {/* Footer Spacing */}
          <div className="h-20" />
        </>
      )}
    </div>
  )
}