import { collection, query, getDocs } from "firebase/firestore"
import React, { useCallback, useContext, useEffect, useReducer } from "react"
import db from "../firebase"
// Initial State
const initialState = {
  allMovies: [],
  recommended: [],
  newDisney: [],
  originals: [],
  trending: [],
}
// helper
const filter = (list, type) => {
  return list.filter((item) => item.type === type)
}

const MoviesContext = React.createContext(initialState)

const moviesReducer = (state, action) => {
  if (action.type === "FETCH") {
    const movies = action.movies
    return {
      allMovies: movies,
      recommended: filter(movies, "recommend"),
      newDisney: filter(movies, "new"),
      originals: filter(movies, "original"),
      trending: filter(movies, "trending"),
    }
  }
  return state
}

export const MoviesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, initialState)

  const sendRequest = useCallback(async () => {
    const q = query(collection(db, "movies"))

    const querySnapshot = await getDocs(q)
    let movies = []
    querySnapshot.forEach((doc) => {
      movies.push({ id: doc.id, ...doc.data() })
    })
    dispatch({ type: "FETCH", movies })
  }, [])

  useEffect(() => {
    sendRequest()
  }, [sendRequest])

  const contextValue = {
    allMovies: state.allMovies,
    recommended: state.recommended,
    newDisney: state.newDisney,
    originals: state.originals,
    trending: state.trending,
  }
  return (
    <MoviesContext.Provider value={contextValue}>
      {children}
    </MoviesContext.Provider>
  )
}

export const useMoviesContext = () => useContext(MoviesContext)
