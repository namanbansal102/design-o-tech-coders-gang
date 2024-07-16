import React from 'react'
import img3 from "../../../Provided Images/img (10).png";
import img1 from "../../../Provided Images/img (11).png";
import img2 from "../../../Provided Images/img (12).png";
import img4 from "../../../Provided Images/img (13).png";

const Cards = () => {
  return (
    <div className='px-4 mb-7'>
        <center className='mt-5 text-2xl text-blue-400'>
        <h1>Nature's Playground Exploring the Great
        </h1>
        </center>
        <div className=' pt-6 px-3 flex flex-row gap-4 justify-center items-center'>
        <div className="card-div  w-[20vw] border-2 rounded-xl bg-white p-2  flex flex-col justify-center items-center gap-2 shadow-md hover:scale-105 duration-300">
        <img className=' h-36 w-36 rounded-md' src={img1.src} alt="" />
        <h1 className='text-xl font-bold text-blue-400'>Dulingo Coaching</h1>
        <h2 className='text-center'>There is many more Found Passengers Enginner</h2>
        <button className='bg-black text-white p-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg text-sm'>Read More</button>
        </div>
        <div className="card-div  w-[20vw] border-2 rounded-xl bg-white p-2  flex flex-col justify-center items-center gap-2 shadow-md hover:scale-105 duration-300">
        <img className=' h-36 w-34 rounded-md' src={img4.src} alt="" />
        <h1 className='text-xl font-bold text-blue-400'>OPCR Coaching</h1>
        <h2 className='text-center'>There is many more Found Passengers Enginner</h2>
        <button className='bg-black text-white p-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg text-sm'>Read More</button>
        </div><div className="card-div  w-[20vw] border-2 rounded-xl bg-white p-2  flex flex-col justify-center items-center gap-2 shadow-md hover:scale-105 duration-300">
        <img className=' h-36 w-34 rounded-md' src={img2.src} alt="" />
        <h1 className='text-xl font-bold text-blue-400'>BOWN Coaching</h1>
        <h2 className='text-center'>There is many more Found Passengers Enginner</h2>
        <button className='bg-black text-white p-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg text-sm'>Read More</button>
        </div>
        <div className="card-div  w-[20vw] border-2 rounded-xl bg-white p-2  flex flex-col justify-center items-center gap-2 shadow-md hover:scale-105 duration-300">
        <img className=' h-36 w-34 rounded-md' src={img3.src} alt="" />
        <h1 className='text-xl font-bold text-blue-400'>ACM Coaching</h1>
        <h2 className='text-center'>There is many more Found Passengers Enginner</h2>
        <button className='bg-black text-white p-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg text-sm'>Read More</button>
        </div>
    </div>
    </div>
  )
}

export default Cards