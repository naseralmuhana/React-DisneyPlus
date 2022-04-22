import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { headerLogo } from "../../assets/images"
import Button from "../../components/UI/Button"
import { useAuth } from "../../store/auth-context"
import Navbar from "./components/Navbar"
import styles from "./index.module.css"

const Header = () => {
  console.log("Header")
  const { currentUser, logout, login } = useAuth()
  const navigate = useNavigate()

  const LoginHandler = async () => {
    try {
      await login()
      navigate("home", { replace: true })
    } catch (error) {
      alert(error)
    }
  }
  const LogoutHandler = async () => {
    await logout()
    navigate("/", { replace: true })
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
