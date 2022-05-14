import React from 'react'

export const Li = ({ key, text }: { key: number; text: string }) => {


  return (

    <div>
        <a href="/" className="uppercase py-2" key={key}>
            <li className=" hover:underline hover:text-[#fcfcfc] py-2 px-7">{text}</li>
        </a>
  </div>
  )
}
