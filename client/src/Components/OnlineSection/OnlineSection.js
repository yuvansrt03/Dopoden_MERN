import React from 'react'
import UserComp from '../UserComp/UserComp.js'
function OnlineSection() {
  return (
    <div className='mt-3'>
      <p className='font-bold'>Online Friends</p>
      <div className='h-[1px] w-full bg-gray-300 mt-1 '></div>     
      <UserComp UserImg={"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} UserName={"Yuvan"}></UserComp>
      <UserComp UserImg={"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} UserName={"Yuvan"}></UserComp>
      <UserComp UserImg={"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} UserName={"Yuvan"}></UserComp>
      <UserComp UserImg={"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} UserName={"Yuvan"}></UserComp>
      <UserComp UserImg={"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} UserName={"Yuvan"}></UserComp>
    </div>
  )
}

export default OnlineSection