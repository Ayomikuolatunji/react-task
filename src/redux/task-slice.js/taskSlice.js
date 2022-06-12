import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"



export const createTask=createAsyncThunk('taskSlice/createTask',async(task,thunkAPI)=>{
    try{
        const {company_id,token,user_id} = thunkAPI.getState().auth;
        const response=await axios(`https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${company_id}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`
            },
              data:JSON.stringify(
                {
                 assigned_user: user_id, 
                 task_date:task.task_date,
                 task_time:task.task_time,
                 time_zone:task.time_zone,
                 task_msg: task.task_desceiption,
                }
              )
        })
        const data=await response.json()
        return data
    }
    catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})




const taskSlice = createSlice({
    name: "task",
    initialState: {
        taskDescription: "",
        taskDate: "",
        taskTime: "",
        taskAssignee: "",
        taskList: [],
        taskSucessMsg:"",
    },
    reducers: {
        setTaskDescription: (state, action) => {
            state.taskDescription = action.payload;
        },
        setTaskDate: (state, action) => {
            state.taskDate = action.payload;
        },
        setTaskTime: (state, action) => {
            state.taskTime = action.payload;
        },
        setTaskAssignee: (state, action) => {
            state.taskAssignee = action.payload;
        },
        setTaskList: (state, action) => {
            state.taskList = action.payload;
        }
        
    }

})


export const {taskDescription, taskDate, taskTime, taskAssignee, taskList} = taskSlice.actions

export default taskSlice.reducer