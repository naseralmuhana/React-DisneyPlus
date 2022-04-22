import { useSelector } from "react-redux"
import logo from "../../../assets/images/logo.svg"
import {
  selectedUserName,
  selectedUserPhoto,
} from "../../../store/slices/user-slice"
import classes from "./Header.module.css"
import LoginButton from "./LoginButton"
import Navbar from "./Navbar/Navbar"
import UserAvatar from "./UserAvatar"

const Header = () => {
  // Get the userInfo [username,userPhoto] from the store(redux)
  // to change the header content and pass the userInfo to the userAvatar
  const username = useSelector(selectedUserName)
  const userPhoto = useSelector(selectedUserPhoto)

  // Check if there is user then show the Navigation and the UserAvatar
  // if not found show the LoginButton
  const headerContent = !username ? (
    <LoginButton />
  ) : (
    <>
      <Navbar />
      <UserAvatar name={username} photo={userPhoto} />
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
