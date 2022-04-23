import React from "react"
import { Link } from "react-router-dom"
import { headerLogo } from "../../assets/images"
import Button from "../../components/UI/Button"
import { useAuth } from "../../store/AuthContext"
import Navbar from "./components/Navbar"
import UserAvatar from "./components/Navbar/UserAvatar"
import styles from "./index.module.css"

const Header = () => {
  const { login, isLoggedIn, currentUser } = useAuth()
  const LoginHandler = () => login()

  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        <img className={styles.logo__img} src={headerLogo} alt="" />
      </Link>
      {isLoggedIn && <Navbar />}
      {!isLoggedIn && <Button onClick={LoginHandler}>Login</Button>}

      {isLoggedIn && (
        <UserAvatar
          photo={currentUser.photoURL}
          name={currentUser.displayName}
          className={styles.inactive}
        />
      )}
    </header>
  )
}

export default Header
