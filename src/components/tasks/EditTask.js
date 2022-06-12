import React from 'react'

const EditTask = ({task}) => {




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
            className='w-full border-2 mt-3'      
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
        <div className="submit-and-cancel-task w-full flex justify-end p-3">
            <button className="cancel-task-btn mr-3 px-5 py-2  text-gray-500"
           
            >
                Cancel
            </button>
            <button className="submit-task-btn mr-3 px-5 py-2 bg-green-700 text-white"
           
            >
               Edit
            </button>
        </div>
    </div>
  )
}

export default EditTask