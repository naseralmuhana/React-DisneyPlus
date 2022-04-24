import React from "react"
import { viewersData } from "../../../assets/images"
import styles from "./Viewers.module.css"

const Viewers = () => {
  return (
    <section className={styles.viewers}>
      {viewersData.map((viewer, index) => (
        <div key={index} className={styles.wrap}>
          <img src={viewer.imgSrc} alt={viewer.label} />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src={viewer.vidSrc} type="video/mp4" />
          </video>
        </div>
      ))}
    </section>
  )
}

export default Viewers
