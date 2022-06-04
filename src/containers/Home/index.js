import React from "react"
import { Helmet } from "react-helmet"
import { useMoviesContext } from "../../store/movies-context"
import ImgSlider from "./components/ImgSlider"
import Section from "./components/Section"
import Viewers from "./components/Viewers"
import styles from "./index.module.css"

const Home = () => {
  const { allMovies, trending, originals, recommended, newDisney } =
    useMoviesContext()
  console.log(allMovies)

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="https://disneyplus-clone-154aa.web.app/" />
        <meta
          name="description"
          content="Browse and Watch the latest movies and series online in Disney+"
        />
      </Helmet>
      <main className={styles.home}>
        <ImgSlider />
        <Viewers />
        <Section title="Recommended For You" movies={recommended} />
        <Section title="New to Disney+" movies={newDisney} />
        <Section title="Originals" movies={originals} />
        <Section title="Trending" movies={trending} />
      </main>
    </>
  )
}

export default React.memo(Home)
