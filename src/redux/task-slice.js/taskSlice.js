import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"



// export const getAllTasks = createAsyncThunk("task/getAllTasks", 
// async (_, thunkAPI) => {
//     const {company_id,token,user_id} = thunkAPI.getState().auth;
//     try {
//         const response = await fetch(`https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${company_id}`,{
//             method: "GET",
//             headers:{
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',  
//                 "Authorization":`Bearer ${token}`
//             },
//             body: 
//         })
//         const data = await response.json();
//         let tasksArray=[]
//         const getUserTasks=data.data
//               getUserTasks.results.forEach(task=>{
//                 if(task.assigned_user===user_id){
//                      return tasksArray.push(task)
//                 }
//            })
//         return tasksArray
//     } catch (error) {
//         console.log(error);
//          return thunkAPI.rejectWithValue(error)
//     }
// })


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
                 task_date:task.taskDate,
                 task_time:task.taskTime,
                //  iscompleted should be random number between 0 and 1
                 is_completed:task.is_completed,
                 time_zone:task.timeZone,
                 task_msg: task.taskDescription,
                }
              )
        })

        console.log(response)
        return response.data;
    }
    catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})




const taskSlice = createSlice({
    name: "task",
    initialState: {
        isTaskOpen:false,
        taskSucessMsg:"",
        isloading:false,
        allTasks:[],
        singleTask:[]
    },
    reducers: {
         setTaskOpen: (state, action) => {
            state.isTaskOpen = action.payload;
         }
    },
    extraReducers: {
        [createTask.fulfilled]: (state, action) => {
            state.isloading=false
        },
        [createTask.rejected]: (state, action) => {
            state.taskSucessMsg = action.payload
            state.isloading=false
            state.isTaskOpen=false
            // create object task and spread inside singleTask
            state.singleTask={
                ...action.payload
            }
        },
        [createTask.pending]: (state, action) => {
            state.isloading = true
        },
        // dispatch(getAllTasks())
        // [getAllTasks.fulfilled]: (state, action) => {
        //     state.allTasks = action.payload
        //     state.isloading=false
        // },
        // [getAllTasks.rejected]: (state, action) => {
        //     state.isloading=false
        // },
        // [getAllTasks.pending]: (state, action) => {
        //     state.isloading = true
        // }
    }

})

export const {setTaskOpen} = taskSlice.actions;

export default taskSlice.reducer