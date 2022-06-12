import React, { useState } from 'react'
import {AiOutlinePlus} from "react-icons/ai";
import Task from './Task'
import { useDispatch, useSelector } from 'react-redux';
import { createTask, setTaskOpen } from '../../redux/task-slice.js/taskSlice';
import EditTask from './EditTask';
import TaskForm from './TaskForm';




const Tasks = () => {
    const singleTask = useSelector(state => state.task.singleTask)
    const taskAssignee=useSelector(state=>state.auth.user_name)
    const  dispatch=useDispatch()
    const isloading=useSelector(state=>state.task.isloading)
    const  isTaskOpen=useSelector(state=>state.task.isTaskOpen)
    const [taskDescription, setTaskDescription] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [taskTime, setTaskTime] = useState("");
    const [active,setActive]=useState(false);
    const [activeIndex,setActiveIndex]=useState(0);

    const getCurrentTimeZone = () => {
       return (Date.now()-(Date.now()/1000/60/60/24|0)*24*60*60*1000)/1000
    }


    const changeTab=(index)=> {
        if(activeIndex===index){
          setActiveIndex(-1);
        }
        setActiveIndex(index);
        setActive(!active);
      };

   const handleOpenTask = () => {
        if(!taskDate || !taskTime || !taskAssignee || !taskDescription){
            alert("Please fill all the fields")
            return
        }
        dispatch(createTask({
            taskDescription: taskDescription,
            taskDate: taskDate,
            timeTime: getCurrentTimeZone(taskTime),
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
         <div className={`task-header-plus-btn w-[450px] border-[0.5px] border-[lightgray] shadow-xl mx-auto rounded-sm`}>
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
            {isTaskOpen && <TaskForm
                taskDescription={taskDescription}
                setTaskDescription={setTaskDescription}
                taskDate={taskDate}
                setTaskDate={setTaskDate}
                taskTime={taskTime}
                setTaskTime={setTaskTime}
                taskAssignee={taskAssignee}
                handleOpenTask={handleOpenTask}
                isloading={isloading}
                dispatch={dispatch}
                setTaskOpen={setTaskOpen}
            /> }
             {/* display all  */}
       </div>
       <div className='my-10'>
              {
              singleTask.map((task,index)=>{
                    return(
                        <div className={"task-header-plus-btn w-[450px] border-[0.5px] border-[lightgray] shadow-xl mx-auto mt-5"} key={index}>
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
                                    />
                                </div>
                                </div>
                                {activeIndex===index? 
                                    (active && <EditTask
                                      index={index}
                                      changeTab={changeTab}
                                      task={task}
                                    /> 
                                ):""
                                }
                                {/* task  */}
                                    <Task 
                                    changeTab={changeTab}
                                    task={task}
                                    active={active}
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