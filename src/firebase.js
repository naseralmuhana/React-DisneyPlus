import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAtF5xTLh7cKFIuKKtKQ2IKtMCpV6yius4",
  authDomain: "disneyplus-clone-154aa.firebaseapp.com",
  projectId: "disneyplus-clone-154aa",
  storageBucket: "disneyplus-clone-154aa.appspot.com",
  messagingSenderId: "853354537800",
  appId: "1:853354537800:web:1940dd348124420a6b497d",
  measurementId: "G-8K86PYGMSN",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const auth = getAuth(app)
export const storage = getStorage(app)
export const provider = new GoogleAuthProvider()

export default db
