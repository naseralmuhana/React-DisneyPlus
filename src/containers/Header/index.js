import React from "react"
import { Link } from "react-router-dom"
import { headerLogo } from "../../assets/images"
import Button from "../../components/UI/Button"
import Navbar from "./components/Navbar"
import styles from "./index.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        <img className={styles.logo__img} src={headerLogo} alt="" />
      </Link>
      {/* <Navbar /> */}
      <Button >
        Login
      </Button>
    </header>
  )
}

export default Header
