import React from 'react'
import {AiOutlinePlus} from "react-icons/ai";

const Task = () => {




  return (
    <div>
         <div className="task-header-plus-btn">
            <div className="task-header">
                <div className="task-number">
                    <span className="task-number-text">
                       TASK
                    </span>
                    <span>1</span>
                </div>
                <div className="plus">
                    <AiOutlinePlus/>
                </div>
             </div>
             <div className="task-form">
                <div className="task-description">
                    <label htmlFor="task descript">
                        Task Description
                    </label>
                    <input type="text" id="task-descript" placeholder="Enter task description"/>
                </div>
                <div className="task-date-and-time">
                    <div className="task-date">
                        <label htmlFor="task-date">
                            Task Date
                        </label>
                        <input type="date" id="task-date"/>
                     </div>
                      <div className="task-time">
                        <label htmlFor="task-time">
                            Task Time
                        </label>
                        <input type="time" id="task-time"/>
                      </div>
                </div>
             </div>
         </div>
    </div>
  )
}

export default Task