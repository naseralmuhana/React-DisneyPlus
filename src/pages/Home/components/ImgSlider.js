import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import badagSlide from "../../../assets/images/slider-badag.jpg"
import badgingSlide from "../../../assets/images/slider-badging.jpg"
import scaleSlide from "../../../assets/images/slider-scale.jpg"
import scalesSlide from "../../../assets/images/slider-scales.jpg"
import "./ImgSlider.css"
import SingleSlide from "./SingleSlide"

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <Slider className="slider" {...settings}>
      <SingleSlide src={badgingSlide} />
      <SingleSlide src={scaleSlide} />
      <SingleSlide src={badagSlide} />
      <SingleSlide src={scalesSlide} />
    </Slider>
  )
}

export default ImgSlider
