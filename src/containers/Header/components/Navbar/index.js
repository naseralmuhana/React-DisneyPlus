import React, { useState } from "react"
import OutsideClickHandler from "react-outside-click-handler"
import { navbarIcons } from "../../../../data"
import { useAuth } from "../../../../store/AuthContext"
import styles from "./index.module.css"
import NavItem from "./NavItem"
import UserAvatar from "./UserAvatar"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const { currentUser } = useAuth()
  const toggleMenuHandler = () => setToggleMenu((state) => !state)
  const hideMenuHandler = () => setToggleMenu(false)

  const menuCssClasses = toggleMenu
    ? `${styles.menu__btn} ${styles.open}`
    : styles.menu__btn

  const navbarIconsList = navbarIcons.map((icon) => (
    <NavItem key={icon.label} onCloseMenu={hideMenuHandler} {...icon} />
  ))

  return (
    <>
      <nav className={styles.nav}>
        <OutsideClickHandler onOutsideClick={hideMenuHandler}>
          <div className={menuCssClasses} onClick={toggleMenuHandler}>
            <div className={styles.menu__btnBurger}></div>
          </div>
          <ul className={styles.nav__list} data-visible={toggleMenu}>
            {navbarIconsList}
            <UserAvatar
              className={styles.active}
              photo={currentUser.photoURL}
              name={currentUser.displayName}
            />
          </ul>
        </OutsideClickHandler>
      </nav>
    </>
  )
}

export default Navbar
