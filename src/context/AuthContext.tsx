import React, { createContext, useEffect, useState } from "react"
import { api } from "../api/axios"
import axios from "axios"
interface User {
  _id: string
  name: string
}

interface AuthContextType {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
  loading: boolean
  login: (name: string, password: string) => Promise<void>
  logout: () => Promise<void>
  addList: (item: any) => Promise<void>
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
)

export default function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  // 🔹 Verifica sessão ao carregar app
 useEffect(() => {

  async function restore() {

    const token = localStorage.getItem("token")
    const id = localStorage.getItem("id")

    if (!token || !id) return

    try {

      const response = await axios.post(
        "https://backend-movielist.onrender.com/log",
        { id },
        {
          headers: {
            Authorization: `Basic ${token}`
          }
        }
      )

      setUser(response.data.newuser)

    } catch (err) {
      console.log("Token inválido")
      localStorage.clear()
    }
  }

  restore()

}, [])


  // 🔹 Login
  async function login(name: string, password: string) {
  const response = await api.post("/login", { name, password })

  const { newuser, token } = response.data

  localStorage.setItem("token", token)
  localStorage.setItem("id", newuser._id)

  setUser(newuser)
}


  // 🔹 Logout
  async function logout() {
    await api.post("/logout")
    setUser(null)
  }

  // 🔹 Adicionar item na lista
  async function addList(item: any) {
    await api.post("/addlist", { list: item })
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        login,
        logout,
        addList
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
