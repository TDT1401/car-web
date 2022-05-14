import React from 'react'
import {MenuNavigator} from './MenuNavigator'
const Menu = () => {
    const menu= [
        "Home",
        "Vinfast",
        "Bmw",
        "Mercedes-Benz",
        "Audi",
        "Porsche",
        "Lexus",
        "Volvo",
        "Ferrari",
        "Lamborghini"
    ]
        
  return (
    <nav className='bg-[black] px-10 flex items-center justify-between text-white'>
        <ul className='flex items-center justify-between w-full'> 
            {menu.map((value,key)=>{
                return(
                    <MenuNavigator key={key} text={value} />
                );
            })}
        </ul>
    </nav>
  )
}

export default Menu