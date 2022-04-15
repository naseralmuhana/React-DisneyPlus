import React from "react"
import classes from "./Navbar.module.css"
import homeIcon from "../../../../assets/images/home-icon.svg"
import searchIcon from "../../../../assets/images/search-icon.svg"
import watchListIcon from "../../../../assets/images/watchlist-icon.svg"
import originalIcon from "../../../../assets/images/original-icon.svg"
import movieIcon from "../../../../assets/images/movie-icon.svg"
import seriesIcon from "../../../../assets/images/series-icon.svg"
import NavbarItem from "./NavbarItem"

const navbarListIcons = [
  { label: "Home", icon: homeIcon, path: "/home" },
  { label: "Search", icon: searchIcon, path: "/search" },
  { label: "watchlist", icon: watchListIcon, path: "/watchList" },
  { label: "Originals", icon: originalIcon, path: "/original" },
  { label: "Movies", icon: movieIcon, path: "/movies" },
  { label: "Series", icon: seriesIcon, path: "/series" },
]

const Navbar = () => {
  const navbarListItem = (
    <ul className={classes.nav__list}>
      {navbarListIcons.map((item) => (
        <NavbarItem
          key={item.label}
          src={item.icon}
          label={item.label}
          path={item.path}
        />
      ))}
    </ul>
  )
  return <nav className={classes.nav}>{navbarListItem}</nav>
}

export default Navbar
