import { signInWithPopup, signOut } from "firebase/auth"
import React, { useContext, useEffect, useState } from "react"
import { auth, provider } from "../firebase"
import useLocalStorage from "../hooks/use-localStorage"

const AuthContext = React.createContext({
  currentUser: {},
  isLoggedIn: false,
  login: async () => {},
  logout: async () => {},
})

export const AuthProvider = ({ children }) => {
  console.log("AuthProvider")
  const [currentUser, setCurrentUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", false)

  // Login
  const login = async () => {
    await signInWithPopup(auth, provider)
  }

  // Logout
  const logout = async () => await signOut(auth)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
      setIsLoggedIn(!!user)
    })
    return unsubscribe
  }, [])

  const contextValue = {
    currentUser,
    isLoggedIn,
    login,
    logout,
  }
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
