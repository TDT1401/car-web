import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Header = () => {
  return (
    <header className='bg-slate-300 h-14'>
        <div className="px-20 flex items-center justify-between h-14">
            <a href="/"><img className='w-16 h-auto' src="./images/logo2.png" alt="" /></a>
            <form action="" className='relative'>
                <input type="text"
                  className="border-2 w-96 h-7 focus-visible:outline-none rounded"
                />
                <FontAwesomeIcon icon={faSearch} className='absolute p-1 pt-2 right-1 text-slate-400' />
            </form>
            <h1 className='text-3xl'>###</h1>
        </div>
    </header>
  )
}

export default Header