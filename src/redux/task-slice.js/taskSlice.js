import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"



export const getAllTasks = createAsyncThunk("task/getAllTasks", 
async (_, thunkAPI) => {
    const {company_id,token,user_id} = thunkAPI.getState().auth;
    try {
        const response = await axios.get("http://localhost:5000/api/tasks",{
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
        },
        [createTask.pending]: (state, action) => {
            state.isloading = true
        }
    }

})

export const {setTaskOpen} = taskSlice.actions;

export default taskSlice.reducer