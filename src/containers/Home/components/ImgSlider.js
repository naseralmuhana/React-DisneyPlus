import React from "react"
import { Link } from "react-router-dom"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import { sliderImages } from "../../../assets/images"
import "./ImgSlider.css"

const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
}

const ImgSlider = () => {
  return (
    <Slider {...settings} className="slider">
      {sliderImages.map((image, index) => (
        <div key={index} className="slider__item">
          <Link to={"/home"}>
            <img src={image} alt="" />
          </Link>
        </div>
      ))}
    </Slider>
  )
}

export default ImgSlider
