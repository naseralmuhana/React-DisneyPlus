import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"
import { AuthProvider } from "./store/auth-context"
import {MoviesProvider} from "./store/movies-context"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <AuthProvider>
    <MoviesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MoviesProvider>
  </AuthProvider>
)
