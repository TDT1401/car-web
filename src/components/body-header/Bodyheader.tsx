import React, { useState } from 'react'
import './Bodyheader.css'

const Bodyheader = () => {

      const cars = [
           {
            "img" : "./images/audia4.png",
            "name" :  "AuDi A4",
            "price": "Giá từ: Từ 1,695 tỷ VND Nhà sản xuất: Audi"
           },

           {
            "img" : "./images/audia4.png",
            "name" :  "Lamborghini",
            "price": "Giá từ: Từ 1,695 tỷ VND Nhà sản xuất: Audi"
           },

           {
            "img" :  "./images/bwmx5.jpg",
            "name" :  "Vinfast",
            "price": "Giá từ: Từ 1,695 tỷ VND Nhà sản xuất: Audi"
           },

      ]
  return (
       <div className='body-header'>
             <div className='container'>
                  <div className="body-content row">
                  {cars.map((value,key)=>{
                              return(
                              <div className="content-item row" key={key}>
                                    <div className="content-item-img">
                                          <img src={value.img} alt=""/>
                                    </div>
                                    <div className="content-item-text">
                                          <h2>{value.name}</h2>
                                          <p>{value.price}</p>
                                          <button className="btn">Khám phá</button>
                                    </div>
                              </div>
                              )
                        })}      
                  </div>
             </div>
             <div className='bg-[#379683] h-[70px] mt-3'>
                  <p className='pl-[128px] text-[#fff] text-[x-large] pt-4 '>WELCOME DT AUTO</p>
            </div>
            
       </div>
  )
}

export default Bodyheader