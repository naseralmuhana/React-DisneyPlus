import React from "react"
import { Route, Routes } from "react-router-dom"
import ProtectedRoutes from "./components/ProtectedRoutes"
import { Header, Home, Landing } from "./containers"

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
