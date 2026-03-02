import Header from "../header"
import { useState, useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [name, setName] = useState("")
  const [pass, setPass] = useState("")
  const [error, setError] = useState("")

  const { login, user, loading } = useContext(AuthContext)
  const navigate = useNavigate()

  // 🔹 Se já estiver logado, redireciona
  useEffect(() => {
    if (!loading && user) {
      navigate("/")
    }
  }, [user, loading, navigate])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    try {
      await login(name, pass)
      navigate("/")
    } catch {
      setError("Nome ou senha inválidos")
    }
  }

  return (
    <>
      <Header />
      <div className="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-200">
        <div className="container mx-auto flex flex-col items-center">
          <form
            onSubmit={handleSubmit}
            className="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg"
          >
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome"
              className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
            />

            <input
              required
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Senha"
              className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
            />

            {error && (
              <p className="text-red-500 text-sm mb-2">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg"
            >
              Login
            </button>

            <hr className="my-4" />

            <button
              type="button"
              onClick={() => navigate("/subscribe")}
              className="w-full bg-green-400 text-white p-3 rounded-lg font-semibold text-lg"
            >
              Create New Account
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
