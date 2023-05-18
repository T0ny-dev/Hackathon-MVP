import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login.jsx"
import Register from "./components/Register"
import Loader from "./components/Loader.jsx"
import { AuthProvider } from "./context/authContext"
import {ProtectedRoute} from "./components/ProtectedRoute"

export default function App() {
  return (
    <div className="h-screen flex">
      <AuthProvider>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>}>
          </Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/Loader" element={<Loader/>}></Route>
        </Routes>
      </AuthProvider>
    </div>
  )
}