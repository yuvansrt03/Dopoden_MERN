import React from 'react'
import './LeftSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserComp from '../UserComp/UserComp.js'
import { faRss,faMessage,faCirclePlay,faUserGroup,faBookmark,faCircleQuestion,faSuitcase,faCalendar,faGraduationCap } from '@fortawesome/free-solid-svg-icons'
function LeftSection() {
    const icons=[faRss,faMessage,faCirclePlay,faUserGroup,faBookmark,faCircleQuestion,faSuitcase,faCalendar,faGraduationCap]
    const icon_names=['Feed','Chats','Videos','Groups','Bookmarks','Questions','Jobs','Events','Courses']
    const LEFT_ITEMS=icons.map(function(obj,index){
        const myobj={};
        myobj.icon=obj;
        myobj.name=icon_names[index];
        return myobj;
    })
  return (
    <div className="">
        
    </div>
  )
}

export default LeftSection