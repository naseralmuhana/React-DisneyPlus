import React from "react"
import { viewersData } from "../../../assets/images"
import Image from "../../../components/UI/Image"
import Item from "../../../components/UI/Item"
import styles from "./Viewers.module.css"

const Viewers = () => {
  return (
    <section className={styles.viewers}>
      <ul>
        {viewersData.map((viewer, index) => (
          <Item key={index}>
            <Image src={viewer.imgSrc} alt={viewer.label} />
            <video autoPlay={true} loop={true} playsInline={true} muted>
              <source src={viewer.vidSrc} type="video/mp4" />
            </video>
          </Item>
        ))}
      </ul>
    </section>
  )
}

export default Viewers
