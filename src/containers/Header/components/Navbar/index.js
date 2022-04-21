import React, { useState } from "react"
import { navbarIcons } from "../../../../data"
import NavItem from "./NavItem"
import styles from "./index.module.css"
import OutsideClickHandler from "react-outside-click-handler"

const Navbar = () => {
  console.log("NAVBAR")
  const [toggleMenu, setToggleMenu] = useState(false)

  const toggleMenuHandler = () => setToggleMenu((state) => !state)
  const hideMenuHandler = () => setToggleMenu(false)

  const menuCssClasses = toggleMenu
    ? `${styles.menu__btn} ${styles.open}`
    : styles.menu__btn

  return (
    <>
      <nav className={styles.nav}>
        <OutsideClickHandler onOutsideClick={hideMenuHandler}>
          <ul className={styles.nav__list} data-visible={toggleMenu}>
            {navbarIcons.map((icon) => (
              <NavItem
                key={icon.label}
                onCloseMenu={hideMenuHandler}
                {...icon}
              />
            ))}
          </ul>
          <div className={menuCssClasses} onClick={toggleMenuHandler}>
            <div className={styles.menu__btnBurger}></div>
          </div>
        </OutsideClickHandler>
      </nav>
    </>
  )
}

export default Navbar
