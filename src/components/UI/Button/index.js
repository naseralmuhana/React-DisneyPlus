import React from "react"
import styles from "./index.module.css"

const Button = ({ children, className, ...props }) => {
  const cssClasses = className ? `${styles.button} ${className}` : styles.button

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  )
}

export default Button
