import React from "react"
import { ctaLogoOne, ctaLogoTwo } from "../../assets/images"
import Image from "./components/Image"
import styles from "./index.module.css"

const Landing = () => {
  console.log("LANDING")
  return (
    <main className={styles.landing}>
      <div className={styles.background} />
      <div className={styles.content}>
        <div className={styles.content__body}>
          <Image src={ctaLogoOne} />
          <a className={styles.content__btn} href="/">
            Get all there
          </a>
          <p className={styles.content__description}>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </p>
          <Image src={ctaLogoTwo} />
        </div>
      </div>
    </main>
  )
}

export default React.memo(Landing)
