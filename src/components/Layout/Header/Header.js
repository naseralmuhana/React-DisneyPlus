import { useSelector } from "react-redux"
import logo from "../../../assets/images/logo.svg"
import { selectedUserName } from "../../../store/slices/user-slice"
import classes from "./Header.module.css"
import LoginButton from "./LoginButton"
import Navbar from "./Navbar/Navbar"
import UserAvatar from "./UserAvatar"

const Header = () => {
  const username = useSelector(selectedUserName)

  const headerContent = !username ? (
    <LoginButton />
  ) : (
    <>
      <Navbar />
      <UserAvatar />
    </>
  )

  return (
    <header className={classes.header}>
      <a className={classes.header__logo} href="/">
        <img
          className={classes.header__logoImage}
          src={logo}
          alt="Disney Logo"
        />
      </a>
      {headerContent}
    </header>
  )
}

export default Header
