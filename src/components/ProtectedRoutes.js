import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../store/auth-context"

const ProtectedRoutes = () => {
  const { isLoggedIn } = useAuth()
  return isLoggedIn ? <Outlet /> : <Navigate to={"/"} />
}

export default ProtectedRoutes
