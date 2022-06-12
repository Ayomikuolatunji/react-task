import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"



export const getAllTasks = createAsyncThunk("task/getAllTasks", 
async (_, thunkAPI) => {
    const {company_id,token} = thunkAPI.getState().auth;
    try {
        const response = await axios.get(`https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${company_id}`,{
            method:"GET",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',  
                "Authorization":`Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        console.log(error);
         return thunkAPI.rejectWithValue(error)
    }
})



export const createTask=createAsyncThunk('taskSlice/createTask',async(task,thunkAPI)=>{
    try{
        const {company_id,token,user_id} = thunkAPI.getState().auth;
        const response=await axios(`https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${company_id}`,{
            method:'POST',
            headers:{
                'Accept': 'application/json',
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

        return response.data;
    }
    catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})



export const editTaskFunction=createAsyncThunk('taskSlice/editTask',async(task,thunkAPI)=>{
    try{
        console.log(task)
        const {company_id,token,user_id} = thunkAPI.getState().auth;
        const response=await axios(`https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691/${task.task_id}?company_id=${company_id}`,{
            method:'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`
            },
              data:JSON.stringify(
                {
                 assigned_user: user_id, 
                 task_date:task.task_date,
                 task_time:task.taskTime,
                 is_completed:1,
                 time_zone:task.timeZone,
                 task_msg: task.task_msg,
            })
        })
        // console.log(response.data)
        return response.data;
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})


export const deleteTask=createAsyncThunk('taskSlice/deleteTask',async(task,thunkAPI)=>{
    try{
        const {company_id,token} = thunkAPI.getState().auth;
        const response=await axios(`https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691/${task.task_id}?company_id=${company_id}`,{
            method:'DELETE',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`
            }
        })
        // console.log(response.data)
        return response.data;
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})


const taskSlice = createSlice({
    name: "task",
    initialState: {
        isTaskOpen:false,
        taskSucessMsg:"",
        isloading:false,
        singleTask:[],
        allTasks:[],
        deleteMsg:""
    },
    reducers: {
         setTaskOpen: (state, action) => {
            state.isTaskOpen = action.payload;
         },
         clearTask:(state)=>{
            state.singleTask=[];
         }
    },
    extraReducers: {
        [createTask.fulfilled]: (state, action) => {
            state.taskSucessMsg =" action.payload"
            state.isloading=false
            state.isTaskOpen=false
            // create object task and spread inside singleTask
            state.singleTask=[...state.singleTask,action.payload]
        },
        [createTask.rejected]: (state) => {
             state.isloading=false
        },
        [createTask.pending]: (state) => {
            state.isloading = true
        },
         // dispatch(getAllTasks())
         [getAllTasks.fulfilled]: (state, action) => {
            state.allTasks = action.payload
            state.isloading=false
        },
        [getAllTasks.rejected]: (state, action) => {
            state.isloading=false
        },
        [getAllTasks.pending]: (state, action) => {
            
        },
        // deleteTask message
        [deleteTask.fulfilled]: (state, action) => {
            state.deleteMsg = action.payload.message
            state.isloading=false
        }
    }

})

export const {setTaskOpen,clearTask} = taskSlice.actions;

export default taskSlice.reducer