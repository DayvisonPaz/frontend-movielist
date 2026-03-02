import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "./context/AuthContext"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [search, setSearch] = useState("")
  const navigate = useNavigate()
  const { errs } = useContext(AuthContext)

  function handleProfile() {
    const user = localStorage.getItem("id")
    const token = localStorage.getItem("token")
    user && token ? navigate("/profile") : navigate("/login")
  }

  function handleSearch(e) {
    e.preventDefault()
    if (!search) return
    localStorage.setItem("search", search)
    navigate("/search")
    setSearch("")
  }

  return (
    <header className="w-full bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      
      {/* ALERTA */}
      {errs?.length > 0 && (
        <div className="bg-red-600 text-white text-center py-2 text-sm">
          {errs[0]}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="text-2xl font-bold text-blue-500">
              MovieList
            </span>
          </div>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/movies")}>Movies</button>
            <button onClick={() => navigate("/series")}>Series</button>
            <button onClick={() => navigate("/list")}>List</button>
          </nav>

          {/* BUSCA DESKTOP */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center bg-slate-800 rounded-full px-4 py-2 w-72"
          >
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Buscar..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </form>

          {/* PERFIL */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handleProfile}
              className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition"
            >
              👤
            </button>
          </div>

          {/* BOTÃO MOBILE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="md:hidden bg-slate-800 px-4 pb-4 space-y-4 animate-fadeIn">
          
          <form onSubmit={handleSearch} className="flex">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Buscar..."
              className="flex-1 bg-slate-700 px-4 py-2 rounded-l-lg outline-none"
            />
            <button className="bg-blue-600 px-4 rounded-r-lg">
              🔍
            </button>
          </form>

          <button
            onClick={() => {
              navigate("/")
              setMenuOpen(false)
            }}
            className="block w-full text-left"
          >
            Home
          </button>

          <button
            onClick={() => {
              navigate("/movies")
              setMenuOpen(false)
            }}
            className="block w-full text-left"
          >
            Movies
          </button>

          <button
            onClick={() => {
              navigate("/series")
              setMenuOpen(false)
            }}
            className="block w-full text-left"
          >
            Series
          </button>

          <button
            onClick={() => {
              navigate("/list")
              setMenuOpen(false)
            }}
            className="block w-full text-left"
          >
            List
          </button>

          <button
            onClick={() => {
              handleProfile()
              setMenuOpen(false)
            }}
            className="block w-full text-left"
          >
            Perfil
          </button>
        </div>
      )}
    </header>
  )
}
