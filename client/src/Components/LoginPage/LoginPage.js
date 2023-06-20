import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { setLogin } from '../../state/state'
function LoginPage({toggleLogin}) {
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
    const dispatch=useDispatch();
    const user=useSelector(store=>store.auth.user)
    const token=useSelector(store=>store.auth.token)
    const handleSignup=()=>{
        toggleLogin()
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        // setName('')
        // setPassword('')
        const response = await fetch('http://localhost:5000/auth/login', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    password
                })
        })
        const data= await response.json();
        if(data.user){
            dispatch(setLogin({user:data.user,token:data.accesstoken}))
        }
        else{
            setError("Wrong Credentials")
        }
    }
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen'>
        <div className="flex flex-col items-center justify-center p-5  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
            <h1 className='m-3 font-sans text-xl font-bold text-black'>Login</h1>
            <form className='flex flex-col items-center w-full' onSubmit={handleSubmit}>
                <li className='flex flex-col m-1'>Name<input className='shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] my-2 w-full outline-none p-1 pl-2 ' name="name" value={name} onChange={e=>setName(e.target.value)} type="text" placeholder='Name' /></li>
               <li className='flex flex-col m-1'>Password<input className='shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] my-2 w-full outline-none p-1 pl-2 ' name="password"value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder='Password' /></li>
                <button className='w-[100px] py-1 text-white bg-blue-500 rounded-lg' type='submit'>Submit</button>
            </form>
        </div>
        {error && <><h1>{error}</h1></>}
        <div className="flex mt-3 text-sm ">
            <h4 className='font-light'>Don't Have an account?</h4>
            <span className='text-blue-700 hover:cursor-pointer' onClick={handleSignup}>signUp</span>
        </div>
    </div>
  )
}

export default LoginPage