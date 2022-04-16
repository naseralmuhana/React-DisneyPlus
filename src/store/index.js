import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/user-slice"

// create the configureStore
// add every reducer from every slice
export default configureStore({
  reducer: {
    user: userReducer,
  },
})
