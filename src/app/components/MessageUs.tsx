import React from 'react'

const MessageUs = () => {
  return (
    <div className='p-8'>
        <h1 className='text-3xl font-semibold'>Message us</h1>
        <h2>Voyages of Wonder of Exploring Unknown</h2>
        <h2 className='mt-6 font-bold text-xl my-3 text-blue-500 '>Requesting a Call</h2>
        <a className='flex gap-2' href="">Our Phone No:  <h2 className='text-blue-500 font-bold'>9068808000</h2></a>
        <div className='mt-6 flex gap-2'>Open Hours: <h2 className='text-blue-500 font-bold'> 9A.M TO 10P.M</h2></div>
        <div className='mt-6 flex gap-2'>Location: <h2 className='text-blue-500 font-bold'>Chitkara University Rajpura</h2></div>
       
    <center>

        <div className='shadow-lg w-96 flex flex-col justify-center items-center rounded-xl gap-5'>
            <h1 className='text-3xl text-blue-400 font-semibold'>Fill Your Details</h1>
        <div className="inner-form flex flex-col gap-2">
            <label className='font-bold  text-blue-500' htmlFor="">Name</label>
            
            <input className='rounded-md h-10 p-2 outline-none border-[1px] ' type="text" placeholder='Enter Your Name' />
        </div>
        <div className="inner-form flex flex-col gap-2">
            <label className='font-bold  text-blue-500' htmlFor="">Your Phone</label>
            
            <input className='rounded-md h-10 p-2 outline-none border-[1px] ' type="number" placeholder='Enter Your Name' />
        </div><div className="inner-form flex flex-col gap-2">
            <label className='font-bold  text-blue-500' htmlFor="">Your Message</label>
            
            <input className='rounded-md h-10 p-2 outline-none border-[1px] ' type="text" placeholder='Enter Your Name' />
         
            <button className='bg-black mb-3 mt-1 text-white p-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg text-sm'>Login In</button>

        </div>  
        </div>
    </center>
        
    </div>
  )
}

export default MessageUs