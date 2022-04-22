import React from "react"
import classes from "./SingleSlide.module.css"

const SingleSlide = ({ src, path = "#" }) => {
  return (
    <div className={classes.singleSlide}>
      <a href={path}>
        <img src={src} alt={src} />
      </a>
    </div>
  )
}

export default SingleSlide
