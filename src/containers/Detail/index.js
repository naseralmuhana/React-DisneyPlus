import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getMovie, getPosts } from "../../api/http"
import useHttp from "../../hooks/use-http"

const Detail = () => {
  console.log("DETAIL")
  // const { movieId } = useParams()
  // console.log(movieId);
  const { sendRequest, status, data, error } = useHttp()

  useEffect(() => {
    console.log("useEffect")
    sendRequest(getPosts)
  }, [sendRequest])

  if (status) console.log("status", "=>", status)
  if (data) console.log("data", "=>", data)
  if (error) console.log("error", "=>", error)
  return <div>Detail</div>
}

export default Detail
// 46sO2kLHVOl0a4Rpg9sm
