import React from 'react'
import { IoMdCheckmark } from 'react-icons/io'
import { MdModeEditOutline, MdOutlineEditNotifications } from 'react-icons/md'
import { useSelector } from 'react-redux'

const Task = ({changeTab,task,index,active}) => {
const user_picture=useSelector(state=>state.auth.user_picture)



      
  return (
    <div>
         {/* display task */}
        {active || <div className={`flex justify-between w-full p-3 items-center`}>
                <div className="left flex">
                    <img src={user_picture} 
                    className="rounded-full w-12 h-12"
                    alt="profile_picture" 
                    />  
                    <div className='ml-3'>
                    <h1 className='font-bold font-serif'>Follow up</h1>
                        <h3 className='text-yellow-600'>
                            {
                               new Date(task.results.task_date).toLocaleDateString()
                            }
                        </h3>
                    </div>
                </div>
                <div className="right flex">
                    <MdModeEditOutline 
                    className='text-xl cursor-pointer ml-3'
                        onClick={()=>changeTab(index)}
                    />
                    <MdOutlineEditNotifications 
                    className='text-xl ml-3'/>
                    <IoMdCheckmark 
                       className='text-xl'
                    />
                </div>
        </div>}
    </div>
  )
}

export default Task