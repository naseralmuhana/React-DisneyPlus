import { Outlet } from "react-router-dom"
import { Landing } from "../containers"
import { useAuth } from "../store/auth-context"

const ProtectedRoutes = () => {
  const { currentUser } = useAuth()
  return currentUser ? <Outlet /> : <Landing />
}

export default ProtectedRoutes
