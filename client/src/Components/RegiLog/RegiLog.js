import React from 'react'
import LoginPage from '../LoginPage/LoginPage'
import RegisterPage from '../RegisterPage/RegisterPage'
import { useState } from 'react'
function RegiLog() {
    const [login,setLogin]=useState(true)
    const toggleLogin=()=>{
      setLogin(log=>!log)
    }
  return(
    <>
      {login && <LoginPage toggleLogin={toggleLogin}>asdf</LoginPage>}
      {!login && <RegisterPage toggleLogin={toggleLogin}></RegisterPage>}
    </>
  )
}

export default RegiLog