import { api } from "../api/axios"

export const login = async (name: string, password: string) => {
  return api.post("/login", { name, password })
}

export const register = async (name: string, password: string) => {
  return api.post("/subscribe", { name, password })
}

export const logout = async () => {
  return api.post("/logout")
}

export const getMe = async () => {
  return api.get("/me")
}
