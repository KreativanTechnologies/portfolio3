import React from 'react'

const Section2 = () => {
    const data=[
        {
            img:"images/icon.png",
            para:"Find Your Dream Home"
        },
        {
            img:"images/icon2.png",
            para:"Unlock Property Value"
        },
        {
            img:"images/icon3.png",
            para:"Effortless Property Management"
        },
        {
            img:"images/icon4.png",
            para:"Smart Investments, Informed Decisions"
        },
    ]
  return (
    <div className='bg-[#1A1A1A]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5 gap-4'>
      {
        data.map((items,index)=>(
            <div key={index} className='bg-[#262626] p-3 flex flex-col items-center space-y-4 text-white rounded-lg relative'>
                <img src={items.img} alt="" className='w-16'/>
                <img src="images/arrow.png" alt="" className='absolute top-0 right-4 w-4' />
                <p className='text-xs'>{items.para}</p>
            </div>
        ))
      }
    </div>
    </div>
  )
}

export default Section2
