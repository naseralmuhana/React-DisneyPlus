import React, { Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import ProtectedRoutes from "./components/ProtectedRoutes"
import Loader from "./components/UI/Loader"
// import { Detail, Header, Home, Landing } from "./containers"
import { useAuth } from "./store/auth-context"

const Header = React.lazy(() => import("./containers/Header"))
const Landing = React.lazy(() => import("./containers/Landing"))
const Home = React.lazy(() => import("./containers/Home"))
const Detail = React.lazy(() => import("./containers/Detail"))

const App = () => {
  const { isLoggedIn } = useAuth()
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Routes>
        {!isLoggedIn && <Route path="/" element={<Landing />} />}
        <Route element={<ProtectedRoutes />}>
          <Route path="home" element={<Home />} />
          <Route path="detail/:movieId" element={<Detail />} />
        </Route>
        <Route path="*" element={<Navigate to={"home"} />} />
      </Routes>
    </Suspense>
  )
}

export default App
