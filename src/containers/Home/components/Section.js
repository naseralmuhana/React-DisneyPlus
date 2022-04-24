import React from "react"
import { Link } from "react-router-dom"
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
            <Link to={`/detail/${movie.id}`}>
              <Image src={movie.cardImg} alt={movies.title} />
            </Link>
          </Item>
        ))}
      </ul>
    </section>
  )
}

export default Section
