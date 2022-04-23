import React from "react"
import Slider from "./components/Slider"
import styles from "./index.module.css"

const Home = () => {
  console.log("HOME")
  return (
    <main className={styles.home}>
      <Slider />
    </main>
  )
}

export default React.memo(Home)
