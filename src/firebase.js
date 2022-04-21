import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDkXO8TVMFu554Udm1Myq3Jqr0BTqI7ztk",
  authDomain: "disney-clone-1d29f.firebaseapp.com",
  projectId: "disney-clone-1d29f",
  storageBucket: "disney-clone-1d29f.appspot.com",
  messagingSenderId: "368082226016",
  appId: "1:368082226016:web:dbd87f86c17a6f83a32c05",
  measurementId: "G-ZNBMNBWGBJ",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const auth = getAuth(app)
export const storage = getStorage(app)
export const provider = new GoogleAuthProvider()

export default db
