import { Outlet } from "react-router-dom"
import { Landing } from "../containers"
import { useAuth } from "../store/AuthContext"

const ProtectedRoutes = () => {
  const { isLoggedIn } = useAuth()
  return isLoggedIn ? <Outlet /> : <Landing />
}

export default ProtectedRoutes
