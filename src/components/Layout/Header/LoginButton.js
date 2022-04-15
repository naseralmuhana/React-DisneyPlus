import { onAuthStateChanged, signInWithPopup } from "firebase/auth"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { auth, provider } from "../../../firebase"
import { setUser } from "../../../store/actions/user-action"
import classes from "./LoginButton.module.css"

const LoginButton = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(setUser(user))
        navigate("/home", { replace: true })
      } else {
        navigate("/", { replace: true })
      }
    })
  }, [navigate, dispatch])

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(setUser(result.user))
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <button onClick={handleAuth} className={classes.header__loginButton}>
      Login
    </button>
  )
}

export default LoginButton
