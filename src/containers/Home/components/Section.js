import React from "react"
import Image from "../../../components/UI/Image"
import Item from "../../../components/UI/Item"
import styles from "./Section.module.css"

const Section = ({ title, movies }) => {
  return (
    <section className={styles.section}>
      <h4>{title}</h4>
      <ul>
        {movies.map((movie) => (
          <Item key={movie.id}>
            <a href="/">
              <Image src={movie.cardImg} alt={movies.title} />
            </a>
          </Item>
        ))}
      </ul>
    </section>
  )
}

export default Section
