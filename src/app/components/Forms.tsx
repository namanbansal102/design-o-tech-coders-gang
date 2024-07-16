import React from 'react'

const Forms = () => {
  return (
    <>
    <h1 className='text-3xl font-bold text-blue-500'>
    Book Your Consultation </h1>
    <div className=' shadow-md h-80 w-80 flex flex-col  justify-center items-center rounded-xl '>
    <h1 className='text-xl font-bold text-blue-500'>
    Select Your Destination </h1>
        <div className='flex  justify-center items-center gap-4 mt-5'>
        <label htmlFor="">From</label>
        <select name="country" id="">
            <option value="">India</option>
            <option value="">Argentina</option>
            <option value="">Brazil</option>
        </select>
        </div>
        <div className='flex felx-col justify-center items-center gap-4 mt-5'>
        <label htmlFor="">To</label>
        <select name="country" id="">
            <option value="">India</option>
            <option value="">Argentina</option>
            <option value="">Brazil</option>
        </select>
        </div>
        <div className='flex felx-col justify-center items-center gap-4 mt-5'>
        <label htmlFor="">Date</label>
        <input type="date" />
        </div>
        <div className='flex felx-col justify-center items-center gap-4 mt-5'>
        <label htmlFor="">Passenger</label>
        <input placeholder='Details' className='w-28 border-[1px] outline-none rounded-md' type="text" />
        </div>
        <button className='bg-black text-white p-2 bg-gradient-to-r mt-3 px-7 from-blue-600 to-violet-600 rounded-lg text-sm'>Book Now</button>
    </div>
    </>
  )
}

export default Forms