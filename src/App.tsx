import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"

import Home from "./home"
import Movies from "./movies"
import Series from "./series"
import Login from "./pages/login"
import Subscribe from "./pages/subscribe"
import List from "./list"
import Profile from "./pages/profile"
import Search from "./search"
import Reflesh from "./reflesh"
import Teste from "./teste"

import AuthProvider from "./context/AuthContext"
import { PrivateRoute } from "./routes/PrivateRoute"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* 🔓 Rotas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/search" element={<Search />} />
          <Route path="/reflesh" element={<Reflesh />} />
          <Route path="/teste" element={<Teste />} />
          <Route path="/login" element={<Login />} />
          <Route path="/subscribe" element={<Subscribe />} />

          {/* 🔒 Rotas privadas */}
          <Route
            path="/list"
            element={
              <PrivateRoute>
                <List />
              </PrivateRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
