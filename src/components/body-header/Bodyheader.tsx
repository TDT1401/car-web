import React, { useState } from 'react'
import './Bodyheader.css'

const Bodyheader = () => {

      const cars01 = [
           {
            "img" : "./images/A-Class.webp",
            "name" :  "A-Class",
            "price": "Giá từ: Từ 1,695 tỷ VND Nhà sản xuất: Audi"
           },

           {
            "img" : "./images/amg-gt-range.webp",
            "name" :  "Amg Gt Range",
            "price": "Giá từ: Từ 1,695 tỷ VND Nhà sản xuất: Audi"
           },

           {
            "img" :  "./images/C-Class.webp",
            "name" :  "C-Class",
            "price": "Giá từ: Từ 1,695 tỷ VND Nhà sản xuất: Audi"
           },
      ]

      const cars02 = [
            // row1
        {
          img: "./images/cla.webp",
          name: "CLA",
          price: "Giá từ: Từ 1,695 tỷ VND Nhà sản xuất: Audi",
        },

        {
          img: "./images/cls.webp",
          name: "CLS",
          price: "Giá từ: Từ 1,695 tỷ VND Nhà sản xuất: Audi",
        },

        {
          img: "./images/e-class.webp",
          name: "E-Class",
          price: "Giá từ: Từ 1,695 tỷ VND Nhà sản xuất: Audi",
        },
      //   row2
        {
          img: "./images/eq-electric.webp",
          name: "EQ-Electric",
          price: "Giá từ: Từ 1,695 tỷ VND Nhà sản xuất: Audi",
        },

        {
          img: "./images/eqa.webp",
          name: "EQA",
          price: "Giá từ: Từ 1,695 tỷ VND Nhà sản xuất: Audi",
        },

        {
          img: "./images/g_class.webp",
          name: "G_Class",
          price: "Giá từ: Từ 1,695 tỷ VND Nhà sản xuất: Audi",
        },
        //row3
        {
          img: "./images/marco_polo.webp",
          name: "Marco Polo",
          price: "Giá từ: Từ 1,695 tỷ VND Nhà sản xuất: Audi",
        },

        {
          img: "./images/s_class_maybach.webp",
          name: "S-Class Maybach",
          price: "Giá từ: Từ 1,695 tỷ VND Nhà sản xuất: Audi",
        },

        {
          img: "./images/sl.webp",
          name: "SL",
          price: "Giá từ: Từ 1,695 tỷ VND Nhà sản xuất: Audi",
        },
       // row4
        {
          img: "./images/slc.webp",
          name: "SLC",
          price: "Giá từ: Từ 1,695 tỷ VND Nhà sản xuất: Audi",
        },

        {
          img: "./images/v_class.webp",
          name: "V-Class",
          price: "Giá từ: Từ 1,695 tỷ VND Nhà sản xuất: Audi",
        },

        {
          img: "./images/lux.webp",
          name: "Vinfast Lux A",
          price: "Giá từ: Từ 1,695 tỷ VND Nhà sản xuất: Audi",
        },
      ];

  return (
       <div className='body-header'>
             <div className='container'>
                  <div className="body-content row">
                  {cars01.map((value,key)=>{
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
             <div className='bg-[#379683] h-[70px] mt-5 mb-5'>
                  <p className='pl-[128px] text-[#fff] text-[x-large] pt-4 '>WELCOME DT AUTO</p>
            </div>
            
            <div className="container">
               <div className="body-content row">
                  {cars02.map((value,key)=>{
                        return(
                              <div className="content-item row m-3" key={key}>
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
       </div>
  )
}

export default Bodyheader