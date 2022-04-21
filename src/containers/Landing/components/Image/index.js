import React from "react"
import styles from "./index.module.css"

const Image = ({ src }) => {
  return <img className={styles.logo} src={src} alt={src} />
}

export default Image
