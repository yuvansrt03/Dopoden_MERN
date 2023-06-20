import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart,faComment,faUser} from '@fortawesome/free-solid-svg-icons'
import { NoLike,Like,CommentWidget } from './LikesAndComments'
import {useDispatch, useSelector} from 'react-redux'
import { setPost } from '../../state/state'
function PostWidget({item}) {
  const user=useSelector(store=>store.auth.user)
  const isliked=item.likes[user._id];
  // console.log(isliked)
  
  const [like,setLike]=useState(isliked)
  const dispatch=useDispatch();
  const handleOnLike=async()=>{
    setLike(old=>!old);
    const response=await fetch(`http://localhost:5000/posts/${item._id}`,{
      method:"PATCH",
    })
    const data=await response.json();
    dispatch(setPost(data))
    // console.log(item.likes)
  }
  return (
    <div className='flex flex-col w-full my-6 rounded shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
        <div className="flex items-center justify-center h-10 border-b-2 border-gray-400 felx col">
          {item.userImagePath && <img src={`http://localhost:5000/assets/${item.userImagePath}`} alt="" className='m-1 rounded-full w-7 h-7'/>}
          {!item.userImagePath && 
            <div className='flex items-center justify-center w-6 h-6 m-2 border border-black rounded-full'>
              <FontAwesomeIcon icon={faUser} className='text-lg '/>
            </div>}
          <h1 className='flex items-center justify-start flex-1 font-bold'>{item.postOwnername}</h1>
        </div>
          <img src={`http://localhost:5000/assets/${item.postImagePath}`}
           alt="" className='h-[400px] object-contain'/>
        <div className="flex items-center justify-center">
          <div className="mx-2 text-sm font-bold ">{item.postOwnername}</div>
          <div className="flex-1 postdescription">{item.postDescription}</div>
        </div>
        <div className="flex items-center justify-start m-2">
            <button onClick={handleOnLike}>{like?<Like/>:<NoLike/>}</button>
          {/* <button><FontAwesomeIcon icon={faHeart} className='mr-2 text-xl'></FontAwesomeIcon></button> */}
            <button><CommentWidget/></button>
        </div>
    </div>
  )
}

export default PostWidget