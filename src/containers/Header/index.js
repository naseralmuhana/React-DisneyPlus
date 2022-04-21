import React from "react"
import { Link } from "react-router-dom"
import { headerLogo } from "../../assets/images"
import { Navbar } from "./components"
import styles from "./index.module.css"

const Header = () => {
  console.log("HEADER")
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        <img className={styles.logo__img} src={headerLogo} alt="" />
      </Link>
      <Navbar />
      {/* <button>Login</button> */}
    </header>
  )
}

export default Header
