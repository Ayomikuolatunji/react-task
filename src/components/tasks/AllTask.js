import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTasks } from '../../redux/task-slice.js/taskSlice'

const AllTask = () => {
    const dispatch = useDispatch()
    const allTasks=useSelector(state=>state.task.allTasks)
    const user_picture=useSelector(state=>state.auth.user_picture)

    useEffect(()=>{
        dispatch(getAllTasks())
    },[dispatch])
     console.log(allTasks);


  return (
    <div>
        <div>
           {/* {
                allTasks.map((task,index)=>{
                    return <div key={index}>
                         <div className="left flex">
                                <img src={user_picture} 
                                className="rounded-full w-12 h-12"
                                alt="profile_picture" 
                                />  
                                <div>
                                        <h1>Follow up</h1>
                                    
                                </div>
                            </div>
                            <div className="right">

                            </div>
                    </div>
                })
           } */}
        </div>
    </div>
  )
}

export default AllTask