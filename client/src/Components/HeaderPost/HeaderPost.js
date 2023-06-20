import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages,faTag,faLocationDot,faFaceSmile,faX } from '@fortawesome/free-solid-svg-icons'
import {useDropzone} from 'react-dropzone';
import {useState,useEffect,useRef} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import './HeaderPost.css'
function HeaderPost() {
    const dispatch=useDispatch()
    const user=useSelector(store=>store.auth.user)
    const fileref=useRef()
    const [filePreview, setFilePreview] = useState();
    const [image,setImage]=useState();
    const [onhover,setOnhover]=useState(false)
    const [desc,setDesc]=useState('')
    console.log(user)
    function handleChange(e) {
        setImage(e.target.files[0])
        setFilePreview(URL.createObjectURL(e.target.files[0]));
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            console.log("hey")
            const formData=new FormData()
            formData.append('postOwnerId',user._id)
            formData.append('postOwnername',user.name)
            formData.append('postDescription',desc)
            formData.append('image',image)
            formData.append('userImagePath',user.userImagepath)
            const fetc=await fetch('http://localhost:5000/posts',{
                method:"Post",
                body:formData
            })
            const data=await fetc.json()
            if(data._id){
                console.log("hey")
                setFilePreview()
                setImage()
                setDesc('')
            }
        } catch (error) {
            console.log(error.message)
        }
    }

  return (
    <>
        <div className="w-[600px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-fit mx-10 mt-2 rounded-lg flex items-center flex-col">
            <div className="flex items-center justify-between w-full">
                <img 
                    src={`http://localhost:5000/assets/${user.userImagepath}`} 
                    alt="profile" 
                    className='h-[30px] w-[35px] bg-red-500 m-2 object-cover rounded-full'/>
                <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className='w-full outline-none pl-[10px] h-10 break-all' placeholder='Write Someting Here'/>
            </div>

            <div className="w-[580px] h-[1px] bg-gray-200"></div>
            {filePreview && <>
                <div className="relative flex m-3 w-fit" onMouseOver={()=>setOnhover(last=>!last)} onMouseOut={()=>setOnhover(last=>!last)}>
                    <img src={filePreview} alt="" className='h-[200px]'/>
                    <div className={` text-white absolute right-0 text-sm  flex justify-center items-center`}onClick={()=>{setImage();setFilePreview();}}>
                        <FontAwesomeIcon icon={faX} className={`${onhover?'block':'hidden'} p-1 bg-red-500 hover:cursor-pointer`}/>
                    </div>
                </div>
            </>
            }

            <ul className='flex items-center justify-between w-full px-5 mb-2'>
                <li className='flex items-center justify-center'><FontAwesomeIcon className='m-2' icon={faImages} style={{color:"#ff6600",}}/>
                    <input type="file" ref={fileref} onChange={handleChange} className='hidden' />
                    <div></div>
                    <button onClick={()=>fileref.current.click()}>File</button>
                </li>
                 <button className='px-3  text-sm text-white bg-blue-500 rounded h-[30px] ' onClick={handleSubmit}>Share</button>
            </ul>
        </div>
    </>
  )
}

export default HeaderPost