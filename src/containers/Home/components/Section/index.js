import React from "react"
import Item from "../../../../components/UI/Item"
import styles from "./index.module.css"

const Section = ({ title }) => {
  return (
    <section className={styles.section}>
      <h4>{title}</h4>
      <ul>
        {["movie1", "movie2", "movie3", "movie4"].map((movie) => (
          <Item>
            <h1>{movie}</h1>
          </Item>
        ))}
      </ul>
    </section>
  )
}

export default Section
