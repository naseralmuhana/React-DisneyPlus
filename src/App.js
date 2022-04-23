import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import ProtectedRoutes from "./components/ProtectedRoutes"
import { Header, Home, Landing } from "./containers"
import { useAuth } from "./store/AuthContext"

// const Header = React.lazy(() => import("./containers/Header"))
// const Landing = React.lazy(() => import("./containers/Landing"))
// const Home = React.lazy(() => import("./containers/Home"))

const App = () => {
  const { isLoggedIn } = useAuth()
  return (
    <>
      <Header />
      <main>
        <Routes>
          {!isLoggedIn && <Route path="/" element={<Landing />} />}
          <Route element={<ProtectedRoutes />}>
            <Route path="home" element={<Home />} />
          </Route>
          <Route path="*" element={<Navigate to={"home"} />} />
        </Routes>
      </main>
    </>
  )
}

export default App
