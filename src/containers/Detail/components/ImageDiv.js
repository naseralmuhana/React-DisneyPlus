import React from "react"

const ImageDiv = ({ className, src, alt }) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} />
    </div>
  )
}

export default ImageDiv
