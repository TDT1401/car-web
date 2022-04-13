import React,{useRef, useState} from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slidebar.css";

// import required modules
import { Pagination } from "swiper";

const Slidebar = () => {

  const [imgurl,setImgurl] = useState([
    "./images/audia4.png",
    "./images/lamborghini.webp",
    "./images/bwmx5.jpg",
    "./images/lamborghininero.webp",
    "./images/lexus.jpg",
    "./images/mercedes-G63.jpg",
    "./images/porsche4s.jpg",
    "./images/vinFast-Lux-SA2.0.png",
    "./images/volvo.webp",
    
])


  return (
    <>
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      {imgurl.map((value,key)=>{
          return(
            <SwiperSlide key={key}>
              <img src={value} alt="" />
            </SwiperSlide>
          )
      })}
    </Swiper>
  </>
  )
}

export default Slidebar;