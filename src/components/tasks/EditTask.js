import React,{useState} from 'react'
import {BsFillTrashFill} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, editTaskFunction } from '../../redux/task-slice.js/taskSlice'



const EditTask = ({task,changeTab, index}) => {
    const disptach=useDispatch()
    const [editDesc,setEditDesc]=useState(task.results.task_msg)
    const taskAssignee=useSelector(state=>state.auth.user_name)
    const [editDate,setEditDate]=useState("")
    const [editTime,setEdit]=useState("")
    
    const getCurrentTimeZone = () => {
        return Math.floor( (Date.now()-(Date.now()/1000/60/60/24|0)*24*60*60*1000)/1000)
     }



    const editTaskHandler = () => {
        if(!editDesc || !editDate || !editTime){
            alert("Please fill all the fields")
            return
        }
        changeTab(index)
        disptach(editTaskFunction({
            task_id:task.results.id,
            task_msg:editDesc,
            task_date:editDate,
            //convert provided time to seconds
            timeTime:getCurrentTimeZone(),
            taskAssignee:taskAssignee,
            timeZone: getCurrentTimeZone()
        }))
    }

    
    const deleteTaskHandler = () => {
        changeTab(index)
        disptach(deleteTask({
            task_id:task.results.id
        }))
    }

  return (
    <div className={`task-form w-full bg-blue-200 mt-5`}>
        {/* task description */}
           <div className="task-description w-full flex flex-col justify-center p-2  mt-4">
                <label htmlFor="task description">
                    Task Description
                </label>
                <input
                    name='task description'
                    type="text"
                    id="task-description"
                    className='w-full border-2 mt-3 p-2.5'
                    value={editDesc}
                    onChange={(e)=>setEditDesc(e.target.value)}
                />
           </div>
           <div className="task-date-and-time w-full  p-3 flex ">
                 {/* date */}
                <div className="task-date w-[45%]">
                    <label htmlFor="task-date" className='text-gray-700'>
                        Task Date
                    </label>
                    <input type="date" id="task-date"
                    className='w-full border-2 mt-3'   
                    value={editDate}
                        onChange={(e)=>setEditDate(e.target.value)}
                    />
                </div>
                {/* date ends here */}
                {/* time*/}
                <div className="task-time w-[50%] flex justify-center flex-col ml-5">
                    <label htmlFor="task-time"
                    className='text-gray-700'>
                        Task Time
                    </label>
                    <input type="time" id="task-time"
                    className='w-full border-2 mt-3'
                    value={editTime}
                        onChange={(e)=>setEdit(e.target.value)}
                    />
                </div>
                {/* time ends here */}
            </div>
            {/* assignee  */}
            <div className="task-assignee p-3">
                <label htmlFor="task-assignee" className='text-gray-700'>
                    Assigne User
                </label>
                <input type="text" id="task-assignee" 
                defaultValue={taskAssignee}
                className='w-full border-2 mt-3 p-2.5'
                />
            </div>
            {/* assignee ends here */}
            <div className="submit-and-cancel-task w-full flex justify-between p-3">
                <button>
                    <BsFillTrashFill className='text-gray-500 text-2xl'
                    onClick={deleteTaskHandler}
                    />
                </button>
                {/* right buttons */}
                <div>
                     <button className="cancel-task-btn mr-3 px-5 py-2  text-gray-500"
                    onClick={()=>changeTab(index)}
                    >
                    Cancel
                    </button>
                    <button className="submit-task-btn mr-3 px-5 py-2 bg-green-700 text-white"
                    onClick={editTaskHandler}
                    >
                        Edit
                </button>
            </div>
            {/* right buttons ends here */}
        </div>
    </div>
  )
}

export default EditTask