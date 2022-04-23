export const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime()
  const remainingTime = expirationTime - currentTime

  return remainingTime
}

export const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token")
  const storedExpiresInDate = localStorage.getItem("expiresInDate") // gets in date format
  const convertedDate = new Date(storedExpiresInDate).getTime() //convert date to timeStamp
  const remainingTime = calculateRemainingTime(convertedDate)

  if (remainingTime <= 5000) {
    localStorage.removeItem("token")
    localStorage.removeItem("expiresInDate")
    return null
  }

  return { token: storedToken, remainingTime }
}
