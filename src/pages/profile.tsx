import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../header"
import { AuthContext } from "../context/AuthContext"

export default function Profile() {
  const { user, logout, loading } = useContext(AuthContext)
  const navigate = useNavigate()

  async function handleLogout() {
    await logout()
    navigate("/login")
  }

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    )
  }

  return (
    <div className="bg-slate-700 min-h-screen w-screen">
      <Header />

      <div className="flex flex-col items-center justify-center mt-20 text-white">
        
        {/* 🔹 Dados do usuário */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold">Perfil</h1>
          <p className="mt-2">Nome: {user?.name}</p>
          <p>ID: {user?._id}</p>
        </div>

        {/* 🔹 Botão Logout */}
        <button
          onClick={handleLogout}
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-6 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  )
}
