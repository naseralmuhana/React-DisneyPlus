import React from "react"
import { useAuth } from "../../../../store/auth-context"
import styles from "./UserAvatar.module.css"

const UserAvatar = ({ photo, name, className, ...props }) => {
  const cssClasses = className ? `${styles.avatar} ${className}` : styles.avatar
  const { logout } = useAuth()
  const LogoutHandler = () => logout()

  return (
    <div className={cssClasses} {...props}>
      <img src={photo} alt={name} />
      <div className={styles.dropdown}>
        <span onClick={LogoutHandler}>Sign out</span>
      </div>
    </div>
  )
}

export default UserAvatar
