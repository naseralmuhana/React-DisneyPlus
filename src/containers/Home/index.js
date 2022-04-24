import React from "react"
import ImgSlider from "./components/ImgSlider"
import styles from "./index.module.css"

const Home = () => {
  console.log("HOME")
  return (
    <main className={styles.home}>
      <ImgSlider />
    </main>
  )
}

export default React.memo(Home)
