import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMessage,faBell,faMagnifyingGlass, } from '@fortawesome/free-solid-svg-icons'
import { setLogout } from '../../state/state'
import {useDispatch,useSelector} from 'react-redux'
function Navbar() {
    const dispatch=useDispatch();
    const data=useSelector(store=>store.auth.user)
    const handleLogout=()=>{
        dispatch(setLogout())
        window.location.reload()
    }
  return (
    <div className="w-full h-[45px] bg-blue-500 flex justify-between items-center">
        <div class="logo">Dopoden</div>
        <div className='relative flex-grow'>
            <FontAwesomeIcon 
                icon={faMagnifyingGlass} 
                style={{color: "#000000",}}
                className='absolute top-2 left-2'/>
            <input type="text" 
                    className="w-[500px] h-[30px] rounded-xl outline-none p-2 text-sm pl-[30px]" 
                    placeholder='Search'/>
        </div>
        <div className='flex flex-row items-center justify-center'>
            {/* <ul className='flex text-white'>
                <li className='m-2'>HomePage</li>
                <li className='m-2'>TimeLine</li>
            </ul> */}
            <ul className='flex items-center justify-center mr-2 text-white'>
                {/* <FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} className='m-2 '/>
                <FontAwesomeIcon icon={faMessage} style={{color: "#ffffff",}} className='m-2 '/>
                <FontAwesomeIcon icon={faBell} style={{color: "#ffffff",}} className='m-2 ' /> */}
                <h2 className='hover:cursor-pointer' onClick={handleLogout}>Logout</h2>
            </ul>
        </div>
    </div>
  )
}

export default Navbar