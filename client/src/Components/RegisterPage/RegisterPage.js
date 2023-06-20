
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function RegisterPage({toggleLogin}) {
    const [name,setName]=useState('')
    const [mail,setMail]=useState('')
    const [password,setPassword]=useState('')
    const [dob,setDob]=useState('')
    const [image,setImage]=useState()
    const handleLogin=()=>{
        toggleLogin()
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const formData = new FormData()
        formData.append("name", name)
        formData.append("mail", mail)
        formData.append("password", password)
        formData.append("dob", dob)
        formData.append('image',image)
        const response=await fetch('http://localhost:5000/auth/register', {
            method: "POST",
            body:formData
        })
        const data=await response.json()
        console.log(data)
        if(data._id){
            window.location.href="/login"
        }
        else{
            window.location.href="/register"
        }
    }
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen'>
        <div className="flex flex-col items-center justify-center p-5  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
            <h1 className='m-3 font-sans text-xl font-bold text-black'>Create Your Free Account</h1>
            <form className='flex flex-col items-center w-full' onSubmit={handleSubmit}>
                <li className='flex flex-col m-1'>Name<input className='shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] my-2 w-full outline-none p-1 pl-2 ' name="name" value={name} onChange={e=>setName(e.target.value)} type="text" placeholder='Name' /></li>
                <li className='flex flex-col m-1'>Gmail<input className='shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] my-2 w-full outline-none p-1 pl-2 ' name="mail" value={mail} onChange={e=>setMail(e.target.value)} type="text" placeholder='Gmail' /></li>
                <li className='flex flex-col m-1'>Password<input className='shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] my-2 w-full outline-none p-1 pl-2 ' name="password"value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder='Password' /></li>
                <li className='flex flex-col m-1'>Date<input className='shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] my-2 w-[200px] outline-none p-1 pl-2 'name="dob" value={dob} onChange={e=>setDob(e.target.value)} type="date" placeholder='Date' /></li>
                <li className='flex flex-col m-1'>Image<input className='shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] my-2 w-[200px] outline-none p-1 pl-2 ' name="image" type="file" onChange={(e)=>{setImage(e.target.files[0])}} /></li>
                <button className='w-[100px] py-1 text-white bg-blue-500 rounded-lg' type='submit'>Submit</button>
            </form>
        </div>
        <div className="flex mt-3 text-sm ">
            <h4 className='font-light'>Have an account?</h4>
            <span className='text-blue-700 hover:cursor-pointer' onClick={toggleLogin}>Signin</span>
        </div>
    </div>
  )
}

export default RegisterPage