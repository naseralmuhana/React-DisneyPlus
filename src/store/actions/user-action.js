import { setUserLoginDetails } from "../slices/user-slice"

export const setUser = (user) => {
  return (dispatch) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    )
  }
}
