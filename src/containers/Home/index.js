import React from "react"
import ImgSlider from "./components/ImgSlider"
import Section from "./components/Section"
import Viewers from "./components/Viewers"
import styles from "./index.module.css"

const Home = () => {
  console.log("HOME")
  return (
    <main className={styles.home}>
      <ImgSlider />
      <Viewers />
      <Section title="Recommended For You" />
      <Section title="New to Disney+" />
      <Section title="Originals" />
    </main>
  )
}

export default React.memo(Home)
