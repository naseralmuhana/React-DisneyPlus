import React from "react"
import ImgSlider from "./components/ImgSlider"
import classes from "./Home.module.css"

const Home = () => {
  return (
    <main className={classes.main}>
      <ImgSlider />
    </main>
  )
}

export default Home
