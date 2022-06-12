import React from 'react'
import {AiOutlinePlus} from "react-icons/ai";

const Task = () => {




  return (
    <div>
         <div className='text-center mt-5 mb-16'>
            <h1>Create New Task</h1>
         </div>
         <div className="task-header-plus-btn w-[350px] border-[0.5px] border-[lightgray] shadow-xl mx-auto">
            <div className="task-header flex justify-between border-b-2">
                <div className="task-number p-3">
                    <span className="task-number-text">
                       TASK
                    </span>
                    <span className='text-xl ml-3'>
                        1
                    </span>
                </div>
                <div className="plus border-l-2 p-3 flex justify-center items-center">
                    <AiOutlinePlus/>
                </div>
             </div>
             <div className="task-form w-full bg-blue-200">
                <div className="task-description w-full flex flex-col justify-center p-2  mt-4">
                    <label htmlFor="task description">
                        Task Description
                    </label>
                    <input 
                      type="text" 
                      id="task-description" 
                      placeholder="Enter task description"
                      className='w-full border-2 mt-3 p-2.5'
                    />
                </div>
                <div className="task-date-and-time w-full  p-3 flex ">
                    <div className="task-date w-[45%]">
                        <label htmlFor="task-date" className='text-gray-700'>
                            Task Date
                        </label>
                        <input type="date" id="task-date"
                          className='w-full border-2 mt-3 '
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
                        />
                      </div>
                </div>
                <div className="task-assignee p-3">
                    <label htmlFor="task-assignee" className='text-gray-700'>
                        Assigne User
                    </label>
                    <input type="text" id="task-assignee" placeholder="Enter assignee name"
                    className='w-full border-2 mt-3 p-2.5'
                    />
                </div>
             </div>
         </div>
    </div>
  )
}

export default Task