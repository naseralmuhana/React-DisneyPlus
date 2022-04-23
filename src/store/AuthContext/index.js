import { signInWithPopup, signOut } from "firebase/auth"
import React, {
  useCallback,
  useContext,
  useEffect,
  useReducer
} from "react"
import { auth, provider } from "../../firebase"
import { calculateRemainingTime, retrieveStoredToken } from "./helper"

const AuthContext = React.createContext({
  currentUser: {},
  token: "",
  isLoggedIn: false,
  login: async () => {},
  logout: async () => {},
})

let logoutTimer

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      const { currentUser, token, expiresInTS } = action.data
      const expiresInDate = new Date(expiresInTS)

      // save to localStorage
      localStorage.setItem("token", token)
      localStorage.setItem("expiresInDate", expiresInDate)

      return {
        currentUser,
        token,
        isLoggedIn: !!token,
      }

    case "LOGOUT":
      // remove from localStorage
      localStorage.removeItem("token")
      localStorage.removeItem("expiresInDate")

      return {
        currentUser: {},
        token: null,
        isLoggedIn: false,
      }

    default:
      return state
  }
}

export const AuthProvider = ({ children }) => {
  const tokenData = retrieveStoredToken()

  let initialToken = null
  if (tokenData) {
    initialToken = tokenData.token
  }

  const [authState, dispatch] = useReducer(authReducer, {
    currentUser: {},
    token: initialToken,
    isLoggedIn: !!initialToken,
  })

  // Login
  const login = async () => {
    const responseData = await signInWithPopup(auth, provider)
    // Data
    const currentUser = responseData.user
    const token = currentUser.stsTokenManager.accessToken
    const expiresInTS = currentUser.stsTokenManager.expirationTime // TimeStamp
    const remainingTime = calculateRemainingTime(expiresInTS) // milliseconds

    const data = {
      currentUser,
      token,
      expiresInTS,
    }
    dispatch({ type: "LOGIN", data })

    logoutTimer = setTimeout(() => {
      logout()
    }, remainingTime)
  }

  // Logout
  const logout = useCallback(async () => {
    await signOut(auth)
    dispatch({ type: "LOGOUT" })

    if (logoutTimer) {
      clearTimeout(logoutTimer)
    }
  }, [])

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(() => {
        logout()
      }, tokenData.remainingTime)
    }
  }, [tokenData, logout])

  const contextValue = {
    currentUser: authState.currentUser,
    token: authState.token,
    isLoggedIn: authState.isLoggedIn,
    login,
    logout,
  }
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
