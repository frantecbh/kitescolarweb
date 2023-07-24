import { Routes, Route } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Login } from '../pages/Login'
import { AuthProvider } from '../Context/AuthContext'

export const AppRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/kit" element={<Dashboard />} />
      </Routes>
    </AuthProvider>
  )
}
