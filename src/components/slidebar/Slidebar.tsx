import React,{useRef, useState} from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Slidebar = () => {

  const [imgurl,setImgurl] = useState([
    "./images/swiper1.jpg",
    "./images/swiper9.jpg",
    "./images/swiper8.jpg",
    "./images/swiper7.jpg",
    "./images/swiper6.jpg",
    "./images/swiper5.jpg",
    "./images/swiper4.jpg",
    "./images/swiper3.jpg",
    "./images/swiper2.jpg",
    
])


  return (
    <>
    <Swiper pagination={true} modules={[Pagination]} className="w-full h-full mt-5">
      {imgurl.map((value,key)=>{
          return(
            <SwiperSlide key={key}>
              <img className='w-[50%]' src={value} alt="" />
            </SwiperSlide>
          )
      })}
    </Swiper>
  </>
  )
}

export default Slidebar;