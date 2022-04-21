import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./NavItem.module.css"

const NavItem = ({ label, src, path, onCloseMenu }) => {
  const navItemHandler = () => {
    onCloseMenu()
  }
  return (
    <li className={styles.item}>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : undefined)}
        to={path}
        onClick={navItemHandler}
      >
        <img src={src} alt={label} />
        <span>{label}</span>
      </NavLink>
    </li>
  )
}

export default NavItem
