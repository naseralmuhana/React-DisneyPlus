import React from "react"
import styles from "./Image.module.css"

const Image = ({ src }) => {
  return <img className={styles.logo} src={src} alt={src} />
}

export default Image
