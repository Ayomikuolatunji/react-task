import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"



export const createTask=createAsyncThunk('taskSlice/createTask',async(task,thunkAPI)=>{
    console.log(task)
    // try{
    //     const {company_id,token,user_id} = thunkAPI.getState().auth;
    //     const response=await axios(`https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${company_id}`,{
    //         method:'POST',
    //         headers:{
    //             'Content-Type':'application/json',
    //             'Authorization':`Bearer ${token}`
    //         },
    //           data:JSON.stringify(
    //             {
    //              assigned_user: user_id, 
    //              task_date:task.taskDate,
    //              task_time:task.taskTime,
    //             //  iscompleted should be random number between 0 and 1
    //              is_completed:Math.floor(Math.random()*2),
    //              time_zone:task.timeZone,
    //              task_msg: task.taskDescription,
    //             }
    //           )
    //     })
    //     const data=await response.json()
    //     return data
    // }
    // catch(error){
    //     return thunkAPI.rejectWithValue(error)
    // }
})




const taskSlice = createSlice({
    name: "task",
    initialState: {
        taskSucessMsg:"",
        isloading:false,
    },
    reducers: {
         
    },
    extraReducers: {
        [createTask.fulfilled]: (state, action) => {
            state.isloading=false
        },
        [createTask.rejected]: (state, action) => {
            state.taskSucessMsg = action.payload
            state.isloading=false
        },
        [createTask.pending]: (state, action) => {
            state.isloading = true
        }
    }

})


export const {taskDescription, taskDate, taskTime, taskAssignee, taskList} = taskSlice.actions

export default taskSlice.reducer