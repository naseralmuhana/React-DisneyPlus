import { doc, getDoc } from "firebase/firestore"
import db from "../firebase"

export const getMovie = async (id) => {
  const docRef = doc(db, "movies", id)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    throw new Error("No such document!")
  }
}
