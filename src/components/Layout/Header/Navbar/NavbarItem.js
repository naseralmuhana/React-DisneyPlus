import { NavLink } from "react-router-dom"
import classes from "./NavbarItem.module.css"

const NavbarItem = ({ src, label, path }) => {
  const navLinkClass = ({ isActive }) => (isActive ? classes.active : undefined)

  return (
    <li className={classes.nav__ListItem}>
      <NavLink className={navLinkClass} to={path}>
        <img src={src} alt={label} />
        <span>{label}</span>
      </NavLink>
    </li>
  )
}

export default NavbarItem
