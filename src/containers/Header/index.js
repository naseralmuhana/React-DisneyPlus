import React from "react"
import { Link } from "react-router-dom"
import { headerLogo } from "../../assets/images"
import Button from "../../components/UI/Button"
import { useAuth } from "../../store/AuthContext"
import Navbar from "./components/Navbar"
import styles from "./index.module.css"

const Header = () => {
  const { login, logout, isLoggedIn } = useAuth()
  const LoginHandler = () => login()
  const LogoutHandler = () => logout()

  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        <img className={styles.logo__img} src={headerLogo} alt="" />
      </Link>
      {isLoggedIn && <Navbar />}
      {!isLoggedIn && <Button onClick={LoginHandler}>Login</Button>}
      {isLoggedIn && <Button onClick={LogoutHandler}>Logout</Button>}
    </header>
  )
}

export default Header
