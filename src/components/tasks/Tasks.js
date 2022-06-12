import React, { useState } from 'react'
import {AiOutlinePlus} from "react-icons/ai";
import Task from './Task'
import { useDispatch, useSelector } from 'react-redux';
import { createTask, setTaskOpen } from '../../redux/task-slice.js/taskSlice';
import EditTask from './EditTask';




const Tasks = () => {
    const singleTask = useSelector(state => state.task.singleTask)
    // const user_picture=useSelector(state=>state.auth.user_picture)
    console.log(singleTask);
    const  dispatch=useDispatch()
    const isloading=useSelector(state=>state.task.isloading)
    const  isTaskOpen=useSelector(state=>state.task.isTaskOpen)
    const [taskDescription, setTaskDescription] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [taskTime, setTaskTime] = useState("");
    const [taskAssignee, setTaskAssignee] = useState("");
    const [editTask, setEditTask] = useState("");
    const [active,setActive]=useState(false);
    const [activeIndex,setActiveIndex]=useState(0);
   
    const getCurrentTimeZone = () => {
       return (Date.now()-(Date.now()/1000/60/60/24|0)*24*60*60*1000)/1000
    }
    const getCurrentTimeFormatAmPm = (time) => {
        let hours = +time.split(':')[0];
        let minutes = +time.split(":")[1] % 60;
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        return hours + ':' + minutes + ' ' + ampm;
    }


    const changeTab=(index)=> {
        if(activeIndex===index){
          setActiveIndex(-1);
        }
        setActiveIndex(index);
        setActive(!active);
      };

   const handleOpenTask = () => {
        // if(!taskDate || !taskTime || !taskAssignee || !taskDescription){
        //     alert("Please fill all the fields")
        //     return
        // }
        dispatch(createTask({
            taskDescription: taskDescription,
            taskDate: taskDate,
            timeTime: getCurrentTimeFormatAmPm(taskTime),
            taskAssignee: taskAssignee, 
            is_completed:Math.floor(Math.random()*2),
            timeZone:  Math.floor(getCurrentTimeZone())
        }))
   }

  return (
    <div>
         <div className='text-center mt-5 mb-16'>
            <h1>Create New Task</h1>
         </div>
         <div className={`task-header-plus-btn w-[350px] border-[0.5px] border-[lightgray] shadow-xl mx-auto`}>
            <div className="task-header flex justify-between border-b-2">
                <div className="task-number p-3">
                    <span className="task-number-text">
                       TASK
                    </span>
                    <span className='text-xl ml-3'>
                        {(singleTask.length-1+2)}
                    </span>
                </div>
                <div className="plus border-l-2 p-3 flex justify-center items-center">
                    <AiOutlinePlus
                        className='text-xl cursor-pointer'
                        onClick={()=>{
                            dispatch(setTaskOpen(!isTaskOpen))
                        }}
                    />
                </div>
             </div>
            {isTaskOpen && <div className="task-form w-full bg-blue-200">
                <div className="task-description w-full flex flex-col justify-center p-2  mt-4">
                    <label htmlFor="task description">
                        Task Description
                    </label>
                    <input 
                      name='task description'
                      type="text" 
                      id="task-description" 
                      placeholder="Enter task description"
                      className='w-full border-2 mt-3 p-2.5'
                      value={taskDescription}
                      onChange={(e)=>setTaskDescription(e.target.value)}

                    />
                </div>
                <div className="task-date-and-time w-full  p-3 flex ">
                    <div className="task-date w-[45%]">
                        <label htmlFor="task-date" className='text-gray-700'>
                            Task Date
                        </label>
                        <input type="date" id="task-date"
                          className='w-full border-2 mt-3'
                            value={taskDate}
                            onChange={(e)=>setTaskDate(e.target.value)}
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
                            value={taskTime}
                            onChange={(e)=>setTaskTime(e.target.value)}
                        />
                      </div>
                </div>
                <div className="task-assignee p-3">
                    <label htmlFor="task-assignee" className='text-gray-700'>
                        Assigne User
                    </label>
                    <input type="text" id="task-assignee" placeholder="Enter assignee name"
                    className='w-full border-2 mt-3 p-2.5'
                    value={taskAssignee}
                    onChange={(e)=>setTaskAssignee(e.target.value)}
                    />
                </div>
                <div className="submit-and-cancel-task w-full flex justify-end p-3">
                    <button className="cancel-task-btn mr-3 px-5 py-2  text-gray-500"
                    onClick={()=>{
                        dispatch(setTaskOpen(false))
                    }}
                    >
                      Cancel
                    </button>
                    <button className="submit-task-btn mr-3 px-5 py-2 bg-green-700 text-white"
                    onClick={handleOpenTask}
                    >
                       {
                        isloading? 
                        <span>
                            please wait...
                        </span>: 
                        <span>
                            Submit
                        </span>

                       }
                    </button>
                 </div>
             </div>}
             {/* display all  */}
       </div>
       <div className='my-10'>
              {
                    singleTask.map((task,index)=>{
                        return(
                            <div className={"task-header-plus-btn w-[350px] border-[0.5px] border-[lightgray] shadow-xl mx-auto mt-5"} key={index}>
                                <div className="task-header flex justify-between border-b-2">
                                    <div className="task-number p-3">
                                        <span className="task-number-text">
                                           TASK
                                        </span>
                                        <span className='text-xl ml-3'>
                                            {index+1}
                                        </span>
                                    </div>
                                    <div className="plus border-l-2 p-3 flex justify-center items-center">
                                        <AiOutlinePlus
                                            className='text-xl cursor-pointer'
                                            onClick={()=>{
                                               
                                            }
                                            }
                                        />
                                    </div>
                                    </div>
                                   {activeIndex===index? 
                                      (active && <EditTask/> 
                                   ):""
                                   }
                                    {/* task  */}
                                     <Task 
                                        changeTab={changeTab}
                                        task={task}
                                        index={index}
                                     />
                                    </div>
                        )
                        
                    })
                }
              </div>

    </div>
  )
}

export default Tasks