import React from 'react'
import { IoMdCheckmark } from 'react-icons/io'
import { MdModeEditOutline, MdOutlineEditNotifications } from 'react-icons/md'

const Task = ({changeTab,task,index}) => {
  return (
    <div>
         {/* display task */}
         <div className={`flex justify-between w-full p-3 items-center`}>
                <div className="left flex">
                    <img src={"https://adio-agro-img.s3.eu-west-3.amazonaws.com/8851390.jpg"} 
                    className="rounded-full w-12 h-12"
                    alt="profile_picture" 
                    />  
                    <div className='ml-3'>
                    <h1 className='font-bold font-serif'>Follow up</h1>
                        <h3 className='text-yellow-600'>
                            3/4/5
                        </h3>
                    </div>
                </div>
                <div className="right flex">
                    <MdModeEditOutline className='text-xl cursor-pointer'
                        onClick={()=>changeTab(index)}
                    />
                    <MdOutlineEditNotifications className='text-xl'/>
                    <IoMdCheckmark className='text-xl'/>
                </div>
        </div>
    </div>
  )
}

export default Task