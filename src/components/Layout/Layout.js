import React from "react"
import Header from "./Header/Header"

const Layout = ({ children, ...props }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
