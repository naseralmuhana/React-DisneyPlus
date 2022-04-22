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
    // To check if the user is already logged in
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // if user found
        // set the user credentials automatically into redux
        // then navigate to the home page
        dispatch(setUser(user))
        navigate("/home", { replace: true })
      } else {
        // if user not found
        // navigate to the Login page(the starting page)
        navigate("/", { replace: true })
      }
    })
  }, [navigate, dispatch])

  const handleAuth = async () => {
    // Sign In using firebase auth
    signInWithPopup(auth, provider)
      .then((result) => {
        // set user credentials in redux to use it somewhere else
        dispatch(setUser(result.user))
      })
      .catch((error) => {
        // if catching error (alert the user)
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
