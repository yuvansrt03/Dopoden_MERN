import React from 'react'

function UserComp({UserName,UserImg}) {
  return (
    <div className="w-full h-[30px] flex justify-center items-center my-2 ">
       <img 
            src={UserImg}
            alt="profile"
            className='rounded-full h-[30px] w-[35px] bg-red-500 object-cover m-2'/>
      <p className='w-full'>{UserName}</p>
    </div>
  )
}

export default UserComp