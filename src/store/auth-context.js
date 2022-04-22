import { signInWithPopup, signOut } from "firebase/auth"
import React, { useContext, useEffect, useState } from "react"
import { auth, provider } from "../firebase"

const AuthContext = React.createContext({
  currentUser: "",
  login: async () => {},
  logout: async () => {},
})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  // check if current user is authenticated
  // then set current user if found
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setCurrentUser(user))
    return unsubscribe
  }, [])

  // login method
  const login = () => signInWithPopup(auth, provider)

  // logout method
  const logout = () => signOut(auth)

  // context values
  const contextValue = {
    currentUser,
    login,
    logout,
  }
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}
