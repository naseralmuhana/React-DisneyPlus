import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"
import { groupIcon, playBlack, playWhite } from "../../assets/images"
import Button from "../../components/UI/Button"
import Loader from "../../components/UI/Loader"
import { useMoviesContext } from "../../store/movies-context"
import ButtonDiv from "./components/ButtonDiv"
import ImageDiv from "./components/ImageDiv"
import styles from "./index.module.css"

const Detail = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)
  const { allMovies } = useMoviesContext()

  useEffect(() => {
    const selectedMovie = allMovies.filter((movie) => movie.id === movieId)
    setMovie(...selectedMovie)
  }, [allMovies, movieId])

  if (!movie) return <Loader />

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{movie.title}</title>
        <link rel="canonical" href="https://disneyplus-clone-154aa.web.app/" />
        <meta name="description" content={movie.description} />
      </Helmet>
      <section className={styles.detail}>
        <ImageDiv
          className={styles.background}
          src={movie.backgroundImg}
          alt={movie.title}
        />
        <ImageDiv
          className={styles.titleImg}
          src={movie.titleImg}
          alt={movie.title}
        />
        <div className={styles.content}>
          <div className={styles.actions}>
            <ButtonDiv className="light" src={playBlack} label="play" />
            <ButtonDiv className="dark" src={playWhite} label="Trailer" />
            <div className={styles.circles}>
              <Button className={`${styles.btn_circle} ${styles.fav}`}></Button>
              <Button className={`${styles.btn_circle} ${styles.group}`}>
                <img src={groupIcon} alt="" />
              </Button>
            </div>
          </div>
          <div className={styles.subTitle}>{movie.subTitle}</div>
          <div className={styles.description}>{movie.description}</div>
        </div>
      </section>
    </>
  )
}

export default Detail

// import { useNavigate, useParams } from "react-router-dom"
// import { getMovie } from "../../api/http"
// import Loader from "../../components/UI/Loader"
// import useHttp from "../../hooks/use-http"

// const navigate = useNavigate()
// const { sendRequest, status, data, error } = useHttp(true)

// useEffect(() => {
//   if (error) navigate("/home", { replace: true })
// }, [error, navigate])

// useEffect(() => {
//   sendRequest(getMovie, movieId)
// }, [sendRequest, movieId])

// if (status === "pending") {
//   return <Loader />
// }
// if (data) console.log("data", "=>", data)
