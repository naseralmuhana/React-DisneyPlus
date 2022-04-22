import React from "react"
import classes from "./Logo.module.css"

const Logo = ({ src, alt = "logo" }) => {
  return <img className={classes.logo} src={src} alt={alt} />
}

export default Logo
