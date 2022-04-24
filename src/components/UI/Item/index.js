import React from "react"
import styles from "./index.module.css"

const Item = ({ children, className }) => {
  const cssClasses = className ? `${styles.item} ${className}` : styles.item

  return <li className={cssClasses}>{children}</li>
}

export default Item
