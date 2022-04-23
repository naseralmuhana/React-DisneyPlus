import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../store/AuthContext"

const ProtectedRoutes = () => {
  const { isLoggedIn } = useAuth()
  return isLoggedIn ? <Outlet /> : <Navigate to={"/"} />
}

export default ProtectedRoutes
