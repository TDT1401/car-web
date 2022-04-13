import React from 'react'

const Header = () => {
  return (
    <header className=' h-14'>
        <div className="px-20 flex items-center justify-between h-14">
            <img className='w-16 h-auto' src="./images/logo.png" alt="" />
            <input type="text"
                className="border-2 w-96 focus-visible:outline-none"
            />
            <h1 className='text-3xl'>money</h1>
        </div>
    </header>
  )
}

export default Header