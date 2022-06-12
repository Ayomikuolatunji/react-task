import React from 'react'

const TaskForm = ({
    taskDescription,
    taskDate,
    taskTime,
    taskAssignee,
    setTaskDescription,
    setTaskDate,
    setTaskTime,
    handleOpenTask,
    dispatch,
    setTaskOpen,
    isloading
}) => {



  return (
    <div className="task-form w-full bg-blue-200">
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
                    <input type="text" id="task-assignee" 
                    className='w-full border-2 mt-3 p-2.5'
                    defaultValue={taskAssignee}
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
             </div>
  )
}

export default TaskForm