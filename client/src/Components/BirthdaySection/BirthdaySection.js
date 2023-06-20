import React from 'react'
import gift from './gift.png'

function BirthdaySection() {
  return (
    <div className="w-[300px] flex flex-col items-center mr-5">
        <div className="flex flex-row items-center justify-center">
            <img src={gift} alt="" className='h-[80px]'/>
            <p className='ml-2 text-sm'><b>Name</b> and other  <b>3 people</b> celebrates birthday today</p>
        </div>
        <img 
            src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="cool pic"
            className='w-full h-[200px] object-cover rounded-lg mt-4' />
       
    </div>
  )
}

export default BirthdaySection