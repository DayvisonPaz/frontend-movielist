import { api } from "../api/axios"

export const getItems = async () => {
  return api.get("/items")
}

export const addItem = async (item: any) => {
  return api.post("/items", item)
}

export const deleteItem = async (id: string) => {
  return api.delete(`/items/${id}`)
}
