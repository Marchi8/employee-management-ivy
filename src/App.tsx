import { Route, Routes } from "react-router-dom"
import AuthProvider from "./contexts/AuthContext"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import './App.css'

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </AuthProvider>

    </div>
  )
}

export default App
