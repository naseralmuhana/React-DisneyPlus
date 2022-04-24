import { doc, getDoc } from "firebase/firestore"
import db from "../firebase"

export const getMovie = async (id) => {
  const docRef = doc(db, "movies", id)
  const docSnap = await getDoc(docRef)
  return docSnap.data()
}
export const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await response.json()
  if (!response.ok) {
    throw new Error(data.message || "failed to fetch")
  }
  return data
}
