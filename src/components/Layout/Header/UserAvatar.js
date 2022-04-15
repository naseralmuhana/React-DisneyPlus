import { signOut } from "firebase/auth"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { auth } from "../../../firebase"
import {
  selectedUserName,
  selectedUserPhoto,
  setSignOutState,
} from "../../../store/slices/user-slice"
import classes from "./UserAvatar.module.css"

const UserAvatar = () => {
  const userPhoto = useSelector(selectedUserPhoto)
  const username = useSelector(selectedUserName)
  const dispatch = useDispatch()

  const handleAuth = () => {
    signOut(auth)
      .then(() => {
        dispatch(setSignOutState())
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <div className={classes.userAvatar}>
      <img
        className={classes.userAvatar__image}
        src={userPhoto}
        alt={username}
      />
      <div className={classes.userAvatar__dropdown}>
        <span onClick={handleAuth}>Sign out</span>
      </div>
    </div>
  )
}

export default UserAvatar
