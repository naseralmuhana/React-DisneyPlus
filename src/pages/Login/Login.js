import logoOne from "../../assets/images/cta-logo-one.svg"
import logoTwo from "../../assets/images/cta-logo-two.png"
import Logo from "./components/Logo"
import classes from "./Login.module.css"

const Login = () => {
  return (
    <section className={classes.login}>
      <div className={classes.background__image}></div>
      <div className={classes.content}>
        <div className={classes.content__body}>
          <Logo src={logoOne} />
          <a href="/#" className={classes.content__signUp}>
            GET ALL THERE
          </a>
          <p className={classes.content__description}>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </p>
          <Logo src={logoTwo} />
        </div>
      </div>
    </section>
  )
}

export default Login
