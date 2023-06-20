import React from 'react'
import Navbar from '../Navbar/Navbar.js'
import LeftSection from '../LeftSection/LeftSection.js'
import HeaderPost from '../HeaderPost/HeaderPost.js'
import RightSection from '../RightSection/RightSection.js'
import { useSelector,useDispatch } from 'react-redux'
import PostsContainer from '../PostsContainer/PostsContainer.js'
function HomePage() {
  return (
    <div className='w-screen'>
      <Navbar/>
      <div className="relative flex justify-between overflow-auto">
        <LeftSection/>
        <div>
          <HeaderPost/>
          <PostsContainer/>
        </div>
        <RightSection/>
      </div>
      
    </div>
  )
}

export default HomePage