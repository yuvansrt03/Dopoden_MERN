import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useEffect,useState} from 'react'
import { setPosts } from '../../state/state'
import PostWidget from '../PostWidget/PostWidget'
export default function PostsContainer() {
    const storeposts=useSelector(store=>store.auth.posts)
    const dispatch=useDispatch()
    const getposts = async()=>{
        const response = await fetch('http://localhost:5000/posts',{
            method:"GET",
        })
        const data=await response.json()
        console.log(data)
        dispatch(setPosts({posts:data}))
    }
    useEffect(()=>{
        getposts()
    },[])
  return (
    <>
        <div className="w-[600px] h-fit mx-10 mt-2 rounded-lg flex items-center flex-col">
            {storeposts.map(item=><PostWidget item={item}></PostWidget>)}
        </div>
    </>
  )
}
