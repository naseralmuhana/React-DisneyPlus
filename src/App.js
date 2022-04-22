import React, { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import ProtectedRoutes from "./components/ProtectedRoutes"
import { Header, Home, Landing } from "./containers"

// const Header = React.lazy(() => import("./containers/Header"))
// const Landing = React.lazy(() => import("./containers/Landing"))
// const Home = React.lazy(() => import("./containers/Home"))

const App = () => {
  console.log("APP")
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="home" element={<Home />} />
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App
