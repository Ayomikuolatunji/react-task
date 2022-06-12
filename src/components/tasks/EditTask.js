import React,{useState} from 'react'
import {BsFillTrashFill} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { editTaskFunction } from '../../redux/task-slice.js/taskSlice'



const EditTask = ({task,changeTab, index}) => {
    const disptach=useDispatch()
    const [editDesc,setEditDesc]=useState(task.results.task_msg)
    const taskAssignee=useSelector(state=>state.auth.user_name)
    const [editDate,setEditDate]=useState("")
    const [editTime,setEdit]=useState("")
    



    const editTaskHandler = () => {
        // if(!editDesc || !editDate || !editTime){
        //     alert("Please fill all the fields")
        //     return
        // }
        // changeTab(index)
        disptach(editTaskFunction({
            task_id:task.results.id,
            task_msg:editDesc,
            task_date:editDate,
            timeTime:editTime,
            taskAssignee:taskAssignee,
            timeZone: task.results.timeZone
        }))
    }

  return (
    <div className={`task-form w-full bg-blue-200 mt-5`}>
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
            <div className="task-time w-[50%] flex justify-center flex-col ml-5">
            <label htmlFor="task-time"
            className='text-gray-700'
            >
                Task Time

            </label>
            <input type="time" id="task-time"
            className='w-full border-2 mt-3'
              value={editTime}
                onChange={(e)=>setEdit(e.target.value)}
            />
            </div>
        </div>
        <div className="task-assignee p-3">
            <label htmlFor="task-assignee" className='text-gray-700'>
                Assigne User
            </label>
            <input type="text" id="task-assignee" 
              defaultValue={taskAssignee}
            className='w-full border-2 mt-3 p-2.5'
            />
        </div>
        <div className="submit-and-cancel-task w-full flex justify-between p-3">
            <button>
                <BsFillTrashFill className='text-gray-500 text-2xl'/>
            </button>
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
        </div>
    </div>
  )
}

export default EditTask