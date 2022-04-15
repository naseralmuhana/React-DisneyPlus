import { NavLink } from "react-router-dom"
import classes from "./NavbarItem.module.css"

const NavbarItem = ({ src, label, path, ...props }) => {
  return (
    <li className={classes.nav__ListItem}>
      <NavLink
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        to={path}
      >
        <img src={src} alt={label} />
        <span>{label}</span>
      </NavLink>
    </li>
  )
}

export default NavbarItem
