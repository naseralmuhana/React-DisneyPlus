import React from "react"
import { Link } from "react-router-dom"
import { headerLogo } from "../../assets/images"
import Button from "../../components/UI/Button"
import { useAuth } from "../../store/auth-context"
import Navbar from "./components/Navbar"
import styles from "./index.module.css"

const Header = () => {
  const { currentUser, logout, login } = useAuth()

  const LoginHandler = async () => {
    try {
      const result = await login()
      console.log("result", result)
    } catch (error) {
      console.log(error.message)
    }
  }
  const LogoutHandler = async () => {
    try {
      const result = await logout()
      console.log("result", result)
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        <img className={styles.logo__img} src={headerLogo} alt="" />
      </Link>
      {currentUser && <Navbar />}
      {!currentUser && <Button onClick={LoginHandler}>Login</Button>}
      {currentUser && <Button onClick={LogoutHandler}>Logout</Button>}
    </header>
  )
}

export default Header
