import React from 'react'
import argentina from "../../../Provided Images/Flags/argentina.png"
import australia from "../../../Provided Images/Flags/australia.png"
import bahamas from "../../../Provided Images/Flags/bahamas.png"
import barbuda from "../../../Provided Images/Flags/barbuda.png"
import argentbelgiumina from "../../../Provided Images/Flags/belgium.png"
import belize from "../../../Provided Images/Flags/belize.png"
import brazil from "../../../Provided Images/Flags/brazil.png"
import cambodia from "../../../Provided Images/Flags/cambodia.png"
import china from "../../../Provided Images/Flags/china.png"
import croatia from "../../../Provided Images/Flags/croatia.png"
import denmark from "../../../Provided Images/Flags/denmark.png"
import dominican_republic from "../../../Provided Images/Flags/dominican-republic.png"
import ecuador from "../../../Provided Images/Flags/ecuador.png"
import morocco from "../../../Provided Images/Flags/morocco.png"
import fiji from "../../../Provided Images/Flags/fiji.png"
import iceland from "../../../Provided Images/Flags/iceland.png"
import india from "../../../Provided Images/Flags/india.png"

const Countries = () => {
  return (
    <div className='p-9  flex flex-col justify-center items-center'>
        <center>
            <h1 className='text-4xl pb-4 font-semibold mt-5 text-blue-500'>
            Available Countries
            </h1>
        </center>
        <h1></h1>
        <div className="mycards grid   gap-x-8 grid-cols-5 gap-y-6 ">

        <div className="country-card  items-center gap-3 justify-center flex-col border-2  h-[30vh] w-[13vw] flex  bg-transparent  hover:scale-105 duration-300 border-blue-400 rounded-xl hover:bg-blue-400 ">
            <img className='h-[25vh]     w-24 pt-5 rounded-lg hover:border-white' src={argentina.src} alt="" />
            <button className='bg-white  p-2 bg-gradient-to-r  rounded-lg text-sm mb-1 text-blue-400 font-bold'>Argentina</button>
        </div>
        <div className="country-card border-2   border-blue-400 rounded-xl hover:bg-blue-400 items-center gap-3 justify-center flex-col h-[30vh] w-[13vw] flex  bg-transparent  hover:scale-105 duration-300">
            <img className='h-[25vh] w-24 pt-5 rounded-lg' src={australia.src} alt="" />
            <button className='bg-white text-black p-2 bg-gradient-to-r  rounded-lg text-sm mb-1 text-blue-400 font-bold'>Australia</button>
        </div>
        <div className="country-card  items-center gap-3 justify-center flex-col h-[30vh] w-[13vw] flex  bg-transparent rounded-md hover:scale-105 duration-300">
            <img className='h-[25vh] w-24 pt-5 rounded-lg' src={bahamas.src} alt="" />
            <button className='bg-white text-black p-2 bg-gradient-to-r  rounded-lg text-sm mb-1'>Bahamas</button>
        </div>
        <div className="country-card  items-center gap-3 justify-center flex-col h-[30vh] w-[13vw] flex  bg-transparent rounded-md hover:scale-105 duration-300">
            <img className='h-[25vh] w-24 pt-5 rounded-lg' src={barbuda.src} alt="" />
            <button className='bg-white text-black p-2 bg-gradient-to-r  rounded-lg text-sm mb-1'>Berbuda</button>
        </div>
        <div className="country-card  items-center gap-3 justify-center flex-col h-[30vh] w-[13vw] flex  bg-transparent rounded-md hover:scale-105 duration-300">
            <img className='h-[25vh] w-24 pt-5 rounded-lg' src={belize.src} alt="" />
            <button className='bg-white text-black p-2 bg-gradient-to-r  rounded-lg text-sm mb-1'>belize</button>
        </div>
        <div className="country-card  items-center gap-3 justify-center flex-col h-[30vh] w-[13vw] flex  bg-transparent rounded-md hover:scale-105 duration-300">
            <img className='h-[25vh] w-24 pt-5 rounded-lg' src={cambodia.src} alt="" />
            <button className='bg-white text-black p-2 bg-gradient-to-r  rounded-lg text-sm mb-1'>Cambodia</button>
        </div>
        <div className="country-card  items-center gap-3 justify-center flex-col h-[30vh] w-[13vw] flex  bg-transparent rounded-md hover:scale-105 duration-300">
            <img className='h-[25vh] w-24 pt-5 rounded-lg' src={china.src} alt="" />
            <button className='bg-white text-black p-2 bg-gradient-to-r  rounded-lg text-sm mb-1'>China</button>
        </div>
        <div className="country-card  items-center gap-3 justify-center flex-col h-[30vh] w-[13vw] flex  bg-transparent rounded-md hover:scale-105 duration-300">
            <img className='h-[25vh] w-24 pt-5 rounded-lg' src={croatia.src} alt="" />
            <button className='bg-white text-black p-2 bg-gradient-to-r  rounded-lg text-sm mb-1'>Crotia</button>
        </div>
        
        </div>
    </div>
  )
}

export default Countries