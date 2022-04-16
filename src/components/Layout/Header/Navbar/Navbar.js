import homeIcon from "../../../../assets/images/home-icon.svg"
import movieIcon from "../../../../assets/images/movie-icon.svg"
import originalIcon from "../../../../assets/images/original-icon.svg"
import searchIcon from "../../../../assets/images/search-icon.svg"
import seriesIcon from "../../../../assets/images/series-icon.svg"
import watchListIcon from "../../../../assets/images/watchlist-icon.svg"
import classes from "./Navbar.module.css"
import NavbarItem from "./NavbarItem"

// Navigate List Icons with its label and path

const navbarListIcons = [
  { label: "Home", icon: homeIcon, path: "/home" },
  { label: "Search", icon: searchIcon, path: "/search" },
  { label: "watchlist", icon: watchListIcon, path: "/watchList" },
  { label: "Originals", icon: originalIcon, path: "/original" },
  { label: "Movies", icon: movieIcon, path: "/movies" },
  { label: "Series", icon: seriesIcon, path: "/series" },
]

const Navbar = () => {
  // map navbarListIcons and send the info to the NavbarItem
  const navbarListItem = (
    <ul className={classes.nav__list}>
      {navbarListIcons.map((item) => (
        <NavbarItem key={item.label} {...item} />
      ))}
    </ul>
  )
  return <nav className={classes.nav}>{navbarListItem}</nav>
}

export default Navbar
