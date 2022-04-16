import { createSlice } from "@reduxjs/toolkit"

// initialState all empty because the initial State of the Auth in this app is not Login
const initialState = {
  name: "",
  email: "",
  photo: "",
}

// userSlice to manage signIn and signOut
// setUserLoginDetails set the user credentials
// setSignOutState empty the user
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
      state.photo = action.payload.photo
    },
    setSignOutState: (state) => {
      state.name = null
      state.email = null
      state.photo = null
    },
  },
})

export const { setUserLoginDetails, setSignOutState } = userSlice.actions

export const selectedUserName = (state) => state.user.name
export const selectedUserEmail = (state) => state.user.email
export const selectedUserPhoto = (state) => state.user.photo

export default userSlice.reducer
