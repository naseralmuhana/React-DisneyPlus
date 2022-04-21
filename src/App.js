import React from "react"
import { Route, Routes } from "react-router-dom"
import { Header, Home, Landing } from "./containers"

const App = () => {
  console.log("APP")
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </main>
    </>
  )
}

export default App
