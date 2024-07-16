import React from 'react'
import myimage from "../../../Provided Images/img (10).png";
const VisaCategory = () => {
  return (
<>
            <h2>Path Less Travelled Off</h2>
        <div className=' pt-6 px-3 flex gap-5'>
        <div className="card-div  w-[20vw] border-2 rounded-xl bg-white p-2 flex  flex-col justify-center items-center gap-1 hover:scale-105 duration-300 ">
        <img className=' h-56 rounded-md' src={myimage.src} alt="" />
        <h1 className='text-xl'>Business Visa</h1>
        <h2 className='text-center'>There is many more Found Passengers Enginner</h2>
        <button className='bg-black text-white p-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg text-sm'>Read More</button>
        </div>
        <div className="card-div  w-[20vw] border-2 rounded-xl bg-white p-2 flex  flex-col justify-center items-center gap-1 hover:scale-105 duration-300  ">
        <img className=' h-56 rounded-md' src={myimage.src} alt="" />
        <h1 className='text-xl'>Student Visa</h1>
        <h2 className='text-center'>There is many more Found Passengers Enginner</h2>
        <button className='bg-black text-white p-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg text-sm'>Read More</button>
        </div><div className="card-div  w-[20vw] border-2 rounded-xl bg-white p-2 flex  flex-col justify-center items-center gap-1 hover:scale-105 duration-300  ">
        <img className=' h-56 rounded-md' src={myimage.src} alt="" />
        <h1 className='text-xl'>Working Visa</h1>
        <h2 className='text-center'>There is many more Found Passengers Enginner</h2>
        <button className='bg-black text-white p-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg text-sm'>Read More</button>
        </div>
        <div className="card-div hover:scale-105 duration-300   w-[20vw] border-2 rounded-xl bg-white p-2 flex  flex-col justify-center items-center gap-1 ">
        <img className=' h-56 rounded-md' src={myimage.src} alt="" />
        <h1 className='text-xl'>Tourist Visa</h1>
        <h2 className='text-center'>There is many more Found Passengers Enginner</h2>
        <button className='bg-black text-white p-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg text-sm'>Read More</button>
        </div>
        
    </div>
</>
  )
}

export default VisaCategory