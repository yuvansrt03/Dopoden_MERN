import React from 'react'
import HomePage from './Components/HomePage/HomePage.js'
import { Route,Routes } from 'react-router-dom'

import RegiLog from './Components/RegiLog/RegiLog.js'
import {useSelector} from 'react-redux'
import useState from 'react'
function App() {
  const user=useSelector((store)=>store.auth.user)
  return (
    <>
    <Routes>
      <Route path="/" element={user?<HomePage></HomePage>:<RegiLog/>}/>
    </Routes>
    </>

  )
}

export default App