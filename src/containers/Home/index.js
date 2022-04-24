import React from "react"
import { useMoviesContext } from "../../store/movies-context"
import ImgSlider from "./components/ImgSlider"
import Section from "./components/Section"
import Viewers from "./components/Viewers"
import styles from "./index.module.css"

const Home = () => {
  console.log("HOME")
  const { trending, originals, recommended, newDisney } = useMoviesContext()

  return (
    <main className={styles.home}>
      <ImgSlider />
      <Viewers />
      <Section title="Recommended For You" movies={recommended} />
      <Section title="New to Disney+" movies={newDisney} />
      <Section title="Originals" movies={originals} />
      <Section title="Trending" movies={trending} />
    </main>
  )
}

export default React.memo(Home)
