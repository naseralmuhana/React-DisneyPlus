// exporting all images
// sliderImages
import badging from "./slider-badging.jpg"
import scale from "./slider-scale.jpg"
import badag from "./slider-badag.jpg"
import scales from "./slider-scales.jpg"
// navbarIcons
import homeIcon from "./home-icon.svg"
import movieIcon from "./movie-icon.svg"
import originalIcon from "./original-icon.svg"
import searchIcon from "./search-icon.svg"
import seriesIcon from "./series-icon.svg"
import watchListIcon from "./watchlist-icon.svg"
// viewersImages
import marvel from "./viewers-marvel.png"
import disney from "./viewers-disney.png"
import nationalGeo from "./viewers-national.png"
import pixar from "./viewers-pixar.png"
import starWars from "./viewers-starwars.png"

export const sliderImages = [badging, scale, badag, scales]

export const navbarIcons = [
  { label: "Home", src: homeIcon, path: "home" },
  { label: "Search", src: searchIcon, path: "search" },
  { label: "watchlist", src: watchListIcon, path: "watchList" },
  { label: "Originals", src: originalIcon, path: "original" },
  { label: "Movies", src: movieIcon, path: "movies" },
  { label: "Series", src: seriesIcon, path: "series" },
]
export const viewersData = [
  { label: "marvel", imgSrc: marvel, vidSrc: "videos/marvel.mp4" },
  { label: "disney", imgSrc: disney, vidSrc: "videos/disney.mp4" },
  {
    label: "nationalGeo",
    imgSrc: nationalGeo,
    vidSrc: "videos/national-geographic.mp4",
  },
  { label: "pixar", imgSrc: pixar, vidSrc: "videos/pixar.mp4" },
  { label: "starWars", imgSrc: starWars, vidSrc: "videos/star-wars.mp4" },
]

export { default as ctaLogoOne } from "./cta-logo-one.svg"
export { default as ctaLogoTwo } from "./cta-logo-two.png"
export { default as headerLogo } from "./logo.svg"
