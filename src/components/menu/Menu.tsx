import React, {useState} from 'react'
import {MenuMavigator} from './MenuMavigator'
const Menu = () => {
    const [menu,setMenu] = useState([
        "Home",
        "Vinfast",
        "Bmw",
        "Mercedes-Benz",
        "Audi",
        "Porsche",
        "Lexus",
        "Volvo",
        "Ferrari",
        "Lamborghini",
    ])
  return (
    <nav className='bg-green-700 px-10 flex items-center justify-between text-white'>
        <ul className='flex items-center justify-between w-full '> 
            {menu.map((value,key)=>{
                return(
                    <MenuMavigator key={key} text={value} />
                );
            })}
        </ul>
    </nav>
  )
}

export default Menu