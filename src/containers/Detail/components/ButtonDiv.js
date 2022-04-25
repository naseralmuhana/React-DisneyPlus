import React from "react"
import Button from "../../../components/UI/Button"
import styles from "./ButtonDiv.module.css"

const ButtonDiv = ({ className, src, alt = "", label }) => {
  return (
    <Button className={styles[className]}>
      <img src={src} alt={alt} />
      <span>{label}</span>
    </Button>
  )
}

export default ButtonDiv
