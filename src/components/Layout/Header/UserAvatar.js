import { signOut } from "firebase/auth"
import React from "react"
import { useDispatch } from "react-redux"
import { auth } from "../../../firebase"
import { setSignOutState } from "../../../store/slices/user-slice"
import classes from "./UserAvatar.module.css"

const UserAvatar = ({ name, photo }) => {
  const dispatch = useDispatch()

  const handleAuth = () => {
    // sign out handler
    // using signOut firebase built-in method
    signOut(auth)
      .then(() => {
        // dispatch setSignOutState action from user slice actions
        dispatch(setSignOutState())
      })
      .catch((error) => {
        // if catching error (alert the user)
        alert(error.message)
      })
  }

  return (
    <div className={classes.userAvatar}>
      <img className={classes.userAvatar__image} src={photo} alt={name} />
      <div className={classes.userAvatar__dropdown}>
        <span onClick={handleAuth}>Sign out</span>
      </div>
    </div>
  )
}

export default UserAvatar
