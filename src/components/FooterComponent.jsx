
import React from 'react'
import { buttonIcon } from '../utils/Data'


export const Footer = () => {
  return (
    <div className="border-t-2 border-green md:p-[100px] 2xl:p-[200px] p-[50px]">
    <div className="gap-12 flex flex-col w-full items-start text-blac">
    
      <h3 className="text-xl font-black text-black">Let’s be friends!👋</h3>
      <p className="text-green font-black">Connect with me and let’s have a chit chat online.</p>
  
    <div className="flex gap-[40px] flex-wrap">
    {buttonIcon.map((item) => (
      <div className="flex">    
          {item.icon}
      </div>
      
       ))}
       </div>
    
    </div>
    </div>
  )
}
