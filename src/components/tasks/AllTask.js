import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTasks } from '../../redux/task-slice.js/taskSlice'

const AllTask = () => {
    const dispatch = useDispatch()
    const allTasks=useSelector(state=>state.task.allTasks)

    useEffect(()=>{
        dispatch(getAllTasks())
    },[dispatch])

  return (
    <div>
        <div>
            <div className="left">
                    
            </div>
            <div className="right">

            </div>
        </div>
    </div>
  )
}

export default AllTask