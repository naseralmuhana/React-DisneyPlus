import React from "react"
import styles from "./index.module.css"

const Image = ({ src, alt }) => {
  return <img className={styles.img} src={src} alt={alt} />
}

export default Image
