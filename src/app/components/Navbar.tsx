import React from 'react'
import logo from "../../../Provided Images/Flags/india.png"

const Navbar = () => {
  return (
    <div className='mynav w-full relative z-50 h-12 flex items-center justify-evenly'>
        <div className="right-section">
            <img src={logo.src} alt="" className='border-2 border-black h-8' />
        </div>
        <div className="middle-section text-sm">
            <ul className=' flex  gap-11 font-bold text-blue-600 '>
                <li className='cursor-pointer hover:text-blue-500'>Home</li>
                <li className='cursor-pointer hover:text-blue-500'>Services</li>
                <li className='cursor-pointer hover:text-blue-500'>About Us</li>
                <li className='cursor-pointer hover:text-blue-500'>Contact Us</li>
            </ul>
        </div>
        <div className="left-section">
        <button className='bg-black text-white p-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg text-sm'>Login In</button>
        </div>
    </div>
  )
}

export default Navbar